const Wallet = artifacts.require("Wallet");
const Attack = artifacts.require("Attack");
const WalletLibrary = artifacts.require("WalletLibrary");

module.exports = function(deployer,network,accounts) {
	deployer.deploy(WalletLibrary);
	deployer.deploy(Wallet,accounts[0]);
	deployer.deploy(Attack,accounts[0]);
};