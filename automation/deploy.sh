#!/bin/bash


npx hardhat clean

npx hardhat compile 

npx hardhat run scripts/deployTokens.js --network localhost

npx hardhat run scripts/deployMarket.js --network localhost

npx hardhat run scripts/deployCreator.js --network localhost