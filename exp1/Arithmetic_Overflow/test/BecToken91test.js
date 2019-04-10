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

await instance.approve(accounts[174], 24435, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[38],accounts[98],accounts[84],accounts[100],accounts[47],accounts[54]],7484,{from:accounts[0]});

result = await instance.transfer(accounts[1],811,{from:accounts[0]});
});
it('test 1',async() => {

await instance.approve(accounts[61], 37692, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

result = await instance.transfer(accounts[5],253,{from:accounts[1]});
await instance.batchTransfer([accounts[7],accounts[78],accounts[44],accounts[85],accounts[93],accounts[33],accounts[84],accounts[66],accounts[65],accounts[76]],7678,{from:accounts[0]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[9],accounts[58],accounts[24],accounts[32]],7457,{from:accounts[0]});

result = await instance.transfer(accounts[4],420,{from:accounts[0]});

await instance.approve(accounts[129], 22523, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[5],879,{from:accounts[1]});

await instance.approve(accounts[49], 32864, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[49], 1000, {from: accounts[49]});

await instance.batchTransfer([accounts[34],accounts[4],accounts[31],accounts[54],accounts[78],accounts[79],accounts[82],accounts[27],accounts[19]],9408,{from:accounts[0]});

});
it('test 4',async() => {

await instance.approve(accounts[87], 27744, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[87], 1000, {from: accounts[87]});

await instance.batchTransfer([accounts[19],accounts[76],accounts[80],accounts[94],accounts[25],accounts[56],accounts[58],accounts[83],accounts[55]],2561,{from:accounts[0]});

result = await instance.transfer(accounts[5],433,{from:accounts[2]});
});
it('test 5',async() => {

await instance.approve(accounts[120], 20610, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

result = await instance.transfer(accounts[2],958,{from:accounts[2]});
await instance.batchTransfer([accounts[75],accounts[100],accounts[20],accounts[87],accounts[25],accounts[8],accounts[80],accounts[10]],1422,{from:accounts[0]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[89]],3021,{from:accounts[0]});

result = await instance.transfer(accounts[1],599,{from:accounts[1]});

await instance.approve(accounts[81], 21920, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[81], 1000, {from: accounts[81]});

});
it('test 7',async() => {

await instance.approve(accounts[84], 35087, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[84], 1000, {from: accounts[84]});

await instance.batchTransfer([accounts[18],accounts[89],accounts[26],accounts[44]],1920,{from:accounts[0]});

result = await instance.transfer(accounts[3],239,{from:accounts[2]});
});
it('test 8',async() => {
await instance.batchTransfer([accounts[12],accounts[61],accounts[8],accounts[58]],4720,{from:accounts[0]});

result = await instance.transfer(accounts[5],312,{from:accounts[3]});

await instance.approve(accounts[118], 28888, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[118], 1000, {from: accounts[118]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[61],accounts[66],accounts[34],accounts[71],accounts[8],accounts[46],accounts[86],accounts[70],accounts[53]],2167,{from:accounts[0]});

result = await instance.transfer(accounts[5],206,{from:accounts[2]});

await instance.approve(accounts[109], 31039, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[109], 1000, {from: accounts[109]});

});
it('test 10',async() => {
await instance.batchTransfer([accounts[15],accounts[55],accounts[74]],2314,{from:accounts[0]});


await instance.approve(accounts[132], 32004, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[132], 1000, {from: accounts[132]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],245,{from:accounts[3]});
});
it('test 11',async() => {
await instance.batchTransfer([accounts[4],accounts[89],accounts[12],accounts[10],accounts[36],accounts[33],accounts[21],accounts[15]],7862,{from:accounts[0]});

result = await instance.transfer(accounts[0],235,{from:accounts[1]});

await instance.approve(accounts[38], 32951, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[38], 1000, {from: accounts[38]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[12],accounts[92],accounts[76],accounts[63],accounts[8],accounts[75],accounts[11]],8125,{from:accounts[0]});


await instance.approve(accounts[186], 20669, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[186], 1000, {from: accounts[186]});

result = await instance.transfer(accounts[2],262,{from:accounts[1]});
});
it('test 13',async() => {

await instance.approve(accounts[192], 23492, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[192], 1000, {from: accounts[192]});

result = await instance.transfer(accounts[3],230,{from:accounts[2]});
await instance.batchTransfer([accounts[93],accounts[61],accounts[24],accounts[1],accounts[67],accounts[83],accounts[60],accounts[9]],9613,{from:accounts[0]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[26],accounts[92],accounts[10],accounts[76],accounts[2],accounts[60],accounts[41],accounts[74],accounts[51]],7290,{from:accounts[0]});


await instance.approve(accounts[142], 25453, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[142], 1000, {from: accounts[142]});

result = await instance.transfer(accounts[3],936,{from:accounts[5]});
});
it('test 15',async() => {

await instance.approve(accounts[35], 24817, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

result = await instance.transfer(accounts[0],552,{from:accounts[4]});
await instance.batchTransfer([accounts[60],accounts[81],accounts[100]],7523,{from:accounts[0]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[77]],9366,{from:accounts[0]});


await instance.approve(accounts[170], 28569, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

result = await instance.transfer(accounts[5],317,{from:accounts[0]});
});
it('test 17',async() => {
await instance.batchTransfer([accounts[68],accounts[40]],7386,{from:accounts[0]});

result = await instance.transfer(accounts[2],296,{from:accounts[4]});

await instance.approve(accounts[186], 34504, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[186], 1000, {from: accounts[186]});

});
it('test 18',async() => {

await instance.approve(accounts[78], 24748, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[78], 1000, {from: accounts[78]});

result = await instance.transfer(accounts[3],517,{from:accounts[0]});
await instance.batchTransfer([accounts[49],accounts[73],accounts[7],accounts[54],accounts[49],accounts[70],accounts[22]],5341,{from:accounts[0]});

});
it('test 19',async() => {

await instance.approve(accounts[178], 32105, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

await instance.batchTransfer([accounts[60],accounts[72],accounts[21],accounts[33],accounts[27],accounts[75],accounts[64],accounts[54]],7653,{from:accounts[0]});

result = await instance.transfer(accounts[0],956,{from:accounts[0]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[3],213,{from:accounts[3]});
await instance.batchTransfer([accounts[91],accounts[65],accounts[57],accounts[91],accounts[58],accounts[42],accounts[22],accounts[94],accounts[24]],5599,{from:accounts[0]});


await instance.approve(accounts[18], 20507, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 21',async() => {
await instance.batchTransfer([accounts[37],accounts[36]],9348,{from:accounts[0]});

result = await instance.transfer(accounts[2],660,{from:accounts[3]});

await instance.approve(accounts[162], 35663, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[162], 1000, {from: accounts[162]});

});
it('test 22',async() => {

await instance.approve(accounts[1], 37946, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[1], 1000, {from: accounts[1]});

result = await instance.transfer(accounts[3],777,{from:accounts[1]});
await instance.batchTransfer([accounts[40],accounts[16],accounts[34]],7850,{from:accounts[0]});

});
it('test 23',async() => {
result = await instance.transfer(accounts[5],585,{from:accounts[0]});
await instance.batchTransfer([accounts[18]],6575,{from:accounts[0]});


await instance.approve(accounts[30], 32432, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[30], 1000, {from: accounts[30]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 24',async() => {

await instance.approve(accounts[14], 39612, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[14], 1000, {from: accounts[14]});

result = await instance.transfer(accounts[1],378,{from:accounts[2]});
await instance.batchTransfer([accounts[20]],3507,{from:accounts[0]});

});
it('test 25',async() => {

await instance.approve(accounts[161], 29194, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[161], 1000, {from: accounts[161]});

result = await instance.transfer(accounts[1],314,{from:accounts[1]});
await instance.batchTransfer([accounts[29],accounts[43],accounts[42],accounts[66],accounts[81]],9610,{from:accounts[0]});

});
it('test 26',async() => {

await instance.approve(accounts[142], 25631, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[142], 1000, {from: accounts[142]});

await instance.batchTransfer([accounts[43],accounts[62],accounts[85],accounts[9],accounts[27],accounts[7]],3744,{from:accounts[0]});

result = await instance.transfer(accounts[4],200,{from:accounts[1]});
});
it('test 27',async() => {
await instance.batchTransfer([accounts[21],accounts[44],accounts[9],accounts[27],accounts[53],accounts[54]],4968,{from:accounts[0]});

result = await instance.transfer(accounts[1],893,{from:accounts[4]});

await instance.approve(accounts[39], 21718, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

});
it('test 28',async() => {

await instance.approve(accounts[127], 21757, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[127], 1000, {from: accounts[127]});

result = await instance.transfer(accounts[0],956,{from:accounts[1]});
await instance.batchTransfer([accounts[82],accounts[35],accounts[10],accounts[32],accounts[85],accounts[61],accounts[88],accounts[90],accounts[67],accounts[38]],2262,{from:accounts[0]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[1],590,{from:accounts[4]});

await instance.approve(accounts[28], 26387, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[28], 1000, {from: accounts[28]});

await instance.batchTransfer([accounts[14],accounts[62],accounts[91],accounts[92],accounts[63],accounts[94]],7231,{from:accounts[0]});

});
});
