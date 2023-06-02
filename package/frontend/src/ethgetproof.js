import dotenv from "dotenv";
import { AzukiAddress } from "../utils/constants";
dotenv.config();

// after the client calls getBlockHeader, and you now have the block header
// use this function to get the relevant account and storage proofs
// nft is a struct that containsthe tokenId and the imageURL
async function claimNFT(nft, blockhash) {
  const signature = window.localStorage.getItem("signature");
  const RPC = "https://mainnet.infura.io/v3/dc7c60b22021400a97355601e710833d";
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

  await claimAzuki(
    nft.tokenId,
    nft.imageUrl,
    signature,
    proof.storageHash,
    proof.accountProof,
    proof.storageProof[0].proof
  );
}
