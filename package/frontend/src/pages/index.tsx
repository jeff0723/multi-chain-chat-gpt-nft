import { useEffect, useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import Blockies from 'react-blockies';
import { useAccount, useWalletClient } from 'wagmi';
import { ThreeDots } from 'react-loader-spinner'
import { Inter } from 'next/font/google'
import { updateURI } from '../utils/actions/updateURI'
const inter = Inter({ subsets: ['latin'] })

type Props = {}
type Message = {
  prompt: string
  response: string
  loading: boolean
}
const ChatPage = (props: Props) => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [response, setResponse] = useState('')
  const { data: walletClient } = useWalletClient()
  const addInputMessage = () => {
    const newMessages = [...messages, {
      prompt: input,
      response: '',
      loading: true
    }]
    setMessages([...newMessages])
    setInput('')
  }
  const addResponseMessage = (response: string) => {
    const newMessages = [...messages]
    console.log("newMessages: ", newMessages)
    newMessages[newMessages.length - 1].response = response
    newMessages[newMessages.length - 1].loading = false
    setMessages([...newMessages])
  }
  useEffect(() => {
    if (response) {
      addResponseMessage(response)
      setResponse('')
    }
  }, [response])
  const sendMessage = async () => {
    addInputMessage()
    const response = await fetch('/api/message', {
      method: 'POST',
      body: JSON.stringify({
        "name": "Hashi Bridge Master",
        "description": "Hashi Bridge Master is a highly capable engineer professional with extensive experience in building cross-chain bridget support for multiple blockchains. He is a strong believer in the future of blockchain technology and is committed to building a decentralized future.",
        "personality": "patient, detail-oriented, and like to hack. You have a deep understanding of smart contract language and system architechure, allowing you to quickly build up different kind of bridge and application without any security issue.",
        "example": "Hashi is an EVM Hash Oracle Aggregator, designed to facilitate a principled approach to cross-chain bridge security. The primary insight being that the vast majority of bridge-related security incidents could have had minimal impact if the systems relying on them had built in some redundancy. In other words, it's much more secure to require messages be validated by multiple independent mechanisms, rather than by just one. We call this setup a RAIHO (Redundant Array of Independent Hash Oracles).",
        "prompt": input
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    setResponse(data.response)
  }

  const changeUrl = async () => {
    await updateURI(1340, "")
  }
  return (
    <div className='h-full relative'>
      {messages.length === 0 &&
        (<div className='w-full h-3/4 flex justify-center items-center'>
          <div className='flex gap-2 text-[35px] items-center'>
            <span className='opacity-40'>Sha420  </span>
            <div className='py-2'>
              <span className='flex px-4 py-2 justify-center items-center rounded-lg bg-orange-300 text-lg font-bold'>NFT</span>
            </div>
          </div>
        </div>)}
      <div className={`${inter.className} w-full flex flex-col text-base font-thin`}>
        {messages.map((message, index) => (
          <>
            <div className='w-full p-4 bg-gray-800 flex justify-center'>
              <div className='w-3/4 flex'>
                <div className='pr-4'>
                  <Blockies
                    seed={walletClient?.account.address ?? 'Jeffrey'}
                    size={10}
                    scale={3}
                    color="#dfe"
                    bgColor="#ffe"
                    spotColor="#abc"
                    className="identicon"
                  />
                </div>
                <div>
                  {message.prompt}
                </div>
              </div>
            </div>
            <div className='w-full p-4 flex justify-center'>
              <div className='w-3/4 flex'>
                <div className='pr-4'>
                  <img
                    src='logo.png'
                    alt='img'
                    width={30}
                    height={30}
                  />
                </div>
                <div className='flex-1'>
                  {message.loading ?
                    <ThreeDots
                      height="30"
                      width="30"
                      radius="4"
                      color="#4fa94d"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    /> :
                    message.response
                  }
                </div>
              </div>
            </div>
          </>
        ))}

      </div>
      <form className='w-full absolute flex bottom-10 justify-center'>
        <div className='w-3/4 py-4 px-4 rounded-xl bg-[#40414f] shadow-xs relative' >
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message" className=" w-full focus:outline-none bg-[#40414f] " />
          <button onClick={(e) => {
            sendMessage()
            e.preventDefault()
          }} disabled={!input} className='absolute p-2 rounded-md bottom-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-3 disabled:text-gray-400 enabled:bg-[#19c37d] text-white transition-colors disabled:opacity-40'>
            <IoMdSend size={20} />
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChatPage