// get a blockhash
//@ts-check
import { ethers } from "ethers";
import dotenv from "dotenv";
import { CURRENTBLOCKHEIGHT } from "./constant.js";
dotenv.config({ path: "../.env" });

const mainnetRPC =
  "https://mainnet.infura.io/v3/dc7c60b22021400a97355601e710833d";
const mainnetProvider = new ethers.providers.JsonRpcProvider(mainnetRPC);
const mainnetSigner = new ethers.Wallet(process.env.PK, mainnetProvider);

const gnosisRPC = "https://rpc.ankr.com/gnosis";
const gnosisProvider = new ethers.providers.JsonRpcProvider(gnosisRPC);
const gnosisSigner = new ethers.Wallet(process.env.PK, gnosisProvider);

const blockNumber = await mainnetProvider.send("eth_blockNumber");
console.log(blockNumber);

const block = await mainnetProvider.send("eth_getBlockByNumber", [
  CURRENTBLOCKHEIGHT,
  false,
]);

console.log(block);
