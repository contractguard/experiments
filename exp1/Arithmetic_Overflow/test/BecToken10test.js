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

await instance.approve(accounts[21], 27395, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

result = await instance.transfer(accounts[5],357,{from:accounts[4]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[77],accounts[85],accounts[52],accounts[83],accounts[92],accounts[45],accounts[82],accounts[54]],4026,{from:accounts[0]});

});
it('test 1',async() => {

await instance.approve(accounts[67], 24703, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

result = await instance.transfer(accounts[2],367,{from:accounts[0]});
await instance.batchTransfer([accounts[22],accounts[55],accounts[53],accounts[64],accounts[46],accounts[78],accounts[66],accounts[66],accounts[42]],8668,{from:accounts[0]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[1],349,{from:accounts[5]});
await instance.batchTransfer([accounts[54],accounts[14],accounts[4],accounts[44],accounts[9],accounts[36],accounts[19],accounts[9]],1250,{from:accounts[0]});


await instance.approve(accounts[178], 30534, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[3],798,{from:accounts[3]});
await instance.batchTransfer([accounts[44],accounts[23],accounts[36],accounts[27]],8914,{from:accounts[0]});


await instance.approve(accounts[12], 36167, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[12], 1000, {from: accounts[12]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[0],328,{from:accounts[3]});

await instance.approve(accounts[105], 30583, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[105], 1000, {from: accounts[105]});

await instance.batchTransfer([accounts[78],accounts[24],accounts[58],accounts[30],accounts[90],accounts[98],accounts[40],accounts[54]],4684,{from:accounts[0]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[25],accounts[15],accounts[57],accounts[38],accounts[68],accounts[27],accounts[17]],8322,{from:accounts[0]});


await instance.approve(accounts[79], 22615, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[79], 1000, {from: accounts[79]});

result = await instance.transfer(accounts[5],773,{from:accounts[5]});
});
it('test 6',async() => {
await instance.batchTransfer([accounts[36],accounts[83],accounts[4],accounts[87],accounts[74],accounts[57],accounts[48],accounts[6],accounts[26],accounts[1]],9862,{from:accounts[0]});

result = await instance.transfer(accounts[1],620,{from:accounts[1]});

await instance.approve(accounts[38], 35779, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[38], 1000, {from: accounts[38]});

});
it('test 7',async() => {

await instance.approve(accounts[10], 26708, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

await instance.batchTransfer([accounts[47],accounts[92],accounts[14],accounts[6],accounts[17],accounts[42]],4267,{from:accounts[0]});

result = await instance.transfer(accounts[0],589,{from:accounts[5]});
});
it('test 8',async() => {

await instance.approve(accounts[15], 34321, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[15], 1000, {from: accounts[15]});

await instance.batchTransfer([accounts[84],accounts[90],accounts[9],accounts[72],accounts[10]],7900,{from:accounts[0]});

result = await instance.transfer(accounts[4],270,{from:accounts[4]});
});
it('test 9',async() => {

await instance.approve(accounts[193], 25120, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[193], 1000, {from: accounts[193]});

await instance.batchTransfer([accounts[9],accounts[2],accounts[29],accounts[65],accounts[4],accounts[89]],9011,{from:accounts[0]});

result = await instance.transfer(accounts[0],257,{from:accounts[1]});
});
it('test 10',async() => {
result = await instance.transfer(accounts[5],275,{from:accounts[0]});
await instance.batchTransfer([accounts[69],accounts[90],accounts[46],accounts[34]],5995,{from:accounts[0]});


await instance.approve(accounts[76], 27017, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[15],accounts[78],accounts[39]],4756,{from:accounts[0]});

result = await instance.transfer(accounts[2],862,{from:accounts[0]});

await instance.approve(accounts[45], 28255, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

});
it('test 12',async() => {
result = await instance.transfer(accounts[0],389,{from:accounts[5]});

await instance.approve(accounts[39], 33508, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

await instance.batchTransfer([accounts[32],accounts[34],accounts[72],accounts[20],accounts[76],accounts[91],accounts[11],accounts[24],accounts[34]],4358,{from:accounts[0]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[3],393,{from:accounts[4]});

await instance.approve(accounts[97], 39634, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

await instance.batchTransfer([accounts[91],accounts[9],accounts[8],accounts[95],accounts[98],accounts[70]],4479,{from:accounts[0]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[4],589,{from:accounts[1]});

await instance.approve(accounts[97], 32787, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

await instance.batchTransfer([accounts[46],accounts[65],accounts[81],accounts[31],accounts[64],accounts[69]],6304,{from:accounts[0]});

});
it('test 15',async() => {

await instance.approve(accounts[117], 35546, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[117], 1000, {from: accounts[117]});

await instance.batchTransfer([accounts[98],accounts[57],accounts[74],accounts[79],accounts[1],accounts[53]],6295,{from:accounts[0]});

result = await instance.transfer(accounts[4],834,{from:accounts[3]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[4],758,{from:accounts[3]});

await instance.approve(accounts[175], 24472, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[175], 1000, {from: accounts[175]});

await instance.batchTransfer([accounts[55],accounts[36],accounts[33],accounts[8],accounts[71],accounts[18],accounts[77],accounts[70]],8818,{from:accounts[0]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[1],524,{from:accounts[2]});

await instance.approve(accounts[179], 30308, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[179], 1000, {from: accounts[179]});

await instance.batchTransfer([accounts[100],accounts[81],accounts[10]],9607,{from:accounts[0]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[1],572,{from:accounts[3]});
await instance.batchTransfer([accounts[9]],9314,{from:accounts[0]});


await instance.approve(accounts[193], 29505, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[193], 1000, {from: accounts[193]});

});
it('test 19',async() => {

await instance.approve(accounts[154], 21425, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

result = await instance.transfer(accounts[0],269,{from:accounts[4]});
await instance.batchTransfer([accounts[92],accounts[12],accounts[50],accounts[70],accounts[17],accounts[71],accounts[52],accounts[7],accounts[100],accounts[59]],4515,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[53], 36982, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

await instance.batchTransfer([accounts[71],accounts[85],accounts[12],accounts[54]],9455,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],419,{from:accounts[4]});
});
it('test 21',async() => {

await instance.approve(accounts[55], 20779, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

result = await instance.transfer(accounts[5],839,{from:accounts[0]});
await instance.batchTransfer([accounts[13],accounts[80],accounts[75],accounts[47],accounts[15],accounts[87]],4099,{from:accounts[0]});

});
it('test 22',async() => {

await instance.approve(accounts[100], 35286, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[100], 1000, {from: accounts[100]});

result = await instance.transfer(accounts[5],775,{from:accounts[3]});
await instance.batchTransfer([accounts[97],accounts[65],accounts[50]],6249,{from:accounts[0]});

});
it('test 23',async() => {

await instance.approve(accounts[110], 29041, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[110], 1000, {from: accounts[110]});

result = await instance.transfer(accounts[1],999,{from:accounts[2]});
await instance.batchTransfer([accounts[6],accounts[61]],7817,{from:accounts[0]});

});
it('test 24',async() => {
await instance.batchTransfer([accounts[75]],4448,{from:accounts[0]});

result = await instance.transfer(accounts[5],468,{from:accounts[4]});

await instance.approve(accounts[5], 39677, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[5], 1000, {from: accounts[5]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 25',async() => {

await instance.approve(accounts[67], 31320, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

result = await instance.transfer(accounts[1],519,{from:accounts[1]});
await instance.batchTransfer([accounts[97],accounts[31],accounts[71],accounts[93]],4695,{from:accounts[0]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[4],582,{from:accounts[1]});
await instance.batchTransfer([accounts[63]],8161,{from:accounts[0]});


await instance.approve(accounts[111], 26618, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[111], 1000, {from: accounts[111]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[2],374,{from:accounts[1]});
await instance.batchTransfer([accounts[64],accounts[54],accounts[88],accounts[42]],2570,{from:accounts[0]});


await instance.approve(accounts[125], 33975, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[4],888,{from:accounts[4]});
await instance.batchTransfer([accounts[72],accounts[64],accounts[89],accounts[3],accounts[19],accounts[8],accounts[61],accounts[37]],4786,{from:accounts[0]});


await instance.approve(accounts[104], 38859, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[104], 1000, {from: accounts[104]});

});
it('test 29',async() => {

await instance.approve(accounts[121], 31766, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

result = await instance.transfer(accounts[0],846,{from:accounts[2]});
await instance.batchTransfer([accounts[42],accounts[32],accounts[31],accounts[78],accounts[64],accounts[48],accounts[89],accounts[19]],5613,{from:accounts[0]});

});
});
