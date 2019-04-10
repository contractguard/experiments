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


await instance.approve(accounts[3], 28492, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[3], 1000, {from: accounts[3]});

await instance.batchTransfer([accounts[55],accounts[63],accounts[14]],8417,{from:accounts[0]});

result = await instance.transfer(accounts[4],277,{from:accounts[5]});
});
it('test 1',async() => {
result = await instance.transfer(accounts[3],608,{from:accounts[0]});
await instance.batchTransfer([accounts[40]],4427,{from:accounts[0]});


await instance.approve(accounts[93], 32772, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[5],244,{from:accounts[2]});
await instance.batchTransfer([accounts[14],accounts[27],accounts[21],accounts[85]],8827,{from:accounts[0]});


await instance.approve(accounts[145], 28457, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

});
it('test 3',async() => {

await instance.approve(accounts[22], 24288, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[22], 1000, {from: accounts[22]});

await instance.batchTransfer([accounts[21],accounts[23],accounts[92]],6327,{from:accounts[0]});

result = await instance.transfer(accounts[5],519,{from:accounts[3]});
});
it('test 4',async() => {
result = await instance.transfer(accounts[1],758,{from:accounts[1]});
await instance.batchTransfer([accounts[58],accounts[24],accounts[77],accounts[47],accounts[8],accounts[51],accounts[97]],7657,{from:accounts[0]});


await instance.approve(accounts[140], 23008, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

});
it('test 5',async() => {
result = await instance.transfer(accounts[2],799,{from:accounts[3]});
await instance.batchTransfer([accounts[49],accounts[29],accounts[61],accounts[66],accounts[9],accounts[7]],3772,{from:accounts[0]});


await instance.approve(accounts[120], 31039, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[83],accounts[22],accounts[47],accounts[48],accounts[69],accounts[26]],6428,{from:accounts[0]});

result = await instance.transfer(accounts[2],506,{from:accounts[0]});

await instance.approve(accounts[83], 29379, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[5],535,{from:accounts[1]});
await instance.batchTransfer([accounts[57],accounts[74],accounts[44],accounts[40]],9548,{from:accounts[0]});


await instance.approve(accounts[42], 20563, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[2],352,{from:accounts[1]});

await instance.approve(accounts[172], 27131, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

await instance.batchTransfer([accounts[18],accounts[33],accounts[3],accounts[75],accounts[43],accounts[16],accounts[60]],4368,{from:accounts[0]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[5],390,{from:accounts[3]});

await instance.approve(accounts[46], 21751, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[46], 1000, {from: accounts[46]});

await instance.batchTransfer([accounts[1],accounts[3],accounts[84]],6010,{from:accounts[0]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[2],721,{from:accounts[2]});

await instance.approve(accounts[33], 21091, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[38],accounts[24],accounts[37],accounts[37],accounts[55],accounts[74],accounts[7]],6264,{from:accounts[0]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[31],accounts[80],accounts[57],accounts[18],accounts[92],accounts[28],accounts[55],accounts[28]],3996,{from:accounts[0]});

result = await instance.transfer(accounts[1],672,{from:accounts[3]});

await instance.approve(accounts[135], 20630, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

});
it('test 12',async() => {

await instance.approve(accounts[27], 39567, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

await instance.batchTransfer([accounts[51],accounts[94],accounts[89],accounts[45],accounts[80]],2618,{from:accounts[0]});

result = await instance.transfer(accounts[2],459,{from:accounts[4]});
});
it('test 13',async() => {

await instance.approve(accounts[200], 39189, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[200], 1000, {from: accounts[200]});

result = await instance.transfer(accounts[0],232,{from:accounts[5]});
await instance.batchTransfer([accounts[17],accounts[18],accounts[3]],3187,{from:accounts[0]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[7],accounts[88],accounts[47],accounts[4],accounts[56],accounts[75],accounts[37]],1971,{from:accounts[0]});

result = await instance.transfer(accounts[0],719,{from:accounts[0]});

await instance.approve(accounts[164], 20033, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[164], 1000, {from: accounts[164]});

});
it('test 15',async() => {

await instance.approve(accounts[27], 35714, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

await instance.batchTransfer([accounts[7],accounts[5],accounts[33],accounts[67]],6268,{from:accounts[0]});

result = await instance.transfer(accounts[5],626,{from:accounts[4]});
});
it('test 16',async() => {
await instance.batchTransfer([accounts[33],accounts[83],accounts[23],accounts[76],accounts[7],accounts[45],accounts[31],accounts[77],accounts[17]],5449,{from:accounts[0]});

result = await instance.transfer(accounts[3],985,{from:accounts[5]});

await instance.approve(accounts[176], 28809, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[62],accounts[64],accounts[58],accounts[51],accounts[35],accounts[52],accounts[84],accounts[6],accounts[17]],1356,{from:accounts[0]});

result = await instance.transfer(accounts[1],595,{from:accounts[2]});

await instance.approve(accounts[99], 20204, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[99], 1000, {from: accounts[99]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[80],accounts[84]],5305,{from:accounts[0]});


await instance.approve(accounts[99], 29971, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[99], 1000, {from: accounts[99]});

result = await instance.transfer(accounts[4],328,{from:accounts[1]});
});
it('test 19',async() => {
await instance.batchTransfer([accounts[66],accounts[98],accounts[50],accounts[64],accounts[92],accounts[55],accounts[82],accounts[77]],8979,{from:accounts[0]});

result = await instance.transfer(accounts[5],357,{from:accounts[5]});

await instance.approve(accounts[175], 39401, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[175], 1000, {from: accounts[175]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[32],accounts[69],accounts[89],accounts[11],accounts[86],accounts[13],accounts[95],accounts[5],accounts[47],accounts[62]],6725,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[2],471,{from:accounts[3]});

await instance.approve(accounts[43], 20902, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[43], 1000, {from: accounts[43]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[1],364,{from:accounts[2]});
await instance.batchTransfer([accounts[94],accounts[92],accounts[31],accounts[44],accounts[4],accounts[2],accounts[64],accounts[99],accounts[10],accounts[58]],5664,{from:accounts[0]});


await instance.approve(accounts[178], 20235, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

});
it('test 22',async() => {

await instance.approve(accounts[126], 33875, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

result = await instance.transfer(accounts[4],375,{from:accounts[3]});
await instance.batchTransfer([accounts[38],accounts[68],accounts[7],accounts[19],accounts[66],accounts[59],accounts[90],accounts[37]],9266,{from:accounts[0]});

});
it('test 23',async() => {
result = await instance.transfer(accounts[2],895,{from:accounts[0]});

await instance.approve(accounts[18], 38158, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

await instance.batchTransfer([accounts[79]],4513,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 24',async() => {
result = await instance.transfer(accounts[5],574,{from:accounts[2]});
await instance.batchTransfer([accounts[95],accounts[41],accounts[30],accounts[59],accounts[61],accounts[13]],4201,{from:accounts[0]});


await instance.approve(accounts[187], 22897, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[187], 1000, {from: accounts[187]});

});
it('test 25',async() => {
result = await instance.transfer(accounts[2],245,{from:accounts[3]});

await instance.approve(accounts[152], 20471, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

await instance.batchTransfer([accounts[91],accounts[16],accounts[92],accounts[24],accounts[90],accounts[21],accounts[34],accounts[46]],9814,{from:accounts[0]});

});
it('test 26',async() => {

await instance.approve(accounts[161], 34055, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[161], 1000, {from: accounts[161]});

result = await instance.transfer(accounts[5],966,{from:accounts[4]});
await instance.batchTransfer([accounts[95],accounts[82],accounts[2],accounts[89],accounts[57],accounts[89]],4236,{from:accounts[0]});

});
it('test 27',async() => {

await instance.approve(accounts[121], 32647, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

await instance.batchTransfer([accounts[91],accounts[71],accounts[41],accounts[67],accounts[91],accounts[18],accounts[72]],6772,{from:accounts[0]});

result = await instance.transfer(accounts[1],480,{from:accounts[0]});
});
it('test 28',async() => {
result = await instance.transfer(accounts[3],418,{from:accounts[5]});

await instance.approve(accounts[77], 28087, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

await instance.batchTransfer([accounts[27],accounts[44],accounts[32]],6439,{from:accounts[0]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[2],702,{from:accounts[3]});

await instance.approve(accounts[35], 37621, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

await instance.batchTransfer([accounts[12],accounts[88],accounts[80],accounts[11],accounts[50],accounts[43],accounts[87],accounts[69],accounts[33],accounts[49]],3654,{from:accounts[0]});

});
});
