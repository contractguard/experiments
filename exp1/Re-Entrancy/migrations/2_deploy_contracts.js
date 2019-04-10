const DaoChallenge = artifacts.require("DaoChallenge");
const Attack = artifacts.require("Attack");

module.exports = function(deployer,network,accounts) {
	deployer.deploy(DaoChallenge);
	deployer.deploy(Attack,accounts[0]);
	// 	-----编码视图---------------
	// 1 找到构造函数参数 :
	// Arg [0] : 454f530000000000000000000000000000000000000000000000000000000000 --bytes32

};