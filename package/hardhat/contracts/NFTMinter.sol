// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import {MPT} from "./MPT.sol";
import {StorageVerifier} from "./StorageVerifier.sol";
import "./interfaces/";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract claimPenguin is StorageVerifier {
    using ECDSA for bytes32;
    using ECDSA for bytes;

    error InvalidHashiHash();

    bytes32 blockheader;
    IHashi public hashiInterface;

    // use hashi to get the current stateroot and return the blockNumber

    constructor(address hashiaddress) {
        Hashi = IHashi(hashiaddress);
    }
    
    /// @notice Explain to an end user what this does
    /// @dev Explain to a developer any extra details
    /// @param Documents a parameter just like in doxygen (must be followed by parameter name)
    /// @return Documents the return variables of a contract’s function state variable
    function getBlockHeader() {
        blockheader = Hashi.getHash(uint256 domain,
        uint256 id,
        IOracleAdapter[] memory oracleAdapters)

        return blockheader;
    } 

    /// @notice Upon proving that owner owns 
    /// @dev Explain to a developer any extra details
    /// @param Documents a parameter just like in doxygen (must be followed by parameter name)
    /// @return Documents the return variables of a contract’s function state variable
    function claimPenguin(
        bytes32 hashiheader,
        uint256 tokenId,
        string memory image,
        bytes memory signature,
        bytes32 stateRoot, 
        bytes32 storageRoot,
        bytes[] memory stateProof,
        bytes[] memory storageProof
    ) public {

        // verify that the blockheader inputted is the current stored hashi header
        if(hashiheader != blockheader) {
            revert InvalidHashiHash();
        }

        // recover owner for storage slot access 
        bytes32 message = abi.encode(_msgSender()).toEthSignedMessageHash();
        address owner = message.recover(signature);

        // Since this contract is not deployed on a network that settles on mainnet,
        // We hardcode the root and bypass the block hash check
        bytes32 stateRoot = 0x46ef9d82ce11c07fd77ff6db917ebb25f17f0b6819a7d702d9079ceb2f9ef8ea;
        address tokenAddress = 0xBd3531dA5CF5857e7CfAA92426877b022e612cf8;

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
            position: uint256(keccak256(abi.encode(tokenId, 103))),
            value: uint256(uint160(owner))
        });

        // Then verify the proof
        _verifyStorage(stateRoot, pudgyPenguins, slot, stateProof, storageProof);
    }
}
