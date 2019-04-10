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
result = await instance.claimThrone("y2lFBNqxizSUfX",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(611614);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[6],value:31});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[8],value:21});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(717400);
result = await instance.claimThrone("6PpRFQxzAUXuNov",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[3],value:100});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(114034);
result = await instance.claimThrone("WrK7CRu1bI",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("0GB14EraytlD9u",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(95147);
await instance.sendTransaction({from:accounts[7],value:24});

});
it('test 4',async() => {
result = await instance.claimThrone("Zd5VtRhfEFDa4S",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(358348);
await instance.sendTransaction({from:accounts[1],value:86});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[9],value:14});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("A7UL2QBwv3k6FduHJ",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(831283);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[4],value:10});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(1040534);
result = await instance.claimThrone("pV1O8ldvT7GUz",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[8],value:87});

result = await instance.sweepCommission(707938);
result = await instance.claimThrone("ENPVwCYqZlx6ejX",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(569590);
await instance.sendTransaction({from:accounts[7],value:90});

result = await instance.claimThrone("kOu1r2iWZMlD",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 9',async() => {
result = await instance.sweepCommission(358532);
result = await instance.claimThrone("fQyRwXYImH50O",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[8],value:64});

});
it('test 10',async() => {
result = await instance.claimThrone("kvB0jf9pI3R",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(776915);
await instance.sendTransaction({from:accounts[5],value:35});

result = await instance.transferOwnership(accounts[0]);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[1],value:80});

result = await instance.claimThrone("5TQcksWeDUFY",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(188021);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[2],value:91});

result = await instance.claimThrone("8Klkh91JUVsqSG",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(613535);
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(526740);
result = await instance.claimThrone("dpWAVL2FNtkyxB5h",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[3],value:59});

});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("cOLHawn5dJSXxf4r",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(170074);
await instance.sendTransaction({from:accounts[1],value:35});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[3],value:37});

result = await instance.claimThrone("MX5rB0NAJD7",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(238358);
});
it('test 16',async() => {
result = await instance.sweepCommission(665026);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("zLuVdCsxFA25h3qN",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[4],value:83});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[7],value:38});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(379364);
result = await instance.claimThrone("JFVflWp6Hwr3eiTy8",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[5],value:94});

result = await instance.claimThrone("c7hLfKbnkwOAtgp",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(485667);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("MNftgTneSPi6G4HL0c",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[2],value:56});

result = await instance.sweepCommission(1020380);
});
it('test 20',async() => {
result = await instance.sweepCommission(851255);
result = await instance.claimThrone("3Md70JKWkri2HCQsOa1",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[6],value:72});

});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 21',async() => {
result = await instance.claimThrone("Jyt6N3BHmE4i79",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[5],value:51});

result = await instance.sweepCommission(324675);
result = await instance.transferOwnership(accounts[0]);
});
it('test 22',async() => {
result = await instance.claimThrone("3n8lIreBziLc9XpTJ",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(272045);
await instance.sendTransaction({from:accounts[2],value:50});

result = await instance.transferOwnership(accounts[4]);
});
it('test 23',async() => {
result = await instance.claimThrone("unWpSj7Ezyi",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[8],value:14});

result = await instance.sweepCommission(459656);
result = await instance.transferOwnership(accounts[3]);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[1],value:35});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("Zzq4X0DjhIMQ8aOpFvl",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(313694);
});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("HbMe0ldApxtyEGjh",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:41});

result = await instance.sweepCommission(286684);
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[4],value:53});

result = await instance.sweepCommission(260049);
result = await instance.claimThrone("T0UiwphvMgj",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[9],value:91});

result = await instance.claimThrone("SztmHZJ9Ch2B",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(913283);
});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("0ESA9eiqy8z3GpZHjlJ",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(119882);
await instance.sendTransaction({from:accounts[8],value:39});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[5],value:13});

result = await instance.sweepCommission(197187);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("FV8Hh4csIRql1NkpQ",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(4))});
});
});
