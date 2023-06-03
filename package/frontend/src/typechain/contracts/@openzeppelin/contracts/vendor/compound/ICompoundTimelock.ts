/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../../common";

export interface ICompoundTimelockInterface extends utils.Interface {
  functions: {
    "GRACE_PERIOD()": FunctionFragment;
    "MAXIMUM_DELAY()": FunctionFragment;
    "MINIMUM_DELAY()": FunctionFragment;
    "acceptAdmin()": FunctionFragment;
    "admin()": FunctionFragment;
    "cancelTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
    "delay()": FunctionFragment;
    "executeTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
    "pendingAdmin()": FunctionFragment;
    "queueTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
    "queuedTransactions(bytes32)": FunctionFragment;
    "setDelay(uint256)": FunctionFragment;
    "setPendingAdmin(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "GRACE_PERIOD"
      | "MAXIMUM_DELAY"
      | "MINIMUM_DELAY"
      | "acceptAdmin"
      | "admin"
      | "cancelTransaction"
      | "delay"
      | "executeTransaction"
      | "pendingAdmin"
      | "queueTransaction"
      | "queuedTransactions"
      | "setDelay"
      | "setPendingAdmin"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "GRACE_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAXIMUM_DELAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINIMUM_DELAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancelTransaction",
    values: [string, BigNumberish, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "executeTransaction",
    values: [string, BigNumberish, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "queueTransaction",
    values: [string, BigNumberish, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "queuedTransactions",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPendingAdmin",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "GRACE_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAXIMUM_DELAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINIMUM_DELAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queueTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queuedTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setDelay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPendingAdmin",
    data: BytesLike
  ): Result;

  events: {
    "CancelTransaction(bytes32,address,uint256,string,bytes,uint256)": EventFragment;
    "ExecuteTransaction(bytes32,address,uint256,string,bytes,uint256)": EventFragment;
    "NewAdmin(address)": EventFragment;
    "NewDelay(uint256)": EventFragment;
    "NewPendingAdmin(address)": EventFragment;
    "QueueTransaction(bytes32,address,uint256,string,bytes,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CancelTransaction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecuteTransaction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewDelay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPendingAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QueueTransaction"): EventFragment;
}

export interface CancelTransactionEventObject {
  txHash: string;
  target: string;
  value: BigNumber;
  signature: string;
  data: string;
  eta: BigNumber;
}
export type CancelTransactionEvent = TypedEvent<
  [string, string, BigNumber, string, string, BigNumber],
  CancelTransactionEventObject
>;

export type CancelTransactionEventFilter =
  TypedEventFilter<CancelTransactionEvent>;

export interface ExecuteTransactionEventObject {
  txHash: string;
  target: string;
  value: BigNumber;
  signature: string;
  data: string;
  eta: BigNumber;
}
export type ExecuteTransactionEvent = TypedEvent<
  [string, string, BigNumber, string, string, BigNumber],
  ExecuteTransactionEventObject
>;

export type ExecuteTransactionEventFilter =
  TypedEventFilter<ExecuteTransactionEvent>;

export interface NewAdminEventObject {
  newAdmin: string;
}
export type NewAdminEvent = TypedEvent<[string], NewAdminEventObject>;

export type NewAdminEventFilter = TypedEventFilter<NewAdminEvent>;

export interface NewDelayEventObject {
  newDelay: BigNumber;
}
export type NewDelayEvent = TypedEvent<[BigNumber], NewDelayEventObject>;

export type NewDelayEventFilter = TypedEventFilter<NewDelayEvent>;

export interface NewPendingAdminEventObject {
  newPendingAdmin: string;
}
export type NewPendingAdminEvent = TypedEvent<
  [string],
  NewPendingAdminEventObject
>;

export type NewPendingAdminEventFilter = TypedEventFilter<NewPendingAdminEvent>;

export interface QueueTransactionEventObject {
  txHash: string;
  target: string;
  value: BigNumber;
  signature: string;
  data: string;
  eta: BigNumber;
}
export type QueueTransactionEvent = TypedEvent<
  [string, string, BigNumber, string, string, BigNumber],
  QueueTransactionEventObject
>;

export type QueueTransactionEventFilter =
  TypedEventFilter<QueueTransactionEvent>;

export interface ICompoundTimelock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICompoundTimelockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    GRACE_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    MINIMUM_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    acceptAdmin(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    cancelTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    delay(overrides?: CallOverrides): Promise<[BigNumber]>;

    executeTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    pendingAdmin(overrides?: CallOverrides): Promise<[string]>;

    queueTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setDelay(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setPendingAdmin(
      arg0: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

  MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

  acceptAdmin(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  admin(overrides?: CallOverrides): Promise<string>;

  cancelTransaction(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  delay(overrides?: CallOverrides): Promise<BigNumber>;

  executeTransaction(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  pendingAdmin(overrides?: CallOverrides): Promise<string>;

  queueTransaction(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  queuedTransactions(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setDelay(
    arg0: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setPendingAdmin(
    arg0: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    acceptAdmin(overrides?: CallOverrides): Promise<void>;

    admin(overrides?: CallOverrides): Promise<string>;

    cancelTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    executeTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    pendingAdmin(overrides?: CallOverrides): Promise<string>;

    queueTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setDelay(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setPendingAdmin(arg0: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "CancelTransaction(bytes32,address,uint256,string,bytes,uint256)"(
      txHash?: BytesLike | null,
      target?: string | null,
      value?: null,
      signature?: null,
      data?: null,
      eta?: null
    ): CancelTransactionEventFilter;
    CancelTransaction(
      txHash?: BytesLike | null,
      target?: string | null,
      value?: null,
      signature?: null,
      data?: null,
      eta?: null
    ): CancelTransactionEventFilter;

    "ExecuteTransaction(bytes32,address,uint256,string,bytes,uint256)"(
      txHash?: BytesLike | null,
      target?: string | null,
      value?: null,
      signature?: null,
      data?: null,
      eta?: null
    ): ExecuteTransactionEventFilter;
    ExecuteTransaction(
      txHash?: BytesLike | null,
      target?: string | null,
      value?: null,
      signature?: null,
      data?: null,
      eta?: null
    ): ExecuteTransactionEventFilter;

    "NewAdmin(address)"(newAdmin?: string | null): NewAdminEventFilter;
    NewAdmin(newAdmin?: string | null): NewAdminEventFilter;

    "NewDelay(uint256)"(newDelay?: BigNumberish | null): NewDelayEventFilter;
    NewDelay(newDelay?: BigNumberish | null): NewDelayEventFilter;

    "NewPendingAdmin(address)"(
      newPendingAdmin?: string | null
    ): NewPendingAdminEventFilter;
    NewPendingAdmin(
      newPendingAdmin?: string | null
    ): NewPendingAdminEventFilter;

    "QueueTransaction(bytes32,address,uint256,string,bytes,uint256)"(
      txHash?: BytesLike | null,
      target?: string | null,
      value?: null,
      signature?: null,
      data?: null,
      eta?: null
    ): QueueTransactionEventFilter;
    QueueTransaction(
      txHash?: BytesLike | null,
      target?: string | null,
      value?: null,
      signature?: null,
      data?: null,
      eta?: null
    ): QueueTransactionEventFilter;
  };

  estimateGas: {
    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    acceptAdmin(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    cancelTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    executeTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    queueTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setDelay(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setPendingAdmin(
      arg0: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    GRACE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINIMUM_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptAdmin(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancelTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queueTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setDelay(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setPendingAdmin(
      arg0: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
