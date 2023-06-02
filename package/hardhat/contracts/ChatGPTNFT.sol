pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ChatGPTNFT is ERC721 {
    using Address for address;
    using Strings for uint256;
    string private _baseTokenURI;
    address public originalContractAddress;
    mapping(uint256 => string) public agentURI;

    constructor(
        address _originalAddress,
        string memory _originalBaseURI
    ) ERC721("ChatGPTNFT", "CGNFT") {
        _baseTokenURI = _originalBaseURI;
        originalContractAddress = _originalAddress;
    }

    function mint(address _to, uint256 _tokenId) public {
        //add verify function here
        _safeMint(_to, _tokenId);
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
