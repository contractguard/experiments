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
await instance.sendTransaction({from:accounts[9],value:95});

result = await instance.sweepCommission(152036);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("TtgOC3pVsmIXh5cArQ",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 1',async() => {
result = await instance.claimThrone("YXhsU1duBJobLcvl",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(708932);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[3],value:71});

});
it('test 2',async() => {
result = await instance.sweepCommission(1047187);
result = await instance.claimThrone("AgGEvs42zHFX5QtBYWno",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[3],value:68});

});
it('test 3',async() => {
result = await instance.claimThrone("XWRiQ9ZvYeM6f",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(975884);
await instance.sendTransaction({from:accounts[9],value:88});

result = await instance.transferOwnership(accounts[0]);
});
it('test 4',async() => {
result = await instance.claimThrone("9nXpYgvRy0TofAD7",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(809367);
await instance.sendTransaction({from:accounts[1],value:17});

result = await instance.transferOwnership(accounts[4]);
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[5],value:53});

result = await instance.sweepCommission(459332);
result = await instance.claimThrone("L1QGAdWlxmnsEqb",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("uFgEjtU0Jx6aCm4YKp",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(646126);
await instance.sendTransaction({from:accounts[4],value:31});

});
it('test 7',async() => {
result = await instance.claimThrone("TY0DyphEG8zJaw2bsCf",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(119427);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[5],value:17});

});
it('test 8',async() => {
result = await instance.claimThrone("3RsQ0IF4oeZ9izxdT",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(656071);
await instance.sendTransaction({from:accounts[5],value:2});

result = await instance.transferOwnership(accounts[4]);
});
it('test 9',async() => {
result = await instance.claimThrone("eUmWE06fJcpNsvIrDS",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:62});

result = await instance.sweepCommission(879738);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[4],value:66});

result = await instance.claimThrone("iM8GkuIeWFOyw0",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(964517);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(826764);
await instance.sendTransaction({from:accounts[5],value:72});

result = await instance.claimThrone("C0lvMeJrb8S2ULjEI",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[1],value:81});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("JL1y4hQcdS",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(175212);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[5],value:72});

result = await instance.claimThrone("mO4EuD35n7BLbVKxA",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(112720);
result = await instance.transferOwnership(accounts[3]);
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[2],value:88});

result = await instance.sweepCommission(166549);
result = await instance.claimThrone("xZXRQVysnEpaY62Kkfhc",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(125578);
await instance.sendTransaction({from:accounts[8],value:94});

result = await instance.claimThrone("6IWFM1rK5z4JDH9doLVc",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[4],value:18});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(973434);
result = await instance.claimThrone("gLYQ9kBCTxfdXU2ZO5",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[7],value:100});

result = await instance.claimThrone("oRMUEJaL49",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(133395);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[4],value:57});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("P1KAC3XmkUedzLb",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(484864);
});
it('test 19',async() => {
result = await instance.sweepCommission(222249);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("ANuGUoKMDWrB8Zp",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:11});

});
it('test 20',async() => {
result = await instance.claimThrone("VKCXpOjrw75fSvZPdg",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(784108);
await instance.sendTransaction({from:accounts[3],value:15});

result = await instance.transferOwnership(accounts[1]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 21',async() => {
result = await instance.claimThrone("xVRFhzl29cDEaGBvSZ8",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(563233);
await instance.sendTransaction({from:accounts[1],value:2});

});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(638750);
result = await instance.claimThrone("wjob6ZA0KlQC",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[5],value:92});

});
it('test 23',async() => {
result = await instance.sweepCommission(372786);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("Q3A2K4gOVqNnf9i",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:100});

});
it('test 24',async() => {
result = await instance.sweepCommission(275337);
await instance.sendTransaction({from:accounts[6],value:32});

result = await instance.claimThrone("LeYqWVz6TovfEm4x0Au1",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[4],value:79});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(999556);
result = await instance.claimThrone("VSDW4TOuJM",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 26',async() => {
result = await instance.sweepCommission(94778);
await instance.sendTransaction({from:accounts[9],value:64});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("Rvfr5bnCeTIqkEytXA",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(524251);
await instance.sendTransaction({from:accounts[1],value:67});

result = await instance.claimThrone("6CqlUX5OVGZvtpF",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[3],value:85});

result = await instance.claimThrone("4lXTosRIdEb5xSA9Cpu",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(691912);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[3],value:43});

result = await instance.claimThrone("0m5YRXACtz7x",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(468767);
result = await instance.transferOwnership(accounts[4]);
});
});
