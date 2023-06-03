import { ethers } from "ethers";
import dotenv from "dotenv";
import { CHATGPTNFT_ABI } from "./constant.js";
dotenv.config({ path: "../.env" });

const CHATGPTNFT_ADDRESS = "0x83fe1B2DF040De3FC019545CCf54751e97e15792";

const gnosisRPC = "https://rpc.ankr.com/gnosis";
const gnosisProvider = new ethers.providers.JsonRpcProvider(gnosisRPC);
const gnosisSigner = new ethers.Wallet(process.env.GNOSISPK, gnosisProvider);

const chatgpt_nft = new ethers.Contract(
  CHATGPTNFT_ADDRESS,
  CHATGPTNFT_ABI,
  gnosisSigner
);

const verifyOwnertx = await chatgpt_nft.mint();
