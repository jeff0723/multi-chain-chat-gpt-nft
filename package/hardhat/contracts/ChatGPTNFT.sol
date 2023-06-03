// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./@openzeppelin/contracts/access/Ownable.sol";
import "./HashiVerifier.sol";

interface IHashiVerifier {
    function verifyOwner(
        bytes32 blockheader,
        uint256 tokenId,
        address messageSender,
        bytes memory signature,
        bytes32 storageRoot,
        bytes[] memory stateProof,
        bytes[] memory storageProof
    ) external;
}

contract ChatGPTNFT is ERC721 {
    using Address for address;
    using Strings for uint256;
    string private _baseTokenURI;
    address public originalContractAddress;
    mapping(uint256 => string) public agentURI; //id -> string
    IHashiVerifier public hashiVerifier;

    constructor(
        address _originalAddress,
        string memory _originalBaseURI,
        address _hashiVerifier
    ) ERC721("ChatGPTNFT", "CGNFT") {
        _baseTokenURI = _originalBaseURI;
        originalContractAddress = _originalAddress;
        hashiVerifier = IHashiVerifier(_hashiVerifier);
    }

    //update function input
    function mint(
        address _to,
        uint256 tokenId,
        bytes32 blockheader,
        bytes memory signature,
        bytes32 storageRoot,
        bytes[] memory stateProof,
        bytes[] memory storageProof
    ) public {
        //add verify function here
        hashiVerifier.verifyOwner(
            blockheader,
            tokenId,
            msg.sender,
            signature,
            storageRoot,
            stateProof,
            storageProof
        );
        _safeMint(_to, tokenId);
    }

    function setAgentURI(uint256 _tokenId, string memory _uri) public {
        require(msg.sender == ownerOf(_tokenId), "Not the owner of the token");
        agentURI[_tokenId] = _uri;
    }

    function getAgentURI(uint256 _tokenId) public view returns (string memory) {
        // add require owner here
        return agentURI[_tokenId];
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory baseURI = _baseURI();
        return
            bytes(baseURI).length > 0
                ? string(abi.encodePacked(baseURI, tokenId.toString()))
                : "";
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }
}
