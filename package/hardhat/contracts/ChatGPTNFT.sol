pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ChatGPTNFT is ERC721 {
    constructor(
        address memory originalContractAddress,
        string memory originalBaseURI
    ) ERC721("ChatGPTNFT", "CGNFT") {}
}
