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
result = await instance.sweepCommission(772678);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("gcOUqr54lDzWfb3sitZn",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[5],value:36});

});
it('test 1',async() => {
result = await instance.claimThrone("zOfPQih8TKyHuM6sc",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(197472);
await instance.sendTransaction({from:accounts[9],value:74});

result = await instance.transferOwnership(accounts[3]);
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(583443);
result = await instance.claimThrone("QWUMqZksIcj6gSloGF0",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[3],value:1});

});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("1ADLRXQMF5UvEK",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(60976);
await instance.sendTransaction({from:accounts[7],value:50});

});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("Gfe8AQaVPDR",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:74});

result = await instance.sweepCommission(907698);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[3],value:86});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(853618);
result = await instance.claimThrone("e5SZd3vEiJP6ojY9MsV",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 6',async() => {
result = await instance.sweepCommission(141192);
await instance.sendTransaction({from:accounts[4],value:49});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("IANQZ0LmMBipxc3D1",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 7',async() => {
result = await instance.claimThrone("scDFORrZln8",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[2],value:65});

result = await instance.sweepCommission(599798);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[1],value:73});

result = await instance.claimThrone("GhFo4TaBzRIf5J93m",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(898724);
result = await instance.transferOwnership(accounts[5]);
});
it('test 9',async() => {
result = await instance.sweepCommission(28101);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[4],value:42});

result = await instance.claimThrone("AjEzlGcW9U75LDdH4",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 10',async() => {
result = await instance.claimThrone("75E4TIqBnoGs6iYycu",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[4],value:40});

result = await instance.sweepCommission(472709);
});
it('test 11',async() => {
result = await instance.sweepCommission(313366);
await instance.sendTransaction({from:accounts[4],value:27});

result = await instance.claimThrone("24xDjVQsRqM",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("RzrLWwHtVCucBJU5NoM0",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[3],value:30});

result = await instance.sweepCommission(34352);
});
it('test 13',async() => {
result = await instance.claimThrone("N4I70LUlOqrCziY",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(988007);
await instance.sendTransaction({from:accounts[1],value:87});

});
it('test 14',async() => {
result = await instance.sweepCommission(890458);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("KkdcMoXjfeF5UrOQD0",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[9],value:74});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[7],value:16});

result = await instance.claimThrone("argZsmkL0WO",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(256604);
});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[5],value:35});

result = await instance.claimThrone("qGpjsvyiBK74afxYtFQ",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(660803);
});
it('test 17',async() => {
result = await instance.claimThrone("jgT75qF9UQXmISeKd",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(849858);
await instance.sendTransaction({from:accounts[1],value:43});

result = await instance.transferOwnership(accounts[5]);
});
it('test 18',async() => {
result = await instance.sweepCommission(1039441);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[9],value:92});

result = await instance.claimThrone("wTJevImMdAtZOp3uXNB",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 19',async() => {
result = await instance.sweepCommission(243696);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[6],value:73});

result = await instance.claimThrone("3LE8jz6CTPRGcl",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("IdgQyK1Nbuf",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[6],value:95});

result = await instance.sweepCommission(813715);
});
it('test 21',async() => {
result = await instance.claimThrone("dIzufxjtwVLlB",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:70});

result = await instance.sweepCommission(543120);
});
it('test 22',async() => {
result = await instance.claimThrone("IUcuarbkozCLA",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:95});

result = await instance.sweepCommission(657718);
result = await instance.transferOwnership(accounts[2]);
});
it('test 23',async() => {
result = await instance.sweepCommission(942560);
await instance.sendTransaction({from:accounts[3],value:71});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("4nu8EWriy1gt",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(869434);
result = await instance.claimThrone("WMQCyXpc1sorN",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:58});

});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[2],value:18});

result = await instance.sweepCommission(944513);
result = await instance.claimThrone("Jx0FyMgEYpAImoL",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[6],value:65});

result = await instance.sweepCommission(11092);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("UXju4on0RksIcaNWrB",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[2],value:86});

result = await instance.claimThrone("2Ntouan9U1RIWj",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(896652);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[6],value:66});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("Px2kdeLyfvoOQzRJK",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(267458);
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[4],value:9});

result = await instance.sweepCommission(825987);
result = await instance.claimThrone("52SZQCipbl6DWz",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(4))});
});
});
