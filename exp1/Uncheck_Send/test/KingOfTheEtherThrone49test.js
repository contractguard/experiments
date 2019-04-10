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
await instance.sendTransaction({from:accounts[4],value:21});

result = await instance.sweepCommission(965500);
result = await instance.claimThrone("hC2rx9WfcOzlTta0L",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 1',async() => {
result = await instance.sweepCommission(613241);
result = await instance.claimThrone("58hLvJuNWbC0nz",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[1],value:27});

});
it('test 2',async() => {
result = await instance.sweepCommission(483943);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:64});

result = await instance.claimThrone("p4A368igTmYozFNe1",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 3',async() => {
result = await instance.claimThrone("x8hbk9puXyWv0UJ",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(81173);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[4],value:1});

});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("Xq5IJm3FrYtLKayPpR",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(825973);
await instance.sendTransaction({from:accounts[2],value:50});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[3],value:43});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("2Kifq09Y8lSVkG",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(184276);
});
it('test 6',async() => {
result = await instance.claimThrone("IvEZleQwbOLMKrmnC",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(394706);
await instance.sendTransaction({from:accounts[7],value:25});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[8],value:1});

result = await instance.claimThrone("dal6PX8ju2nU",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(370622);
result = await instance.transferOwnership(accounts[0]);
});
it('test 8',async() => {
result = await instance.claimThrone("DwEy2qobAnilNWMT",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[2],value:87});

result = await instance.sweepCommission(127846);
result = await instance.transferOwnership(accounts[4]);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("LXnfgl6bH5k",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(997707);
await instance.sendTransaction({from:accounts[5],value:79});

});
it('test 10',async() => {
result = await instance.sweepCommission(675455);
result = await instance.claimThrone("BnR8jQq4hfZJ1Obu2Sw",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:56});

result = await instance.transferOwnership(accounts[2]);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(1000876);
await instance.sendTransaction({from:accounts[9],value:94});

result = await instance.claimThrone("Pz69QaCo8IsWvSpeuJfL",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[8],value:92});

result = await instance.claimThrone("hqdvg34w8YAo7n6Xei",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(238745);
result = await instance.transferOwnership(accounts[0]);
});
it('test 13',async() => {
result = await instance.claimThrone("FaQNXbLUckY",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(320813);
await instance.sendTransaction({from:accounts[2],value:91});

result = await instance.transferOwnership(accounts[0]);
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(508378);
result = await instance.claimThrone("XPrpNO2ht1B",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:54});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[1],value:8});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(437199);
result = await instance.claimThrone("4YqFv7pwhOPTNn",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 16',async() => {
result = await instance.sweepCommission(490013);
await instance.sendTransaction({from:accounts[4],value:90});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("WjH5TPR6tLk9AqM",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 17',async() => {
result = await instance.claimThrone("o32Lje45ZqxHgWYBwlR",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(292155);
await instance.sendTransaction({from:accounts[2],value:91});

result = await instance.transferOwnership(accounts[3]);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[1],value:6});

result = await instance.sweepCommission(1035815);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("FO57phBtNiCDdq38WmIw",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(419932);
await instance.sendTransaction({from:accounts[4],value:52});

result = await instance.claimThrone("8jth64bHD3XWexIykSp",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 20',async() => {
result = await instance.claimThrone("KnFMaDl1zmsT",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[4],value:2});

result = await instance.sweepCommission(249443);
});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(1016086);
await instance.sendTransaction({from:accounts[6],value:13});

result = await instance.claimThrone("kaq4hiegR7H1Df0Aj",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[7],value:13});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(354834);
result = await instance.claimThrone("lIZwfurJgon6dvtN",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:29});

result = await instance.sweepCommission(631639);
result = await instance.claimThrone("AfiUJzwoOXH54q",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[4],value:60});

result = await instance.sweepCommission(621518);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("VHd34mIDXMT25pi",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("O3iaAyR756pcGC1r",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(7911);
await instance.sendTransaction({from:accounts[2],value:60});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[6],value:12});

result = await instance.sweepCommission(384079);
result = await instance.claimThrone("Gqr1hBouV67FSn",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 27',async() => {
result = await instance.sweepCommission(731594);
await instance.sendTransaction({from:accounts[6],value:40});

result = await instance.claimThrone("UsMFXI0QniACc",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 28',async() => {
result = await instance.sweepCommission(8031);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("RqA9FOSeQt",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:34});

});
it('test 29',async() => {
result = await instance.sweepCommission(851105);
result = await instance.claimThrone("DPswnT7Y1ykp4R",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[7],value:32});

});
});
