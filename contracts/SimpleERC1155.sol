pragma solidity ^0.8.0;

import "./CustomERC1155.sol";

contract SimpleERC1155 is CustomERC1155 {
    /*
     * Params
     * address owner_ - Address that will become contract owner
     * address lnMarketplaceAddress_ - Decrypt Marketplace proxy address
     * string memory uri_ - Base token URI
     * uint256 royalty_ - Base royaly in basis points (1000 = 10%)
     */
    constructor(
        address owner_,
        address lnMarketplaceAddress_,
        string memory uri_,
        uint256 royalty_
    ) CustomERC1155(owner_, lnMarketplaceAddress_, uri_, royalty_) {}
}
