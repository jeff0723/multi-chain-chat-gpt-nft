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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../../common";

export interface IERC777RecipientInterface extends utils.Interface {
  functions: {
    "tokensReceived(address,address,address,uint256,bytes,bytes)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "tokensReceived"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "tokensReceived",
    values: [string, string, string, BigNumberish, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "tokensReceived",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IERC777Recipient extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC777RecipientInterface;

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
    tokensReceived(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  tokensReceived(
    operator: string,
    from: string,
    to: string,
    amount: BigNumberish,
    userData: BytesLike,
    operatorData: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    tokensReceived(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    tokensReceived(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    tokensReceived(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}