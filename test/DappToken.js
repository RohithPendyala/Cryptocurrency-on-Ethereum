var DappToken = artifacts.require("./DappToken.sol");

contract('DappToken', function(accounuts) {

	it('sets the total supply upon deployment', function(){
		return DappToken.deployed().then(function(instance){
			tokanInstance = instance;
			return tokanInstance.totalSupply();
		}).then(function(totalSupply){
			assert.equal(totalSupply.toNumber(), 1000000, "sets the total supply to 1000000");
		});
	});
})