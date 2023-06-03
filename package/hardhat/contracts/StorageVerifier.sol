// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;
//import hardhat console.sol hardhat/console.sol
import {MPT} from "./MPT.sol";

abstract contract StorageVerifier {
    error InvalidStateProof();
    error InvalidStorageProof();

    error Debug(bytes32 p);

    event accountproofcomplete();
    event storageproofcomplete();

    function _verifyStorage(
        bytes32 root,
        MPT.Account memory contractAccount,
        MPT.StorageSlot memory contractSlot,
        bytes[] memory stateProof,
        bytes[] memory storageProof
    ) internal {
        require(
            MPT.verifyAccount(root, contractAccount, stateProof),
            "account proof rejected (state proof)"
        );

        emit accountproofcomplete();
        require(
            MPT.verifyStorageSlot(
                contractAccount.storageRoot,
                contractSlot,
                storageProof
            ),
            "invalid storage slot"
        );

        emit storageproofcomplete();
    }
}
