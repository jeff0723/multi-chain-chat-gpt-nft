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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IArbSysInterface extends ethers.utils.Interface {
  functions: {
    "arbBlockHash(uint256)": FunctionFragment;
    "arbBlockNumber()": FunctionFragment;
    "arbChainID()": FunctionFragment;
    "arbOSVersion()": FunctionFragment;
    "getStorageGasAvailable()": FunctionFragment;
    "isTopLevelCall()": FunctionFragment;
    "mapL1SenderContractAddressToL2Alias(address,address)": FunctionFragment;
    "myCallersAddressWithoutAliasing()": FunctionFragment;
    "sendMerkleTreeState()": FunctionFragment;
    "sendTxToL1(address,bytes)": FunctionFragment;
    "wasMyCallersAddressAliased()": FunctionFragment;
    "withdrawEth(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "arbBlockHash",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "arbBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "arbChainID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "arbOSVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStorageGasAvailable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isTopLevelCall",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mapL1SenderContractAddressToL2Alias",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "myCallersAddressWithoutAliasing",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendMerkleTreeState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendTxToL1",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "wasMyCallersAddressAliased",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "withdrawEth", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "arbBlockHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "arbBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "arbChainID", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "arbOSVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStorageGasAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTopLevelCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mapL1SenderContractAddressToL2Alias",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "myCallersAddressWithoutAliasing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMerkleTreeState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendTxToL1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wasMyCallersAddressAliased",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEth",
    data: BytesLike
  ): Result;

  events: {
    "L2ToL1Transaction(address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,bytes)": EventFragment;
    "L2ToL1Tx(address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes)": EventFragment;
    "SendMerkleUpdate(uint256,bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "L2ToL1Transaction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "L2ToL1Tx"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SendMerkleUpdate"): EventFragment;
}

export type L2ToL1TransactionEvent = TypedEvent<
  [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    caller: string;
    destination: string;
    uniqueId: BigNumber;
    batchNumber: BigNumber;
    indexInBatch: BigNumber;
    arbBlockNum: BigNumber;
    ethBlockNum: BigNumber;
    timestamp: BigNumber;
    callvalue: BigNumber;
    data: string;
  }
>;

export type L2ToL1TxEvent = TypedEvent<
  [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    caller: string;
    destination: string;
    hash: BigNumber;
    position: BigNumber;
    arbBlockNum: BigNumber;
    ethBlockNum: BigNumber;
    timestamp: BigNumber;
    callvalue: BigNumber;
    data: string;
  }
>;

export type SendMerkleUpdateEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    reserved: BigNumber;
    hash: string;
    position: BigNumber;
  }
>;

export class IArbSys extends BaseContract {
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

  interface: IArbSysInterface;

