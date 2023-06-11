import React, { useState } from 'react'
import { storeAgentURI } from '../../utils/storeFile'
import { updateURI } from '@/utils/actions/updateURI'
import toast from 'react-hot-toast';

type Props = {}

type AgentURIInput = {
    name: string
    description: string
    personality: string
    example: string

}

const UploadAgentPage = (props: Props) => {
    const [agentUriInput, setAgentUriInput] = useState<AgentURIInput>({
        name: "",
        description: "",
        personality: "",
        example: ""
    }
    )
    const [isURIUploading, setIsURIUploading] = useState(false)
    const [isMinting, setIsMinting] = useState(false)
    const validateInput = () => {
        if (agentUriInput.name === "" || agentUriInput.description === "" || agentUriInput.personality === "" || agentUriInput.example === "") {
            return false
        }
        return true
    }
    const upload = async () => {
        setAgentUriInput({
            name: "",
            description: "",
            personality: "",
            example: ""
        })
        setIsURIUploading(true)
        const cid = await storeAgentURI(
            {
                ...agentUriInput
            }
        )
        setIsURIUploading(false)
        const url = 'https://ipfs.io/ipfs/' + cid

        setIsMinting(true)
        await updateURI(1340, url)
        setIsMinting(false)
        toast.success('Successfully updated agent URI!')

    }

    return (
        <div className='h-full px-[64px] py-[20px] flex flex-col'>
            <div className='flex flex-col gap-5'>
                <div className='w-full flex justify-center'>
                    <div>Define your own agent</div>
                </div>
                <div>
                    <label className="block text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input onChange={(e) => {
                        setAgentUriInput({ ...agentUriInput, name: e.target.value })
                    }} className="py-2 px-3 w-full rounded focus:outline-none bg-[#40414f]" id="name" type="text" placeholder="Name" />
                </div>
                <div>
                    <label className="block  text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <input onChange={(e) => {
                        setAgentUriInput({ ...agentUriInput, description: e.target.value })
                    }} className="py-2 px-3 w-full rounded focus:outline-none bg-[#40414f]" id="description" type="text" placeholder="Description" />
                </div>
                <div>
                    <label className="block  text-sm font-bold mb-2" htmlFor="personality">
                        Personality
                    </label>
                    <input onChange={(e) => {
                        setAgentUriInput({ ...agentUriInput, personality: e.target.value })
                    }} className="py-2 px-3 w-full rounded focus:outline-none bg-[#40414f]" id="personality" type="text" placeholder="Personality" />
                </div>
                <div>
                    <label className="block  text-sm font-bold mb-2" htmlFor="example">
                        Example
                    </label>
                    <textarea onChange={(e) => {
                        setAgentUriInput({ ...agentUriInput, example: e.target.value })
                    }} rows={10} className="py-2 px-3 w-full rounded focus:outline-none bg-[#40414f]" id="example" placeholder="Example" />
                </div>
                <div className='flex justify-center'>
                    <button disabled={!validateInput() || isURIUploading || isMinting} onClick={upload} className='flex gap-2 items-center disabled:text-gray-400 enabled:bg-[#19c37d] rounded-xl py-2 px-3'>


                        {(isURIUploading || isMinting) && <div className='h-4 w-4 border-[2px] animate-spin rounded-full border-t-white border-black'></div>}

                        {isURIUploading ? "Uploading" : (isMinting ? "Minting" : "Upload")}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UploadAgentPage