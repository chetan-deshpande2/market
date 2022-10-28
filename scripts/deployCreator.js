const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    `Deploying Marketplace contract with the account: ${deployer.address}`
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const CreatorV1 = await ethers.getContractFactory("CreatorV1");

  const creatorV1 = await upgrades.deployProxy(CreatorV1);

  await creatorV1.deployed();

  console.log("Marketplace deployed to address:", creatorV1.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
