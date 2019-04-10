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
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[9],value:44});

result = await instance.sweepCommission(170128);
result = await instance.claimThrone("1aUfSGe2OqN0",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 1',async() => {
result = await instance.sweepCommission(647559);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("FD1MgfKbP4sCkILGEv",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[3],value:90});

});
it('test 2',async() => {
result = await instance.claimThrone("65zQNP3j42EOu",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[8],value:58});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(80698);
});
it('test 3',async() => {
result = await instance.claimThrone("AQBVbX1HDrvKLcuyUiG",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:66});

result = await instance.sweepCommission(811897);
result = await instance.transferOwnership(accounts[3]);
});
it('test 4',async() => {
result = await instance.sweepCommission(522401);
await instance.sendTransaction({from:accounts[2],value:33});

result = await instance.claimThrone("5eSjidU1M8",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[7],value:70});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(834268);
result = await instance.claimThrone("1k7DnaZRKpI",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 6',async() => {
result = await instance.claimThrone("Ngbn9U0drma",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(820034);
await instance.sendTransaction({from:accounts[9],value:84});

result = await instance.transferOwnership(accounts[1]);
});
it('test 7',async() => {
result = await instance.claimThrone("eYEHfFjChPO9szw",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[8],value:42});

result = await instance.sweepCommission(171208);
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[6],value:1});

result = await instance.sweepCommission(478116);
result = await instance.claimThrone("QNwSbedC8Dav9KiYcU",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[9],value:74});

result = await instance.sweepCommission(227861);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("7mptAjIxBXS9OUV6eEzd",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(751867);
result = await instance.claimThrone("npYLx9IZDWA0k3QJ",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[4],value:27});

});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[4],value:97});

result = await instance.claimThrone("lGf8Pw9srFV4",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(15749);
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[1],value:61});

result = await instance.sweepCommission(1025015);
result = await instance.claimThrone("yMqCcr5QoSlZOtUp",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[7],value:74});

result = await instance.sweepCommission(709433);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("oYeP40FTu6",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 14',async() => {
result = await instance.claimThrone("JcMAwUIdjfbYi32DnK",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(264595);
await instance.sendTransaction({from:accounts[6],value:33});

});
it('test 15',async() => {
result = await instance.sweepCommission(751868);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("uagWKsfGLqpXyOF",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:56});

});
it('test 16',async() => {
result = await instance.sweepCommission(947719);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[8],value:24});

result = await instance.claimThrone("0CPAErVRey9wBO3",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[4],value:48});

result = await instance.sweepCommission(1025867);
result = await instance.claimThrone("yAMReZtTXWLcNUvGSq",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("hCNzVArgJcxv",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(890003);
await instance.sendTransaction({from:accounts[6],value:36});

});
it('test 19',async() => {
result = await instance.claimThrone("BlvW5NZF9pw",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[2],value:84});

result = await instance.sweepCommission(253724);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[4],value:10});

result = await instance.sweepCommission(620836);
result = await instance.claimThrone("4x2qKXHO6Y",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[3],value:11});

result = await instance.sweepCommission(722760);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("IywAW5L1qs0",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(956318);
result = await instance.claimThrone("YJfOcvVBFgmAWzu5H",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[6],value:15});

});
it('test 23',async() => {
result = await instance.sweepCommission(453055);
await instance.sendTransaction({from:accounts[6],value:67});

result = await instance.claimThrone("Y7BM3aG4wSodF6",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 24',async() => {
result = await instance.sweepCommission(503676);
await instance.sendTransaction({from:accounts[5],value:38});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("Vnxp3s5e4Wytg6o",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 25',async() => {
result = await instance.sweepCommission(728696);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("ES6OQCyYXP",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[9],value:68});

});
it('test 26',async() => {
result = await instance.sweepCommission(506497);
result = await instance.claimThrone("vgKf6StOkxFho",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[3],value:63});

result = await instance.transferOwnership(accounts[2]);
});
it('test 27',async() => {
result = await instance.claimThrone("WASLlcRms0q1Ye9IG6U",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[9],value:66});

result = await instance.sweepCommission(253936);
result = await instance.transferOwnership(accounts[1]);
});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:52});

result = await instance.claimThrone("ErUeHNCOQh9uLMc",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(492088);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[6],value:48});

result = await instance.claimThrone("KZ8HgRIBwNOUd5sT",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(489837);
result = await instance.transferOwnership(accounts[1]);
});
});
