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
result = await instance.claimThrone("WSQ1kNzhOsjJnE5T",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[3],value:46});

result = await instance.sweepCommission(1029016);
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[1],value:95});

result = await instance.sweepCommission(421368);
result = await instance.claimThrone("O0iS7osbag",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[2],value:79});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("CKPHaM35ZVR",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(857415);
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("OfVlGRv80HF23nTuhX",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(66657);
await instance.sendTransaction({from:accounts[3],value:4});

});
it('test 4',async() => {
result = await instance.claimThrone("EhUia8cBlHsLAk4P9",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(955086);
await instance.sendTransaction({from:accounts[8],value:37});

});
it('test 5',async() => {
result = await instance.claimThrone("nCOEDrqojd2kJ",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[5],value:66});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(127441);
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[9],value:67});

result = await instance.sweepCommission(324506);
result = await instance.claimThrone("8nRg0T9iINje",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 7',async() => {
result = await instance.sweepCommission(228792);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[4],value:43});

result = await instance.claimThrone("uAfZ6VrEj7YWe",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[1],value:70});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(304896);
result = await instance.claimThrone("vESOtGc2M0",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(460723);
await instance.sendTransaction({from:accounts[8],value:77});

result = await instance.claimThrone("MkAVP1mntGoW9UeQXI",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 10',async() => {
result = await instance.claimThrone("dZw2KncbzR1hy5YitF",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(10375);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:52});

});
it('test 11',async() => {
result = await instance.claimThrone("Do37f8khmga",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[2],value:53});

result = await instance.sweepCommission(834245);
});
it('test 12',async() => {
result = await instance.sweepCommission(50039);
result = await instance.claimThrone("weitFJkLj83cpgQ4",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:17});

result = await instance.transferOwnership(accounts[2]);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[1],value:70});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(411578);
result = await instance.claimThrone("MdT2nIlKvzoWktqbU",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 14',async() => {
result = await instance.sweepCommission(418164);
await instance.sendTransaction({from:accounts[9],value:37});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("qeD5yEFkXI2sl4cJ1wKH",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 15',async() => {
result = await instance.claimThrone("oWsuayxpqBEdfYh",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(195340);
await instance.sendTransaction({from:accounts[6],value:4});

result = await instance.transferOwnership(accounts[5]);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[5],value:47});

result = await instance.claimThrone("KWbckQ6mtunRsP",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(653338);
result = await instance.transferOwnership(accounts[3]);
});
it('test 17',async() => {
result = await instance.sweepCommission(247144);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[9],value:36});

result = await instance.claimThrone("9SLIxByH4JAz",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[8],value:77});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("cmS5vd6aXBn",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(126386);
});
it('test 19',async() => {
result = await instance.claimThrone("0HaSoth9qd",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[1],value:44});

result = await instance.sweepCommission(931287);
result = await instance.transferOwnership(accounts[1]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[4],value:23});

result = await instance.sweepCommission(496832);
result = await instance.claimThrone("3DFWRe0PKVr8S",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[4],value:1});

result = await instance.claimThrone("0Chs3HKzYfy",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(776946);
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[6],value:18});

result = await instance.sweepCommission(289105);
result = await instance.claimThrone("NQ3cnkp4dbsS56otRUA",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 23',async() => {
result = await instance.claimThrone("fgzHVUIWv4GELd",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[6],value:50});

result = await instance.sweepCommission(927159);
result = await instance.transferOwnership(accounts[1]);
});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(755623);
await instance.sendTransaction({from:accounts[5],value:91});

result = await instance.claimThrone("MNKkUp5l8De9Lu",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[4],value:60});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(852097);
result = await instance.claimThrone("dWIvPN9Dsa0g",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[7],value:39});

result = await instance.sweepCommission(191014);
result = await instance.claimThrone("x2XFdMyG9K",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 27',async() => {
result = await instance.sweepCommission(1029766);
result = await instance.claimThrone("a6u9C82YvnDJpys0UF",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[4],value:36});

});
it('test 28',async() => {
result = await instance.claimThrone("ledkIbz3S7HFMX520t",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[4],value:19});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(903903);
});
it('test 29',async() => {
result = await instance.sweepCommission(540038);
await instance.sendTransaction({from:accounts[5],value:70});

result = await instance.claimThrone("svR5UEOHtx",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
});
});
