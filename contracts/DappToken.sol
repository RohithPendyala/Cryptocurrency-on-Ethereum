pragma solidity ^0.4.2;

contract DappToken {
	// constructor
	// set the total num,ber of tokens
	// read the total number of tokens
	uint256 public totalSupply;
	
	function DappToken() public {
		totalSupply = 1000000;

	}
}