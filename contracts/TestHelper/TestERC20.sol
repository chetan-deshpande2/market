// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestERC20 is ERC20 {
    constructor(uint256 _initialSupply) ERC20("ICO Token", "ICT") {
        _mint(msg.sender, _initialSupply * (10**18));
    }
}
