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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IOracleAdapterInterface extends ethers.utils.Interface {
  functions: {
    "getHashFromOracle(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getHashFromOracle",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getHashFromOracle",
    data: BytesLike
  ): Result;

  events: {
    "HashStored(uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "HashStored"): EventFragment;
}

export type HashStoredEvent = TypedEvent<
  [BigNumber, string] & { id: BigNumber; hashes: string }
>;

export class IOracleAdapter extends BaseContract {
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

  interface: IOracleAdapterInterface;

  functions: {
    getHashFromOracle(
      domain: BigNumberish,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { hash: string }>;
  };

  getHashFromOracle(
    domain: BigNumberish,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    getHashFromOracle(
      domain: BigNumberish,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "HashStored(uint256,bytes32)"(
      id?: BigNumberish | null,
      hashes?: BytesLike | null
    ): TypedEventFilter<[BigNumber, string], { id: BigNumber; hashes: string }>;

    HashStored(
      id?: BigNumberish | null,
      hashes?: BytesLike | null
    ): TypedEventFilter<[BigNumber, string], { id: BigNumber; hashes: string }>;
  };

  estimateGas: {
    getHashFromOracle(
      domain: BigNumberish,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getHashFromOracle(
      domain: BigNumberish,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
