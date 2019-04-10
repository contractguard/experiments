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
result = await instance.claimThrone("BE0HosdO972",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(712446);
await instance.sendTransaction({from:accounts[6],value:94});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[3],value:16});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("5Gcln9tkP26axYwfeUm",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(255994);
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[8],value:88});

result = await instance.claimThrone("ur8hFygUOAxQTt5W",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(1033611);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[3],value:90});

result = await instance.claimThrone("kO2NngPQpFyxhRT",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(427850);
});
it('test 4',async() => {
result = await instance.claimThrone("JNU25ERXpT",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[3],value:60});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(156003);
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[2],value:63});

result = await instance.sweepCommission(786096);
result = await instance.claimThrone("lGB7CdtywhkS42Ac",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 6',async() => {
result = await instance.sweepCommission(628099);
await instance.sendTransaction({from:accounts[3],value:28});

result = await instance.claimThrone("i1DFgZJ9KEV5qAbkcL",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[5],value:52});

result = await instance.sweepCommission(965890);
result = await instance.claimThrone("qpWfOYLTRZuti1xU",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 8',async() => {
result = await instance.claimThrone("ZgX56FRrECTn7eY4f",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(576274);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[7],value:16});

});
it('test 9',async() => {
result = await instance.sweepCommission(15822);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("wy2pSFNo6YXqK",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[3],value:22});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[4],value:9});

result = await instance.claimThrone("jzblGeEkfDgv4s",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(662185);
result = await instance.transferOwnership(accounts[5]);
});
it('test 11',async() => {
result = await instance.sweepCommission(711886);
result = await instance.claimThrone("ObT6MvCAnx2h7dJpNIP9",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:63});

result = await instance.transferOwnership(accounts[0]);
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("7FwudrIOxhVcl",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:39});

result = await instance.sweepCommission(941965);
});
it('test 13',async() => {
result = await instance.sweepCommission(488854);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:94});

result = await instance.claimThrone("Ht6mcMbXKg",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[8],value:79});

result = await instance.sweepCommission(630831);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("Zzobu7Vl9kHJS",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[8],value:83});

result = await instance.sweepCommission(923614);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("WSZYalVh8gAMTOkBj",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 16',async() => {
result = await instance.sweepCommission(1045859);
result = await instance.claimThrone("r1Gclj5tZFWO8mD",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:82});

result = await instance.transferOwnership(accounts[4]);
});
it('test 17',async() => {
result = await instance.claimThrone("TJmaXL0VztxPH1WZ9QD",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(219008);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[5],value:33});

});
it('test 18',async() => {
result = await instance.sweepCommission(606915);
result = await instance.claimThrone("NzCi1gWL0oHxXj36sGKA",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[7],value:73});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[7],value:34});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(403325);
result = await instance.claimThrone("Ns0GXtuvzkyERU4S",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 20',async() => {
result = await instance.sweepCommission(577275);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:31});

result = await instance.claimThrone("QpiO01IPdN5cz3BCj",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 21',async() => {
result = await instance.sweepCommission(354815);
await instance.sendTransaction({from:accounts[9],value:44});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("6eWcmUVzvOF",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 22',async() => {
result = await instance.claimThrone("Nyw5h4TeIL3",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:66});

result = await instance.sweepCommission(913806);
result = await instance.transferOwnership(accounts[1]);
});
it('test 23',async() => {
result = await instance.claimThrone("dspPrYFgx4",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[9],value:93});

result = await instance.sweepCommission(168320);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
result = await instance.sweepCommission(503907);
await instance.sendTransaction({from:accounts[4],value:28});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("9mxpq5dLUSfg1l",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(47625);
result = await instance.claimThrone("7mORXUu1l6q0",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[7],value:59});

});
it('test 26',async() => {
result = await instance.sweepCommission(574285);
result = await instance.claimThrone("3eLOYZUdCJETbc",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:89});

result = await instance.transferOwnership(accounts[3]);
});
it('test 27',async() => {
result = await instance.claimThrone("3DBe6GxuHS",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[3],value:40});

result = await instance.sweepCommission(127175);
result = await instance.transferOwnership(accounts[0]);
});
it('test 28',async() => {
result = await instance.claimThrone("bkCvPjA76lu1m0cdyG",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(518393);
await instance.sendTransaction({from:accounts[6],value:34});

});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(830435);
await instance.sendTransaction({from:accounts[6],value:69});

result = await instance.claimThrone("FBy92qfdwxArzVYHeoj1",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(2))});
});
});
