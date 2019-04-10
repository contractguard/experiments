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
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("jQqnwehKA4mrbC",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[5],value:37});

result = await instance.sweepCommission(946632);
});
it('test 1',async() => {
result = await instance.sweepCommission(1029809);
result = await instance.claimThrone("2ZbegBd8DzCu",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[5],value:27});

result = await instance.transferOwnership(accounts[2]);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[7],value:18});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("UMolg5PkHtOCWhfB",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(460857);
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("z90OQ4nVACa2vygYoU3d",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:23});

result = await instance.sweepCommission(759378);
});
it('test 4',async() => {
result = await instance.claimThrone("NV7iW6KRkz",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(29844);
await instance.sendTransaction({from:accounts[7],value:64});

result = await instance.transferOwnership(accounts[1]);
});
it('test 5',async() => {
result = await instance.sweepCommission(350779);
result = await instance.claimThrone("pjsJhDbm70",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[4],value:100});

result = await instance.transferOwnership(accounts[0]);
});
it('test 6',async() => {
result = await instance.sweepCommission(403900);
await instance.sendTransaction({from:accounts[5],value:6});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("uFMW5A9vc1ELnU",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(408981);
result = await instance.claimThrone("1oum37WEeR9SC0N8",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:6});

});
it('test 8',async() => {
result = await instance.claimThrone("HQaqXClOGh3cb2A",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[4],value:24});

result = await instance.sweepCommission(855738);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[9],value:11});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(553827);
result = await instance.claimThrone("pOgHUseM01",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("W1B2qNs3jn",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(963016);
await instance.sendTransaction({from:accounts[3],value:91});

});
it('test 11',async() => {
result = await instance.sweepCommission(152352);
await instance.sendTransaction({from:accounts[1],value:50});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("7GWqBstrjFZP6DgnkC",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 12',async() => {
result = await instance.sweepCommission(68187);
await instance.sendTransaction({from:accounts[7],value:73});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("5t9hOeEbjiyQ6",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 13',async() => {
result = await instance.claimThrone("X82DApRe9tZNBFz4Mf",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(832697);
await instance.sendTransaction({from:accounts[1],value:39});

result = await instance.transferOwnership(accounts[4]);
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:37});

result = await instance.sweepCommission(658829);
result = await instance.claimThrone("ZVQrE8xSz4du",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(820010);
result = await instance.claimThrone("jgZ5bFDQmHpAyXK",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[1],value:48});

});
it('test 16',async() => {
result = await instance.claimThrone("gS7eAQEvfoHy",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(691078);
await instance.sendTransaction({from:accounts[9],value:6});

});
it('test 17',async() => {
result = await instance.sweepCommission(872797);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("MZXhCa5zku6D",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[9],value:25});

});
it('test 18',async() => {
result = await instance.claimThrone("knKSvU9tcxhZR6eli",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[1],value:88});

result = await instance.sweepCommission(1019082);
result = await instance.transferOwnership(accounts[4]);
});
it('test 19',async() => {
result = await instance.sweepCommission(1033899);
await instance.sendTransaction({from:accounts[2],value:21});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("yfqd7BewhHQZPn",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[1],value:47});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(56921);
result = await instance.claimThrone("lSJnLdEbWX",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[9],value:41});

result = await instance.claimThrone("sK67rR0SJzbfIT29EGc",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(535728);
result = await instance.transferOwnership(accounts[3]);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[3],value:69});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("30FfCi9DUjwZ5",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(542170);
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("jYGthAQZM3EXTanvDW",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(752921);
await instance.sendTransaction({from:accounts[5],value:60});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[8],value:52});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(137007);
result = await instance.claimThrone("Mf2mGK8dPCx",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[1],value:61});

result = await instance.claimThrone("ReHJp2dxX0ZqQSry",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(194352);
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(2876);
await instance.sendTransaction({from:accounts[1],value:57});

result = await instance.claimThrone("JfZX2GbMYO",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 27',async() => {
result = await instance.sweepCommission(204801);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("qyGYLwgR2E",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[5],value:10});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[4],value:100});

result = await instance.sweepCommission(267882);
result = await instance.claimThrone("nqayY1mN6TczUJS47M",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(407870);
result = await instance.claimThrone("gEYTwQ9RXoCnm0aGMz",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:72});

});
});
