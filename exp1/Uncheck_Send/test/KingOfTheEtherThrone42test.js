const Attack = artifacts.require("Attack");
const KingOfTheEtherThrone = artifacts.require("KingOfTheEtherThrone");
contract('KingOfTheEtherThrone', async (accounts) => {
const owner = accounts[0];
let attack;let instance;
let result;
before('setup contract for each test',async() => {
instance = await KingOfTheEtherThrone.new({from:accounts[0]});
attack = await Attack.new(instance.address,{from:accounts[400]});
});
it('test 0',async() => {
await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[1], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[2], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[4], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[4],value:69});

result = await instance.sweepCommission(277033);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("KblZpuNJjVqy",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 1',async() => {
result = await instance.claimThrone("n2I0zmMWacwSYitD",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:20});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(645382);
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("bORjy7wqFTce",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(629583);
await instance.sendTransaction({from:accounts[4],value:8});

});
it('test 3',async() => {
result = await instance.claimThrone("tIS9saLmZ4RvgKf",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(89582);
await instance.sendTransaction({from:accounts[4],value:86});

});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(601182);
result = await instance.claimThrone("QDy2nxV8w01oudijeOE",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:91});

});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[7],value:11});

result = await instance.sweepCommission(1046344);
result = await instance.claimThrone("szS4DNxpMAYkB6ljOUX",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[4],value:68});

result = await instance.sweepCommission(392166);
result = await instance.claimThrone("YvFkz68NaQy4",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 7',async() => {
result = await instance.claimThrone("av8r67F4CBlubN",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(399250);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:83});

});
it('test 8',async() => {
result = await instance.sweepCommission(460735);
result = await instance.claimThrone("MjKIlDY92OcvS4fy",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[4],value:82});

result = await instance.transferOwnership(accounts[5]);
});
it('test 9',async() => {
result = await instance.claimThrone("Ko4msbPTnB7jrapG",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(541810);
await instance.sendTransaction({from:accounts[1],value:42});

});
it('test 10',async() => {
result = await instance.sweepCommission(1014495);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[4],value:74});

result = await instance.claimThrone("NQdErecvyutVlof",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 11',async() => {
result = await instance.claimThrone("A7QylCHVaBsi",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(634627);
await instance.sendTransaction({from:accounts[5],value:11});

});
it('test 12',async() => {
result = await instance.claimThrone("jd9yvba1pPC",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(390045);
await instance.sendTransaction({from:accounts[6],value:64});

result = await instance.transferOwnership(accounts[4]);
});
it('test 13',async() => {
result = await instance.sweepCommission(289836);
result = await instance.claimThrone("e0rU6578EgzBvOQcSy",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[9],value:68});

result = await instance.transferOwnership(accounts[3]);
});
it('test 14',async() => {
result = await instance.sweepCommission(466041);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("cujPwQ78nRJY",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:12});

});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("7sMNjv8CUaPwBKiJbzXd",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(38650);
await instance.sendTransaction({from:accounts[7],value:89});

});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[7],value:94});

result = await instance.sweepCommission(115739);
result = await instance.claimThrone("4otHCEI52pzckVXj8R7T",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[4],value:97});

result = await instance.claimThrone("e8uovLq9QYfSP5EAz",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(448955);
});
it('test 18',async() => {
result = await instance.sweepCommission(751528);
result = await instance.claimThrone("U4TIHNaA8B2XZL",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:76});

result = await instance.transferOwnership(accounts[4]);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[5],value:85});

result = await instance.claimThrone("ab9DSlK7dPzcV",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(133200);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[7],value:88});

result = await instance.sweepCommission(837057);
result = await instance.claimThrone("PYjTIrSmi2N0xXa",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 21',async() => {
result = await instance.sweepCommission(982602);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:98});

result = await instance.claimThrone("xTtL9eWAQn2Vf8PhgGm",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(517209);
result = await instance.claimThrone("5iOJl6Vsyp",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[4],value:91});

});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("KmndSvCExeJ5cD",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(592961);
await instance.sendTransaction({from:accounts[3],value:6});

});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:56});

result = await instance.claimThrone("dfuNLBnUsVEJSYPy0",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(477698);
});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(88734);
await instance.sendTransaction({from:accounts[2],value:22});

result = await instance.claimThrone("hkP7DT9rzJgU",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[6],value:73});

result = await instance.claimThrone("KLChV9jRBMJ7xNYzgW",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(327993);
});
it('test 27',async() => {
result = await instance.sweepCommission(555203);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[1],value:36});

result = await instance.claimThrone("QNGuwJZqlxhgHcByp",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("uDCXcxbhsJ6y5oROBz",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(650316);
await instance.sendTransaction({from:accounts[7],value:87});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[2],value:88});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("H3VdXDJQbE",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(357688);
});
});
