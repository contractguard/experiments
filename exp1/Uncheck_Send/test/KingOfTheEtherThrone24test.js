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
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("uzIbN6TWpHBoy",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(125432);
await instance.sendTransaction({from:accounts[3],value:6});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[1],value:75});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("hfczyKwb9OqpdoVgk",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(803787);
});
it('test 2',async() => {
result = await instance.sweepCommission(477228);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[5],value:96});

result = await instance.claimThrone("vfeYh6xwHEbry0iSAokQ",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[8],value:44});

result = await instance.sweepCommission(92869);
result = await instance.claimThrone("sovIen1VSXfNmjYKOlrC",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 4',async() => {
result = await instance.sweepCommission(787634);
result = await instance.claimThrone("Ddc6bWli1O9tp48k",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:31});

result = await instance.transferOwnership(accounts[4]);
});
it('test 5',async() => {
result = await instance.sweepCommission(251995);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[7],value:59});

result = await instance.claimThrone("5PrWgDfO1ALbxoc",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[5],value:24});

result = await instance.sweepCommission(824620);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("hCMLUmVBnwyNZv21H",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 7',async() => {
result = await instance.sweepCommission(817007);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("mSJ1fx4WhaN",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[5],value:5});

});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("KWLmwBoce3fth",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[9],value:92});

result = await instance.sweepCommission(192756);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[6],value:9});

result = await instance.claimThrone("Z5kvizTXDGObCl",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(598288);
result = await instance.transferOwnership(accounts[1]);
});
it('test 10',async() => {
result = await instance.sweepCommission(684713);
await instance.sendTransaction({from:accounts[2],value:16});

result = await instance.claimThrone("rBqGtiImNj",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 11',async() => {
result = await instance.claimThrone("WkelVurhzaBQGPULfbN",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(68244);
await instance.sendTransaction({from:accounts[2],value:55});

});
it('test 12',async() => {
result = await instance.claimThrone("L5c3qhybkgWNiUp",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(194807);
await instance.sendTransaction({from:accounts[7],value:70});

});
it('test 13',async() => {
result = await instance.sweepCommission(658007);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[2],value:74});

result = await instance.claimThrone("9JeHrVEnd7Kj58ChSA",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 14',async() => {
result = await instance.claimThrone("2GIWj1UPwyhvbZ4pn",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(1029716);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[7],value:59});

});
it('test 15',async() => {
result = await instance.claimThrone("HIbdXAeGpP7rTL",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(102799);
await instance.sendTransaction({from:accounts[7],value:70});

result = await instance.transferOwnership(accounts[1]);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[8],value:32});

result = await instance.sweepCommission(867181);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("Bq67cZhb4xL2V",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("tSyiqBgF5C2DTAMOmuX",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(60078);
await instance.sendTransaction({from:accounts[6],value:77});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[3],value:42});

result = await instance.claimThrone("AoMKcSBHtgyQ10",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(732185);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[2],value:87});

result = await instance.claimThrone("wGkNbZt0dMg",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(404197);
result = await instance.transferOwnership(accounts[0]);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[4],value:15});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("ErYb1MpJjOkfA",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(437763);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[4],value:38});

result = await instance.sweepCommission(859594);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("8yuEJhYAwH",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[9],value:71});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("iYLda5cCP6DZ24Hot",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(299540);
});
it('test 23',async() => {
result = await instance.sweepCommission(342797);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("Cbdi4PtXHM",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:71});

});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(206706);
result = await instance.claimThrone("jp2auLk1EJ5T",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[3],value:41});

});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("YWKzImxnqQ7s",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[3],value:6});

result = await instance.sweepCommission(335600);
});
it('test 26',async() => {
result = await instance.sweepCommission(684367);
result = await instance.claimThrone("cmPtKs7XyVhoWNEk5FHd",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[2],value:51});

});
it('test 27',async() => {
result = await instance.sweepCommission(451316);
await instance.sendTransaction({from:accounts[9],value:68});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("g3YMLACE4kJehm",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 28',async() => {
result = await instance.sweepCommission(640002);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[5],value:90});

result = await instance.claimThrone("wE1h3SWsqtgMQx6",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(788465);
result = await instance.claimThrone("LjK3BC2ls9O",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[2],value:11});

});
});
