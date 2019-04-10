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
result = await instance.transfer(accounts[3],219,{from:accounts[2]});

await instance.approve(accounts[5], 20940, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[5], 1000, {from: accounts[5]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[87],accounts[12],accounts[79],accounts[27],accounts[70]],9163,{from:accounts[0]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[97],accounts[94],accounts[82],accounts[80],accounts[91],accounts[57]],5525,{from:accounts[0]});


await instance.approve(accounts[21], 37765, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

result = await instance.transfer(accounts[5],413,{from:accounts[5]});
});
it('test 2',async() => {
result = await instance.transfer(accounts[4],740,{from:accounts[1]});

await instance.approve(accounts[84], 24106, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[84], 1000, {from: accounts[84]});

await instance.batchTransfer([accounts[27],accounts[61],accounts[68]],5659,{from:accounts[0]});

});
it('test 3',async() => {

await instance.approve(accounts[140], 25215, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

result = await instance.transfer(accounts[2],391,{from:accounts[1]});
await instance.batchTransfer([accounts[70],accounts[100],accounts[21],accounts[45],accounts[90],accounts[71],accounts[87],accounts[51]],6836,{from:accounts[0]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[3],629,{from:accounts[1]});
await instance.batchTransfer([accounts[17],accounts[62],accounts[5],accounts[41],accounts[69],accounts[84]],5714,{from:accounts[0]});


await instance.approve(accounts[78], 28761, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[78], 1000, {from: accounts[78]});

});
it('test 5',async() => {

await instance.approve(accounts[138], 21548, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[138], 1000, {from: accounts[138]});

result = await instance.transfer(accounts[5],411,{from:accounts[3]});
await instance.batchTransfer([accounts[81],accounts[62],accounts[14],accounts[90]],4606,{from:accounts[0]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[4],839,{from:accounts[4]});

await instance.approve(accounts[154], 32728, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

await instance.batchTransfer([accounts[52],accounts[73],accounts[42],accounts[90],accounts[79],accounts[23],accounts[65],accounts[69]],2865,{from:accounts[0]});

});
it('test 7',async() => {
await instance.batchTransfer([accounts[37],accounts[88],accounts[77],accounts[16],accounts[69],accounts[48],accounts[29],accounts[78],accounts[31]],5779,{from:accounts[0]});


await instance.approve(accounts[58], 24499, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[58], 1000, {from: accounts[58]});

result = await instance.transfer(accounts[4],288,{from:accounts[2]});
});
it('test 8',async() => {

await instance.approve(accounts[123], 28917, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[123], 1000, {from: accounts[123]});

result = await instance.transfer(accounts[3],227,{from:accounts[4]});
await instance.batchTransfer([accounts[15],accounts[42],accounts[95],accounts[80],accounts[63],accounts[44]],6607,{from:accounts[0]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[4],331,{from:accounts[1]});

await instance.approve(accounts[22], 39128, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[22], 1000, {from: accounts[22]});

await instance.batchTransfer([accounts[52],accounts[98],accounts[91],accounts[83],accounts[54]],4769,{from:accounts[0]});

});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[38], 21220, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[38], 1000, {from: accounts[38]});

await instance.batchTransfer([accounts[99],accounts[58],accounts[76],accounts[69],accounts[6],accounts[45],accounts[18],accounts[62]],6350,{from:accounts[0]});

result = await instance.transfer(accounts[3],985,{from:accounts[3]});
});
it('test 11',async() => {

await instance.approve(accounts[198], 37603, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[198], 1000, {from: accounts[198]});

result = await instance.transfer(accounts[5],852,{from:accounts[1]});
await instance.batchTransfer([accounts[72],accounts[80],accounts[95],accounts[28]],1308,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[30],accounts[51],accounts[30],accounts[77],accounts[81],accounts[61],accounts[30],accounts[47]],3513,{from:accounts[0]});

result = await instance.transfer(accounts[3],347,{from:accounts[1]});

await instance.approve(accounts[105], 22867, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[105], 1000, {from: accounts[105]});

});
it('test 13',async() => {

await instance.approve(accounts[70], 31610, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[70], 1000, {from: accounts[70]});

result = await instance.transfer(accounts[0],798,{from:accounts[3]});
await instance.batchTransfer([accounts[49],accounts[18]],8370,{from:accounts[0]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[43],accounts[96],accounts[91],accounts[58],accounts[63]],4635,{from:accounts[0]});

result = await instance.transfer(accounts[1],755,{from:accounts[4]});

await instance.approve(accounts[22], 37432, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[22], 1000, {from: accounts[22]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[30],accounts[23],accounts[64],accounts[1],accounts[24],accounts[55]],3136,{from:accounts[0]});

result = await instance.transfer(accounts[5],842,{from:accounts[5]});

await instance.approve(accounts[98], 20316, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[98], 1000, {from: accounts[98]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[0],723,{from:accounts[0]});

await instance.approve(accounts[111], 24979, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[111], 1000, {from: accounts[111]});

await instance.batchTransfer([accounts[78],accounts[29]],8993,{from:accounts[0]});

});
it('test 17',async() => {

await instance.approve(accounts[9], 22196, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

result = await instance.transfer(accounts[5],687,{from:accounts[4]});
await instance.batchTransfer([accounts[94]],8107,{from:accounts[0]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[46],accounts[73],accounts[87],accounts[90],accounts[41],accounts[33]],6043,{from:accounts[0]});


await instance.approve(accounts[87], 35983, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[87], 1000, {from: accounts[87]});

result = await instance.transfer(accounts[5],794,{from:accounts[4]});
});
it('test 19',async() => {

await instance.approve(accounts[25], 32563, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[25], 1000, {from: accounts[25]});

result = await instance.transfer(accounts[4],586,{from:accounts[1]});
await instance.batchTransfer([accounts[86],accounts[45],accounts[60]],5821,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[88],accounts[27],accounts[63],accounts[1],accounts[17],accounts[99],accounts[38]],1612,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[2],715,{from:accounts[1]});

await instance.approve(accounts[44], 27207, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[4],651,{from:accounts[3]});

await instance.approve(accounts[111], 35009, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[111], 1000, {from: accounts[111]});

await instance.batchTransfer([accounts[46],accounts[10]],3188,{from:accounts[0]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[99],accounts[20],accounts[19]],8406,{from:accounts[0]});

result = await instance.transfer(accounts[3],461,{from:accounts[1]});

await instance.approve(accounts[130], 27267, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[130], 1000, {from: accounts[130]});

});
it('test 23',async() => {

await instance.approve(accounts[118], 38542, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[118], 1000, {from: accounts[118]});

await instance.batchTransfer([accounts[60],accounts[70]],8331,{from:accounts[0]});

result = await instance.transfer(accounts[4],910,{from:accounts[3]});
});
it('test 24',async() => {
await instance.batchTransfer([accounts[99],accounts[83],accounts[2]],3432,{from:accounts[0]});


await instance.approve(accounts[13], 25060, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[13], 1000, {from: accounts[13]});

result = await instance.transfer(accounts[0],806,{from:accounts[5]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 25',async() => {
result = await instance.transfer(accounts[0],539,{from:accounts[0]});
await instance.batchTransfer([accounts[30],accounts[17],accounts[41],accounts[57],accounts[65],accounts[70],accounts[93],accounts[4],accounts[37],accounts[25]],8826,{from:accounts[0]});


await instance.approve(accounts[76], 34968, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[0],817,{from:accounts[3]});
await instance.batchTransfer([accounts[87]],6540,{from:accounts[0]});


await instance.approve(accounts[105], 21154, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[105], 1000, {from: accounts[105]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[3],361,{from:accounts[3]});
await instance.batchTransfer([accounts[15],accounts[69],accounts[13]],7086,{from:accounts[0]});


await instance.approve(accounts[68], 21251, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[68], 1000, {from: accounts[68]});

});
it('test 28',async() => {

await instance.approve(accounts[1], 27132, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[1], 1000, {from: accounts[1]});

result = await instance.transfer(accounts[4],756,{from:accounts[4]});
await instance.batchTransfer([accounts[12],accounts[69],accounts[74],accounts[18],accounts[50],accounts[87],accounts[5],accounts[24]],9410,{from:accounts[0]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[1],668,{from:accounts[4]});

await instance.approve(accounts[150], 33709, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[150], 1000, {from: accounts[150]});

await instance.batchTransfer([accounts[61]],7143,{from:accounts[0]});

});
});
