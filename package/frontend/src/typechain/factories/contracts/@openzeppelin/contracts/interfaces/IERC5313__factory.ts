/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC5313,
  IERC5313Interface,
} from "../../../../../contracts/@openzeppelin/contracts/interfaces/IERC5313";

const _abi = [
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IERC5313__factory {
  static readonly abi = _abi;
  static createInterface(): IERC5313Interface {
    return new utils.Interface(_abi) as IERC5313Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC5313 {
    return new Contract(address, _abi, signerOrProvider) as IERC5313;
  }
}
