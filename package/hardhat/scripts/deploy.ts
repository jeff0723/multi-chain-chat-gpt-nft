import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {hashiAddressGnosis, PudgyAddress} from "../utils/constants"

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

	const hashverifierAddress = hashverifier.address; 

	const constructorargsNFT = [PudgyAddress, "", hashverifierAddress]

	await deploy('ChatGPTNFT', {
		from: deployer,
		args: constructorargsNFT, 
		log: true,
		autoMine: true,
	})
};
export default func;
func.tags = ['HashiVerifier'];