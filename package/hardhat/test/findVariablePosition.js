// get a blockhash
//@ts-check
import { ethers } from "ethers";
import dotenv from "dotenv";
import { HASHI_VERIFIER_ABI, HASHI_VERIFIER_ADDRESS } from "./constant.js";
import fs from "fs";
dotenv.config({ path: "../.env" });

const mainnetRPC =
  "https://mainnet.infura.io/v3/dc7c60b22021400a97355601e710833d";
const mainnetProvider = new ethers.providers.JsonRpcProvider(mainnetRPC);
const mainnetSigner = new ethers.Wallet(process.env.PK, mainnetProvider);

const gnosisRPC = "https://gnosischain-rpc.gateway.pokt.network/";
const gnosisProvider = new ethers.providers.JsonRpcProvider(gnosisRPC);
const gnosisSigner = new ethers.Wallet(process.env.PK, gnosisProvider);

const PudgySlot = (tokenId, variable_position) =>
  ethers.utils.keccak256(
    ethers.utils.solidityPack(
      ["uint256", "uint256"],
      [tokenId, variable_position]
    )
  );

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

  const blockNumber = "0x1097bfb";

  // await mainnetProvider.send("eth_blockNumber");
  const blockHash = await mainnetProvider.send("eth_getBlockByNumber", [
    blockNumber,
    false,
  ]);

  const stateRoot = blockHash["stateRoot"];

  for (let i = 0; i < 1; i++) {
    const slot = PudgySlot(tokenId, i);
    const proof = await mainnetProvider.send("eth_getProof", [
      // hardcode pudgy address
      "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8",
      [slot], // !!! define the slot
      blockNumber,
    ]);

    const blockheader =
      "0x1e34f1137efe68235a91b52a9afb6e30e08dcf86e25376a8867ebbebd463ca99";
    // console.log(signature);
    // console.log(proof);
    const hashiVerifier = new ethers.Contract(
      HASHI_VERIFIER_ADDRESS,
      HASHI_VERIFIER_ABI,
      gnosisSigner
    );
    // console.log(hashiVerifier);
    console.log("blockNumber: ", blockNumber);
    console.log("blockheader: ", blockheader);
    console.log("blockHash: ", blockheader);
    try {
      const verifyOwnertx = await hashiVerifier.verifyOwner(
        blockheader,
        tokenId,
        signature,
        stateRoot,
        proof.storageHash,
        proof.accountProof,
        proof.storageProof[0].proof
      );

      console.log(verifyOwnertx);
      console.log("index: ", i);
      console.log("slot: ", slot);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }
}

testContract(816);
