const KingOfTheEtherThrone = artifacts.require("KingOfTheEtherThrone");
const Attack = artifacts.require("Attack");

module.exports = function(deployer,network,accounts) {
	deployer.deploy(KingOfTheEtherThrone);
	deployer.deploy(Attack,accounts[0]);
};