const BecToken = artifacts.require("BecToken");
contract('BecToken', async (accounts) => {
let instance;
let result;
let bigValue = web3.utils.toBN("57896044618658097711785492504343953926634992332820282019728792003956564819968");
before('setup contract for each test',async() => {
instance = await BecToken.new({from:accounts[0]});
});
it('test 0',async() => {
await instance.transfer(accounts[1], 3000000, {from: accounts[0]});
await instance.transfer(accounts[2], 3000000, {from: accounts[0]});
await instance.transfer(accounts[3], 3000000, {from: accounts[0]});
await instance.transfer(accounts[4], 3000000, {from: accounts[0]});
await instance.transfer(accounts[5], 3000000, {from: accounts[0]});
await instance.transfer(accounts[6], 3000000, {from: accounts[0]});
await instance.transfer(accounts[7], 3000000, {from: accounts[0]});
await instance.transfer(accounts[8], 3000000, {from: accounts[0]});
await instance.transfer(accounts[9], 3000000, {from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[51],accounts[48]],7805,{from:accounts[0]});


await instance.approve(accounts[177], 38455, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[177], 1000, {from: accounts[177]});

result = await instance.transfer(accounts[4],996,{from:accounts[0]});
});
it('test 1',async() => {
await instance.batchTransfer([accounts[37],accounts[14],accounts[6],accounts[3],accounts[85]],4335,{from:accounts[0]});

result = await instance.transfer(accounts[3],362,{from:accounts[0]});

await instance.approve(accounts[110], 36590, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[110], 1000, {from: accounts[110]});

});
it('test 2',async() => {

await instance.approve(accounts[154], 20762, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

result = await instance.transfer(accounts[0],811,{from:accounts[3]});
await instance.batchTransfer([accounts[37],accounts[33],accounts[41],accounts[9],accounts[84],accounts[58],accounts[99],accounts[20]],8347,{from:accounts[0]});

});
it('test 3',async() => {

await instance.approve(accounts[142], 22777, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[142], 1000, {from: accounts[142]});

result = await instance.transfer(accounts[0],606,{from:accounts[2]});
await instance.batchTransfer([accounts[59],accounts[10],accounts[82],accounts[86]],2014,{from:accounts[0]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[5],434,{from:accounts[2]});
await instance.batchTransfer([accounts[1],accounts[34]],7496,{from:accounts[0]});


await instance.approve(accounts[66], 32615, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[66], 1000, {from: accounts[66]});

});
it('test 5',async() => {
result = await instance.transfer(accounts[2],548,{from:accounts[0]});

await instance.approve(accounts[95], 21429, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[95], 1000, {from: accounts[95]});

await instance.batchTransfer([accounts[47],accounts[63],accounts[95],accounts[60],accounts[81]],4020,{from:accounts[0]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[38],accounts[66],accounts[93],accounts[18]],1584,{from:accounts[0]});


await instance.approve(accounts[145], 30314, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

result = await instance.transfer(accounts[1],217,{from:accounts[4]});
});
it('test 7',async() => {

await instance.approve(accounts[144], 34317, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

result = await instance.transfer(accounts[3],629,{from:accounts[4]});
await instance.batchTransfer([accounts[96],accounts[71]],2985,{from:accounts[0]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[7],accounts[58],accounts[13],accounts[22]],4954,{from:accounts[0]});

result = await instance.transfer(accounts[0],921,{from:accounts[5]});

await instance.approve(accounts[69], 23828, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[11],accounts[5]],7659,{from:accounts[0]});

result = await instance.transfer(accounts[4],562,{from:accounts[0]});

await instance.approve(accounts[143], 22680, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[143], 1000, {from: accounts[143]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[0],415,{from:accounts[0]});
await instance.batchTransfer([accounts[4]],4310,{from:accounts[0]});


await instance.approve(accounts[41], 37281, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[89],accounts[23],accounts[56],accounts[95],accounts[27],accounts[78],accounts[32],accounts[60]],8268,{from:accounts[0]});

result = await instance.transfer(accounts[5],593,{from:accounts[0]});

await instance.approve(accounts[148], 36953, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[148], 1000, {from: accounts[148]});

});
it('test 12',async() => {

await instance.approve(accounts[160], 39531, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[160], 1000, {from: accounts[160]});

result = await instance.transfer(accounts[1],744,{from:accounts[0]});
await instance.batchTransfer([accounts[95],accounts[26],accounts[19],accounts[94],accounts[80],accounts[13],accounts[85],accounts[44],accounts[84],accounts[2]],9528,{from:accounts[0]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[3],672,{from:accounts[2]});

await instance.approve(accounts[48], 30073, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[48], 1000, {from: accounts[48]});

await instance.batchTransfer([accounts[2],accounts[36],accounts[46],accounts[6],accounts[98]],4266,{from:accounts[0]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[51]],3283,{from:accounts[0]});


await instance.approve(accounts[29], 22268, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[29], 1000, {from: accounts[29]});

result = await instance.transfer(accounts[1],948,{from:accounts[4]});
});
it('test 15',async() => {
result = await instance.transfer(accounts[5],440,{from:accounts[0]});
await instance.batchTransfer([accounts[58],accounts[74]],7700,{from:accounts[0]});


await instance.approve(accounts[115], 38848, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[7],accounts[60],accounts[12]],7325,{from:accounts[0]});

result = await instance.transfer(accounts[4],952,{from:accounts[0]});

await instance.approve(accounts[81], 27419, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[81], 1000, {from: accounts[81]});

});
it('test 17',async() => {

await instance.approve(accounts[87], 23584, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[87], 1000, {from: accounts[87]});

await instance.batchTransfer([accounts[74],accounts[51],accounts[70],accounts[89],accounts[6],accounts[14],accounts[60],accounts[51],accounts[12]],1794,{from:accounts[0]});

result = await instance.transfer(accounts[4],819,{from:accounts[5]});
});
it('test 18',async() => {
result = await instance.transfer(accounts[2],223,{from:accounts[4]});
await instance.batchTransfer([accounts[16],accounts[18],accounts[83]],2376,{from:accounts[0]});


await instance.approve(accounts[50], 36989, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[50], 1000, {from: accounts[50]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[2],601,{from:accounts[3]});
await instance.batchTransfer([accounts[3],accounts[52],accounts[45],accounts[17],accounts[11],accounts[87],accounts[53],accounts[39],accounts[27]],2105,{from:accounts[0]});


await instance.approve(accounts[162], 26614, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[162], 1000, {from: accounts[162]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[140], 34335, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],702,{from:accounts[0]});
await instance.batchTransfer([accounts[23],accounts[6],accounts[52],accounts[9],accounts[9],accounts[7],accounts[37],accounts[65],accounts[18],accounts[46]],3805,{from:accounts[0]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[4],586,{from:accounts[4]});
await instance.batchTransfer([accounts[1]],5072,{from:accounts[0]});


await instance.approve(accounts[156], 20434, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[156], 1000, {from: accounts[156]});

});
it('test 22',async() => {
result = await instance.transfer(accounts[0],534,{from:accounts[1]});

await instance.approve(accounts[192], 39210, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[192], 1000, {from: accounts[192]});

await instance.batchTransfer([accounts[89],accounts[60],accounts[68],accounts[52],accounts[75]],8254,{from:accounts[0]});

});
it('test 23',async() => {

await instance.approve(accounts[98], 27113, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[98], 1000, {from: accounts[98]});

await instance.batchTransfer([accounts[5],accounts[24],accounts[52],accounts[52],accounts[35],accounts[100],accounts[60]],9307,{from:accounts[0]});

result = await instance.transfer(accounts[4],805,{from:accounts[4]});
});
it('test 24',async() => {
await instance.batchTransfer([accounts[41],accounts[4],accounts[32],accounts[63],accounts[1],accounts[36],accounts[88],accounts[36],accounts[100]],5816,{from:accounts[0]});

result = await instance.transfer(accounts[2],740,{from:accounts[0]});

await instance.approve(accounts[127], 33705, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[127], 1000, {from: accounts[127]});

});
it('test 25',async() => {

await instance.approve(accounts[33], 38794, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

await instance.batchTransfer([accounts[57],accounts[27],accounts[81]],4709,{from:accounts[0]});

result = await instance.transfer(accounts[1],980,{from:accounts[3]});
});
it('test 26',async() => {
result = await instance.transfer(accounts[1],703,{from:accounts[2]});

await instance.approve(accounts[10], 39321, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

await instance.batchTransfer([accounts[52]],1098,{from:accounts[0]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[3],857,{from:accounts[5]});

await instance.approve(accounts[14], 25747, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[14], 1000, {from: accounts[14]});

await instance.batchTransfer([accounts[74]],4063,{from:accounts[0]});

});
it('test 28',async() => {

await instance.approve(accounts[97], 21758, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

result = await instance.transfer(accounts[2],338,{from:accounts[3]});
await instance.batchTransfer([accounts[50],accounts[13]],5509,{from:accounts[0]});

});
it('test 29',async() => {

await instance.approve(accounts[126], 23668, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

await instance.batchTransfer([accounts[20]],3615,{from:accounts[0]});

result = await instance.transfer(accounts[2],960,{from:accounts[1]});
});
});
