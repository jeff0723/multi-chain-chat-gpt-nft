// get a blockhash
import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const RPC = "https://mainnet.infura.io/v3/dc7c60b22021400a97355601e710833d";
const provider = new ethers.providers.JsonRpcProvider(RPC);
const signer = new ethers.Wallet(process.env.GNOSISPK, provider);

async function getSignature() {
  const message = ethers.utils.defaultAbiCoder.encode(
    ["address"],
    ["0x3b1fDB8e7a0AFecec58Ee71FD64F5e7650d98Eb7"]
  );
  const signature = await signer?.signMessage(ethers.utils.arrayify(message));
  return signature;
}

async function testContract(tokenId) {
  const signature = getSignature();
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

  const hashiVerifier = ethers.getContractAt(
    "HashiVerifier",
    "0xb4A922624a576068dE57Ea787403128d565D8042",
    signer
  );

  const verifyOwnertx = await hashiVerifier.verifyOwner(
    blockHash,
    tokenId,
    signature,
    stateRoot,
    proof.storageHash,
    proof.accountProof,
    proof.storageProof[0].proof
  );

  console.log(verifyOwnertx);
}

testContract(20);
