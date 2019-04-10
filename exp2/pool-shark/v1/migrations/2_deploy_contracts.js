const Ownable = artifacts.require("Ownable");
const SafeMath = artifacts.require("SafeMath");
const Timed = artifacts.require("Timed");
const iFishToken = artifacts.require("iFishToken");
const FishToken = artifacts.require("FishToken");
const iPool = artifacts.require("iPool");
const Pool = artifacts.require("Pool");
const MockFishToken = artifacts.require("TimeMockedFishToken");
const PoolSharkApp = artifacts.require("PoolSharkApp");

module.exports = function(deployer) {
	deployer.deploy(SafeMath);
	//deployer.link(SafeMath, FishToken);
	deployer.deploy(FishToken, 2523874150);
	//deployer.link(FishToken, Pool);
	deployer.deploy(Pool, 'test', 100, 2523874150);
	deployer.deploy(PoolSharkApp);
	
};
