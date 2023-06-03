// get a blockhash
//@ts-check
import { ethers } from "ethers";
import dotenv from "dotenv";
import {
  HASHI_VERIFIER_ABI,
  HASHI_VERIFIER_ADDRESS,
  ghoulsSlotOf,
} from "./constant.js";
dotenv.config({ path: "../.env" });

const mainnetRPC =
  "https://mainnet.infura.io/v3/dc7c60b22021400a97355601e710833d";
const mainnetProvider = new ethers.providers.JsonRpcProvider(mainnetRPC);
const mainnetSigner = new ethers.Wallet(process.env.PK, mainnetProvider);

const gnosisRPC = "https://rpc.ankr.com/gnosis";
const gnosisProvider = new ethers.providers.JsonRpcProvider(gnosisRPC);
const gnosisSigner = new ethers.Wallet(process.env.PK, gnosisProvider);

console.log(ethers.utils.formatEther(await gnosisSigner.getBalance()));

async function getSignature() {
  const message = ethers.utils.defaultAbiCoder.encode(
    ["address"],
    ["0xdb4a057C4054E030e6F04619777c17CafA33cf65"]
  );
  const signature = await mainnetSigner?.signMessage(
    ethers.utils.arrayify(message)
  );
  return signature;
}

async function testContract(tokenId) {
  const signature = await getSignature();

  const blockNumber = "0x109808d";

  // await mainnetProvider.send("eth_blockNumber");
  const blockHash = await mainnetProvider.send("eth_getBlockByNumber", [
    blockNumber,
    false,
  ]);

  const stateRoot = blockHash["stateRoot"];

  const slot = ghoulsSlotOf(tokenId);
  const proof = await mainnetProvider.send("eth_getProof", [
    // hardcode pudgy address
    "0xeF1a89cbfAbE59397FfdA11Fc5DF293E9bC5Db90",
    [slot],
    blockNumber,
  ]);

  const blockheader =
    "0x1e34f1137efe68235a91b52a9afb6e30e08dcf86e25376a8867ebbebd463ca99";

  console.log(1);

  const hashiVerifier = new ethers.Contract(
    HASHI_VERIFIER_ADDRESS,
    HASHI_VERIFIER_ABI,
    gnosisSigner
  );
  // console.log(hashiVerifier);

  console.log(2);
  // console.log(proof.accountProof, proof.storageProof[0], stateRoot, proof);

  try {
    const verifyOwnertx = await hashiVerifier.verifyOwner(
      blockheader,
      tokenId,
      signature,
      stateRoot,
      proof.accountProof,
      proof.storageProof[0].proof,
      {
        gasLimit: 2e7,
        gasPrice: 30000000000,
      }
    );
    console.log(verifyOwnertx);
  } catch (err) {
    console.log("Error: ", err.message);
  }
}

testContract(824);
