## Description  

![arashiyama-kyoto-togetsukyo-bridge-japan-sakura-cherry-blossom-season](https://github.com/taetaehoho/mc-gpt-nft/assets/75167060/2b75828a-9d34-4abe-98b2-c8e1812812e9)

Multichain-GPT-NFT is

- A "lightclient" 🏮
  - smart contract that stores blockheaders from unanimously agreed Hashi oracle blockheaders (when Hashi is live)
  - a frontend that queries RPCs for proofs for a storage slot related to your ownership of a specific NFT (Pudgy Penguins in this case) and generates merkle proofs to verify that you hold this NFT
  - verification of this proof to mint an NFT

- A GPT-3.5 enabled NFT project that extends [LangChain](https://github.com/hwchase17/langchain). 🤖 It...
  - Mints a derivative on a new chain upon verification of a merkle proof of ETHL1 ownership of a Based Ghoul
  - Mints the derivative with the same metadata and replicated ipfs (same image) on the new chain
  - turns the NFT in a custom chat agent using LangChain
  - Gives the user the ability to chat with their NFT! 

- A User intercace that 🌸
  - Verify NFT ownership so that only you have access to your NFT-AI-Companion!
  - allows you to converse with your NFT!

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

- Target audience - people who want to mint AI augmented NFTs on other chains due to cheaper transaction costs and higher throughput but want to use proven ownership of their favorite NFTs from Ethereum
- Technical Implementation - Nodejs, Solidity, hardhat backend, NextJS, React, WAGMI for the frontend. The project is deployed on Aurora Testnet @0xb4A922624a576068dE57Ea787403128d565D8042 for HashiVerifier and @ for ChatGPTNFT so that users can interact with their NFT and mint many different versions/collections without concern for gas costs.
  - Some Libraries used on the smart contract side are MPT, StorageVerifier by @cometh, RLPReader
- Setup instructions run
   `yarn hardhat deploy --network auroratestnet ` to redeploy relevant contracts. Then interact with them directly using scripts, ethers as if you might on ETH mainnet.

Gnosis

- Technical Implementation - Hashi for the blockheader then JSONRPC to use a blockheader snapshot for the merkle proof
- Deployed on Gnosis!
- Setup instructions run
   `yarn hardhat deploy --network gnosis` to deploy relevant contracts and automatically verify on Gnosiscan. Interact with test/verifyandmint.js or on Gnosisscan!
