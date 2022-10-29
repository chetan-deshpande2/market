const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    `Deploying Marketplace contract with the account: ${deployer.address}`
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  CreatorV1 = await ethers.getContractFactory("CreatorV1");

  nftCreator = await upgrades.deployProxy(CreatorV1, { kind: "uups" });

  await nftCreator.deployed();

  console.log("Marketplace deployed to address:", nftCreator.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
