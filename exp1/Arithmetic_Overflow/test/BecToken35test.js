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
await instance.batchTransfer([accounts[57],accounts[86],accounts[55],accounts[75],accounts[85],accounts[99],accounts[17],accounts[40],accounts[47]],1067,{from:accounts[0]});


await instance.approve(accounts[178], 23598, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[4],449,{from:accounts[3]});
});
it('test 1',async() => {

await instance.approve(accounts[109], 27822, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[109], 1000, {from: accounts[109]});

await instance.batchTransfer([accounts[70],accounts[13],accounts[50],accounts[92],accounts[46],accounts[4],accounts[67],accounts[96]],7575,{from:accounts[0]});

result = await instance.transfer(accounts[4],261,{from:accounts[5]});
});
it('test 2',async() => {

await instance.approve(accounts[53], 31146, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

result = await instance.transfer(accounts[4],366,{from:accounts[2]});
await instance.batchTransfer([accounts[78],accounts[46],accounts[36],accounts[32],accounts[85],accounts[63],accounts[16],accounts[63],accounts[100]],9746,{from:accounts[0]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[2],489,{from:accounts[2]});

await instance.approve(accounts[191], 38270, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[191], 1000, {from: accounts[191]});

await instance.batchTransfer([accounts[76],accounts[41],accounts[61],accounts[69],accounts[18],accounts[64],accounts[24],accounts[64],accounts[66],accounts[46]],2854,{from:accounts[0]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[56],accounts[23],accounts[32],accounts[90],accounts[43],accounts[69],accounts[49],accounts[30],accounts[21],accounts[24]],5742,{from:accounts[0]});

result = await instance.transfer(accounts[3],768,{from:accounts[1]});

await instance.approve(accounts[94], 34228, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[94], 1000, {from: accounts[94]});

});
it('test 5',async() => {

await instance.approve(accounts[164], 26268, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[164], 1000, {from: accounts[164]});

await instance.batchTransfer([accounts[13],accounts[11],accounts[25],accounts[15],accounts[34],accounts[65],accounts[39],accounts[62],accounts[9],accounts[61]],5846,{from:accounts[0]});

result = await instance.transfer(accounts[3],247,{from:accounts[3]});
});
it('test 6',async() => {

await instance.approve(accounts[24], 31219, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[24], 1000, {from: accounts[24]});

await instance.batchTransfer([accounts[60],accounts[26],accounts[37],accounts[77],accounts[79],accounts[61],accounts[44]],9846,{from:accounts[0]});

result = await instance.transfer(accounts[3],652,{from:accounts[2]});
});
it('test 7',async() => {
await instance.batchTransfer([accounts[61],accounts[93],accounts[9],accounts[3],accounts[82],accounts[98],accounts[24],accounts[62],accounts[7],accounts[79]],3764,{from:accounts[0]});

result = await instance.transfer(accounts[0],374,{from:accounts[4]});

await instance.approve(accounts[101], 25666, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[101], 1000, {from: accounts[101]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[1],283,{from:accounts[3]});
await instance.batchTransfer([accounts[37],accounts[1],accounts[28],accounts[75],accounts[36],accounts[12],accounts[56],accounts[95]],8732,{from:accounts[0]});


await instance.approve(accounts[37], 37225, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[5],834,{from:accounts[2]});
await instance.batchTransfer([accounts[65],accounts[9],accounts[64],accounts[4],accounts[99],accounts[36],accounts[51],accounts[49],accounts[27]],4184,{from:accounts[0]});


await instance.approve(accounts[188], 39753, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[188], 1000, {from: accounts[188]});

});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[37], 38721, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

result = await instance.transfer(accounts[2],270,{from:accounts[1]});
await instance.batchTransfer([accounts[65],accounts[67],accounts[77],accounts[36],accounts[48],accounts[10],accounts[30],accounts[70]],2801,{from:accounts[0]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[87],accounts[90],accounts[52]],3617,{from:accounts[0]});


await instance.approve(accounts[69], 35133, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

result = await instance.transfer(accounts[5],581,{from:accounts[4]});
});
it('test 12',async() => {

await instance.approve(accounts[102], 29393, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[102], 1000, {from: accounts[102]});

await instance.batchTransfer([accounts[11],accounts[47],accounts[33]],4805,{from:accounts[0]});

result = await instance.transfer(accounts[0],951,{from:accounts[1]});
});
it('test 13',async() => {
result = await instance.transfer(accounts[3],887,{from:accounts[3]});

await instance.approve(accounts[56], 36072, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[56], 1000, {from: accounts[56]});

await instance.batchTransfer([accounts[97],accounts[67],accounts[22],accounts[59]],2509,{from:accounts[0]});

});
it('test 14',async() => {

await instance.approve(accounts[125], 31803, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

await instance.batchTransfer([accounts[27],accounts[66],accounts[65],accounts[73],accounts[39],accounts[26]],6416,{from:accounts[0]});

result = await instance.transfer(accounts[4],205,{from:accounts[1]});
});
it('test 15',async() => {
await instance.batchTransfer([accounts[14],accounts[40],accounts[86],accounts[10],accounts[46],accounts[55],accounts[23],accounts[66],accounts[12],accounts[57]],2119,{from:accounts[0]});


await instance.approve(accounts[91], 37391, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

result = await instance.transfer(accounts[1],825,{from:accounts[5]});
});
it('test 16',async() => {

await instance.approve(accounts[19], 28537, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

await instance.batchTransfer([accounts[34],accounts[62]],6283,{from:accounts[0]});

result = await instance.transfer(accounts[2],656,{from:accounts[0]});
});
it('test 17',async() => {
await instance.batchTransfer([accounts[11],accounts[9],accounts[80],accounts[82],accounts[3],accounts[45],accounts[100],accounts[16],accounts[87]],5001,{from:accounts[0]});


await instance.approve(accounts[103], 33587, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[103], 1000, {from: accounts[103]});

result = await instance.transfer(accounts[0],759,{from:accounts[0]});
});
it('test 18',async() => {

await instance.approve(accounts[80], 31429, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[80], 1000, {from: accounts[80]});

await instance.batchTransfer([accounts[13],accounts[71],accounts[86],accounts[15],accounts[44],accounts[27],accounts[51],accounts[99],accounts[27],accounts[79]],3038,{from:accounts[0]});

result = await instance.transfer(accounts[1],426,{from:accounts[1]});
});
it('test 19',async() => {
result = await instance.transfer(accounts[1],853,{from:accounts[1]});
await instance.batchTransfer([accounts[48],accounts[40],accounts[70],accounts[60],accounts[98],accounts[47],accounts[80],accounts[95]],9111,{from:accounts[0]});


await instance.approve(accounts[135], 22679, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[102], 29105, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[102], 1000, {from: accounts[102]});

result = await instance.transfer(accounts[1],213,{from:accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[49],accounts[82],accounts[85],accounts[24],accounts[80],accounts[17],accounts[67]],5451,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {
result = await instance.transfer(accounts[5],271,{from:accounts[4]});

await instance.approve(accounts[153], 34759, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[153], 1000, {from: accounts[153]});

await instance.batchTransfer([accounts[39],accounts[41],accounts[87],accounts[57],accounts[76],accounts[99],accounts[70],accounts[50],accounts[19]],7756,{from:accounts[0]});

});
it('test 22',async() => {
result = await instance.transfer(accounts[5],436,{from:accounts[5]});

await instance.approve(accounts[141], 39633, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[141], 1000, {from: accounts[141]});

await instance.batchTransfer([accounts[5],accounts[42],accounts[16],accounts[28]],4793,{from:accounts[0]});

});
it('test 23',async() => {

await instance.approve(accounts[98], 30236, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[98], 1000, {from: accounts[98]});

result = await instance.transfer(accounts[1],655,{from:accounts[0]});
await instance.batchTransfer([accounts[32],accounts[81],accounts[61],accounts[52],accounts[48]],6372,{from:accounts[0]});

});
it('test 24',async() => {
await instance.batchTransfer([accounts[45],accounts[74],accounts[67],accounts[79],accounts[90],accounts[9]],1019,{from:accounts[0]});


await instance.approve(accounts[93], 24428, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

result = await instance.transfer(accounts[2],760,{from:accounts[3]});
});
it('test 25',async() => {
result = await instance.transfer(accounts[3],374,{from:accounts[3]});
await instance.batchTransfer([accounts[99],accounts[7],accounts[53],accounts[62],accounts[41]],7732,{from:accounts[0]});


await instance.approve(accounts[164], 24611, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[164], 1000, {from: accounts[164]});

});
it('test 26',async() => {

await instance.approve(accounts[21], 23109, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

result = await instance.transfer(accounts[4],513,{from:accounts[4]});
await instance.batchTransfer([accounts[64],accounts[6],accounts[54],accounts[19],accounts[58]],7487,{from:accounts[0]});

});
it('test 27',async() => {
await instance.batchTransfer([accounts[22],accounts[45],accounts[70],accounts[97],accounts[22]],1550,{from:accounts[0]});

result = await instance.transfer(accounts[3],379,{from:accounts[2]});

await instance.approve(accounts[137], 31684, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[2],446,{from:accounts[0]});
await instance.batchTransfer([accounts[7]],7951,{from:accounts[0]});


await instance.approve(accounts[74], 20015, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[74], 1000, {from: accounts[74]});

});
it('test 29',async() => {

await instance.approve(accounts[60], 32619, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[60], 1000, {from: accounts[60]});

await instance.batchTransfer([accounts[25],accounts[21],accounts[10]],4713,{from:accounts[0]});

result = await instance.transfer(accounts[4],503,{from:accounts[3]});
});
});
