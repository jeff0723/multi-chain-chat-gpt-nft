import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {hashiAddressGnosis, PudgyAddress} from "../utils/constants";
import { ethers, network, run } from "hardhat";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const {deployments, getNamedAccounts} = hre;
	const {deploy} = deployments;

	const {deployer} = await getNamedAccounts();

	const hashverifier = await deploy('HashiVerifier', {
		from: deployer,
		args: [hashiAddressGnosis],
		log: true,
		autoMine: true, // speed up deployment on local network (ganache, hardhat), no effect on live networks
	});

	await run(`verify:verify`, {
		address: hashverifier.address,
		constructorArguments: [hashiAddressGnosis],
	  });
	

	const constructorargsNFT = [PudgyAddress, "", hashverifier.address]

	const chatGPTNFT = await deploy('ChatGPTNFT', {
		from: deployer,
		args: constructorargsNFT, 
		log: true,
		autoMine: true,
	})

	await run(`verify:verify`, {
		address: chatGPTNFT.address,
		constructorArguments: constructorargsNFT,
	  });

};
export default func;
func.tags = ['HashiVerifier'];