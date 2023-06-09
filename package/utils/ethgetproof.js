import dotenv from "dotenv";
import { PudgyAddress, PudgySlot } from "../utils/constants";
import { ethers } from "ethers";
dotenv.config();
async function getSignature(signer, address) {
  const message = ethers.utils.defaultAbiCoder.encode(["address"], [address]);

  const signature = await signer?.signMessage(ethers.utils.arrayify(message));
  return signature;
}
// after the client calls getBlockHeader, and you now have the block header
// use this function to get the relevant account and storage proofs
// nft is a struct that containsthe tokenId and the imageURL
async function claimNFT(nft, blockhash) {
  const signature = window.localStorage.getItem("signature");
  const RPC = "https://mainnet.infura.io/v3/dc7c60b22021400a97355601e710833d";
  const provider = new ethers.providers.JsonRpcProvider(RPC);

  const slot = PudgySlot(nft.tokenId);

  const blockNumber = await provider.send("eth_getBlockByHash", [
    blockhash,
    false,
  ]);

  // !!! get the correct slot for the NFT

  const proof = await provider.send("eth_getProof", [
    PudgyAddress,
    [slot], // !!! define the slot
    blockNumber,
  ]);

  const blockInfo = await provider.getBlock(blockNumber);

  const stateRoot = blockInfo["result"]["stateRoot"];

  await verifyOwner(
    blockheader,
    nft.tokenId,
    signature,
    stateRoot,
    proof.storageHash,
    proof.accountProof,
    proof.storageProof[0].proof
  );
}
