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
result = await instance.transfer(accounts[1],201,{from:accounts[1]});
await instance.batchTransfer([accounts[75]],6981,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[49], 35801, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[49], 1000, {from: accounts[49]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[1],809,{from:accounts[1]});

await instance.approve(accounts[30], 39443, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[30], 1000, {from: accounts[30]});

await instance.batchTransfer([accounts[60],accounts[12],accounts[89],accounts[29],accounts[90]],1070,{from:accounts[0]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[28],accounts[23],accounts[91]],7129,{from:accounts[0]});


await instance.approve(accounts[89], 30639, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[89], 1000, {from: accounts[89]});

result = await instance.transfer(accounts[2],981,{from:accounts[4]});
});
it('test 3',async() => {
await instance.batchTransfer([accounts[45],accounts[98],accounts[23]],6298,{from:accounts[0]});

result = await instance.transfer(accounts[3],934,{from:accounts[2]});

await instance.approve(accounts[53], 23659, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[77],accounts[99],accounts[52]],7118,{from:accounts[0]});

result = await instance.transfer(accounts[2],525,{from:accounts[4]});

await instance.approve(accounts[88], 33384, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[88], 1000, {from: accounts[88]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[44],accounts[33]],5412,{from:accounts[0]});

result = await instance.transfer(accounts[2],575,{from:accounts[5]});

await instance.approve(accounts[135], 33005, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[50],accounts[40],accounts[87],accounts[37],accounts[79]],8112,{from:accounts[0]});


