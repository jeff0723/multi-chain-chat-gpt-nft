/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  CrossChainEnabledPolygonChild,
  CrossChainEnabledPolygonChildInterface,
} from "../CrossChainEnabledPolygonChild";

const _abi = [
  {
    inputs: [],
    name: "NotCrossChainCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "rootMessageSender",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "processMessageFromRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class CrossChainEnabledPolygonChild__factory {
  static readonly abi = _abi;
  static createInterface(): CrossChainEnabledPolygonChildInterface {
    return new utils.Interface(_abi) as CrossChainEnabledPolygonChildInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainEnabledPolygonChild {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CrossChainEnabledPolygonChild;
  }
}
