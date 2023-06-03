/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface HashiVerifierInterface extends ethers.utils.Interface {
  functions: {
    "getBlockHeader()": FunctionFragment;
    "hashiheader()": FunctionFragment;
    "verifyOwner(bytes32,uint256,bytes,bytes32,bytes[],bytes[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getBlockHeader",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hashiheader",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "verifyOwner",
    values: [
      BytesLike,
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike[],
      BytesLike[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getBlockHeader",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashiheader",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyOwner",
    data: BytesLike
  ): Result;

  events: {};
}

export class HashiVerifier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: HashiVerifierInterface;

  functions: {
    getBlockHeader(overrides?: CallOverrides): Promise<[string]>;

    hashiheader(overrides?: CallOverrides): Promise<[string]>;

    verifyOwner(
      blockheader: BytesLike,
      tokenId: BigNumberish,
      signature: BytesLike,
      storageRoot: BytesLike,
      stateProof: BytesLike[],
      storageProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getBlockHeader(overrides?: CallOverrides): Promise<string>;

  hashiheader(overrides?: CallOverrides): Promise<string>;

  verifyOwner(
    blockheader: BytesLike,
    tokenId: BigNumberish,
    signature: BytesLike,
    storageRoot: BytesLike,
    stateProof: BytesLike[],
    storageProof: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getBlockHeader(overrides?: CallOverrides): Promise<string>;

    hashiheader(overrides?: CallOverrides): Promise<string>;

    verifyOwner(
      blockheader: BytesLike,
      tokenId: BigNumberish,
      signature: BytesLike,
      storageRoot: BytesLike,
      stateProof: BytesLike[],
      storageProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getBlockHeader(overrides?: CallOverrides): Promise<BigNumber>;

    hashiheader(overrides?: CallOverrides): Promise<BigNumber>;

    verifyOwner(
      blockheader: BytesLike,
      tokenId: BigNumberish,
      signature: BytesLike,
      storageRoot: BytesLike,
      stateProof: BytesLike[],
      storageProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getBlockHeader(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hashiheader(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verifyOwner(
      blockheader: BytesLike,
      tokenId: BigNumberish,
      signature: BytesLike,
      storageRoot: BytesLike,
      stateProof: BytesLike[],
      storageProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}