await instance.approve(accounts[67], 38247, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

result = await instance.transfer(accounts[2],311,{from:accounts[0]});
});
it('test 7',async() => {
result = await instance.transfer(accounts[0],929,{from:accounts[1]});

await instance.approve(accounts[145], 20340, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

await instance.batchTransfer([accounts[80],accounts[46],accounts[23],accounts[56],accounts[64],accounts[45],accounts[22],accounts[29]],2936,{from:accounts[0]});

});
it('test 8',async() => {

await instance.approve(accounts[153], 35499, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[153], 1000, {from: accounts[153]});

result = await instance.transfer(accounts[5],734,{from:accounts[5]});
await instance.batchTransfer([accounts[1],accounts[15],accounts[87],accounts[50],accounts[64],accounts[21]],6575,{from:accounts[0]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[2],517,{from:accounts[4]});

await instance.approve(accounts[182], 23491, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

await instance.batchTransfer([accounts[22],accounts[50],accounts[89],accounts[68],accounts[95],accounts[20],accounts[20]],4419,{from:accounts[0]});

});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[4],313,{from:accounts[2]});

await instance.approve(accounts[68], 37448, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[68], 1000, {from: accounts[68]});

await instance.batchTransfer([accounts[80],accounts[29],accounts[34],accounts[87],accounts[88],accounts[17],accounts[48]],2102,{from:accounts[0]});

});
it('test 11',async() => {

await instance.approve(accounts[186], 37230, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[186], 1000, {from: accounts[186]});

await instance.batchTransfer([accounts[31]],9956,{from:accounts[0]});

result = await instance.transfer(accounts[1],567,{from:accounts[2]});
});
it('test 12',async() => {
result = await instance.transfer(accounts[2],984,{from:accounts[1]});

await instance.approve(accounts[44], 34144, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

await instance.batchTransfer([accounts[1],accounts[12],accounts[70]],6258,{from:accounts[0]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[3],810,{from:accounts[1]});
await instance.batchTransfer([accounts[9],accounts[20],accounts[54],accounts[12],accounts[31]],5159,{from:accounts[0]});


await instance.approve(accounts[140], 35915, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[56],accounts[6],accounts[30],accounts[7],accounts[24],accounts[82],accounts[73],accounts[22]],6730,{from:accounts[0]});

result = await instance.transfer(accounts[2],419,{from:accounts[0]});

await instance.approve(accounts[12], 39450, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[12], 1000, {from: accounts[12]});

});
it('test 15',async() => {

await instance.approve(accounts[82], 27415, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

result = await instance.transfer(accounts[4],719,{from:accounts[5]});
await instance.batchTransfer([accounts[25],accounts[84],accounts[69],accounts[48]],2424,{from:accounts[0]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[4],879,{from:accounts[3]});
await instance.batchTransfer([accounts[14],accounts[44],accounts[80],accounts[96],accounts[70],accounts[96],accounts[14],accounts[31],accounts[24],accounts[10]],1931,{from:accounts[0]});


await instance.approve(accounts[119], 38183, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[9],accounts[6],accounts[64]],5524,{from:accounts[0]});

result = await instance.transfer(accounts[0],345,{from:accounts[2]});

await instance.approve(accounts[69], 24177, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[5],580,{from:accounts[3]});

await instance.approve(accounts[26], 24665, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[26], 1000, {from: accounts[26]});

await instance.batchTransfer([accounts[76],accounts[96],accounts[15],accounts[16],accounts[67],accounts[81],accounts[24],accounts[53]],3303,{from:accounts[0]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[19],accounts[31],accounts[53]],6930,{from:accounts[0]});

result = await instance.transfer(accounts[1],266,{from:accounts[3]});

await instance.approve(accounts[12], 28995, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[12], 1000, {from: accounts[12]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[0],593,{from:accounts[1]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[192], 24546, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[192], 1000, {from: accounts[192]});

await instance.batchTransfer([accounts[50],accounts[34],accounts[42],accounts[93],accounts[10]],3513,{from:accounts[0]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[0],386,{from:accounts[2]});
await instance.batchTransfer([accounts[59],accounts[45],accounts[63],accounts[35],accounts[93],accounts[85]],3799,{from:accounts[0]});


await instance.approve(accounts[9], 35103, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 22',async() => {

await instance.approve(accounts[198], 36459, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[198], 1000, {from: accounts[198]});

result = await instance.transfer(accounts[0],297,{from:accounts[0]});
await instance.batchTransfer([accounts[10],accounts[35],accounts[28],accounts[86]],6661,{from:accounts[0]});

});
it('test 23',async() => {

await instance.approve(accounts[5], 22370, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[5], 1000, {from: accounts[5]});

result = await instance.transfer(accounts[3],591,{from:accounts[5]});
await instance.batchTransfer([accounts[74],accounts[72],accounts[90],accounts[77],accounts[76],accounts[16],accounts[10]],7986,{from:accounts[0]});

});
it('test 24',async() => {
result = await instance.transfer(accounts[1],442,{from:accounts[0]});

await instance.approve(accounts[175], 39888, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[175], 1000, {from: accounts[175]});

await instance.batchTransfer([accounts[18],accounts[7],accounts[64],accounts[59],accounts[4],accounts[81],accounts[66]],3134,{from:accounts[0]});

});
it('test 25',async() => {

await instance.approve(accounts[93], 36953, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

await instance.batchTransfer([accounts[55],accounts[45],accounts[32],accounts[95],accounts[75],accounts[71],accounts[85],accounts[48]],2276,{from:accounts[0]});

result = await instance.transfer(accounts[3],727,{from:accounts[3]});
});
it('test 26',async() => {

await instance.approve(accounts[94], 29627, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[94], 1000, {from: accounts[94]});

await instance.batchTransfer([accounts[42],accounts[82],accounts[52],accounts[76],accounts[88],accounts[60],accounts[16],accounts[30]],3043,{from:accounts[0]});

result = await instance.transfer(accounts[5],391,{from:accounts[4]});
});
it('test 27',async() => {
result = await instance.transfer(accounts[2],332,{from:accounts[4]});

await instance.approve(accounts[128], 22961, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[128], 1000, {from: accounts[128]});

await instance.batchTransfer([accounts[38],accounts[2],accounts[72],accounts[12],accounts[33],accounts[72]],5416,{from:accounts[0]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[0],765,{from:accounts[0]});
await instance.batchTransfer([accounts[78],accounts[100],accounts[94],accounts[13],accounts[66],accounts[43],accounts[14]],9817,{from:accounts[0]});


await instance.approve(accounts[135], 21415, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

});
it('test 29',async() => {

await instance.approve(accounts[4], 35040, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[4], 1000, {from: accounts[4]});

await instance.batchTransfer([accounts[91],accounts[81],accounts[56],accounts[27],accounts[25],accounts[13],accounts[15]],3602,{from:accounts[0]});

result = await instance.transfer(accounts[1],969,{from:accounts[0]});
});
});
