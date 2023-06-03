export const HASHI_VERIFIER_ABI = [
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hashiheader",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
];

export const HASHI_VERIFIER_ADDRESS =
  "0x980D3730fA360eE50ffCcc997F150c5061E1BcB9";
