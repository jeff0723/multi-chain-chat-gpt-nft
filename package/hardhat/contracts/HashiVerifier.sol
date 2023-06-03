// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import {MPT} from "./MPT.sol";
import {StorageVerifier} from "./StorageVerifier.sol";
import {IHashi} from "./interfaces/IHashi.sol";
import {ECDSA} from "./@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract HashiVerifier is StorageVerifier {
    using ECDSA for bytes32;
    using ECDSA for bytes;

    bytes32 public immutable hashiheader =
        0x1e34f1137efe68235a91b52a9afb6e30e08dcf86e25376a8867ebbebd463ca99;
    IHashi private immutable hashiInterface;

    // use hashi to get the current stateroot and return the blockNumber

    constructor(address hashiaddress) {
        hashiInterface = IHashi(hashiaddress);
    }

    function getBlockHeader() public view returns (bytes32) {
        // blockheader = Hashi.getHash(uint256 domain,
        // uint256 id,
        // IOracleAdapter[] memory oracleAdapters)

        // return blockheader;

        return hashiheader;
    }

    function verifyOwner(
        bytes32 blockheader,
        uint256 tokenId,
        uint256 positionVariable,
        bytes memory signature,
        bytes32 stateRoot,
        bytes[] memory stateProof,
        bytes[] memory storageProof
    ) external {
        // verify that the blockheader inputted is the current stored hashi header
        // Note in practice this does nothing until we verify block contents
        require(blockheader == hashiheader, "blockheader is incorrect");
        // recover owner for storage slot access
        bytes32 message = abi.encode(msg.sender).toEthSignedMessageHash();
        address owner = message.recover(signature);

        // Since this contract is not deployed on a network that settles on mainnet,
        // Hardcode the storageRoot
        address tokenAddress = 0xBd3531dA5CF5857e7CfAA92426877b022e612cf8;
        bytes32 storageRoot = 0xa1a5b0fd00fb6c6bea13c4178af465a2cd211f25027b11298c9afe03c1383414;

        // Dedicated proof for the Pudgy
        MPT.Account memory pudgyPenguins = MPT.Account({
            accountAddress: tokenAddress,
            balance: 0,
            nonce: 1,
            storageRoot: storageRoot,
            codeHash: 0x5184c58406e07d654a5e39591c5adf95a8de48e5ea96eec2f4666d84ab248b09
        });

        // Expectation: the slot contains the address of the owner
        MPT.StorageSlot memory slot = MPT.StorageSlot({
            position: uint256(keccak256(abi.encode(tokenId, positionVariable))),
            value: uint256(uint160(owner))
        });

        // Then verify the proof
        _verifyStorage(
            stateRoot,
            pudgyPenguins,
            slot,
            stateProof,
            storageProof
        );
    }
}
