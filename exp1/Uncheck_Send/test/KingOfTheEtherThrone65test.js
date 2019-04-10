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
result = await instance.sweepCommission(1005743);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("XeEFNdvVam5MfoTuB",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:85});

});
it('test 1',async() => {
result = await instance.claimThrone("m3xNiG7YZ5UdzC",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[5],value:56});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(436390);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[8],value:99});

result = await instance.claimThrone("q4HQmf2B8wAW7ont",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(356505);
});
it('test 3',async() => {
result = await instance.sweepCommission(541304);
await instance.sendTransaction({from:accounts[3],value:17});

result = await instance.claimThrone("gGRzLVYZA0wCJ5i",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 4',async() => {
result = await instance.sweepCommission(645782);
await instance.sendTransaction({from:accounts[4],value:25});

result = await instance.claimThrone("Yx6ZfJgL3R4C",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 5',async() => {
result = await instance.sweepCommission(492111);
await instance.sendTransaction({from:accounts[3],value:89});

result = await instance.claimThrone("VCsv058LQfePyhlTG3c",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 6',async() => {
result = await instance.claimThrone("SOV61zxojv9uWXn4EIB",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(159546);
await instance.sendTransaction({from:accounts[9],value:89});

});
it('test 7',async() => {
result = await instance.claimThrone("kjUpbBfLOQ",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:48});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(998199);
});
it('test 8',async() => {
result = await instance.sweepCommission(938072);
result = await instance.claimThrone("DgPlTt0uHo",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[8],value:91});

result = await instance.transferOwnership(accounts[5]);
});
it('test 9',async() => {
result = await instance.sweepCommission(141162);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[4],value:95});

result = await instance.claimThrone("cMjnR59WPuOGC",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 10',async() => {
result = await instance.sweepCommission(245617);
await instance.sendTransaction({from:accounts[1],value:32});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("YpI5otjKe6iZ",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[7],value:59});

result = await instance.sweepCommission(867718);
result = await instance.claimThrone("S1aOPVUQtCGlIfs6xwcD",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 12',async() => {
result = await instance.sweepCommission(135687);
result = await instance.claimThrone("UK4ABr2ToFmjN316LeM",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[1],value:10});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[2],value:51});

result = await instance.claimThrone("hSRevyjHwxf3cd",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(709556);
result = await instance.transferOwnership(accounts[1]);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[1],value:35});

result = await instance.sweepCommission(342967);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("Cda05YA1OQ",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[1],value:37});

result = await instance.claimThrone("C8Vg0ipMv4A",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(53197);
result = await instance.transferOwnership(accounts[0]);
});
it('test 16',async() => {
result = await instance.sweepCommission(637308);
result = await instance.claimThrone("rzREnVbUQ9mSgj8txTcy",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[1],value:27});

});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("kgACbjxlGV0WhSw4zEH",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:13});

result = await instance.sweepCommission(951095);
});
it('test 18',async() => {
result = await instance.claimThrone("SuJWFBTNdR47s3U",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(437041);
await instance.sendTransaction({from:accounts[3],value:21});

result = await instance.transferOwnership(accounts[0]);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(638522);
result = await instance.claimThrone("3nQ9WIF2UZyV",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[5],value:53});

});
it('test 20',async() => {
result = await instance.sweepCommission(15819);
await instance.sendTransaction({from:accounts[4],value:33});

result = await instance.claimThrone("xNqKeL7HSldjBnXtWU",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(775498);
result = await instance.claimThrone("ocmhIU4AJwLMPWnD",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[4],value:66});

});
it('test 22',async() => {
result = await instance.claimThrone("H8ax9tMjeY7R40ENuA",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:95});

result = await instance.sweepCommission(437993);
result = await instance.transferOwnership(accounts[0]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[6],value:38});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(936343);
result = await instance.claimThrone("DYdCGwK8aoHIrVP",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 24',async() => {
result = await instance.claimThrone("Hr3vmjEYkdeWg",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(898113);
await instance.sendTransaction({from:accounts[5],value:4});

});
it('test 25',async() => {
result = await instance.sweepCommission(925676);
result = await instance.claimThrone("462VpfSanEY",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[8],value:11});

result = await instance.transferOwnership(accounts[3]);
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("8Pu1zFXrnMGDocf",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(182731);
await instance.sendTransaction({from:accounts[7],value:23});

});
it('test 27',async() => {
result = await instance.sweepCommission(152451);
result = await instance.claimThrone("4La6weq2XOVhIZld8",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:13});

result = await instance.transferOwnership(accounts[5]);
});
it('test 28',async() => {
result = await instance.sweepCommission(446666);
await instance.sendTransaction({from:accounts[1],value:14});

result = await instance.claimThrone("vp4cruYXdnfSEC",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[3],value:64});

result = await instance.sweepCommission(192354);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("0A93QVjbmvtdOMg8eon",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(2))});
});
});
