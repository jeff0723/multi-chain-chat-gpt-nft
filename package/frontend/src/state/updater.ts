import { CHATGPT_NFT_ABI } from "@/constant/abis";
import { CHATGPT_NFT_ADDRESS } from "@/constant/addresses";
import { useContractRead } from "wagmi";


type Props = {};

const ApplicationUpdater = (props: Props) => {
    const { data, isError, isLoading } = useContractRead({
        address: CHATGPT_NFT_ADDRESS,
        abi: CHATGPT_NFT_ABI,
        functionName: 'agentURI',
        args: [1340],
    })
    console.log(data)
    return null;
};

export default ApplicationUpdater;
