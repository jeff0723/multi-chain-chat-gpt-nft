import { ethers } from "ethers";

export const PudgyAddress = "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8";
export const VARIABLE_POSITION = 2;
export const PudgySlot = (tokenId) =>
  ethers.utils.keccak256(
    ethers.utils.solidityPack(
      ["uint256", "uint256"],
      [tokenId, VARIABLE_POSITION]
    )
  );

export const hashiAddressGnosis = "0xBB38ad32c211a2B726B1E398234c8404247c5a3c";
