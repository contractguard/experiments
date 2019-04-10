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
await instance.batchTransfer([accounts[1]],6130,{from:accounts[0]});

result = await instance.transfer(accounts[2],370,{from:accounts[5]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[93], 21154, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[5],942,{from:accounts[0]});

await instance.approve(accounts[176], 22119, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

await instance.batchTransfer([accounts[4],accounts[61],accounts[33],accounts[46],accounts[76],accounts[9],accounts[10],accounts[46],accounts[47],accounts[32]],6046,{from:accounts[0]});

});
it('test 2',async() => {

await instance.approve(accounts[21], 39751, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

await instance.batchTransfer([accounts[75],accounts[86],accounts[14],accounts[84],accounts[49],accounts[37],accounts[41],accounts[57]],2124,{from:accounts[0]});

result = await instance.transfer(accounts[0],476,{from:accounts[5]});
});
it('test 3',async() => {
await instance.batchTransfer([accounts[85],accounts[85],accounts[53],accounts[44],accounts[41]],2814,{from:accounts[0]});


await instance.approve(accounts[61], 39438, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

result = await instance.transfer(accounts[2],847,{from:accounts[4]});
});
it('test 4',async() => {
result = await instance.transfer(accounts[1],636,{from:accounts[0]});
await instance.batchTransfer([accounts[64],accounts[72],accounts[98]],5203,{from:accounts[0]});


await instance.approve(accounts[142], 25298, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[142], 1000, {from: accounts[142]});

});
it('test 5',async() => {
result = await instance.transfer(accounts[2],599,{from:accounts[3]});
await instance.batchTransfer([accounts[34]],2945,{from:accounts[0]});


await instance.approve(accounts[77], 23331, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[44],accounts[91],accounts[39],accounts[16],accounts[33]],2225,{from:accounts[0]});

result = await instance.transfer(accounts[0],760,{from:accounts[2]});

await instance.approve(accounts[2], 33147, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

});
it('test 7',async() => {
await instance.batchTransfer([accounts[19],accounts[63],accounts[28],accounts[69],accounts[54],accounts[79],accounts[80],accounts[18],accounts[21],accounts[69]],1230,{from:accounts[0]});


await instance.approve(accounts[85], 31821, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[85], 1000, {from: accounts[85]});

result = await instance.transfer(accounts[0],720,{from:accounts[5]});
});
it('test 8',async() => {
await instance.batchTransfer([accounts[97],accounts[2]],5113,{from:accounts[0]});


await instance.approve(accounts[160], 27474, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[160], 1000, {from: accounts[160]});

result = await instance.transfer(accounts[2],831,{from:accounts[5]});
});
it('test 9',async() => {
result = await instance.transfer(accounts[2],606,{from:accounts[0]});

await instance.approve(accounts[49], 27582, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[49], 1000, {from: accounts[49]});

await instance.batchTransfer([accounts[96],accounts[21],accounts[14]],7008,{from:accounts[0]});

});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[27],accounts[5],accounts[98],accounts[48]],1485,{from:accounts[0]});


await instance.approve(accounts[195], 35693, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[195], 1000, {from: accounts[195]});

