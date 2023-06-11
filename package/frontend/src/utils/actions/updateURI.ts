import { CHATGPT_NFT_ABI } from '@/constant/abis';
import { CHATGPT_NFT_ADDRESS } from '@/constant/addresses';
import { TransactionReceipt } from '@ethersproject/abstract-provider';
import { prepareWriteContract, writeContract, waitForTransaction } from '@wagmi/core';
export const updateURI = async (tokenId: number, uri: string): Promise<TransactionReceipt> => {

    // Prepare the transaction data
    const { request } = await prepareWriteContract({
        address: CHATGPT_NFT_ADDRESS,
        abi: CHATGPT_NFT_ABI,
        functionName: 'setAgentURI',
        args: [tokenId, uri]
    });

    // Execute the transaction
    const { hash, } = await writeContract(request)


    // Wait for the transaction block to be mined
    const data = await waitForTransaction({
        hash,
    })
    //@ts-ignore
    return data;
}
