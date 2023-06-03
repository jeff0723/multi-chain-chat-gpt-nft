import { BLOCK_HEIGHT } from '@/constant'
import { ghoulsSlotOf } from '@/helper/getSlot'
import { ethers } from 'ethers'
import React, { useState, useCallback, useEffect } from 'react'
import { IoMdSend } from 'react-icons/io'
import Typed from "react-typed"
import { useSignMessage, useWalletClient, useWaitForTransaction, useContractWrite } from 'wagmi'
import { getContract } from 'viem'
import { CHATGPT_NFT_ADDRESS } from '@/constant/addresses'
import { CHATGPT_NFT_ABI } from '@/constant/abis'


type Props = {}

const errorText = "Transaction failed, maybe you don't have this token "
function waitForMs(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function MintPage({ }: Props) {
    //generate random number for the nft
    const { data: walletClient, isError: isWalletError, isLoading: isWalletLoading } = useWalletClient()
    const [tokenId, setTokenId] = useState(1)
    const [input, setInput] = useState('')
    const [isError, setIsError] = useState(false)
    const [signature, setSignature] = useState(window.localStorage.getItem('signature'))
    const { signMessageAsync, isLoading: signLoading } = useSignMessage({
        onError(error) {
            // toast.error(error?.message);
        },
        onSuccess(data, variables, context) {

        },
    });
    console.log(walletClient?.chain.id)
    const { isLoading: writeLoading, write } = useContractWrite({
        address: CHATGPT_NFT_ADDRESS,
        abi: CHATGPT_NFT_ABI,
        chainId: walletClient?.chain.id,
        functionName: 'mint',
        onSuccess(data, variables, context) {
            console.log(data)
        },
        onError(error, variables, context) {
            console.log("error: ", error)
            // toast.error(error?.data?.message ?? error?.message)
            // Mixpanel.track("publication.mirror", { result: 'write_error' })

        }
    })
    const handleMint = async () => {
        if (!walletClient) return
        let currentSignature = signature;
        if (!currentSignature) {
            currentSignature = await signMessageAsync({
                message: '0x3b1fDB8e7a0AFecec58Ee71FD64F5e7650d98Eb7'
            })
            window.localStorage.setItem('signature', currentSignature)
            setSignature(currentSignature)
        }
        const mainnetRPC = "https://mainnet.infura.io/v3/dc7c60b22021400a97355601e710833d";
        const mainnetProvider = new ethers.providers.JsonRpcProvider(mainnetRPC);


        const slot = ghoulsSlotOf(1340);
        const proof = await mainnetProvider.send("eth_getProof", [
            // hardcode pudgy address
            "0xeF1a89cbfAbE59397FfdA11Fc5DF293E9bC5Db90",
            [slot],
            BLOCK_HEIGHT,
        ]);
        const blockheader =
            "0x1e34f1137efe68235a91b52a9afb6e30e08dcf86e25376a8867ebbebd463ca99";
        console.log('here')
        console.log('args', [
            walletClient?.account.address,
            1340,
            blockheader,
            currentSignature,
            proof.storageHash,
            proof.accountProof,
            proof.storageProof[0].proof,])
        // write({
        //     args: [
        //         walletClient?.account.address,
        //         1340,
        //         blockheader,
        //         currentSignature,
        //         proof.storageHash,
        //         proof.accountProof,
        //         proof.storageProof[0].proof,],
        // })

        await walletClient.writeContract({
            address: CHATGPT_NFT_ADDRESS,
            abi: CHATGPT_NFT_ABI,
            functionName: 'mint',
            args: [
                '0x3b1fDB8e7a0AFecec58Ee71FD64F5e7650d98Eb7',
                1340,
                blockheader,
                currentSignature,
                proof.storageHash,
                proof.accountProof,
                proof.storageProof[0].proof]
        })
        // await walletClient.writeContract({
        //     address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
        //     abi: wagmiAbi,
        //     functionName: 'mint',
        //     account,
        // })
        // const contract = getContract({
        //     address: CHATGPT_NFT_ADDRESS,
        //     abi: CHATGPT_NFT_ABI,
        //     walletClient,
        // })
        // const hash = await walletClient.writeContract({
        //     address:CHATGPT_NFT_ADDRESS,
        //     abi: CHATGPT_NFT_ABI,
        //     functionName: 'mint',
        //     args: [69420]
        //   })

    }

    return (
        <div className='h-full py-[20px] flex flex-col justify-between relative'>
            <div className='flex flex-col'>
                <div className='w-full flex justify-center'>
                    <div>Mint your nft</div>
                </div>
                <div className='flex flex-col justify-center items-center flex-1 py-20'>
                    <img src={`images/${tokenId}.png`} alt="nft" width={350} height={350} />
                </div>
            </div>
            <div className='flex justify-center w-full absolute bottom-[150px]'>

                <div className='w-3/4'>
                    {isError &&
                        <Typed
                            stopped={false}
                            strings={[
                                errorText
                            ]}
                            typeSpeed={50}
                        />
                    }
                </div>
            </div>
            <form className='w-full absolute flex bottom-10 justify-center'>
                <div className='w-3/4 py-4 px-4 rounded-xl bg-[#40414f] shadow-xs relative' >
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="/input your token id" className=" w-full focus:outline-none bg-[#40414f] " />
                    <button onClick={(e) => {
                        handleMint()
                        e.preventDefault()
                    }} disabled={!input} className='absolute p-2 rounded-md bottom-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-3 disabled:text-gray-400 enabled:bg-[#19c37d] text-white transition-colors disabled:opacity-40'>
                        <IoMdSend size={20} />
                    </button>
                </div>
            </form>

        </div>
    )
}

export default MintPage