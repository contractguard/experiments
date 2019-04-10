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
result = await instance.claimThrone("JfRTZw34V2kem",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(181425);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[7],value:99});

});
it('test 1',async() => {
result = await instance.claimThrone("XnNeQryuzlOjkL",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[9],value:30});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(135063);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[4],value:95});

result = await instance.sweepCommission(843037);
result = await instance.claimThrone("Yu2HbiPgC4",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[8],value:34});

result = await instance.claimThrone("8m6RCK0eogl",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(401855);
result = await instance.transferOwnership(accounts[5]);
});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(517619);
result = await instance.claimThrone("gDMt6CRJzuL3bqc",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[4],value:29});

});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[6],value:94});

result = await instance.sweepCommission(819225);
result = await instance.claimThrone("JtICj3hx95kyTdq",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(307650);
result = await instance.claimThrone("QMH9372wsOu",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[6],value:38});

});
it('test 7',async() => {
result = await instance.sweepCommission(224581);
result = await instance.claimThrone("182XJRVDc5H",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[5],value:71});

});
it('test 8',async() => {
result = await instance.claimThrone("mCn72MTNv1ElVycwQk",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(856220);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[8],value:27});

});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[7],value:47});

result = await instance.claimThrone("E9VrQaXqMC",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(349891);
});
it('test 10',async() => {
result = await instance.sweepCommission(748354);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("zFphTMj1c7yO",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[6],value:10});

});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[1],value:66});

result = await instance.claimThrone("T46JK9gnjNM5y7z",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(344341);
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:22});

result = await instance.claimThrone("zUMwB4WTko",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(935724);
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("ISsD7MbxZAXNtL0U2B",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(185195);
await instance.sendTransaction({from:accounts[5],value:53});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[2],value:74});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(784133);
result = await instance.claimThrone("XiMmnxzRq3PShb89",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 15',async() => {
result = await instance.claimThrone("pUnMqtKiaQoXG",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:94});

result = await instance.sweepCommission(184247);
result = await instance.transferOwnership(accounts[2]);
});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("hLKdoP8Bg6mtMlCXQ1R",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:83});

result = await instance.sweepCommission(388422);
});
it('test 17',async() => {
result = await instance.claimThrone("6hnUwTYG81DR3BKJ",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(805767);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[6],value:13});

});
it('test 18',async() => {
result = await instance.sweepCommission(701064);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[9],value:52});

result = await instance.claimThrone("PAJouHhr7TM9d",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 19',async() => {
result = await instance.sweepCommission(14483);
result = await instance.claimThrone("APFuq9M41kLIR",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[2],value:65});

});
it('test 20',async() => {
result = await instance.claimThrone("keCEOpPhDmaRFuHc",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(1045328);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[4],value:30});

});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(13064);
await instance.sendTransaction({from:accounts[3],value:42});

result = await instance.claimThrone("uD4pH5y7TNQ9m",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 22',async() => {
result = await instance.claimThrone("wVABRLnmT5J0P1yUrCq",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(431329);
await instance.sendTransaction({from:accounts[1],value:14});

});
it('test 23',async() => {
result = await instance.claimThrone("ulZaktB7FC",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(645023);
await instance.sendTransaction({from:accounts[8],value:83});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[2],value:12});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("Q8tFK5mdWB4A",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(564960);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[7],value:58});

result = await instance.sweepCommission(174747);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("8h9NSZYb71ygCQrMz6kO",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("jShKGwcDeItv",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:60});

result = await instance.sweepCommission(753533);
});
it('test 27',async() => {
result = await instance.claimThrone("JBtri6Kx9Wu7MGjyPD",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[5],value:54});

result = await instance.sweepCommission(411756);
});
it('test 28',async() => {
result = await instance.claimThrone("L5gRanNPTE",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(1027424);
await instance.sendTransaction({from:accounts[3],value:1});

result = await instance.transferOwnership(accounts[0]);
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[5],value:95});

result = await instance.sweepCommission(559370);
result = await instance.claimThrone("GtP5y7OdNkpbKfTBZ",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(4))});
});
});
