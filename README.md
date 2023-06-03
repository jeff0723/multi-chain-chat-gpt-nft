## Description  

Multichain-GPT-NFT is

1. A "lightclient"
   a. smart contract that stores blockheaders from unanimously agreed Hashi oracle blockheaders (when Hashi is live)
   b. a frontend that queries RPCs for proofs for a storage slot related to your ownership of a specific NFT (Pudgy Penguins in this case) and generates merkle proofs to verify that you hold this NFT
   c. verification of this proof to mint an NFT

2. A GPT-3.5 enabled NFT project
   a. Minting upon verification of the merkle proof on the new chain of ETHL1 ownership of a pudgy penguin
   b. Minting the derivative with the same metadata and replicated ipfs (same image) on the new chain
   c. Embedding chatGPT prompt into the NFT metadata
   d. The ability to chat with your NFT!

3. A User intercace
   a. allows you to input your NFTid to mint a derivative on a destination chain
   b. allows you to converse with your NFT!

Made by

1. Jeffrey - Full stack developer, @jeff0723 on TG
2. taetaehoho - Full stack developer, @taetaehoho on TG


## Installation

Project installation:

```
git clone https://github.com/taetaehoho/mc-gpt-nft.git

cd package/hardhat

yarn 

yarn hardhat deploy --network [gnosis | auroratestnet ]

cd test 

node verifyandmint.js
```

## Acknowledgments

Special thanks to the ETHSeoul, its sponsors, and @cometh team. 

## Sponsors

Near

1. Target audience - people who want to mint AI augmented NFTs on other chains due to cheaper transaction costs and higher throughput but want to use proven ownership of their favorite NFTs from Ethereum
2. Technical Implementation - Nodejs, Solidity, hardhat backend, NextJS, React, WAGMI for the frontend. The project is deployed on Aurora Testnet @0xb4A922624a576068dE57Ea787403128d565D8042 for HashiVerifier and @ for ChatGPTNFT so that users can interact with their NFT and mint many different versions/collections without concern for gas costs.
   a. Some Libraries used on the smart contract side are MPT, StorageVerifier by @cometh, RLPReader
3. Setup instructions run
   `yarn hardhat deploy --network auroratestnet ` to redeploy relevant contracts. Then interact with them directly using scripts, ethers as if you might on ETH mainnet.

Gnosis

1. Technical Implementation - Hashi for the blockheader then JSONRPC to use a blockheader snapshot for the merkle proof
2. Deployed on Gnosis!
3. Setup instructions run
   `yarn hardhat deploy --network gnosis` to deploy relevant contracts and automatically verify on Gnosiscan. Interact with test/verifyandmint.js or on Gnosisscan!
