Multichain-GPT-NFT is

![hashi](https://github.com/taetaehoho/mc-gpt-nft/assets/75167060/6758bd40-d7d2-4f8d-bbcc-1ef8c027d0e2)

1. A "lightclient"
   a. smart contract that stores blockheaders from unanimously agreed Hashi oracle blockheaders
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
