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
await instance.sendTransaction({from:accounts[3],value:18});

result = await instance.sweepCommission(176927);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("Ey4P3nNH7GlRgMFA",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[8],value:95});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(348071);
result = await instance.claimThrone("rquazd4TPYcEAxbS103",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[4],value:47});

result = await instance.claimThrone("KJWPr7NTqxAzuylin",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(466353);
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[9],value:87});

result = await instance.sweepCommission(785918);
result = await instance.claimThrone("Ga926QJA5BgMIr4m8",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[9],value:51});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("FMc6rBQfdh3E",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(94626);
});
it('test 5',async() => {
result = await instance.sweepCommission(882020);
result = await instance.claimThrone("4pemP1cjvKo6",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[6],value:29});

result = await instance.transferOwnership(accounts[1]);
});
it('test 6',async() => {
result = await instance.sweepCommission(659682);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("bNfAZd5Fkz7jaV4",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:36});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[3],value:58});

result = await instance.claimThrone("fJl1OzgmFnWwyt",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(574477);
result = await instance.transferOwnership(accounts[2]);
});
it('test 8',async() => {
result = await instance.claimThrone("3mezSxh5JTo",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:49});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(1526);
});
it('test 9',async() => {
result = await instance.claimThrone("zXWvMQomx7rBb4I",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(927377);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[2],value:56});

});
it('test 10',async() => {
result = await instance.claimThrone("UC9QsmrywPpV",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[1],value:91});

result = await instance.sweepCommission(64380);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:77});

result = await instance.sweepCommission(834303);
result = await instance.claimThrone("FYg2neMywZx3",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("kBUagFmALdGciCN7",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(465477);
await instance.sendTransaction({from:accounts[3],value:88});

});
it('test 13',async() => {
result = await instance.claimThrone("vHpwoCz4kFrcgm",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[9],value:88});

result = await instance.sweepCommission(40861);
result = await instance.transferOwnership(accounts[0]);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[7],value:31});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(667269);
result = await instance.claimThrone("ACybOD71cTKis",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 15',async() => {
result = await instance.sweepCommission(534016);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[2],value:96});

result = await instance.claimThrone("RV7BXNQld2DSg",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[5],value:5});

result = await instance.sweepCommission(177331);
result = await instance.claimThrone("eyaj8q640VOTMfwsE",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 17',async() => {
result = await instance.sweepCommission(861007);
await instance.sendTransaction({from:accounts[4],value:53});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("An7cd1QuNHpaR2Tez3X",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[4],value:42});

result = await instance.claimThrone("MHEDUswJVQmSbF",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(217044);
});
it('test 19',async() => {
result = await instance.claimThrone("MFyoiEs4lUh",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(975133);
await instance.sendTransaction({from:accounts[4],value:80});

result = await instance.transferOwnership(accounts[1]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 20',async() => {
result = await instance.sweepCommission(213890);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("fowvCXt4ILWDdzUATR",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[8],value:97});

});
it('test 21',async() => {
result = await instance.claimThrone("b6ExVJBloKOm1",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(624250);
await instance.sendTransaction({from:accounts[6],value:7});

result = await instance.transferOwnership(accounts[2]);
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(735761);
result = await instance.claimThrone("0AJojZzPTbxqLmlvR",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:8});

});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[7],value:22});

result = await instance.claimThrone("oHrvsKuFxYMWfC",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(409071);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[1],value:8});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(470208);
result = await instance.claimThrone("YkJfGsynEQDFhrO",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 25',async() => {
result = await instance.claimThrone("msVpqn8x63O",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(707476);
await instance.sendTransaction({from:accounts[3],value:49});

result = await instance.transferOwnership(accounts[0]);
});
it('test 26',async() => {
result = await instance.sweepCommission(277633);
result = await instance.claimThrone("JTGbrLKVo1XkY2WDd3zx",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[6],value:95});

result = await instance.transferOwnership(accounts[4]);
});
it('test 27',async() => {
result = await instance.claimThrone("pJwmx9KHAT8Uiy",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:92});

result = await instance.sweepCommission(1017092);
result = await instance.transferOwnership(accounts[0]);
});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("Zmg94RvBAW7dXxGwkjb",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(322952);
await instance.sendTransaction({from:accounts[5],value:9});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[3],value:67});

result = await instance.claimThrone("gMwapBUd6cYFm3",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(239793);
result = await instance.transferOwnership(accounts[0]);
});
});
