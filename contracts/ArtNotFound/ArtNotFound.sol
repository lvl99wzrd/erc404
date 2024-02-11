//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {ERC404} from "../ERC404.sol";

contract ArtNotFound is Ownable, ERC404 {
  string private baseURI;

  constructor(
    string memory name_,
    string memory symbol_,
    string memory baseURI_,
    uint8 decimals_,
    uint256 maxTotalSupplyERC721_,
    address initialOwner_,
    address initialMintRecipient_
  ) ERC404(name_, symbol_, decimals_) Ownable(initialOwner_) {
    // Do not mint the ERC721s to the initial owner, as it's a waste of gas.
    _setWhitelist(initialMintRecipient_, true);
    _mintERC20(initialMintRecipient_, maxTotalSupplyERC721_ * units, false);
    baseURI = baseURI_;
  }

  function tokenURI(uint256 id_) public view override returns (string memory) {
    return string.concat(baseURI, Strings.toString(id_));
  }

  function setBaseURI(string memory baseURI_) external onlyOwner {
    baseURI = baseURI_;
  }

  function setWhitelist(address account_, bool value_) external onlyOwner {
    _setWhitelist(account_, value_);
  }
}
