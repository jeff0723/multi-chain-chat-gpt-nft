import { CHATGPT_NFT_ABI } from "@/constant/abis";
import { CHATGPT_NFT_ADDRESS } from "@/constant/addresses";
import { useEffect } from "react";
import { useContractRead } from "wagmi";
import { useAppDispatch } from "./hook";
import { updateCurrentAgent } from "./application";


type Props = {};

const ApplicationUpdater = (props: Props) => {
    const dispatch = useAppDispatch()
    const { data, isError, isLoading } = useContractRead({
        address: CHATGPT_NFT_ADDRESS,
        abi: CHATGPT_NFT_ABI,
        functionName: 'agentURI',
        args: [1340],
    })
    useEffect(() => {
        if (data) {
            const agentURI = data as string
            fetch(agentURI).then((res) => res.json()).then((data) => {
                dispatch(updateCurrentAgent({
                    currentAgent: data
                }))
            })
        }

    }, [data])
    return null;
};

export default ApplicationUpdater;