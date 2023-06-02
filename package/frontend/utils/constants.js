import { ethers } from "ethers";

export const AzukiAddress = "0xED5AF388653567Af2F388E6224dC7C4b3241C544";

export const AzukiSlotOf = (tokenId) =>
  ethers.utils.keccak256(
    ethers.utils.solidityPack(["uint256", "uint256"], [tokenId, 103])
  );
