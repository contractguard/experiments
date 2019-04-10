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
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[7],value:90});

result = await instance.claimThrone("p7guUzDGa3Tiw",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(764055);
});
it('test 1',async() => {
result = await instance.sweepCommission(987500);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("A0eSJ4NiLPrZaE",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:59});

});
it('test 2',async() => {
result = await instance.claimThrone("RA2OoepghqD9vcl",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:18});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(888980);
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[7],value:94});

result = await instance.sweepCommission(461981);
result = await instance.claimThrone("YtN8OiHeyqCoDUzW",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 4',async() => {
result = await instance.sweepCommission(800619);
result = await instance.claimThrone("ofnblztMrZOJK5DNpdk",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[7],value:51});

});
it('test 5',async() => {
result = await instance.claimThrone("atHUDWBEmAs",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[5],value:98});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(229326);
});
it('test 6',async() => {
result = await instance.claimThrone("eIhxy9EmH7Q",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(894438);
await instance.sendTransaction({from:accounts[1],value:48});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[1],value:27});

result = await instance.claimThrone("H9n3h4GijwCKXmu",{from:accounts[44],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(1038732);
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(1017408);
result = await instance.claimThrone("AVXu4l3ctsfNaI1oZn",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:81});

});
it('test 9',async() => {
result = await instance.claimThrone("4YFO5MPEUgBeXlSHA",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(194368);
await instance.sendTransaction({from:accounts[1],value:96});

});
it('test 10',async() => {
result = await instance.sweepCommission(305998);
await instance.sendTransaction({from:accounts[6],value:98});

result = await instance.claimThrone("h3Tt6pKv7DbOrFE0dz8m",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[7],value:90});

result = await instance.claimThrone("pRvO6asWKlNekFGL2zH",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(886512);
result = await instance.transferOwnership(accounts[0]);
});
it('test 12',async() => {
result = await instance.claimThrone("R7yfCcnxSW8",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:16});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(486057);
});
it('test 13',async() => {
result = await instance.sweepCommission(667975);
await instance.sendTransaction({from:accounts[1],value:11});

result = await instance.claimThrone("blUhV321eLi8NADCjz",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[3],value:91});

result = await instance.claimThrone("2Emhc19zfyYFb67iA",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(765953);
});
it('test 15',async() => {
result = await instance.claimThrone("D695wzBUiAvW0b",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(151338);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[6],value:43});

});
it('test 16',async() => {
result = await instance.claimThrone("dWn1KQ2TmakJ4t",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(556147);
await instance.sendTransaction({from:accounts[5],value:44});

result = await instance.transferOwnership(accounts[1]);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[3],value:89});

result = await instance.claimThrone("zHfORJ0x87VQynk",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(238402);
result = await instance.transferOwnership(accounts[2]);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[6],value:26});

result = await instance.sweepCommission(260621);
result = await instance.claimThrone("tiXluSajsy24ZqK0cMT",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 19',async() => {
result = await instance.claimThrone("tCpTOuZ8HUPcqSY",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:34});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(38865);
});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:92});

result = await instance.claimThrone("UFMX5gDwuCO3JI",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(968568);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 21',async() => {
result = await instance.sweepCommission(36954);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[7],value:88});

result = await instance.claimThrone("V1Q42eBThj5",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 22',async() => {
result = await instance.sweepCommission(1023135);
await instance.sendTransaction({from:accounts[7],value:52});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("W7wGdjC0oX5SBHOnsRf",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(946155);
result = await instance.claimThrone("YFUG4vAsTWdawSi2E",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:87});

});
it('test 24',async() => {
result = await instance.claimThrone("X70G2zartsf",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(793434);
await instance.sendTransaction({from:accounts[6],value:15});

});
it('test 25',async() => {
result = await instance.claimThrone("irLFzVIw07nlxkc",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[3],value:50});

result = await instance.sweepCommission(616204);
});
it('test 26',async() => {
result = await instance.sweepCommission(567820);
result = await instance.claimThrone("oeDjLvb0KFP1SMmw5",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:17});

result = await instance.transferOwnership(accounts[2]);
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[7],value:88});

result = await instance.claimThrone("dXZCJgnqKFIEt7LGAb5j",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(641771);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[9],value:59});

result = await instance.sweepCommission(733260);
result = await instance.claimThrone("1cXwvRk0pS5",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[1],value:17});

result = await instance.claimThrone("6nry1vOo3IUSXRNd",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(499694);
});
});
