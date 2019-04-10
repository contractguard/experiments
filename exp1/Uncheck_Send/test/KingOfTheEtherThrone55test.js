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
result = await instance.claimThrone("kfxBKwJV5P9z0",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(292069);
await instance.sendTransaction({from:accounts[8],value:83});

result = await instance.transferOwnership(accounts[3]);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[5],value:40});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(262631);
result = await instance.claimThrone("s1qne9DjMBh5wIaE87z",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[8],value:8});

result = await instance.sweepCommission(943143);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("9Aatx6PfCmgUIXFsKn",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("YsUcdpDRQrqOTtV5Cge",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(171966);
await instance.sendTransaction({from:accounts[1],value:98});

});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("ajZqCYnyFIu4U19",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(306601);
await instance.sendTransaction({from:accounts[9],value:42});

});
it('test 5',async() => {
result = await instance.sweepCommission(614853);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[9],value:3});

result = await instance.claimThrone("nx0biIt67Cy1z35G",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[5],value:48});

result = await instance.claimThrone("9Pyg4trYekQwp",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(607429);
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(700386);
result = await instance.claimThrone("Ki3gd4WC92",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[2],value:25});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[5],value:83});

result = await instance.sweepCommission(694033);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("SXrlh258Jw1iaW4Mt",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[6],value:33});

result = await instance.claimThrone("cwv5T9Ft3fkIqRy",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(387558);
result = await instance.transferOwnership(accounts[2]);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[6],value:4});

result = await instance.sweepCommission(446214);
result = await instance.claimThrone("agtGmpIMORx7iEr0",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(979922);
result = await instance.claimThrone("7o62clvrYQ",{from:accounts[44],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:53});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[6],value:54});

result = await instance.claimThrone("PinNjXfVCLRQTBp",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(1046445);
result = await instance.transferOwnership(accounts[1]);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[4],value:54});

result = await instance.claimThrone("dZJeNwOn86tj3zf9bq",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(290261);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[2],value:38});

result = await instance.sweepCommission(119845);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("Odm3E7WGMrHBT9x",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[2],value:21});

result = await instance.sweepCommission(199119);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("sSyDHB32RnPLNE",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("ZRgNd8luEJ0vyjr",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(176271);
await instance.sendTransaction({from:accounts[4],value:14});

});
it('test 17',async() => {
result = await instance.sweepCommission(650641);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[7],value:40});

result = await instance.claimThrone("E9bSzAKuqdjUp3c",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 18',async() => {
result = await instance.claimThrone("w7SV3zExmrFaRTUObZf1",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(790611);
await instance.sendTransaction({from:accounts[7],value:2});

result = await instance.transferOwnership(accounts[3]);
});
it('test 19',async() => {
result = await instance.claimThrone("2dRaLiPKvboqAI",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(78196);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[7],value:100});

});
it('test 20',async() => {
result = await instance.sweepCommission(186195);
await instance.sendTransaction({from:accounts[8],value:71});

result = await instance.claimThrone("jXnzU5oJ9BIW",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 21',async() => {
result = await instance.claimThrone("Mhg8jX2l6trpciDw",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(826516);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[4],value:2});

});
it('test 22',async() => {
result = await instance.claimThrone("KWFaqpyGBL7AlP",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(646322);
await instance.sendTransaction({from:accounts[8],value:5});

result = await instance.transferOwnership(accounts[4]);
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(322407);
result = await instance.claimThrone("ktQCl9U4O7BPcz6FdSh",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[9],value:82});

});
it('test 24',async() => {
result = await instance.claimThrone("8K0SXHIj3VrcCzZy49",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(257967);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[5],value:23});

});
it('test 25',async() => {
result = await instance.sweepCommission(533699);
await instance.sendTransaction({from:accounts[4],value:1});

result = await instance.claimThrone("pOFrM7qDlng2R0dG",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[5],value:60});

result = await instance.sweepCommission(506370);
result = await instance.claimThrone("UXmg8d0T9R3iSMWO",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[2],value:95});

result = await instance.sweepCommission(1035073);
result = await instance.claimThrone("nz7EYXpAoGa",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[1],value:84});

result = await instance.claimThrone("bGosdkNLCymQhJzKIu",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(896038);
});
it('test 29',async() => {
result = await instance.claimThrone("1skUbNy7rCdlSGeI2PX",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[6],value:77});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(564106);
});
});
