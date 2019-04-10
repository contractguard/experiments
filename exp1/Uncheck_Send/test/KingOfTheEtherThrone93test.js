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
result = await instance.sweepCommission(665886);
result = await instance.claimThrone("jb6zMR5m4pUsZS",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:28});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[9],value:63});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(221031);
result = await instance.claimThrone("UJbiuDlypTxO9Ht",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[3],value:77});

result = await instance.claimThrone("nrk9OECUlFJmKpG6g",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(1022387);
result = await instance.transferOwnership(accounts[1]);
});
it('test 3',async() => {
result = await instance.sweepCommission(1035937);
await instance.sendTransaction({from:accounts[5],value:13});

result = await instance.claimThrone("lODSq5C4jndf6p",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[7],value:74});

result = await instance.sweepCommission(351065);
result = await instance.claimThrone("9GnlqYHcd10aZKABOMu6",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 5',async() => {
result = await instance.sweepCommission(964192);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("EWQX6SiJwp1n",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:65});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[9],value:66});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(531634);
result = await instance.claimThrone("SMe4EZiy6h9AqYJfkc",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[8],value:34});

result = await instance.sweepCommission(591074);
result = await instance.claimThrone("6UgtBMs5TnaS",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[9],value:75});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("hndXLHJb6vew7pMG",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(1007299);
});
it('test 9',async() => {
result = await instance.claimThrone("e0Rn3KLrHqSP8kipdmE",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[4],value:67});

result = await instance.sweepCommission(665646);
result = await instance.transferOwnership(accounts[4]);
});
it('test 10',async() => {
result = await instance.sweepCommission(495386);
await instance.sendTransaction({from:accounts[7],value:19});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("f26U3KDWgolFnJTMzR",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(445804);
await instance.sendTransaction({from:accounts[9],value:39});

result = await instance.claimThrone("YxK2msBzuit17fdaQnD",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[1],value:100});

result = await instance.claimThrone("WjJoePQAKEy97mnrvIV3",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(643046);
});
it('test 13',async() => {
result = await instance.sweepCommission(573745);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[8],value:78});

result = await instance.claimThrone("VoAxqKEyMjLO",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(529635);
await instance.sendTransaction({from:accounts[2],value:36});

result = await instance.claimThrone("pMF8vdlimrwY0zZ",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 15',async() => {
result = await instance.claimThrone("GeWEc1solXKiHCYVktyJ",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(459662);
await instance.sendTransaction({from:accounts[6],value:12});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[3],value:85});

result = await instance.claimThrone("pyQb8X1W6scvnui",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(843325);
});
it('test 17',async() => {
result = await instance.claimThrone("C61jWUKflV80D",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[7],value:99});

result = await instance.sweepCommission(706875);
result = await instance.transferOwnership(accounts[5]);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[6],value:20});

result = await instance.claimThrone("48CYZzRWhwoQEnNj",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(663023);
});
it('test 19',async() => {
result = await instance.sweepCommission(65362);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[8],value:57});

result = await instance.claimThrone("hCAjuzqyQVc6MsP1RKel",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 20',async() => {
result = await instance.sweepCommission(963526);
result = await instance.claimThrone("zyJgvxPZUEq4m2BQul",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[9],value:56});

result = await instance.transferOwnership(accounts[4]);
});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(570221);
await instance.sendTransaction({from:accounts[9],value:53});

result = await instance.claimThrone("nQUEsArlz12MIp",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 22',async() => {
result = await instance.sweepCommission(272279);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("4KWy0AhTvcRa1",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[4],value:23});

});
it('test 23',async() => {
result = await instance.sweepCommission(624636);
result = await instance.claimThrone("LsdqN38gFIxR6KXw1VY",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:78});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[7],value:97});

result = await instance.sweepCommission(707788);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("vOYRn0WilceM9du",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 25',async() => {
result = await instance.claimThrone("kDpJ3nR0dQcZw",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[5],value:46});

result = await instance.sweepCommission(121596);
result = await instance.transferOwnership(accounts[3]);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[1],value:71});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(755468);
result = await instance.claimThrone("vMDIOhfnEc",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[8],value:62});

result = await instance.sweepCommission(312478);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("OEA7Cj4BqTN98Y0fhwm",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 28',async() => {
result = await instance.sweepCommission(168406);
result = await instance.claimThrone("dPjtaqVRL2fQIK3E",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[9],value:22});

});
it('test 29',async() => {
result = await instance.claimThrone("GYSD49yq1heEJo",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[3],value:53});

result = await instance.sweepCommission(863101);
});
});
