const hre = require("hardhat");

async function main() {
  const creator = "0x35B22c72cA15ca5dC83A58A10Df0605C88aEC61a";
  const SimpleERC721Deployer = await hre.ethers.getContractFactory(
    "SimpleERC721Deployer"
  );
  const simpleERC721Deployer = await SimpleERC721Deployer.deploy(creator);

  const ExtendedERC721Deployer = await hre.ethers.getContractFactory(
    "ExtendedERC721Deployer"
  );
  const extendedERC721Deployer = await ExtendedERC721Deployer.deploy(creator);

  const ExtendedERC1155Deployer = await hre.ethers.getContractFactory(
    "ExtendedERC1155Deployer"
  );
  const extendedERC1155Deployer = await ExtendedERC1155Deployer.deploy(creator);

  const SimpleERC1155Deployer = await hre.ethers.getContractFactory(
    "SimpleERC1155Deployer"
  );
  const simpleERC1155Deployer = await SimpleERC1155Deployer.deploy(creator);

  const TestERC20 = await hre.ethers.getContractFactory("TestERC20");
  const testERC20 = await TestERC20.deploy(10000000000);

  console.log(
    `SimpleERC721Deployer Address deployed to ${simpleERC721Deployer.address}`
  );
  console.log(
    `ExtendedERC721Deployer Address deployed to  ${extendedERC721Deployer.address}`
  );
  console.log(
    `SimpleERC1155Deployer Address deployed to  ${simpleERC1155Deployer.address}`
  );
  console.log(
    `ExtendedERC1155Deployer Address deployed to  ${simpleERC1155Deployer.address}`
  );
  console.log(`TestERC20 Address deployed to  ${testERC20.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
