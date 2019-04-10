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
await instance.sendTransaction({from:accounts[6],value:7});

result = await instance.claimThrone("NOdGeabZrzl",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(885833);
result = await instance.transferOwnership(accounts[2]);
});
it('test 1',async() => {
result = await instance.sweepCommission(108409);
result = await instance.claimThrone("BiJRjUKI0y",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:63});

result = await instance.transferOwnership(accounts[3]);
});
it('test 2',async() => {
result = await instance.claimThrone("nzxdkEJUulcpKgM912BQ",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(399089);
await instance.sendTransaction({from:accounts[2],value:94});

result = await instance.transferOwnership(accounts[2]);
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[4],value:20});

result = await instance.sweepCommission(471061);
result = await instance.claimThrone("VtflL48wXphFAUQrSG",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[3],value:8});

result = await instance.sweepCommission(678216);
result = await instance.claimThrone("khIaNQTc6Xgb7",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 5',async() => {
result = await instance.claimThrone("1s8CiYUlxtS",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(77060);
await instance.sendTransaction({from:accounts[5],value:67});

});
it('test 6',async() => {
result = await instance.sweepCommission(246447);
await instance.sendTransaction({from:accounts[2],value:91});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("bTCAi9wLk27MKqZBdEH",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("K0tjOEuWTLnqBv67p9",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[4],value:10});

result = await instance.sweepCommission(958636);
});
it('test 8',async() => {
result = await instance.claimThrone("ujAR8b1dNEqczXaiF",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(477535);
await instance.sendTransaction({from:accounts[3],value:68});

});
it('test 9',async() => {
result = await instance.claimThrone("BevbIu3hPnAN0tijCYow",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[9],value:77});

result = await instance.sweepCommission(498022);
result = await instance.transferOwnership(accounts[2]);
});
it('test 10',async() => {
result = await instance.claimThrone("A5XhVaoqYiJ",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(248562);
await instance.sendTransaction({from:accounts[6],value:39});

});
it('test 11',async() => {
result = await instance.sweepCommission(357957);
result = await instance.claimThrone("KrsJxqB3uRNemv0jgodH",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[5],value:17});

result = await instance.transferOwnership(accounts[1]);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[3],value:25});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("Z0OWblcijYkHN7B",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(249475);
});
it('test 13',async() => {
result = await instance.sweepCommission(510175);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:19});

result = await instance.claimThrone("ACnQ5Mk2Difu6etFY4Kw",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[8],value:76});

result = await instance.sweepCommission(938820);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("dhVICfY3DqA",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 15',async() => {
result = await instance.sweepCommission(422254);
await instance.sendTransaction({from:accounts[2],value:17});

result = await instance.claimThrone("BveYtacNHC",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 16',async() => {
result = await instance.claimThrone("3XfNld24jvSe1nO",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(509842);
await instance.sendTransaction({from:accounts[3],value:99});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[2],value:60});

result = await instance.sweepCommission(423458);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("mnorwLCb7GA5H0",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[9],value:91});

result = await instance.sweepCommission(150136);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("Bip5MluKajwVRc3JSC97",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 19',async() => {
result = await instance.sweepCommission(993682);
result = await instance.claimThrone("z690aP4RLntdMTG2HhBo",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[5],value:59});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[2],value:20});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("e0t637VcUNqB",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(441577);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 21',async() => {
result = await instance.claimThrone("yb9iaThNCFYe8SdpHx",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[4],value:12});

result = await instance.sweepCommission(564497);
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(104626);
result = await instance.claimThrone("M6eQbs1JtgRnhVI",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[6],value:76});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[5],value:44});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(200977);
result = await instance.claimThrone("AbI51eL7MTcp8xy",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 24',async() => {
result = await instance.claimThrone("fRPdJcjtiIarEHGXCDT",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[4],value:27});

result = await instance.sweepCommission(427654);
result = await instance.transferOwnership(accounts[2]);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[2],value:99});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("U8GtSlCdWioTRa1e",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(631157);
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("10GugAO4lTNKmpLWhI",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:37});

result = await instance.sweepCommission(571107);
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("PWwBp76KkbV1z4",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:50});

result = await instance.sweepCommission(1029399);
});
it('test 28',async() => {
result = await instance.claimThrone("ILPGZuxXFslJt0",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[2],value:57});

result = await instance.sweepCommission(141449);
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:81});

result = await instance.sweepCommission(759421);
result = await instance.claimThrone("QUa3TnKWJSoCp",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(1))});
});
});
