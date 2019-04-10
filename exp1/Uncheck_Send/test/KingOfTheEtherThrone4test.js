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
result = await instance.claimThrone("zYvE3GPq50",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(607286);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:67});

});
it('test 1',async() => {
result = await instance.claimThrone("5sqCVTFXOr6G09",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(774911);
await instance.sendTransaction({from:accounts[6],value:79});

});
it('test 2',async() => {
result = await instance.sweepCommission(1006294);
await instance.sendTransaction({from:accounts[3],value:80});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("olYWaiGRS3TXCws5",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 3',async() => {
result = await instance.sweepCommission(1044683);
await instance.sendTransaction({from:accounts[5],value:13});

result = await instance.claimThrone("k5SGHf2Vhq8TMKObJ",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[6],value:24});

result = await instance.sweepCommission(98872);
result = await instance.claimThrone("Zow2qDMhdl4uLY",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(351713);
await instance.sendTransaction({from:accounts[5],value:84});

result = await instance.claimThrone("REHr7gihPkCep",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("vDjRby1zSY5",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(644650);
await instance.sendTransaction({from:accounts[1],value:75});

});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(52914);
await instance.sendTransaction({from:accounts[4],value:8});

result = await instance.claimThrone("RI0sDqH3KyNB",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 8',async() => {
result = await instance.claimThrone("PkJ90vRWx3Afqm",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:45});

result = await instance.sweepCommission(408403);
result = await instance.transferOwnership(accounts[1]);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[8],value:98});

result = await instance.claimThrone("7kRq6vrEL0omHW",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(712394);
});
it('test 10',async() => {
result = await instance.claimThrone("Ga0LptZ8Vr1bKx",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(364803);
await instance.sendTransaction({from:accounts[7],value:43});

});
it('test 11',async() => {
result = await instance.sweepCommission(144758);
await instance.sendTransaction({from:accounts[9],value:28});

result = await instance.claimThrone("uzjJVcinSL",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 12',async() => {
result = await instance.sweepCommission(999777);
result = await instance.claimThrone("QqI2aUs76jR1v",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[1],value:36});

result = await instance.transferOwnership(accounts[2]);
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[9],value:1});

result = await instance.claimThrone("0Boj4JA7PUtEHTMK",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(859417);
});
it('test 14',async() => {
result = await instance.sweepCommission(742474);
result = await instance.claimThrone("cloyKz3CIF",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[2],value:59});

result = await instance.transferOwnership(accounts[1]);
});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("U5SfEAmQkjJ4ahsVB91W",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(22248);
await instance.sendTransaction({from:accounts[1],value:41});

});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(151819);
await instance.sendTransaction({from:accounts[2],value:41});

result = await instance.claimThrone("e8j7QERhZcF90atJfxvq",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 17',async() => {
result = await instance.claimThrone("zYyKmRVNZQ",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(599422);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[3],value:94});

});
it('test 18',async() => {
result = await instance.sweepCommission(521788);
await instance.sendTransaction({from:accounts[2],value:45});

result = await instance.claimThrone("zZlhBGytErHCvoiK",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 19',async() => {
result = await instance.claimThrone("re7tREaQO3fbYwJcz",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:56});

result = await instance.sweepCommission(676885);
result = await instance.transferOwnership(accounts[0]);
});
it('test 20',async() => {
result = await instance.sweepCommission(623569);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("MzJ8fkBsm1C",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:46});

});
it('test 21',async() => {
result = await instance.claimThrone("YlPSODXCegKE8b",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(751955);
await instance.sendTransaction({from:accounts[4],value:32});

result = await instance.transferOwnership(accounts[4]);
});
it('test 22',async() => {
result = await instance.sweepCommission(644983);
await instance.sendTransaction({from:accounts[3],value:85});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("5Iwdm2q89KzNpWG",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[2],value:82});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(434303);
result = await instance.claimThrone("2A0evTtbc1Z",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("3qcoKutsDQXpf04",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[4],value:18});

result = await instance.sweepCommission(913785);
});
it('test 25',async() => {
result = await instance.claimThrone("TA5bR9fF0SdBqOE",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:9});

result = await instance.sweepCommission(573861);
result = await instance.transferOwnership(accounts[5]);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[2],value:58});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(986928);
result = await instance.claimThrone("P58xAhMQzOHK4",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[7],value:4});

result = await instance.sweepCommission(65833);
result = await instance.claimThrone("WMCnAVyLow0G4qIlJk",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 28',async() => {
result = await instance.sweepCommission(313443);
result = await instance.claimThrone("Lx9pCfSvV627lUOM",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:95});

result = await instance.transferOwnership(accounts[4]);
});
it('test 29',async() => {
result = await instance.claimThrone("lzfIXOEo6vy5C3mH",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(516909);
await instance.sendTransaction({from:accounts[3],value:100});

});
});
