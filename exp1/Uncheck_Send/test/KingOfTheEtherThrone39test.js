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
result = await instance.sweepCommission(724707);
result = await instance.claimThrone("G6zmhbVIpuro9",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[3],value:54});

result = await instance.transferOwnership(accounts[5]);
});
it('test 1',async() => {
result = await instance.sweepCommission(484286);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:57});

result = await instance.claimThrone("efLl35dj8kncN0",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[8],value:2});

result = await instance.sweepCommission(688044);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("ws9tkBGLXfjbx",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 3',async() => {
result = await instance.claimThrone("5lxyCGfg71tW",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:96});

result = await instance.sweepCommission(442766);
result = await instance.transferOwnership(accounts[5]);
});
it('test 4',async() => {
result = await instance.sweepCommission(368940);
result = await instance.claimThrone("ZCc2HXaogBJwEz90k",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[4],value:95});

result = await instance.transferOwnership(accounts[3]);
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:31});

result = await instance.claimThrone("6sOnfT9yF0ALDS",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(351028);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[7],value:46});

result = await instance.claimThrone("jlp0nkXMHF1vCyd",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(585573);
});
it('test 7',async() => {
result = await instance.sweepCommission(847681);
await instance.sendTransaction({from:accounts[9],value:58});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("KmdRs2pFTij",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(408541);
await instance.sendTransaction({from:accounts[1],value:55});

result = await instance.claimThrone("pXbKGrE4C97glodPZe5",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 9',async() => {
result = await instance.sweepCommission(319726);
await instance.sendTransaction({from:accounts[8],value:53});

result = await instance.claimThrone("quZCgFrlh0NeI",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 10',async() => {
result = await instance.sweepCommission(807545);
await instance.sendTransaction({from:accounts[5],value:34});

result = await instance.claimThrone("T93rZKiuMPW",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 11',async() => {
result = await instance.claimThrone("SocFDTCne2",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[2],value:20});

result = await instance.sweepCommission(721633);
});
it('test 12',async() => {
result = await instance.claimThrone("52hxG1r3g9z4",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(427126);
await instance.sendTransaction({from:accounts[9],value:50});

result = await instance.transferOwnership(accounts[2]);
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[8],value:98});

result = await instance.sweepCommission(554126);
result = await instance.claimThrone("LUiEchJAGFdQyTV",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 14',async() => {
result = await instance.claimThrone("8HZWMKO3AB9exEcXt6",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[3],value:22});

result = await instance.sweepCommission(943925);
});
it('test 15',async() => {
result = await instance.claimThrone("rPEaR5SxHDIq4zembu",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[1],value:10});

result = await instance.sweepCommission(357358);
result = await instance.transferOwnership(accounts[1]);
});
it('test 16',async() => {
result = await instance.sweepCommission(830688);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("KabMecCxzp9Wr",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[3],value:57});

});
it('test 17',async() => {
result = await instance.claimThrone("Hc56hSjtIQXvdFaBy",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:10});

result = await instance.sweepCommission(646937);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[5],value:14});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(423230);
result = await instance.claimThrone("mUgObLa1oV6M",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[3],value:48});

result = await instance.claimThrone("dnfk71jaE2ZFJ",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(407098);
});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("b0ncIdVtPJUHj6Oxw9XM",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(530242);
await instance.sendTransaction({from:accounts[8],value:50});

});
it('test 21',async() => {
result = await instance.claimThrone("4cVpidCDhru5N3",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:19});

result = await instance.sweepCommission(853167);
result = await instance.transferOwnership(accounts[5]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
result = await instance.sweepCommission(830684);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("10OoxdwkT7Jlpgy",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:65});

});
it('test 23',async() => {
result = await instance.claimThrone("iR7613TtavOKgJIE",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[6],value:98});

result = await instance.sweepCommission(923111);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[3],value:17});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(777565);
result = await instance.claimThrone("4RWT5Prc2O3",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 25',async() => {
result = await instance.claimThrone("n7uQEXFzxmdBPoj",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:84});

result = await instance.sweepCommission(487815);
result = await instance.transferOwnership(accounts[0]);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[5],value:1});

result = await instance.sweepCommission(578642);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("uUnjmb6zGShiD9VgqTF",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[1],value:37});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(1038110);
result = await instance.claimThrone("m3MNrJOVDoye",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 28',async() => {
result = await instance.sweepCommission(661365);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:50});

result = await instance.claimThrone("ndLhajlgzb",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 29',async() => {
result = await instance.claimThrone("EDMzB8s7OyntY2fGI",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(549770);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[9],value:81});

});
});
