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
await instance.batchTransfer([accounts[18],accounts[84],accounts[67],accounts[50],accounts[95],accounts[15],accounts[53],accounts[76],accounts[33],accounts[100]],3536,{from:accounts[0]});


await instance.approve(accounts[71], 27487, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[71], 1000, {from: accounts[71]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[4],629,{from:accounts[1]});
});
it('test 1',async() => {
await instance.batchTransfer([accounts[97],accounts[22],accounts[82],accounts[2],accounts[35],accounts[43],accounts[63],accounts[82]],7593,{from:accounts[0]});


await instance.approve(accounts[149], 39126, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[149], 1000, {from: accounts[149]});

result = await instance.transfer(accounts[1],640,{from:accounts[5]});
});
it('test 2',async() => {

await instance.approve(accounts[79], 25493, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[79], 1000, {from: accounts[79]});

result = await instance.transfer(accounts[4],566,{from:accounts[3]});
await instance.batchTransfer([accounts[71],accounts[15],accounts[12],accounts[48],accounts[73],accounts[3]],9186,{from:accounts[0]});

});
it('test 3',async() => {

await instance.approve(accounts[134], 25737, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[134], 1000, {from: accounts[134]});

result = await instance.transfer(accounts[0],612,{from:accounts[1]});
await instance.batchTransfer([accounts[24],accounts[97],accounts[11],accounts[52]],3165,{from:accounts[0]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[20],accounts[44],accounts[47],accounts[76],accounts[22],accounts[78],accounts[22],accounts[58],accounts[17]],1231,{from:accounts[0]});


await instance.approve(accounts[104], 27479, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[104], 1000, {from: accounts[104]});

result = await instance.transfer(accounts[5],712,{from:accounts[3]});
});
it('test 5',async() => {
await instance.batchTransfer([accounts[9],accounts[49],accounts[16],accounts[67],accounts[45],accounts[44],accounts[33],accounts[72],accounts[2]],5084,{from:accounts[0]});


await instance.approve(accounts[195], 24327, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[195], 1000, {from: accounts[195]});

result = await instance.transfer(accounts[0],292,{from:accounts[3]});
});
it('test 6',async() => {
await instance.batchTransfer([accounts[27],accounts[12],accounts[21],accounts[73],accounts[84]],5173,{from:accounts[0]});


await instance.approve(accounts[109], 23354, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[109], 1000, {from: accounts[109]});

result = await instance.transfer(accounts[0],264,{from:accounts[4]});
});
it('test 7',async() => {
result = await instance.transfer(accounts[2],339,{from:accounts[0]});
await instance.batchTransfer([accounts[40],accounts[96],accounts[28],accounts[32],accounts[99],accounts[48],accounts[21],accounts[16],accounts[95]],3358,{from:accounts[0]});


await instance.approve(accounts[87], 38140, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[87], 1000, {from: accounts[87]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[41],accounts[74],accounts[87],accounts[22]],4339,{from:accounts[0]});

result = await instance.transfer(accounts[0],432,{from:accounts[5]});

await instance.approve(accounts[170], 20597, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[5],875,{from:accounts[5]});

await instance.approve(accounts[86], 26747, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[86], 1000, {from: accounts[86]});

await instance.batchTransfer([accounts[62],accounts[43],accounts[71],accounts[98],accounts[46],accounts[94],accounts[12],accounts[11],accounts[45],accounts[36]],7875,{from:accounts[0]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[1],253,{from:accounts[5]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[97],accounts[31],accounts[7],accounts[49],accounts[61],accounts[70],accounts[48],accounts[83],accounts[45]],6568,{from:accounts[0]});


await instance.approve(accounts[162], 34902, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[162], 1000, {from: accounts[162]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[50]],1337,{from:accounts[0]});


await instance.approve(accounts[112], 34855, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[112], 1000, {from: accounts[112]});

result = await instance.transfer(accounts[5],459,{from:accounts[4]});
});
it('test 12',async() => {
result = await instance.transfer(accounts[1],289,{from:accounts[0]});
await instance.batchTransfer([accounts[29],accounts[64],accounts[9],accounts[24],accounts[70]],6530,{from:accounts[0]});


await instance.approve(accounts[191], 28521, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[191], 1000, {from: accounts[191]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[68],accounts[43],accounts[82],accounts[28],accounts[79],accounts[94],accounts[7]],3001,{from:accounts[0]});

result = await instance.transfer(accounts[2],764,{from:accounts[1]});

await instance.approve(accounts[21], 34714, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[5],627,{from:accounts[1]});

await instance.approve(accounts[193], 21226, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[193], 1000, {from: accounts[193]});

await instance.batchTransfer([accounts[52],accounts[87],accounts[86],accounts[97],accounts[97]],9371,{from:accounts[0]});

});
it('test 15',async() => {

await instance.approve(accounts[38], 33079, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[38], 1000, {from: accounts[38]});

await instance.batchTransfer([accounts[17],accounts[7],accounts[49]],1205,{from:accounts[0]});

result = await instance.transfer(accounts[1],744,{from:accounts[3]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[4],798,{from:accounts[5]});

await instance.approve(accounts[195], 25610, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[195], 1000, {from: accounts[195]});

await instance.batchTransfer([accounts[79],accounts[34],accounts[24],accounts[62],accounts[20],accounts[19],accounts[38]],1967,{from:accounts[0]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[3],972,{from:accounts[4]});
await instance.batchTransfer([accounts[24]],7049,{from:accounts[0]});


await instance.approve(accounts[116], 31174, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[116], 1000, {from: accounts[116]});

});
it('test 18',async() => {

await instance.approve(accounts[82], 31872, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

result = await instance.transfer(accounts[4],677,{from:accounts[4]});
await instance.batchTransfer([accounts[59],accounts[14],accounts[27],accounts[41],accounts[10],accounts[8],accounts[87],accounts[92],accounts[42]],7501,{from:accounts[0]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[1],680,{from:accounts[4]});

await instance.approve(accounts[23], 21731, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[23], 1000, {from: accounts[23]});

await instance.batchTransfer([accounts[54]],2209,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[1],221,{from:accounts[1]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[99],accounts[94],accounts[8],accounts[45],accounts[48],accounts[24]],6719,{from:accounts[0]});


await instance.approve(accounts[28], 36724, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[28], 1000, {from: accounts[28]});

});
it('test 21',async() => {

await instance.approve(accounts[131], 32367, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[131], 1000, {from: accounts[131]});

await instance.batchTransfer([accounts[70],accounts[3],accounts[75],accounts[83],accounts[93],accounts[75],accounts[60]],4351,{from:accounts[0]});

result = await instance.transfer(accounts[1],299,{from:accounts[0]});
});
it('test 22',async() => {
await instance.batchTransfer([accounts[5],accounts[97]],9081,{from:accounts[0]});


await instance.approve(accounts[63], 23593, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[63], 1000, {from: accounts[63]});

result = await instance.transfer(accounts[3],293,{from:accounts[4]});
});
it('test 23',async() => {
result = await instance.transfer(accounts[5],640,{from:accounts[1]});

await instance.approve(accounts[144], 23580, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

await instance.batchTransfer([accounts[59],accounts[80]],2163,{from:accounts[0]});

});
it('test 24',async() => {

await instance.approve(accounts[69], 24835, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

result = await instance.transfer(accounts[5],802,{from:accounts[1]});
await instance.batchTransfer([accounts[90],accounts[81],accounts[28],accounts[58],accounts[60],accounts[50]],6350,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 25',async() => {
await instance.batchTransfer([accounts[51],accounts[50],accounts[24],accounts[9],accounts[35],accounts[6],accounts[3],accounts[90],accounts[13]],7813,{from:accounts[0]});

result = await instance.transfer(accounts[0],757,{from:accounts[0]});

await instance.approve(accounts[149], 36022, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[149], 1000, {from: accounts[149]});

});
it('test 26',async() => {

await instance.approve(accounts[17], 25732, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[17], 1000, {from: accounts[17]});

await instance.batchTransfer([accounts[32],accounts[92],accounts[74],accounts[54]],5490,{from:accounts[0]});

result = await instance.transfer(accounts[4],247,{from:accounts[2]});
});
it('test 27',async() => {

await instance.approve(accounts[54], 20576, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

await instance.batchTransfer([accounts[72],accounts[87],accounts[7],accounts[55],accounts[43],accounts[48],accounts[43],accounts[60],accounts[27],accounts[22]],3194,{from:accounts[0]});

result = await instance.transfer(accounts[5],899,{from:accounts[3]});
});
it('test 28',async() => {

await instance.approve(accounts[118], 21885, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[118], 1000, {from: accounts[118]});

await instance.batchTransfer([accounts[56],accounts[86],accounts[68],accounts[40],accounts[22]],4645,{from:accounts[0]});

result = await instance.transfer(accounts[4],857,{from:accounts[3]});
});
it('test 29',async() => {

await instance.approve(accounts[82], 35348, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

await instance.batchTransfer([accounts[51],accounts[27],accounts[4],accounts[77],accounts[50],accounts[71]],4082,{from:accounts[0]});

result = await instance.transfer(accounts[2],769,{from:accounts[0]});
});
});
