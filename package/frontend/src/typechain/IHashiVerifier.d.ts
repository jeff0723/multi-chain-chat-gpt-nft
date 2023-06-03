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

interface IHashiVerifierInterface extends ethers.utils.Interface {
  functions: {
    "verifyOwner(bytes32,uint256,address,bytes,bytes32,bytes[],bytes[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "verifyOwner",
    values: [
      BytesLike,
      BigNumberish,
      string,
      BytesLike,
      BytesLike,
      BytesLike[],
      BytesLike[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "verifyOwner",
    data: BytesLike
  ): Result;

  events: {};
}

export class IHashiVerifier extends BaseContract {
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

  interface: IHashiVerifierInterface;

  functions: {
    verifyOwner(
      blockheader: BytesLike,
      tokenId: BigNumberish,
      messageSender: string,
      signature: BytesLike,
      storageRoot: BytesLike,
      stateProof: BytesLike[],
      storageProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  verifyOwner(
    blockheader: BytesLike,
    tokenId: BigNumberish,
    messageSender: string,
    signature: BytesLike,
    storageRoot: BytesLike,
    stateProof: BytesLike[],
    storageProof: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    verifyOwner(
      blockheader: BytesLike,
      tokenId: BigNumberish,
      messageSender: string,
      signature: BytesLike,
      storageRoot: BytesLike,
      stateProof: BytesLike[],
      storageProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    verifyOwner(
      blockheader: BytesLike,
      tokenId: BigNumberish,
      messageSender: string,
      signature: BytesLike,
      storageRoot: BytesLike,
      stateProof: BytesLike[],
      storageProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    verifyOwner(
      blockheader: BytesLike,
      tokenId: BigNumberish,
      messageSender: string,
      signature: BytesLike,
      storageRoot: BytesLike,
      stateProof: BytesLike[],
      storageProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