  functions: {
    arbBlockHash(
      arbBlockNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    arbBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    arbChainID(overrides?: CallOverrides): Promise<[BigNumber]>;

    arbOSVersion(overrides?: CallOverrides): Promise<[BigNumber]>;

    getStorageGasAvailable(overrides?: CallOverrides): Promise<[BigNumber]>;

    isTopLevelCall(overrides?: CallOverrides): Promise<[boolean]>;

    mapL1SenderContractAddressToL2Alias(
      sender: string,
      unused: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    myCallersAddressWithoutAliasing(
      overrides?: CallOverrides
    ): Promise<[string]>;

    sendMerkleTreeState(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string[]] & {
        size: BigNumber;
        root: string;
        partials: string[];
      }
    >;

    sendTxToL1(
      destination: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    wasMyCallersAddressAliased(overrides?: CallOverrides): Promise<[boolean]>;

    withdrawEth(
      destination: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  arbBlockHash(
    arbBlockNum: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  arbBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  arbChainID(overrides?: CallOverrides): Promise<BigNumber>;

  arbOSVersion(overrides?: CallOverrides): Promise<BigNumber>;

  getStorageGasAvailable(overrides?: CallOverrides): Promise<BigNumber>;

  isTopLevelCall(overrides?: CallOverrides): Promise<boolean>;

  mapL1SenderContractAddressToL2Alias(
    sender: string,
    unused: string,
    overrides?: CallOverrides
  ): Promise<string>;

  myCallersAddressWithoutAliasing(overrides?: CallOverrides): Promise<string>;

  sendMerkleTreeState(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string[]] & {
      size: BigNumber;
      root: string;
      partials: string[];
    }
  >;

  sendTxToL1(
    destination: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  wasMyCallersAddressAliased(overrides?: CallOverrides): Promise<boolean>;

  withdrawEth(
    destination: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    arbBlockHash(
      arbBlockNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    arbBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    arbChainID(overrides?: CallOverrides): Promise<BigNumber>;

    arbOSVersion(overrides?: CallOverrides): Promise<BigNumber>;

    getStorageGasAvailable(overrides?: CallOverrides): Promise<BigNumber>;

    isTopLevelCall(overrides?: CallOverrides): Promise<boolean>;

    mapL1SenderContractAddressToL2Alias(
      sender: string,
      unused: string,
      overrides?: CallOverrides
    ): Promise<string>;

    myCallersAddressWithoutAliasing(overrides?: CallOverrides): Promise<string>;

    sendMerkleTreeState(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string[]] & {
        size: BigNumber;
        root: string;
        partials: string[];
      }
    >;

    sendTxToL1(
      destination: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wasMyCallersAddressAliased(overrides?: CallOverrides): Promise<boolean>;

    withdrawEth(
      destination: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "L2ToL1Transaction(address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,bytes)"(
      caller?: null,
      destination?: string | null,
      uniqueId?: BigNumberish | null,
      batchNumber?: BigNumberish | null,
      indexInBatch?: null,
      arbBlockNum?: null,
      ethBlockNum?: null,
      timestamp?: null,
      callvalue?: null,
      data?: null
    ): TypedEventFilter<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
      ],
      {
        caller: string;
        destination: string;
        uniqueId: BigNumber;
        batchNumber: BigNumber;
        indexInBatch: BigNumber;
        arbBlockNum: BigNumber;
        ethBlockNum: BigNumber;
        timestamp: BigNumber;
        callvalue: BigNumber;
        data: string;
      }
    >;

    L2ToL1Transaction(
      caller?: null,
      destination?: string | null,
      uniqueId?: BigNumberish | null,
      batchNumber?: BigNumberish | null,
      indexInBatch?: null,
      arbBlockNum?: null,
      ethBlockNum?: null,
      timestamp?: null,
      callvalue?: null,
      data?: null
    ): TypedEventFilter<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
      ],
      {
        caller: string;
        destination: string;
        uniqueId: BigNumber;
        batchNumber: BigNumber;
        indexInBatch: BigNumber;
        arbBlockNum: BigNumber;
        ethBlockNum: BigNumber;
        timestamp: BigNumber;
        callvalue: BigNumber;
        data: string;
      }
    >;

    "L2ToL1Tx(address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes)"(
      caller?: null,
      destination?: string | null,
      hash?: BigNumberish | null,
      position?: BigNumberish | null,
      arbBlockNum?: null,
      ethBlockNum?: null,
      timestamp?: null,
      callvalue?: null,
      data?: null
    ): TypedEventFilter<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
      ],
      {
        caller: string;
        destination: string;
        hash: BigNumber;
        position: BigNumber;
        arbBlockNum: BigNumber;
        ethBlockNum: BigNumber;
        timestamp: BigNumber;
        callvalue: BigNumber;
        data: string;
      }
    >;

    L2ToL1Tx(
      caller?: null,
      destination?: string | null,
      hash?: BigNumberish | null,
      position?: BigNumberish | null,
      arbBlockNum?: null,
      ethBlockNum?: null,
      timestamp?: null,
      callvalue?: null,
      data?: null
    ): TypedEventFilter<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
      ],
      {
        caller: string;
        destination: string;
        hash: BigNumber;
        position: BigNumber;
        arbBlockNum: BigNumber;
        ethBlockNum: BigNumber;
        timestamp: BigNumber;
        callvalue: BigNumber;
        data: string;
      }
    >;

    "SendMerkleUpdate(uint256,bytes32,uint256)"(
      reserved?: BigNumberish | null,
      hash?: BytesLike | null,
      position?: BigNumberish | null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { reserved: BigNumber; hash: string; position: BigNumber }
    >;

    SendMerkleUpdate(
      reserved?: BigNumberish | null,
      hash?: BytesLike | null,
      position?: BigNumberish | null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { reserved: BigNumber; hash: string; position: BigNumber }
    >;
  };

  estimateGas: {
    arbBlockHash(
      arbBlockNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    arbBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    arbChainID(overrides?: CallOverrides): Promise<BigNumber>;

    arbOSVersion(overrides?: CallOverrides): Promise<BigNumber>;

    getStorageGasAvailable(overrides?: CallOverrides): Promise<BigNumber>;

    isTopLevelCall(overrides?: CallOverrides): Promise<BigNumber>;

    mapL1SenderContractAddressToL2Alias(
      sender: string,
      unused: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    myCallersAddressWithoutAliasing(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendMerkleTreeState(overrides?: CallOverrides): Promise<BigNumber>;

    sendTxToL1(
      destination: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    wasMyCallersAddressAliased(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawEth(
      destination: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    arbBlockHash(
      arbBlockNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    arbBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    arbChainID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    arbOSVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStorageGasAvailable(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTopLevelCall(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mapL1SenderContractAddressToL2Alias(
      sender: string,
      unused: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    myCallersAddressWithoutAliasing(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sendMerkleTreeState(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sendTxToL1(
      destination: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    wasMyCallersAddressAliased(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawEth(
      destination: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}