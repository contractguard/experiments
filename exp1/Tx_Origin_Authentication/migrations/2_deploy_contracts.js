const Phishable = artifacts.require("Phishable");
const Attack = artifacts.require("Attack");

module.exports = function (deployer, network, accounts) {
    deployer.deploy(Phishable,accounts[0]);
    deployer.deploy(Attack,accounts[1],accounts[2]);
};
