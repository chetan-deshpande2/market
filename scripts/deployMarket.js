const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    `Deploying Marketplace contract with the account: ${deployer.address}`
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Market = await ethers.getContractFactory("LNMarketplace");

  const market = await upgrades.deployProxy(
    Market,
    ["LNMarket", "V1", 5, 5, "0x35B22c72cA15ca5dC83A58A10Df0605C88aEC61a", 20],
    { initializer: "initialize", unsafeAllow: ["delegatecall"] }
  );

  await market.deployed();

  console.log("Marketplace deployed to address:", market.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
