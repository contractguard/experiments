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
result = await instance.sweepCommission(634984);
await instance.sendTransaction({from:accounts[6],value:48});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("19mNgKt2VpChl",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 1',async() => {
result = await instance.sweepCommission(104327);
await instance.sendTransaction({from:accounts[8],value:3});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("GYFOchswap7JPRN48D6",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 2',async() => {
result = await instance.sweepCommission(340139);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("4AFWs0UR6Myzo2",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[8],value:46});

});
it('test 3',async() => {
result = await instance.sweepCommission(407046);
await instance.sendTransaction({from:accounts[4],value:81});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("ROApTs6h07zJGolSjkr",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 4',async() => {
result = await instance.sweepCommission(378928);
await instance.sendTransaction({from:accounts[8],value:45});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("mafqQuZE5p7",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[3],value:31});

result = await instance.sweepCommission(730973);
result = await instance.claimThrone("1g47BzpHlwXYUh",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[5],value:88});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(838542);
result = await instance.claimThrone("hj6YEG4Pv7nXJWOSoDd",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[9],value:60});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("7qhP5MQwds",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(421026);
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("XFVyMIuW0Ug",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(682769);
await instance.sendTransaction({from:accounts[6],value:64});

});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("maXhcJOpCYdZg",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(250800);
await instance.sendTransaction({from:accounts[1],value:86});

});
it('test 10',async() => {
result = await instance.claimThrone("aROpM7hKy6ldoI",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(686516);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[2],value:9});

});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(283854);
await instance.sendTransaction({from:accounts[2],value:40});

result = await instance.claimThrone("wGXK19io7d8R45WU",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[7],value:74});

result = await instance.claimThrone("3JKHo9CW0rS4g8RcUxi",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(792499);
result = await instance.transferOwnership(accounts[1]);
});
it('test 13',async() => {
result = await instance.sweepCommission(584698);
result = await instance.claimThrone("9yksCFW7lzStMXud",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[7],value:28});

});
it('test 14',async() => {
result = await instance.sweepCommission(492086);
await instance.sendTransaction({from:accounts[3],value:37});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("dlwFycOnKJRp2gvY",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 15',async() => {
result = await instance.sweepCommission(61655);
result = await instance.claimThrone("04ie9VSmbuzfh3pWjAr",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[4],value:89});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[6],value:85});

result = await instance.sweepCommission(297712);
result = await instance.claimThrone("Bcl72SPeA50MmhfY",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("peho3E1PgfrIbw",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(406235);
await instance.sendTransaction({from:accounts[9],value:4});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[5],value:82});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(769647);
result = await instance.claimThrone("gvM1toVCFwpJ27c",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 19',async() => {
result = await instance.claimThrone("cnyvjRszwZfLH3ThaIJ",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[4],value:8});

result = await instance.sweepCommission(138787);
result = await instance.transferOwnership(accounts[3]);
});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[9],value:69});

result = await instance.claimThrone("LNli2b4dmG6Vc9vu",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(878753);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[5],value:69});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(528392);
result = await instance.claimThrone("NboeZCM9kfPx7cIg",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[3],value:25});

result = await instance.claimThrone("aWeDNACc1t5SPm8jblg",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(305598);
result = await instance.transferOwnership(accounts[1]);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[6],value:50});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(961522);
result = await instance.claimThrone("F9EuqDNity8RMKGP2hBd",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
result = await instance.sweepCommission(425631);
result = await instance.claimThrone("bUQLFvn08Bgo9",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[4],value:80});

result = await instance.transferOwnership(accounts[1]);
});
it('test 25',async() => {
result = await instance.claimThrone("3L41m5gardnF02P",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(23862);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[7],value:96});

});
it('test 26',async() => {
result = await instance.claimThrone("5TgPJqBX1MHR",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(464311);
await instance.sendTransaction({from:accounts[1],value:20});

result = await instance.transferOwnership(accounts[0]);
});
it('test 27',async() => {
result = await instance.sweepCommission(497295);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("PNt2Gpronhl",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:3});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[3],value:51});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("S0lPGZpdz9Wg6",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(924567);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[5],value:18});

result = await instance.claimThrone("aMErGSDw9W",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(72215);
result = await instance.transferOwnership(accounts[4]);
});
});
