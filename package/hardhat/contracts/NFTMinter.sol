// // SPDX-License-Identifier: MIT
// pragma solidity >=0.8.0;

// import {MPT} from "./MPT.sol";
// import {StorageVerifier} from "./StorageVerifier.sol";
// import './interfaces/';
// // import gethash method from hashi
// import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

// contract claimAzuki is StorageVerifier {
//     using ECDSA for bytes32;
//     using ECDSA for bytes;

        bytes32 blockheader;

//     IHashi public hashiInterface;

//     // use hashi to get the current stateroot and return the blockNumber

//     constructor(address hashiaddress) {
//         Hashi = IHashi(hashiaddress);
//     }

//     function getBlockHeader() {
//         Hashi.getHash(uint256 domain,
//         uint256 id,
//         IOracleAdapter[] memory oracleAdapters)
//     } { blockheader = blockheader;}
}

//     function claimGhoul(
//         uint256 tokenId,
//         string memory image,
//         bytes memory signature,
//         bytes32 storageRoot,
//         bytes[] memory stateProof,
//         bytes[] memory storageProof
//     ) public {
//         bytes32 message = abi.encode(_msgSender()).toEthSignedMessageHash();
//         address owner = message.recover(signature);

//         // Since this contract is not deployed on a network that settles on mainnet,
//         // We hardcode the root and bypass the block hash check
//         bytes32 stateRoot = 0x46ef9d82ce11c07fd77ff6db917ebb25f17f0b6819a7d702d9079ceb2f9ef8ea;
//         address tokenAddress = 0xeF1a89cbfAbE59397FfdA11Fc5DF293E9bC5Db90;

//         // Expectation: the provided proof is dedicated for the Ghoul
//         MPT.Account memory basedGhouls = MPT.Account({
//             accountAddress: tokenAddress,
//             balance: 0,
//             nonce: 1,
//             storageRoot: storageRoot,
//             codeHash: 0xfc1ea81db44e2de921b958dc92da921a18968ff3f3465bd475fb86dd1af03986
//         });

//         // Expectation: the slot contains the address of the owner
//         MPT.StorageSlot memory slot = MPT.StorageSlot({
//             position: uint256(keccak256(abi.encode(tokenId, 103))),
//             value: uint256(uint160(owner))
//         });

//         // Then verify the proof
//         _verifyStorage(stateRoot, basedGhouls, slot, stateProof, storageProof);
//     }
// }
