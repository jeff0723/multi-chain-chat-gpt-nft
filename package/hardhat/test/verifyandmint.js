// get a blockhash
//@ts-check
import { ethers } from "ethers";
import dotenv from "dotenv";
import {
  OWNERADDRESS,
  CHATGPTNFT_ADDRESS,
  HASHI_VERIFIER_ABI,
  HASHI_VERIFIER_ADDRESS,
  ghoulsSlotOf,
  CURRENTBLOCKHEIGHT,
  GHOULTOKENID,
  CHATGPTNFT_ABI,
} from "./constant.js";
dotenv.config({ path: "../.env" });

const mainnetRPC =
  "https://mainnet.infura.io/v3/dc7c60b22021400a97355601e710833d";
const mainnetProvider = new ethers.providers.JsonRpcProvider(mainnetRPC);
const mainnetSigner = new ethers.Wallet(process.env.GNOSISPK, mainnetProvider);

const gnosisRPC = "https://rpc.ankr.com/gnosis";
const gnosisProvider = new ethers.providers.JsonRpcProvider(gnosisRPC);
const gnosisSigner = new ethers.Wallet(process.env.GNOSISPK, gnosisProvider);

console.log(ethers.utils.formatEther(await gnosisSigner.getBalance()));

async function getSignature() {
  const message = ethers.utils.defaultAbiCoder.encode(
    ["address"],
    [OWNERADDRESS]
  );
  const signature = await mainnetSigner?.signMessage(
    ethers.utils.arrayify(message)
  );
  return signature;
}

async function testContract() {
  const signature = await getSignature();

  const hashiVerifier = new ethers.Contract(
    HASHI_VERIFIER_ADDRESS,
    HASHI_VERIFIER_ABI,
    gnosisSigner
  );

  const slot = ghoulsSlotOf(GHOULTOKENID);

  let proof;
  let blockheader;

  if (process.env.HASHI == "true") {
    console.log("Hashi Initialized... Using Hashi Header");
    blockheader = await hashiVerifier.getBlockHeader();
    const block = await mainnetProvider.send("eth_getBlockByHash", [
      blockheader,
      false,
    ]);

    proof = await mainnetProvider.send("eth_getProof", [
      // hardcode pudgy address
      "0xeF1a89cbfAbE59397FfdA11Fc5DF293E9bC5Db90",
      [slot],
      block.number,
    ]);
  } else {
    console.log("Hashi Not Initialized... Using Hard-coded Header");
    blockheader =
      "0x1e34f1137efe68235a91b52a9afb6e30e08dcf86e25376a8867ebbebd463ca99";

    proof = await mainnetProvider.send("eth_getProof", [
      // hardcode Ghouls address
      "0xeF1a89cbfAbE59397FfdA11Fc5DF293E9bC5Db90",
      [slot],
      CURRENTBLOCKHEIGHT,
    ]);
  }

  // console.log(proof.accountProof, proof.storageProof[0], stateRoot, proof);

  try {
    const verifyOwnertx = await hashiVerifier.verifyOwner(
      blockheader,
      GHOULTOKENID,
      OWNERADDRESS,
      signature,
      proof.storageHash,
      proof.accountProof,
      proof.storageProof[0].proof,
      {
        gasLimit: 2e7,
        gasPrice: 30000000000,
      }
    );
    const txRecipt = await verifyOwnertx.wait(1);
    console.log(verifyOwnertx);
  } catch (err) {
    console.log("Error: ", err.message);
  }

  const chatgpt_nft = new ethers.Contract(
    CHATGPTNFT_ADDRESS,
    CHATGPTNFT_ABI,
    gnosisSigner
  );

  const mint = await chatgpt_nft.mint(
    OWNERADDRESS,
    GHOULTOKENID,
    blockheader,
    signature,
    proof.storageHash,
    proof.accountProof,
    proof.storageProof[0].proof,
    {
      gasLimit: 2e7,
      gasPrice: 30000000000,
    }
  );
  console.log(mint);
}

testContract();
