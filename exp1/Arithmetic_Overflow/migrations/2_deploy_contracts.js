const BecToken = artifacts.require("BecToken");
module.exports = function (deployer, network, accounts) {
    deployer.deploy(BecToken);
};
