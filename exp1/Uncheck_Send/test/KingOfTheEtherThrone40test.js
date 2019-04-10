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
result = await instance.sweepCommission(228755);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("pJFdsDPE9WvoS7r0tf",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[8],value:20});

});
it('test 1',async() => {
result = await instance.sweepCommission(635208);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("2PQnhbI0XYiuk7yo83",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[9],value:32});

});
it('test 2',async() => {
result = await instance.claimThrone("8FyqKJPWM2sUvOfCeZ",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(70580);
await instance.sendTransaction({from:accounts[7],value:82});

});
it('test 3',async() => {
result = await instance.sweepCommission(905327);
await instance.sendTransaction({from:accounts[7],value:44});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("hp5zdGguQNM0PJCR",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 4',async() => {
result = await instance.claimThrone("she5JRHgXf80V",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[6],value:66});

result = await instance.sweepCommission(173004);
result = await instance.transferOwnership(accounts[4]);
});
it('test 5',async() => {
result = await instance.claimThrone("spOxtQMlqXrc1TfkSVnL",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(209692);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[9],value:84});

});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[8],value:89});

result = await instance.claimThrone("9txd3PnRlvXQ",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(943902);
});
it('test 7',async() => {
result = await instance.sweepCommission(406710);
await instance.sendTransaction({from:accounts[4],value:9});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("SkfPtTulHCK",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(798690);
result = await instance.claimThrone("Ap68Yv3Le7hETw",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:14});

});
it('test 9',async() => {
result = await instance.sweepCommission(268039);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[5],value:100});

result = await instance.claimThrone("ESBmhRwqDJHd",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[9],value:75});

result = await instance.sweepCommission(663188);
result = await instance.claimThrone("r83OmkMjdoNfy0",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 11',async() => {
result = await instance.sweepCommission(464614);
result = await instance.claimThrone("yzpnReYWOHd",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[8],value:78});

result = await instance.transferOwnership(accounts[5]);
});
it('test 12',async() => {
result = await instance.claimThrone("EY5zARZQXHcfvl4D6qL",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:87});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(395368);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[1],value:92});

result = await instance.claimThrone("OmP3KF18ALM",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(165003);
result = await instance.transferOwnership(accounts[0]);
});
it('test 14',async() => {
result = await instance.sweepCommission(30543);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("9j3D61GKiwUzbXea4H",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:18});

});
it('test 15',async() => {
result = await instance.sweepCommission(957565);
await instance.sendTransaction({from:accounts[8],value:88});

result = await instance.claimThrone("q5aXbYlWPZy0iOVfRx92",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 16',async() => {
result = await instance.claimThrone("kYI1v0EXMSZi",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(839680);
await instance.sendTransaction({from:accounts[8],value:91});

result = await instance.transferOwnership(accounts[3]);
});
it('test 17',async() => {
result = await instance.sweepCommission(696624);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("PKXR0CgaJTpjqm6O9",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:41});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[3],value:61});

result = await instance.sweepCommission(353001);
result = await instance.claimThrone("eZPDbx8kzHN",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[8],value:27});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(222259);
result = await instance.claimThrone("hgm31QjfbavoYSd7Nxc",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(883245);
result = await instance.claimThrone("0s9YCBMqDf1g8KtieFAL",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:33});

});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[6],value:96});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(280135);
result = await instance.claimThrone("iAVNCZMQPm2",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 22',async() => {
result = await instance.claimThrone("cM9m6WfbgVCGIdvjxuA",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(897705);
await instance.sendTransaction({from:accounts[8],value:84});

result = await instance.transferOwnership(accounts[3]);
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:82});

result = await instance.claimThrone("7XC96kWjQsiJA",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(882430);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[4],value:65});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(56067);
result = await instance.claimThrone("XyAUBQIPe6shjnMY5uKf",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 25',async() => {
result = await instance.sweepCommission(349215);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("sMmlcz0T7kriOyjDtC5f",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:66});

});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(98786);
result = await instance.claimThrone("QPib5AdFH0JK",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:72});

});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[1],value:72});

result = await instance.claimThrone("qfvE15wNPQkMnTR",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(806896);
});
it('test 28',async() => {
result = await instance.claimThrone("TPxK0bf1lAQkij",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(171332);
await instance.sendTransaction({from:accounts[1],value:58});

result = await instance.transferOwnership(accounts[5]);
});
it('test 29',async() => {
result = await instance.claimThrone("oVYKxwsbAtiqHgmc",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(578337);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[6],value:2});

});
});
