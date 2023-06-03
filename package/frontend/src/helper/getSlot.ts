import { ethers } from "ethers"


export const ghoulsSlotOf = (tokenId: number) => ethers.utils.keccak256(
    ethers.utils.solidityPack(
        ['uint256', 'uint256'],
        [tokenId, 103]
    )
)
