import React, { useState, useCallback, useEffect } from 'react'
import { IoMdSend } from 'react-icons/io'
import Typed from "react-typed"

type Props = {}

const errorText = "Transaction failed, maybe you don't have this token "
function waitForMs(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function MintPage({ }: Props) {
    //generate random number for the nft
    const [tokenId, setTokenId] = useState(1)
    const [input, setInput] = useState('')
    const [isError, setIsError] = useState(false)

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
                        setIsError(true)
                        setTimeout(() => {
                            setIsError(false)
                        }, 10000)
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