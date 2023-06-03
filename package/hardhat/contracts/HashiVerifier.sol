// SPDX-License-Identifier: MIT
// creds to @cometh-game
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
        // because hashi is not live we hardcode the hashiheader
        // when hashi is live
        // blockheader = Hashi.getHash(uint256 domain, uint256 id, IOracleAdapter[] memory oracleAdapters)
        // return blockheader;

        return hashiheader;
    }

    function verifyOwner(
        bytes32 blockheader,
        uint256 tokenId,
        address messageSender,
        bytes memory signature,
        bytes32 storageRoot,
        bytes[] memory stateProof,
        bytes[] memory storageProof
    ) external {
        // verify that the blockheader inputted is the current stored hashi header
        // Note in practice this does nothing until we verify block contents

        require(blockheader == hashiheader, "blockheader is incorrect");
        // recover owner for storage slot access
        bytes32 message = abi.encode(messageSender).toEthSignedMessageHash();
        address owner = message.recover(signature);

        // Since this contract is not deployed on a network that settles on mainnet,
        // We hardcode the root and bypass the block hash check
        bytes32 stateRoot = 0xff814b221f1c0d28fe442a044153519cd208eac664cac2f31a95bee9bd040e40;
        address tokenAddress = 0xeF1a89cbfAbE59397FfdA11Fc5DF293E9bC5Db90;

        // Expectation: the provided proof is dedicated for the Ghoul
        MPT.Account memory basedGhouls = MPT.Account({
            accountAddress: tokenAddress,
            balance: 0,
            nonce: 1,
            storageRoot: storageRoot,
            codeHash: 0xfc1ea81db44e2de921b958dc92da921a18968ff3f3465bd475fb86dd1af03986
        });
        // Expectation: the slot contains the address of the owner
        MPT.StorageSlot memory slot = MPT.StorageSlot({
            position: uint256(keccak256(abi.encode(tokenId, 103))),
            value: uint256(uint160(owner))
        });

        // Then verify the proof
        _verifyStorage(stateRoot, basedGhouls, slot, stateProof, storageProof);
    }
}
