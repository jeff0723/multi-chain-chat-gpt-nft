import { NFTStorage } from "nft.storage";

// Paste your NFT.Storage API key into the quotes:
const NFT_STORAGE_KEY = process.env.NEXT_PUBLIC_NFT_STORAGE_KEY || "";

export async function storeAgentURI(
    {
        name,
        description,
        personality,
        example
    }: {
        name: string,
        description: string,
        personality: string,
        example: string

    }
) {

    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY });
    // create json data to blob
    const someData = new Blob([JSON.stringify({
        name,
        description,
        personality,
        example
    })])
    const { car } = await NFTStorage.encodeBlob(someData)
    // call client.store, passing in the agent & metadata
    const cid = await nftstorage.storeCar(car)
    return cid

}