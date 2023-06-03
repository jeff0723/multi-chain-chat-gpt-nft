import { Contract } from "ethers"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { ethers, getNamedAccounts, getChainId } from "hardhat";

export const main = async () => {
    const { deployer } = await getNamedAccounts()
    console.log(deployer)
    const signer = await ethers.getSigner(deployer);
    // const hashiVerifier = await ethers.getContractAt('HashiVerifier', '')
    console.log('hre signer:', signer)
}

main().then(() => process.exit(0)).catch(error => {console.log(error) })