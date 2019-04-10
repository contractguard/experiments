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
await instance.sendTransaction({from:accounts[1],value:22});

result = await instance.sweepCommission(23603);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("LefvjsN19oTtBC87wbg",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("1qcD3BKWEv",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:42});

result = await instance.sweepCommission(30174);
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(467174);
result = await instance.claimThrone("bzLjQuHnRxK4P",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[3],value:33});

});
it('test 3',async() => {
result = await instance.sweepCommission(1014980);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("HlZBaqdpcxDUJi5T1",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:5});

});
it('test 4',async() => {
result = await instance.claimThrone("FWqzcf3rAwXe6NM0",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:53});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(367036);
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("H5TpFlCGLJYxzVn",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:85});

result = await instance.sweepCommission(256573);
});
it('test 6',async() => {
result = await instance.claimThrone("0TJkdsnz3qatGeRmSx",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(207978);
await instance.sendTransaction({from:accounts[9],value:32});

result = await instance.transferOwnership(accounts[4]);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[4],value:35});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(1009872);
result = await instance.claimThrone("4NkhcUnLiCZJMuFH3xs",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[9],value:72});

result = await instance.claimThrone("21oHN4xsEC",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(687422);
});
it('test 9',async() => {
result = await instance.claimThrone("aMylBvw94R1Objfz",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(848197);
await instance.sendTransaction({from:accounts[5],value:5});

result = await instance.transferOwnership(accounts[1]);
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:7});

result = await instance.claimThrone("SmO9ElvpDh2yXj",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(853240);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("sAJ9Fhbjecr0i5uqDW",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:48});

result = await instance.sweepCommission(4333);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[5],value:72});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(75370);
result = await instance.claimThrone("VXWe0TK9urAgHft6qSs",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[5],value:17});

result = await instance.sweepCommission(56403);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("xkyK5VBpMLz",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 14',async() => {
result = await instance.claimThrone("Fva0ZgrpT2bWAhVjIs",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(759752);
await instance.sendTransaction({from:accounts[5],value:37});

result = await instance.transferOwnership(accounts[0]);
});
it('test 15',async() => {
result = await instance.claimThrone("F5S8xsgoLJkOZM",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(982400);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[9],value:36});

});
it('test 16',async() => {
result = await instance.sweepCommission(90674);
result = await instance.claimThrone("SrDVksGBmEn1Y5",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[6],value:94});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[3],value:7});

result = await instance.claimThrone("PMOkeba7tu",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(1038827);
});
it('test 18',async() => {
result = await instance.claimThrone("roREX1HPv3wIGg",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[5],value:84});

result = await instance.sweepCommission(700832);
result = await instance.transferOwnership(accounts[2]);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(1045436);
await instance.sendTransaction({from:accounts[6],value:30});

result = await instance.claimThrone("4B8NgCqlp3RFmGKenf",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 20',async() => {
result = await instance.sweepCommission(645795);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[6],value:53});

result = await instance.claimThrone("DT38pE6uGf",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(483982);
await instance.sendTransaction({from:accounts[5],value:44});

result = await instance.claimThrone("CpxSFJeH2LnPvg",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 22',async() => {
result = await instance.sweepCommission(131187);
result = await instance.claimThrone("4Xt9TWBKUvwls2",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[9],value:24});

});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[6],value:61});

result = await instance.sweepCommission(515365);
result = await instance.claimThrone("Uz3OR8DlmG1a",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(816816);
result = await instance.claimThrone("mqPpZ74AwoDNbgVXa",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:16});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[5],value:32});

result = await instance.claimThrone("Tjsd8O2IESAoDzx",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(391924);
result = await instance.transferOwnership(accounts[2]);
});
it('test 26',async() => {
result = await instance.claimThrone("aQizJWZov0hrkGO3HM",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(540808);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[9],value:4});

});
it('test 27',async() => {
result = await instance.sweepCommission(905048);
result = await instance.claimThrone("RDOE3QA7p6ZH5",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[4],value:31});

result = await instance.transferOwnership(accounts[3]);
});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("Z1FDmK9rHP",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(284245);
await instance.sendTransaction({from:accounts[2],value:8});

});
it('test 29',async() => {
result = await instance.claimThrone("WMDphdfHN2PS",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(778624);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[8],value:13});

});
});