result = await instance.transfer(accounts[3],435,{from:accounts[2]});
});
it('test 11',async() => {

await instance.approve(accounts[10], 29621, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

result = await instance.transfer(accounts[2],308,{from:accounts[0]});
await instance.batchTransfer([accounts[56],accounts[81],accounts[95],accounts[28],accounts[34]],2342,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[36],accounts[38],accounts[31],accounts[24],accounts[1],accounts[10]],2154,{from:accounts[0]});

result = await instance.transfer(accounts[5],293,{from:accounts[0]});

await instance.approve(accounts[26], 37443, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[26], 1000, {from: accounts[26]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[95]],2701,{from:accounts[0]});

result = await instance.transfer(accounts[4],661,{from:accounts[5]});

await instance.approve(accounts[8], 25863, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

});
it('test 14',async() => {

await instance.approve(accounts[4], 22852, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[4], 1000, {from: accounts[4]});

await instance.batchTransfer([accounts[4],accounts[91]],1621,{from:accounts[0]});

result = await instance.transfer(accounts[1],490,{from:accounts[2]});
});
it('test 15',async() => {
result = await instance.transfer(accounts[2],376,{from:accounts[4]});

await instance.approve(accounts[123], 30916, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[123], 1000, {from: accounts[123]});

await instance.batchTransfer([accounts[34],accounts[3],accounts[80],accounts[37],accounts[46],accounts[82],accounts[6]],7604,{from:accounts[0]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[4],807,{from:accounts[0]});
await instance.batchTransfer([accounts[58],accounts[25],accounts[38],accounts[60],accounts[29]],6188,{from:accounts[0]});


await instance.approve(accounts[15], 33378, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[15], 1000, {from: accounts[15]});

});
it('test 17',async() => {

await instance.approve(accounts[67], 25186, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

result = await instance.transfer(accounts[5],824,{from:accounts[3]});
await instance.batchTransfer([accounts[57],accounts[72],accounts[70],accounts[29],accounts[78]],8818,{from:accounts[0]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[5],213,{from:accounts[0]});
await instance.batchTransfer([accounts[6],accounts[25],accounts[42]],7905,{from:accounts[0]});


await instance.approve(accounts[195], 30083, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[195], 1000, {from: accounts[195]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[77],accounts[18],accounts[83],accounts[7],accounts[55],accounts[89],accounts[32],accounts[16],accounts[93],accounts[54]],4449,{from:accounts[0]});

result = await instance.transfer(accounts[4],851,{from:accounts[3]});

await instance.approve(accounts[58], 37780, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[58], 1000, {from: accounts[58]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[91],accounts[93],accounts[66],accounts[2],accounts[80]],5795,{from:accounts[0]});


await instance.approve(accounts[122], 23700, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[122], 1000, {from: accounts[122]});

result = await instance.transfer(accounts[2],658,{from:accounts[0]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {

await instance.approve(accounts[119], 24490, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

await instance.batchTransfer([accounts[22],accounts[22],accounts[58],accounts[92],accounts[9],accounts[85],accounts[86],accounts[85]],3946,{from:accounts[0]});

result = await instance.transfer(accounts[5],295,{from:accounts[4]});
});
it('test 22',async() => {
result = await instance.transfer(accounts[5],618,{from:accounts[1]});

await instance.approve(accounts[97], 21426, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

await instance.batchTransfer([accounts[18],accounts[78],accounts[83],accounts[90],accounts[85],accounts[22],accounts[96],accounts[22]],9795,{from:accounts[0]});

});
it('test 23',async() => {
await instance.batchTransfer([accounts[24],accounts[39],accounts[35],accounts[7],accounts[12],accounts[60],accounts[80]],6715,{from:accounts[0]});

result = await instance.transfer(accounts[2],357,{from:accounts[3]});

await instance.approve(accounts[76], 33459, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

});
it('test 24',async() => {

await instance.approve(accounts[90], 35095, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[90], 1000, {from: accounts[90]});

result = await instance.transfer(accounts[4],445,{from:accounts[3]});
await instance.batchTransfer([accounts[83],accounts[100],accounts[92],accounts[42],accounts[35]],3605,{from:accounts[0]});

});
it('test 25',async() => {

await instance.approve(accounts[26], 30529, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[26], 1000, {from: accounts[26]});

result = await instance.transfer(accounts[5],429,{from:accounts[2]});
await instance.batchTransfer([accounts[9]],2675,{from:accounts[0]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[2],831,{from:accounts[4]});

await instance.approve(accounts[109], 30731, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[109], 1000, {from: accounts[109]});

await instance.batchTransfer([accounts[41],accounts[77],accounts[68],accounts[96],accounts[47],accounts[84],accounts[50]],3126,{from:accounts[0]});

});
it('test 27',async() => {
await instance.batchTransfer([accounts[44],accounts[56],accounts[11],accounts[51]],1783,{from:accounts[0]});

result = await instance.transfer(accounts[2],805,{from:accounts[0]});

await instance.approve(accounts[1], 21107, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[1], 1000, {from: accounts[1]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[57],accounts[30],accounts[86],accounts[69],accounts[49]],7251,{from:accounts[0]});

result = await instance.transfer(accounts[0],358,{from:accounts[3]});

await instance.approve(accounts[186], 21910, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[186], 1000, {from: accounts[186]});

});
it('test 29',async() => {

await instance.approve(accounts[76], 21327, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

result = await instance.transfer(accounts[4],492,{from:accounts[4]});
await instance.batchTransfer([accounts[27]],7625,{from:accounts[0]});

});
});
