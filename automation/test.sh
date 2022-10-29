#!/bin/bash


npx hardhat clean

npx hardhat compile 

nodemon --watch test/marketplace-test.js --exec 'npx hardhat test'