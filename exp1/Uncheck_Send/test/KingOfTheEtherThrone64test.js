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
await instance.sendTransaction({from:accounts[2],value:11});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(628414);
result = await instance.claimThrone("79pk4sKQdMU8WbPYe",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[8],value:100});

result = await instance.claimThrone("12GmlHKSXz",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(804189);
});
it('test 2',async() => {
result = await instance.claimThrone("dT8j2ykiFzhuD3rX",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[3],value:67});

result = await instance.sweepCommission(116183);
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[2],value:5});

result = await instance.claimThrone("Q06K9C2F4wA",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(259006);
});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[2],value:24});

result = await instance.claimThrone("qa8lmvGs375MI",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(84118);
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[4],value:68});

result = await instance.claimThrone("n2bQsCL1Bg",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(573282);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[8],value:48});

result = await instance.sweepCommission(919070);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("dSEjnprAXZ",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[3],value:67});

result = await instance.sweepCommission(507835);
result = await instance.claimThrone("wLsCI3ZKUtcY",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 8',async() => {
result = await instance.claimThrone("56kQwtMoCOSZichqxv",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[9],value:5});

result = await instance.sweepCommission(624960);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("TUeB9rNFMJhYcoWmnv",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[3],value:58});

result = await instance.sweepCommission(108824);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[1],value:7});

result = await instance.sweepCommission(249510);
result = await instance.claimThrone("v6ScV7ljmRFK3IbAQGZ0",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 11',async() => {
result = await instance.sweepCommission(281503);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[7],value:9});

result = await instance.claimThrone("t7pdI3KzPEcW",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 12',async() => {
result = await instance.claimThrone("JacEut8dV75Uw",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(264698);
await instance.sendTransaction({from:accounts[1],value:45});

result = await instance.transferOwnership(accounts[1]);
});
it('test 13',async() => {
result = await instance.claimThrone("fG74ytMgQik1RC3D0W",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[9],value:76});

result = await instance.sweepCommission(1008856);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[3],value:43});

result = await instance.claimThrone("ElZNuIJWVkH",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(603733);
});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[3],value:13});

result = await instance.claimThrone("ePwhmYZEv9LUbc84zVtI",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(423745);
});
it('test 16',async() => {
result = await instance.claimThrone("hFYfHbVTaZnmMLpzxgP",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(115737);
await instance.sendTransaction({from:accounts[2],value:55});

result = await instance.transferOwnership(accounts[0]);
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(232761);
result = await instance.claimThrone("rBGIaksjtOKgoby",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[8],value:89});

});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[1],value:30});

result = await instance.claimThrone("bLxT4AUc5HS2G7WF8",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(342439);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[6],value:40});

result = await instance.sweepCommission(769852);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("cbzIrV7CqOLjn8Svgy",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[4],value:91});

result = await instance.sweepCommission(564082);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("TCraYkflN1KvzIJZ29",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 21',async() => {
result = await instance.claimThrone("Ad834bG7BYHcS",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:31});

result = await instance.sweepCommission(938992);
result = await instance.transferOwnership(accounts[5]);
});
it('test 22',async() => {
result = await instance.claimThrone("jCEZyl5KLnT",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[1],value:11});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(699312);
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:13});

result = await instance.claimThrone("y2IJ7UmWraOPwnxobB",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(764964);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[8],value:81});

result = await instance.sweepCommission(657605);
result = await instance.claimThrone("p4PFrS16Zmshg7Xt",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 25',async() => {
result = await instance.claimThrone("su2YTpPlzfNO1gAECySi",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[5],value:30});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(234923);
});
it('test 26',async() => {
result = await instance.claimThrone("yHbQrBxcFJuz29Xag6S",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:55});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(799304);
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[4],value:46});

result = await instance.claimThrone("wF2JDNhfe4Pv9n",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(87862);
});
it('test 28',async() => {
result = await instance.claimThrone("RhPmeH3WCor27QiLn6Ik",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(575510);
await instance.sendTransaction({from:accounts[8],value:29});

});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("ayk1X2Yq0xmPrO8",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:95});

result = await instance.sweepCommission(537959);
});
});
