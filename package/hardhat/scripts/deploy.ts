import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {parseEther} from 'ethers/lib/utils';
import {hashiAddressGnosis, PudgyAddress} from "../../utils/constants.js";	

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

	const deploymentaddress = hashverifier

	const constructorargsNFT = [PudgyAddress, ]

	string memory _originalBaseURI,
	address _hashiVerifier

  await deploy('ChatGPTNFT', {
    from: deployer,
    args: [constructorargsNFT], 
    logs: true,
    autoMine: true,
  })
};
export default func;
func.tags = ['HashiVerifier'];