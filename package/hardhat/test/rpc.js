// get a blockhash
import { ethers } from "ethers";

async function testContract(tokenId) {
  const RPC = "https://mainnet.infura.io/v3/dc7c60b22021400a97355601e710833d";
  const provider = new ethers.providers.JsonRpcProvider(RPC);
  const signature = 
  //   const slot = PudgySlot(tokenId);

  const blockNumber = await provider.send("eth_blockNumber");
  const blockHash = await provider.send("eth_getBlockByNumber", [
    blockNumber,
    false,
  ]);

  const stateRoot = blockHash["stateRoot"];

  const proof = await provider.send("eth_getProof", [
    // hardcode pudgy address
    "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8",
    ["45"], // !!! define the slot
    blockNumber,
  ]);

  const verifyOwnertx = await verifyOwner(
    blockHash,
    tokenId,
    signature,
    stateRoot,
    proof.storageHash,
    proof.accountProof,
    proof.storageProof[0].proof
  );

  console.log(proof);
}

testContract(20);
