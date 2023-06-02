import dotenv from "dotenv";
import { AzukiAddress } from "../utils/constants";
dotenv.config();

// after the client calls getBlockHeader, and you now have the block header
// use this function to get the relevant account and storage proofs
async function getProofs(blockhash) {
  const RPC = "https://mainnet.infura.io/v3/dc7c60b22021400a97355601e710833d";
  const snapshopBlock =
    "0xab60720eb3fb4bba53e99959153dcdc44cd269b6a48a66d3aa7a6c5b5a906eb0";
  const provider = new ethers.providers.JsonRpcProvider(RPC);

  const blockNumber = await provider.send("eth_getBlockByHash", [
    blockhash,
    false,
  ]);

  // !!! get the correct slot for the NFT

  const proof = await provider.send("eth_getProof", [
    AzukiAddress,
    [slot], // !!! define the slot
    blockNumber,
  ]);

  const blockInfo = await provider.getBlock(blockNumber);

  const storageRoot = blockInfo["result"]["stateRoot"];

  await claimAzuki(); // !!! put inputs here
}
