// get a blockhash
import { ethers } from "ethers";
import dotenv from "dotenv";
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
  const signature = getSignature();

  const blockNumber = await provider.send("eth_blockNumber");
  const blockHash = await provider.send("eth_getBlockByNumber", [
    blockNumber,
    false,
  ]);

  const stateRoot = blockHash["stateRoot"];

  for (const i = 0; i < 150; i++) {
    const slot = PudgySlot(tokenId, i);
    const proof = await provider.send("eth_getProof", [
      // hardcode pudgy address
      "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8",
      [slot], // !!! define the slot
      blockNumber,
    ]);
    console.log(proof);
    // const hashiVerifier = ethers.getContractAt(
    //   "HashiVerifier",
    //   "0xb4A922624a576068dE57Ea787403128d565D8042",
    //   gnosisSigner
    // );

    // const verifyOwnertx = await hashiVerifier.verifyOwner(
    //   blockHash,
    //   tokenId,
    //   signature,
    //   stateRoot,
    //   proof.storageHash,
    //   proof.accountProof,
    //   proof.storageProof[0].proof
    // );
    console.log(verifyOwnertx);
  }
}

testContract(816);
