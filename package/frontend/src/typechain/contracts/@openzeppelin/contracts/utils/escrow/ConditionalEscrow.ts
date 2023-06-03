/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface ConditionalEscrowInterface extends utils.Interface {
  functions: {
    "deposit(address)": FunctionFragment;
    "depositsOf(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(address)": FunctionFragment;
    "withdrawalAllowed(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deposit"
      | "depositsOf"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
      | "withdraw"
      | "withdrawalAllowed"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "deposit", values: [string]): string;
  encodeFunctionData(functionFragment: "depositsOf", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdrawalAllowed",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositsOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawalAllowed",
    data: BytesLike
  ): Result;

  events: {
    "Deposited(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Withdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export interface DepositedEventObject {
  payee: string;
  weiAmount: BigNumber;
}
export type DepositedEvent = TypedEvent<
  [string, BigNumber],
  DepositedEventObject
>;

export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface WithdrawnEventObject {
  payee: string;
  weiAmount: BigNumber;
}
export type WithdrawnEvent = TypedEvent<
  [string, BigNumber],
  WithdrawnEventObject
>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface ConditionalEscrow extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConditionalEscrowInterface;

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
    deposit(
      payee: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    depositsOf(payee: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdraw(
      payee: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawalAllowed(
      payee: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  deposit(
    payee: string,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdraw(
    payee: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawalAllowed(payee: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    deposit(payee: string, overrides?: CallOverrides): Promise<void>;

    depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(payee: string, overrides?: CallOverrides): Promise<void>;

    withdrawalAllowed(
      payee: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Deposited(address,uint256)"(
      payee?: string | null,
      weiAmount?: null
    ): DepositedEventFilter;
    Deposited(payee?: string | null, weiAmount?: null): DepositedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Withdrawn(address,uint256)"(
      payee?: string | null,
      weiAmount?: null
    ): WithdrawnEventFilter;
    Withdrawn(payee?: string | null, weiAmount?: null): WithdrawnEventFilter;
  };

  estimateGas: {
    deposit(
      payee: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdraw(
      payee: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdrawalAllowed(
      payee: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      payee: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    depositsOf(
      payee: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdraw(
      payee: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawalAllowed(
      payee: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
