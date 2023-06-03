/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  HashiVerifier,
  HashiVerifierInterface,
} from "../../contracts/HashiVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "hashiaddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "p",
        type: "bytes32",
      },
    ],
    name: "Debug",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidHashiHash",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "InvalidProof",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidStateProof",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidStorageProof",
    type: "error",
  },
  {
    inputs: [],
    name: "getBlockHeader",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "blockheader",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "stateRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "storageRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes[]",
        name: "stateProof",
        type: "bytes[]",
      },
      {
        internalType: "bytes[]",
        name: "storageProof",
        type: "bytes[]",
      },
    ],
    name: "verifyOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162002178380380620021788339818101604052810190620000379190620000dc565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050506200010e565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000a48262000077565b9050919050565b620000b68162000097565b8114620000c257600080fd5b50565b600081519050620000d681620000ab565b92915050565b600060208284031215620000f557620000f462000072565b5b60006200010584828501620000c5565b91505092915050565b60805161205162000127600039600050506120516000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806366391e0f1461003b5780638c6c86d114610057575b600080fd5b61005560048036038101906100509190611652565b610075565b005b61005f6101e8565b60405161006c91906117c7565b60405180910390f35b60005487146100b0576040517fc64d98f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006100da336040516020016100c6919061182a565b604051602081830303815290604052610208565b905060006100f1878361024390919063ffffffff16565b9050600073bd3531da5cf5857e7cfaa92426877b022e612cf8905060006040518060a001604052808373ffffffffffffffffffffffffffffffffffffffff16815260200160018152602001600081526020018881526020017f5184c58406e07d654a5e39591c5adf95a8de48e5ea96eec2f4666d84ab248b0960001b8152509050600060405180604001604052808c60676040516020016101939291906118a6565b6040516020818303038152906040528051906020012060001c81526020018573ffffffffffffffffffffffffffffffffffffffff1681525090506101da8983838a8a61026a565b505050505050505050505050565b6060604051806080016040528060428152602001611fda60429139905090565b600061021482516102f7565b8260405160200161022692919061199e565b604051602081830303815290604052805190602001209050919050565b600080600061025285856103c5565b9150915061025f81610416565b819250505092915050565b61027585858461057c565b6102ab576040517fd5d82fd400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ba8460600151848361070b565b6102f0576040517f335a0b1300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b6060600060016103068461076f565b01905060008167ffffffffffffffff81111561032557610324611441565b5b6040519080825280601f01601f1916602001820160405280156103575781602001600182028036833780820191505090505b509050600082602001820190505b6001156103ba578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816103ae576103ad6119cd565b5b04945060008503610365575b819350505050919050565b60008060418351036104065760008060006020860151925060408601519150606086015160001a90506103fa878285856108c2565b9450945050505061040f565b60006002915091505b9250929050565b6000600481111561042a576104296119fc565b5b81600481111561043d5761043c6119fc565b5b03156105795760016004811115610457576104566119fc565b5b81600481111561046a576104696119fc565b5b036104aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a190611a77565b60405180910390fd5b600260048111156104be576104bd6119fc565b5b8160048111156104d1576104d06119fc565b5b03610511576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050890611ae3565b60405180910390fd5b60036004811115610525576105246119fc565b5b816004811115610538576105376119fc565b5b03610578576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056f90611b75565b60405180910390fd5b5b50565b60008083600001516040516020016105949190611bdd565b6040516020818303038152906040528051906020012060001c905060006105bc8683866109a4565b905060006105d16105cc83610bc7565b610bf5565b9050600481511461060e576040517f6d187b2800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85602001516106378260008151811061062a57610629611bf8565b5b6020026020010151610d0a565b146106485760009350505050610704565b85604001516106718260018151811061066457610663611bf8565b5b6020026020010151610d0a565b146106825760009350505050610704565b856060015160001c6106ae826002815181106106a1576106a0611bf8565b5b6020026020010151610d0a565b146106bf5760009350505050610704565b856080015160001c6106eb826003815181106106de576106dd611bf8565b5b6020026020010151610d0a565b146106fc5760009350505050610704565b600193505050505b9392505050565b60008083600001516040516020016107239190611c27565b6040516020818303038152906040528051906020012060001c9050600061074b8683866109a4565b905061075e61075982610bc7565b610d0a565b856020015114925050509392505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106107cd577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816107c3576107c26119cd565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061080a576d04ee2d6d415b85acef81000000008381610800576107ff6119cd565b5b0492506020810190505b662386f26fc10000831061083957662386f26fc10000838161082f5761082e6119cd565b5b0492506010810190505b6305f5e1008310610862576305f5e1008381610858576108576119cd565b5b0492506008810190505b612710831061088757612710838161087d5761087c6119cd565b5b0492506004810190505b606483106108aa57606483816108a05761089f6119cd565b5b0492506002810190505b600a83106108b9576001810190505b80915050919050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156108fd57600060039150915061099b565b6000600187878787604051600081526020016040526040516109229493929190611c60565b6020604051602081039080840390855afa158015610944573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109925760006001925092505061099b565b80600092509250505b94509492505050565b60606000606060005b8451811015610b4557868582815181106109ca576109c9611bf8565b5b60200260200101518051906020012014610a1b57806040517f5e3fa051000000000000000000000000000000000000000000000000000000008152600401610a129190611c27565b60405180910390fd5b610a46610a41868381518110610a3457610a33611bf8565b5b6020026020010151610bc7565b610bf5565b91506011825103610aae576000600f60048580610a6290611cd4565b9650610a6e9190611d1c565b60fc610a7a9190611d5e565b88901c169050610aa3838281518110610a9657610a95611bf8565b5b6020026020010151610d64565b60001b975050610b34565b6002825103610b33576000610add83600081518110610ad057610acf611bf8565b5b6020026020010151610d9b565b90506000610aed82898786610e2e565b80965081925050508015610b2957610b1f84600181518110610b1257610b11611bf8565b5b6020026020010151610d64565b60001b9850610b30565b5050610b45565b50505b5b80610b3e90611cd4565b90506109ad565b5060408214610b985760018451610b5c9190611d5e565b6040517f5e3fa051000000000000000000000000000000000000000000000000000000008152600401610b8f9190611c27565b60405180910390fd5b610bbc81600181518110610baf57610bae611bf8565b5b6020026020010151610d9b565b925050509392505050565b610bcf61138c565b600060208301905060405180604001604052808451815260200182815250915050919050565b6060610c008261102b565b610c0957600080fd5b6000610c1483611078565b905060008167ffffffffffffffff811115610c3257610c31611441565b5b604051908082528060200260200182016040528015610c6b57816020015b610c5861138c565b815260200190600190039081610c505790505b5090506000610c7d8560200151611105565b8560200151610c8c9190611d92565b9050600080600090505b84811015610cfd57610ca7836111c4565b9150604051806040016040528083815260200184815250848281518110610cd157610cd0611bf8565b5b60200260200101819052508183610ce89190611d92565b92508080610cf590611cd4565b915050610c96565b5082945050505050919050565b6000808260000151118015610d2457506021826000015111155b610d2d57600080fd5b600080610d39846112a0565b915091506000825190506020821015610d5957816020036101000a810490505b809350505050919050565b60006021826000015114610d7757600080fd5b60008060018460200151610d8b9190611d92565b9050805191508192505050919050565b60606000826000015111610dae57600080fd5b600080610dba846112a0565b9150915060008167ffffffffffffffff811115610dda57610dd9611441565b5b6040519080825280601f01601f191660200182016040528015610e0c5781602001600182028036833780820191505090505b5090506000816020019050610e228482856112ea565b81945050505050919050565b6000806000600487600081518110610e4957610e48611bf8565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c60f81c905060006001821660ff1614610f2d576000600f60048780610e9c90611cd4565b9850610ea89190611d1c565b60fc610eb49190611d5e565b88901c1690506000600f89600081518110610ed257610ed1611bf8565b5b602001015160f81c60f81b60f81c1660ff169050818114610f2a57856040517f5e3fa051000000000000000000000000000000000000000000000000000000008152600401610f219190611c27565b60405180910390fd5b50505b6000875190506000600287610f429190611dc6565b14610f5057610f4f611df7565b5b6000600190505b81811015611010576000898281518110610f7457610f73611bf8565b5b602001015160f81c60f81b60f81c60ff169050600060ff60048a610f989190611d1c565b60f8610fa49190611d5e565b8b901c169050808214610fee57876040517f5e3fa051000000000000000000000000000000000000000000000000000000008152600401610fe59190611c27565b60405180910390fd5b600289610ffb9190611d92565b985050508061100990611cd4565b9050610f57565b5060006002831660ff16148693509350505094509492505050565b6000808260000151036110415760009050611073565b60008083602001519050805160001a915060c060ff168260ff16101561106c57600092505050611073565b6001925050505b919050565b60008082600001510361108e5760009050611100565b60008061109e8460200151611105565b84602001516110ad9190611d92565b90506000846000015185602001516110c59190611d92565b90505b808210156110f9576110d9826111c4565b826110e49190611d92565b915082806110f190611cd4565b9350506110c8565b8293505050505b919050565b600080825160001a9050608060ff168110156111255760009150506111bf565b60b860ff1681108061114a575060c060ff168110158015611149575060f860ff1681105b5b156111595760019150506111bf565b60c060ff168110156111945760018060b86111749190611e26565b60ff16826111829190611d5e565b61118c9190611d92565b9150506111bf565b60018060f86111a39190611e26565b60ff16826111b19190611d5e565b6111bb9190611d92565b9150505b919050565b6000806000835160001a9050608060ff168110156111e55760019150611296565b60b860ff16811015611214576001608060ff16826112039190611d5e565b61120d9190611d92565b9150611295565b60c060ff168110156112445760b78103600185019450806020036101000a85510460018201810193505050611294565b60f860ff1681101561127357600160c060ff16826112629190611d5e565b61126c9190611d92565b9150611293565b60f78103600185019450806020036101000a855104600182018101935050505b5b5b5b8192505050919050565b60008060006112b28460200151611105565b905060008185602001516112c69190611d92565b905060008286600001516112da9190611d5e565b9050818194509450505050915091565b6000810315611387575b602060ff16811061133e5782518252602060ff16836113139190611d92565b9250602060ff16826113259190611d92565b9150602060ff16816113379190611d5e565b90506112f4565b6000811115611386576000600182602060ff1661135b9190611d5e565b6101006113689190611f8e565b6113729190611d5e565b905080198451168184511681811785525050505b5b505050565b604051806040016040528060008152602001600081525090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6113cd816113ba565b81146113d857600080fd5b50565b6000813590506113ea816113c4565b92915050565b6000819050919050565b611403816113f0565b811461140e57600080fd5b50565b600081359050611420816113fa565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61147982611430565b810181811067ffffffffffffffff8211171561149857611497611441565b5b80604052505050565b60006114ab6113a6565b90506114b78282611470565b919050565b600067ffffffffffffffff8211156114d7576114d6611441565b5b6114e082611430565b9050602081019050919050565b82818337600083830152505050565b600061150f61150a846114bc565b6114a1565b90508281526020810184848401111561152b5761152a61142b565b5b6115368482856114ed565b509392505050565b600082601f83011261155357611552611426565b5b81356115638482602086016114fc565b91505092915050565b600067ffffffffffffffff82111561158757611586611441565b5b602082029050602081019050919050565b600080fd5b60006115b06115ab8461156c565b6114a1565b905080838252602082019050602084028301858111156115d3576115d2611598565b5b835b8181101561161a57803567ffffffffffffffff8111156115f8576115f7611426565b5b808601611605898261153e565b855260208501945050506020810190506115d5565b5050509392505050565b600082601f83011261163957611638611426565b5b813561164984826020860161159d565b91505092915050565b600080600080600080600060e0888a031215611671576116706113b0565b5b600061167f8a828b016113db565b97505060206116908a828b01611411565b965050604088013567ffffffffffffffff8111156116b1576116b06113b5565b5b6116bd8a828b0161153e565b95505060606116ce8a828b016113db565b94505060806116df8a828b016113db565b93505060a088013567ffffffffffffffff811115611700576116ff6113b5565b5b61170c8a828b01611624565b92505060c088013567ffffffffffffffff81111561172d5761172c6113b5565b5b6117398a828b01611624565b91505092959891949750929550565b600081519050919050565b600082825260208201905092915050565b60005b83811015611782578082015181840152602081019050611767565b60008484015250505050565b600061179982611748565b6117a38185611753565b93506117b3818560208601611764565b6117bc81611430565b840191505092915050565b600060208201905081810360008301526117e1818461178e565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611814826117e9565b9050919050565b61182481611809565b82525050565b600060208201905061183f600083018461181b565b92915050565b61184e816113f0565b82525050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b600061189061188b61188684611854565b61186b565b61185e565b9050919050565b6118a081611875565b82525050565b60006040820190506118bb6000830185611845565b6118c86020830184611897565b9392505050565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a000000000000600082015250565b6000611910601a836118cf565b915061191b826118da565b601a82019050919050565b600061193182611748565b61193b81856118cf565b935061194b818560208601611764565b80840191505092915050565b600081519050919050565b600081905092915050565b600061197882611957565b6119828185611962565b9350611992818560208601611764565b80840191505092915050565b60006119a982611903565b91506119b58285611926565b91506119c1828461196d565b91508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611a61601883611753565b9150611a6c82611a2b565b602082019050919050565b60006020820190508181036000830152611a9081611a54565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611acd601f83611753565b9150611ad882611a97565b602082019050919050565b60006020820190508181036000830152611afc81611ac0565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611b5f602283611753565b9150611b6a82611b03565b604082019050919050565b60006020820190508181036000830152611b8e81611b52565b9050919050565b60008160601b9050919050565b6000611bad82611b95565b9050919050565b6000611bbf82611ba2565b9050919050565b611bd7611bd282611809565b611bb4565b82525050565b6000611be98284611bc6565b60148201915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082019050611c3c6000830184611845565b92915050565b611c4b816113ba565b82525050565b611c5a8161185e565b82525050565b6000608082019050611c756000830187611c42565b611c826020830186611c51565b611c8f6040830185611c42565b611c9c6060830184611c42565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611cdf826113f0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611d1157611d10611ca5565b5b600182019050919050565b6000611d27826113f0565b9150611d32836113f0565b9250828202611d40816113f0565b91508282048414831517611d5757611d56611ca5565b5b5092915050565b6000611d69826113f0565b9150611d74836113f0565b9250828203905081811115611d8c57611d8b611ca5565b5b92915050565b6000611d9d826113f0565b9150611da8836113f0565b9250828201905080821115611dc057611dbf611ca5565b5b92915050565b6000611dd1826113f0565b9150611ddc836113f0565b925082611dec57611deb6119cd565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b6000611e318261185e565b9150611e3c8361185e565b9250828203905060ff811115611e5557611e54611ca5565b5b92915050565b60008160011c9050919050565b6000808291508390505b6001851115611eb257808604811115611e8e57611e8d611ca5565b5b6001851615611e9d5780820291505b8081029050611eab85611e5b565b9450611e72565b94509492505050565b600082611ecb5760019050611f87565b81611ed95760009050611f87565b8160018114611eef5760028114611ef957611f28565b6001915050611f87565b60ff841115611f0b57611f0a611ca5565b5b8360020a915084821115611f2257611f21611ca5565b5b50611f87565b5060208310610133831016604e8410600b8410161715611f5d5782820a905083811115611f5857611f57611ca5565b5b611f87565b611f6a8484846001611e68565b92509050818404811115611f8157611f80611ca5565b5b81810290505b9392505050565b6000611f99826113f0565b9150611fa4836113f0565b9250611fd17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611ebb565b90509291505056fe307834366566396438326365313163303766643737666636646239313765626232356631376630623638313961376437303264393037396365623266396566386561a26469706673582212201656251adea4a21db4c621605dce1cbdc6f44abc578b34d349b48d49869b2f9464736f6c63430008110033";

type HashiVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HashiVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HashiVerifier__factory extends ContractFactory {
  constructor(...args: HashiVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    hashiaddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<HashiVerifier> {
    return super.deploy(
      hashiaddress,
      overrides || {}
    ) as Promise<HashiVerifier>;
  }
  override getDeployTransaction(
    hashiaddress: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(hashiaddress, overrides || {});
  }
  override attach(address: string): HashiVerifier {
    return super.attach(address) as HashiVerifier;
  }
  override connect(signer: Signer): HashiVerifier__factory {
    return super.connect(signer) as HashiVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HashiVerifierInterface {
    return new utils.Interface(_abi) as HashiVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HashiVerifier {
    return new Contract(address, _abi, signerOrProvider) as HashiVerifier;
  }
}