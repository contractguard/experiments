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
await instance.sendTransaction({from:accounts[8],value:98});

result = await instance.claimThrone("qeboMtPBrY02xL5cJih",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(858635);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[9],value:97});

result = await instance.sweepCommission(78814);
result = await instance.claimThrone("wmAOeq34UJoH8",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 2',async() => {
result = await instance.claimThrone("zqWMRc7fEjQpaJxtG",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(700605);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:56});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[5],value:7});

result = await instance.claimThrone("6yUavGmWj7EHzCQSbI5",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(558583);
result = await instance.transferOwnership(accounts[0]);
});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(222742);
result = await instance.claimThrone("gtDsHyGa0WlPO6fUn",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:82});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[9],value:33});

result = await instance.sweepCommission(698245);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("AWqBgPwX82FSl",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:86});

result = await instance.claimThrone("MBGLAbd4qFsjW",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(499201);
});
it('test 7',async() => {
result = await instance.claimThrone("xeCagXT0nWZd12Nv6pL",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:53});

result = await instance.sweepCommission(545826);
result = await instance.transferOwnership(accounts[4]);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[6],value:73});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("aid3MpEChB2Au",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(623082);
});
it('test 9',async() => {
result = await instance.claimThrone("LoVCEcZdMUHWxSm",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:51});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(842993);
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(328365);
await instance.sendTransaction({from:accounts[2],value:84});

result = await instance.claimThrone("9qMjLgT8N5",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 11',async() => {
result = await instance.claimThrone("ynZPDplJaS9siEbo2QAd",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[5],value:30});

result = await instance.sweepCommission(523856);
result = await instance.transferOwnership(accounts[2]);
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[4],value:96});

result = await instance.sweepCommission(874584);
result = await instance.claimThrone("M3BgD6j5YFczPO9",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[2],value:64});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("dLg4jSIpZUrqcN29Vto3",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(105741);
});
it('test 14',async() => {
result = await instance.claimThrone("5uwVXCdM9JATe3gsUGWi",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(608504);
await instance.sendTransaction({from:accounts[3],value:20});

});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[4],value:82});

result = await instance.claimThrone("kT2YRogSWVA7hB",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(305853);
});
it('test 16',async() => {
result = await instance.claimThrone("UCPit02kcbvuBXF",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[6],value:5});

result = await instance.sweepCommission(499576);
result = await instance.transferOwnership(accounts[2]);
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("xkJy9gX3RHN0bIvEMU",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(344901);
await instance.sendTransaction({from:accounts[5],value:63});

});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("NOl6j32nJca1mPEbv",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[3],value:16});

result = await instance.sweepCommission(830133);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("brvPxNqn7FCS3",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[2],value:10});

result = await instance.sweepCommission(343504);
});
it('test 20',async() => {
result = await instance.sweepCommission(574575);
await instance.sendTransaction({from:accounts[8],value:84});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("g1ulzeR3jqNBtKAdmcI",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 21',async() => {
result = await instance.sweepCommission(269036);
result = await instance.claimThrone("9wfqba4CkuYKDV0xW",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[4],value:92});

result = await instance.transferOwnership(accounts[0]);
});
it('test 22',async() => {
result = await instance.claimThrone("9MnvcLVEy0G3eF",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[3],value:68});

result = await instance.sweepCommission(425879);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[6],value:20});

result = await instance.sweepCommission(1000820);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("UQi9OTqd3RbLYz0XvS",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 24',async() => {
result = await instance.sweepCommission(897980);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[5],value:27});

result = await instance.claimThrone("n6bxHkdZRr",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 25',async() => {
result = await instance.sweepCommission(975621);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("zYMAhJ0snfjevtVQr",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:95});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[4],value:33});

result = await instance.claimThrone("9zdBTRxa46uwH",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(733235);
result = await instance.transferOwnership(accounts[4]);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[1],value:97});

result = await instance.claimThrone("SzQs2tl3F9K",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(975944);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[4],value:13});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("U2S1apjcd6thvf8VOrm",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(411184);
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[4],value:82});

result = await instance.sweepCommission(117427);
result = await instance.claimThrone("kyY1RhmNJpM",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(5))});
});
});
