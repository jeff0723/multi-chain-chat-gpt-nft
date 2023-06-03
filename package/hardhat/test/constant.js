import ethers from "ethers";

export const CURRENTBLOCKHEIGHT = "0x109817c";

export const GHOULTOKENID = 1340;

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
  "0xd7eFBF9B92C98A189f216995FEAb45c537BD7E25";

export const ghoulsSlotOf = (tokenId) =>
  ethers.utils.keccak256(
    ethers.utils.solidityPack(["uint256", "uint256"], [tokenId, 103])
  );

export const ghoulsAddress = "0xeF1a89cbfAbE59397FfdA11Fc5DF293E9bC5Db90";
