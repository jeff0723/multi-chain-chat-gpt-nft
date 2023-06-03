/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MinimalForwarder,
  MinimalForwarderInterface,
} from "../MinimalForwarder";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct MinimalForwarder.ForwardRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct MinimalForwarder.ForwardRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101606040523480156200001257600080fd5b506040518060400160405280601081526020017f4d696e696d616c466f72776172646572000000000000000000000000000000008152506040518060400160405280600581526020017f302e302e310000000000000000000000000000000000000000000000000000008152506200009a6000836200013f60201b620005cd1790919060201c565b6101208181525050620000bd6001826200013f60201b620005cd1790919060201c565b6101408181525050818051906020012060e08181525050808051906020012061010081815250504660a08181525050620000fc6200019c60201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250505050620007f4565b600060208351101562000165576200015d83620001f960201b60201c565b905062000196565b826200017c836200026660201b620006111760201c565b60000190816200018d9190620004ea565b5060ff60001b90505b92915050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60e051610100514630604051602001620001de95949392919062000642565b60405160208183030381529060405280519060200120905090565b600080829050601f815111156200024957826040517f305a27a90000000000000000000000000000000000000000000000000000000081526004016200024091906200072e565b60405180910390fd5b805181620002579062000784565b60001c1760001b915050919050565b6000819050919050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002f257607f821691505b602082108103620003085762000307620002aa565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003727fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000333565b6200037e868362000333565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003cb620003c5620003bf8462000396565b620003a0565b62000396565b9050919050565b6000819050919050565b620003e783620003aa565b620003ff620003f682620003d2565b84845462000340565b825550505050565b600090565b6200041662000407565b62000423818484620003dc565b505050565b5b818110156200044b576200043f6000826200040c565b60018101905062000429565b5050565b601f8211156200049a5762000464816200030e565b6200046f8462000323565b810160208510156200047f578190505b620004976200048e8562000323565b83018262000428565b50505b505050565b600082821c905092915050565b6000620004bf600019846008026200049f565b1980831691505092915050565b6000620004da8383620004ac565b9150826002028217905092915050565b620004f58262000270565b67ffffffffffffffff8111156200051157620005106200027b565b5b6200051d8254620002d9565b6200052a8282856200044f565b600060209050601f8311600181146200056257600084156200054d578287015190505b620005598582620004cc565b865550620005c9565b601f19841662000572866200030e565b60005b828110156200059c5784890151825560018201915060208501945060208101905062000575565b86831015620005bc5784890151620005b8601f891682620004ac565b8355505b6001600288020188555050505b505050505050565b6000819050919050565b620005e681620005d1565b82525050565b620005f78162000396565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200062a82620005fd565b9050919050565b6200063c816200061d565b82525050565b600060a082019050620006596000830188620005db565b620006686020830187620005db565b620006776040830186620005db565b620006866060830185620005ec565b62000695608083018462000631565b9695505050505050565b600082825260208201905092915050565b60005b83811015620006d0578082015181840152602081019050620006b3565b60008484015250505050565b6000601f19601f8301169050919050565b6000620006fa8262000270565b6200070681856200069f565b935062000718818560208601620006b0565b6200072381620006dc565b840191505092915050565b600060208201905081810360008301526200074a8184620006ed565b905092915050565b600081519050919050565b6000819050602082019050919050565b60006200077b8251620005d1565b80915050919050565b6000620007918262000752565b826200079d846200075d565b9050620007aa816200076d565b92506020821015620007ed57620007e87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8360200360080262000333565b831692505b5050919050565b60805160a05160c05160e051610100516101205161014051611aa36200084f600039600061035c0152600061032801526000610b2d01526000610b0c015260006107ec015260006108420152600061086b0152611aa36000f3fe60806040526004361061003f5760003560e01c80632d0335ab1461004457806347153f821461008157806384b0196e146100b2578063bf5d3bdb146100e3575b600080fd5b34801561005057600080fd5b5061006b60048036038101906100669190610cc7565b610120565b6040516100789190610d0d565b60405180910390f35b61009b60048036038101906100969190610db1565b610169565b6040516100a9929190610ed8565b60405180910390f35b3480156100be57600080fd5b506100c7610315565b6040516100da979695949392919061107e565b60405180910390f35b3480156100ef57600080fd5b5061010a60048036038101906101059190610db1565b610417565b6040516101179190611102565b60405180910390f35b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006060610178858585610417565b6101b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ae9061118f565b60405180910390fd5b600185608001356101c891906111de565b600260008760000160208101906101df9190610cc7565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000808660200160208101906102339190610cc7565b73ffffffffffffffffffffffffffffffffffffffff1687606001358860400135898060a001906102639190611221565b8b60000160208101906102769190610cc7565b6040516020016102889392919061130b565b6040516020818303038152906040526040516102a49190611366565b600060405180830381858888f193505050503d80600081146102e2576040519150601f19603f3d011682016040523d82523d6000602084013e6102e7565b606091505b5091509150603f87606001356102fd91906113ac565b5a1161030557fe5b8181935093505050935093915050565b60006060806000806000606061035560007f000000000000000000000000000000000000000000000000000000000000000061061b90919063ffffffff16565b61038960017f000000000000000000000000000000000000000000000000000000000000000061061b90919063ffffffff16565b46306000801b600067ffffffffffffffff8111156103aa576103a96113dd565b5b6040519080825280602002602001820160405280156103d85781602001602082028036833780820191505090505b507f0f00000000000000000000000000000000000000000000000000000000000000959493929190965096509650965096509650965090919293949596565b60008061052084848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506105127fdd8f4b70b0f4393e889bd39128a30628a78b61816a9eb8199759e7a349657e488860000160208101906104999190610cc7565b8960200160208101906104ac9190610cc7565b8a604001358b606001358c608001358d8060a001906104cb9190611221565b6040516104d992919061140c565b60405180910390206040516020016104f79796959493929190611425565b604051602081830303815290604052805190602001206106cb565b6106e590919063ffffffff16565b905084608001356002600087600001602081019061053e9190610cc7565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541480156105c357508460000160208101906105949190610cc7565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b9150509392505050565b60006020835110156105e9576105e28361070c565b905061060b565b826105f383610611565b600001908161060291906116a0565b5060ff60001b90505b92915050565b6000819050919050565b606060ff60001b83146106385761063183610774565b90506106c5565b818054610644906114c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610670906114c3565b80156106bd5780601f10610692576101008083540402835291602001916106bd565b820191906000526020600020905b8154815290600101906020018083116106a057829003601f168201915b505050505090505b92915050565b60006106de6106d86107e8565b8361089f565b9050919050565b60008060006106f485856108e0565b9150915061070181610931565b819250505092915050565b600080829050601f8151111561075957826040517f305a27a90000000000000000000000000000000000000000000000000000000081526004016107509190611772565b60405180910390fd5b805181610765906117b9565b60001c1760001b915050919050565b6060600061078183610a97565b90506000602067ffffffffffffffff8111156107a05761079f6113dd565b5b6040519080825280601f01601f1916602001820160405280156107d25781602001600182028036833780820191505090505b5090508181528360208201528092505050919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614801561086457507f000000000000000000000000000000000000000000000000000000000000000046145b15610891577f0000000000000000000000000000000000000000000000000000000000000000905061089c565b610899610ae7565b90505b90565b60006040517f190100000000000000000000000000000000000000000000000000000000000081528360028201528260228201526042812091505092915050565b60008060418351036109215760008060006020860151925060408601519150606086015160001a905061091587828585610b7d565b9450945050505061092a565b60006002915091505b9250929050565b6000600481111561094557610944611820565b5b81600481111561095857610957611820565b5b0315610a94576001600481111561097257610971611820565b5b81600481111561098557610984611820565b5b036109c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109bc9061189b565b60405180910390fd5b600260048111156109d9576109d8611820565b5b8160048111156109ec576109eb611820565b5b03610a2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2390611907565b60405180910390fd5b60036004811115610a4057610a3f611820565b5b816004811115610a5357610a52611820565b5b03610a93576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8a90611999565b60405180910390fd5b5b50565b60008060ff8360001c169050601f811115610ade576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80915050919050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000004630604051602001610b629594939291906119b9565b60405160208183030381529060405280519060200120905090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115610bb8576000600391509150610c56565b600060018787878760405160008152602001604052604051610bdd9493929190611a28565b6020604051602081039080840390855afa158015610bff573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c4d57600060019250925050610c56565b80600092509250505b94509492505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c9482610c69565b9050919050565b610ca481610c89565b8114610caf57600080fd5b50565b600081359050610cc181610c9b565b92915050565b600060208284031215610cdd57610cdc610c5f565b5b6000610ceb84828501610cb2565b91505092915050565b6000819050919050565b610d0781610cf4565b82525050565b6000602082019050610d226000830184610cfe565b92915050565b600080fd5b600060c08284031215610d4357610d42610d28565b5b81905092915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610d7157610d70610d4c565b5b8235905067ffffffffffffffff811115610d8e57610d8d610d51565b5b602083019150836001820283011115610daa57610da9610d56565b5b9250929050565b600080600060408486031215610dca57610dc9610c5f565b5b600084013567ffffffffffffffff811115610de857610de7610c64565b5b610df486828701610d2d565b935050602084013567ffffffffffffffff811115610e1557610e14610c64565b5b610e2186828701610d5b565b92509250509250925092565b60008115159050919050565b610e4281610e2d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610e82578082015181840152602081019050610e67565b60008484015250505050565b6000601f19601f8301169050919050565b6000610eaa82610e48565b610eb48185610e53565b9350610ec4818560208601610e64565b610ecd81610e8e565b840191505092915050565b6000604082019050610eed6000830185610e39565b8181036020830152610eff8184610e9f565b90509392505050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b610f3d81610f08565b82525050565b600081519050919050565b600082825260208201905092915050565b6000610f6a82610f43565b610f748185610f4e565b9350610f84818560208601610e64565b610f8d81610e8e565b840191505092915050565b610fa181610c89565b82525050565b6000819050919050565b610fba81610fa7565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610ff581610cf4565b82525050565b60006110078383610fec565b60208301905092915050565b6000602082019050919050565b600061102b82610fc0565b6110358185610fcb565b935061104083610fdc565b8060005b838110156110715781516110588882610ffb565b975061106383611013565b925050600181019050611044565b5085935050505092915050565b600060e082019050611093600083018a610f34565b81810360208301526110a58189610f5f565b905081810360408301526110b98188610f5f565b90506110c86060830187610cfe565b6110d56080830186610f98565b6110e260a0830185610fb1565b81810360c08301526110f48184611020565b905098975050505050505050565b60006020820190506111176000830184610e39565b92915050565b7f4d696e696d616c466f727761726465723a207369676e617475726520646f657360008201527f206e6f74206d6174636820726571756573740000000000000000000000000000602082015250565b6000611179603283610f4e565b91506111848261111d565b604082019050919050565b600060208201905081810360008301526111a88161116c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006111e982610cf4565b91506111f483610cf4565b925082820190508082111561120c5761120b6111af565b5b92915050565b600080fd5b600080fd5b600080fd5b6000808335600160200384360303811261123e5761123d611212565b5b80840192508235915067ffffffffffffffff8211156112605761125f611217565b5b60208301925060018202360383131561127c5761127b61121c565b5b509250929050565b600081905092915050565b82818337600083830152505050565b60006112aa8385611284565b93506112b783858461128f565b82840190509392505050565b60008160601b9050919050565b60006112db826112c3565b9050919050565b60006112ed826112d0565b9050919050565b61130561130082610c89565b6112e2565b82525050565b600061131882858761129e565b915061132482846112f4565b601482019150819050949350505050565b600061134082610e48565b61134a8185611284565b935061135a818560208601610e64565b80840191505092915050565b60006113728284611335565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006113b782610cf4565b91506113c283610cf4565b9250826113d2576113d161137d565b5b828204905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600061141982848661129e565b91508190509392505050565b600060e08201905061143a600083018a610fb1565b6114476020830189610f98565b6114546040830188610f98565b6114616060830187610cfe565b61146e6080830186610cfe565b61147b60a0830185610cfe565b61148860c0830184610fb1565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806114db57607f821691505b6020821081036114ee576114ed611494565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026115567fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611519565b6115608683611519565b95508019841693508086168417925050509392505050565b6000819050919050565b600061159d61159861159384610cf4565b611578565b610cf4565b9050919050565b6000819050919050565b6115b783611582565b6115cb6115c3826115a4565b848454611526565b825550505050565b600090565b6115e06115d3565b6115eb8184846115ae565b505050565b5b8181101561160f576116046000826115d8565b6001810190506115f1565b5050565b601f82111561165457611625816114f4565b61162e84611509565b8101602085101561163d578190505b61165161164985611509565b8301826115f0565b50505b505050565b600082821c905092915050565b600061167760001984600802611659565b1980831691505092915050565b60006116908383611666565b9150826002028217905092915050565b6116a982610f43565b67ffffffffffffffff8111156116c2576116c16113dd565b5b6116cc82546114c3565b6116d7828285611613565b600060209050601f83116001811461170a57600084156116f8578287015190505b6117028582611684565b86555061176a565b601f198416611718866114f4565b60005b828110156117405784890151825560018201915060208501945060208101905061171b565b8683101561175d5784890151611759601f891682611666565b8355505b6001600288020188555050505b505050505050565b6000602082019050818103600083015261178c8184610f5f565b905092915050565b6000819050602082019050919050565b60006117b08251610fa7565b80915050919050565b60006117c482610e48565b826117ce84611794565b90506117d9816117a4565b92506020821015611819576118147fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83602003600802611519565b831692505b5050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611885601883610f4e565b91506118908261184f565b602082019050919050565b600060208201905081810360008301526118b481611878565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b60006118f1601f83610f4e565b91506118fc826118bb565b602082019050919050565b60006020820190508181036000830152611920816118e4565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611983602283610f4e565b915061198e82611927565b604082019050919050565b600060208201905081810360008301526119b281611976565b9050919050565b600060a0820190506119ce6000830188610fb1565b6119db6020830187610fb1565b6119e86040830186610fb1565b6119f56060830185610cfe565b611a026080830184610f98565b9695505050505050565b600060ff82169050919050565b611a2281611a0c565b82525050565b6000608082019050611a3d6000830187610fb1565b611a4a6020830186611a19565b611a576040830185610fb1565b611a646060830184610fb1565b9594505050505056fea2646970667358221220be26b6aad202a209f9cf8636a9fe20e3dfa395ceb300bb00138a2a67e9d12f0464736f6c63430008110033";

export class MinimalForwarder__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MinimalForwarder> {
    return super.deploy(overrides || {}) as Promise<MinimalForwarder>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MinimalForwarder {
    return super.attach(address) as MinimalForwarder;
  }
  connect(signer: Signer): MinimalForwarder__factory {
    return super.connect(signer) as MinimalForwarder__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MinimalForwarderInterface {
    return new utils.Interface(_abi) as MinimalForwarderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MinimalForwarder {
    return new Contract(address, _abi, signerOrProvider) as MinimalForwarder;
  }
}
