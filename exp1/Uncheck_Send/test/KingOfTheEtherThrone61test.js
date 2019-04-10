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
result = await instance.sweepCommission(604852);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:94});

result = await instance.claimThrone("Ma9ruPD4U1Hbyo",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 1',async() => {
result = await instance.claimThrone("YoWsQpmthDikyHBNVf",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(623642);
await instance.sendTransaction({from:accounts[6],value:93});

});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[4],value:67});

result = await instance.claimThrone("ZAztqPdojO9",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(755976);
});
it('test 3',async() => {
result = await instance.claimThrone("hyasUQk2InA8qO",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[3],value:74});

result = await instance.sweepCommission(299532);
});
it('test 4',async() => {
result = await instance.claimThrone("a5mBibzFn0c9OZJf8",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(159772);
await instance.sendTransaction({from:accounts[5],value:92});

result = await instance.transferOwnership(accounts[5]);
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(54265);
await instance.sendTransaction({from:accounts[2],value:94});

result = await instance.claimThrone("EBTs6cRJrPza",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("esI7uzlKBM",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[5],value:18});

result = await instance.sweepCommission(427232);
});
it('test 7',async() => {
result = await instance.sweepCommission(898877);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[2],value:81});

result = await instance.claimThrone("a0HsGvmlh7EUW4ty",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 8',async() => {
result = await instance.claimThrone("iHmIZn5MfWytXSlo",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(370132);
await instance.sendTransaction({from:accounts[6],value:9});

});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(300337);
await instance.sendTransaction({from:accounts[5],value:6});

result = await instance.claimThrone("9nUeZzOsdSg2C",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("1zusoQg5wytb9en",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[9],value:53});

result = await instance.sweepCommission(447912);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[7],value:33});

result = await instance.sweepCommission(863408);
result = await instance.claimThrone("6aiW2DJF8Pryb4vgt",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("gTKkLxYV80mQW7OJo5f",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(519322);
await instance.sendTransaction({from:accounts[1],value:85});

});
it('test 13',async() => {
result = await instance.claimThrone("9X6jOTV5Az7DS",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[3],value:82});

result = await instance.sweepCommission(956019);
result = await instance.transferOwnership(accounts[3]);
});
it('test 14',async() => {
result = await instance.sweepCommission(275326);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[5],value:98});

result = await instance.claimThrone("f5jngYmG1oNB4",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[3],value:58});

result = await instance.sweepCommission(1015120);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("gefrBMInzp",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(209425);
result = await instance.claimThrone("5oCh1wVt3j",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[2],value:45});

});
it('test 17',async() => {
result = await instance.sweepCommission(821606);
await instance.sendTransaction({from:accounts[2],value:92});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("rgWBYMX9OdQywn1",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 18',async() => {
result = await instance.sweepCommission(182569);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[5],value:95});

result = await instance.claimThrone("vMb0lKLQsRp96Go81wE",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[2],value:8});

result = await instance.claimThrone("tAI0DqLoBV",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(35056);
});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("DfRnKCIecW82",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:25});

result = await instance.sweepCommission(400813);
});
it('test 21',async() => {
result = await instance.claimThrone("Tz0DsuV8Xok9NbB",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(303324);
await instance.sendTransaction({from:accounts[8],value:60});

result = await instance.transferOwnership(accounts[2]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("VowrME3RymkpgtBn",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[9],value:17});

result = await instance.sweepCommission(385641);
});
it('test 23',async() => {
result = await instance.claimThrone("m9XfQBDkMPa2gNniU",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(1017419);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[2],value:25});

});
it('test 24',async() => {
result = await instance.claimThrone("24CSGNAIrWV1b6a9Us",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(815842);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[8],value:77});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[4],value:34});

result = await instance.claimThrone("qbT7KUMPZpzY",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(892166);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[6],value:49});

result = await instance.claimThrone("hbBozRD4fHeKQYTmjFV2",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(400403);
result = await instance.transferOwnership(accounts[3]);
});
it('test 27',async() => {
result = await instance.claimThrone("nW7iae6gC0wHzom8Kc9r",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[2],value:27});

result = await instance.sweepCommission(868458);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[3],value:75});

result = await instance.sweepCommission(504224);
result = await instance.claimThrone("BipNGvT3JSshzcU1r5Z",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 29',async() => {
result = await instance.sweepCommission(787484);
await instance.sendTransaction({from:accounts[5],value:43});

result = await instance.claimThrone("ahnJX6Mq78sUdPk0pF",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
});
});
