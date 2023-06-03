// get a blockhash
//@ts-check
import { ethers } from "ethers";
import dotenv from "dotenv";
import {
  HASHI_VERIFIER_ABI,
  HASHI_VERIFIER_ADDRESS,
  ghoulsSlotOf,
  CURRENTBLOCKHEIGHT,
  GHOULTOKENID,
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
    ["0x3b1fDB8e7a0AFecec58Ee71FD64F5e7650d98Eb7"]
  );
  const signature = await mainnetSigner?.signMessage(
    ethers.utils.arrayify(message)
  );
  return signature;
}

async function testContract() {
  const signature = await getSignature();
  CURRENTBLOCKHEIGHT;

  // await mainnetProvider.send("eth_blockNumber");
  const blockHash = await mainnetProvider.send("eth_getBlockByNumber", [
    CURRENTBLOCKHEIGHT,
    false,
  ]);

  const slot = ghoulsSlotOf(GHOULTOKENID);
  const proof = await mainnetProvider.send("eth_getProof", [
    // hardcode pudgy address
    "0xeF1a89cbfAbE59397FfdA11Fc5DF293E9bC5Db90",
    [slot],
    CURRENTBLOCKHEIGHT,
  ]);

  // If hashi is initialized - set this to most recent block
  const blockheader =
    "0x1e34f1137efe68235a91b52a9afb6e30e08dcf86e25376a8867ebbebd463ca99";

  const hashiVerifier = new ethers.Contract(
    HASHI_VERIFIER_ADDRESS,
    HASHI_VERIFIER_ABI,
    gnosisSigner
  );

  // console.log(proof.accountProof, proof.storageProof[0], stateRoot, proof);

  try {
    const verifyOwnertx = await hashiVerifier.verifyOwner(
      blockheader,
      GHOULTOKENID,
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
}

testContract();
