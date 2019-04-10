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

await instance.approve(accounts[69], 34285, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

result = await instance.transfer(accounts[5],293,{from:accounts[4]});
await instance.batchTransfer([accounts[40],accounts[17],accounts[57],accounts[47],accounts[24],accounts[23],accounts[95],accounts[76]],2591,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {

await instance.approve(accounts[131], 29317, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[131], 1000, {from: accounts[131]});

await instance.batchTransfer([accounts[44],accounts[74],accounts[3],accounts[39],accounts[2],accounts[91],accounts[23],accounts[93]],6071,{from:accounts[0]});

result = await instance.transfer(accounts[5],379,{from:accounts[0]});
});
it('test 2',async() => {
result = await instance.transfer(accounts[1],302,{from:accounts[5]});
await instance.batchTransfer([accounts[72],accounts[94]],5776,{from:accounts[0]});


await instance.approve(accounts[164], 20749, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[164], 1000, {from: accounts[164]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[4],872,{from:accounts[2]});

await instance.approve(accounts[163], 35752, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[163], 1000, {from: accounts[163]});

await instance.batchTransfer([accounts[43],accounts[81],accounts[21],accounts[100],accounts[29],accounts[50],accounts[75],accounts[90]],9754,{from:accounts[0]});

});
it('test 4',async() => {

await instance.approve(accounts[11], 25388, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[11], 1000, {from: accounts[11]});

result = await instance.transfer(accounts[3],376,{from:accounts[0]});
await instance.batchTransfer([accounts[83],accounts[55],accounts[87],accounts[3],accounts[64],accounts[67],accounts[22]],3641,{from:accounts[0]});

});
it('test 5',async() => {
result = await instance.transfer(accounts[0],854,{from:accounts[3]});
await instance.batchTransfer([accounts[94],accounts[72],accounts[37],accounts[16],accounts[84],accounts[71]],2200,{from:accounts[0]});


await instance.approve(accounts[48], 28855, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[48], 1000, {from: accounts[48]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[2],280,{from:accounts[2]});

await instance.approve(accounts[97], 27261, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

await instance.batchTransfer([accounts[20],accounts[72],accounts[7],accounts[17]],4241,{from:accounts[0]});

});
it('test 7',async() => {

await instance.approve(accounts[121], 33398, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

await instance.batchTransfer([accounts[20],accounts[64],accounts[43]],9369,{from:accounts[0]});

result = await instance.transfer(accounts[3],619,{from:accounts[2]});
});
it('test 8',async() => {
await instance.batchTransfer([accounts[57],accounts[86],accounts[24],accounts[72],accounts[85],accounts[22],accounts[60],accounts[11],accounts[36],accounts[54]],6733,{from:accounts[0]});

result = await instance.transfer(accounts[0],367,{from:accounts[4]});

await instance.approve(accounts[168], 26843, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[10],accounts[54],accounts[66],accounts[17],accounts[93]],5737,{from:accounts[0]});


await instance.approve(accounts[169], 35756, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[169], 1000, {from: accounts[169]});

result = await instance.transfer(accounts[1],353,{from:accounts[1]});
});
it('test 10',async() => {
await instance.batchTransfer([accounts[77]],7475,{from:accounts[0]});

result = await instance.transfer(accounts[2],294,{from:accounts[1]});

await instance.approve(accounts[177], 30087, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[177], 1000, {from: accounts[177]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[22],accounts[19],accounts[97]],3151,{from:accounts[0]});

result = await instance.transfer(accounts[4],464,{from:accounts[1]});

await instance.approve(accounts[13], 25822, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[13], 1000, {from: accounts[13]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[32],accounts[99],accounts[66],accounts[61],accounts[73],accounts[66],accounts[41],accounts[42]],1609,{from:accounts[0]});


await instance.approve(accounts[149], 25168, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[149], 1000, {from: accounts[149]});

result = await instance.transfer(accounts[1],729,{from:accounts[2]});
});
it('test 13',async() => {
await instance.batchTransfer([accounts[58],accounts[31]],4101,{from:accounts[0]});


await instance.approve(accounts[168], 22486, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

result = await instance.transfer(accounts[3],459,{from:accounts[2]});
});
it('test 14',async() => {
await instance.batchTransfer([accounts[63]],4467,{from:accounts[0]});

result = await instance.transfer(accounts[0],572,{from:accounts[5]});

await instance.approve(accounts[13], 34985, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[13], 1000, {from: accounts[13]});

});
it('test 15',async() => {

await instance.approve(accounts[27], 34077, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

await instance.batchTransfer([accounts[73],accounts[97],accounts[33],accounts[78],accounts[68],accounts[78]],1555,{from:accounts[0]});

result = await instance.transfer(accounts[4],323,{from:accounts[0]});
});
it('test 16',async() => {

await instance.approve(accounts[70], 23651, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[70], 1000, {from: accounts[70]});

result = await instance.transfer(accounts[5],317,{from:accounts[5]});
await instance.batchTransfer([accounts[93],accounts[63],accounts[61],accounts[17],accounts[4],accounts[64],accounts[26],accounts[84]],8152,{from:accounts[0]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[19],accounts[44],accounts[14],accounts[93],accounts[9],accounts[96],accounts[99],accounts[68],accounts[89],accounts[60]],9730,{from:accounts[0]});

result = await instance.transfer(accounts[1],251,{from:accounts[1]});

await instance.approve(accounts[115], 31675, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[65],accounts[67],accounts[55],accounts[61],accounts[64],accounts[24],accounts[62],accounts[54],accounts[22],accounts[87]],4443,{from:accounts[0]});

result = await instance.transfer(accounts[4],949,{from:accounts[2]});

await instance.approve(accounts[69], 38749, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[52],accounts[69],accounts[30],accounts[32]],9174,{from:accounts[0]});


await instance.approve(accounts[25], 28359, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[25], 1000, {from: accounts[25]});

result = await instance.transfer(accounts[2],819,{from:accounts[0]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[0],810,{from:accounts[0]});

await instance.approve(accounts[126], 30074, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

await instance.batchTransfer([accounts[63],accounts[76],accounts[78],accounts[95],accounts[4]],7245,{from:accounts[0]});

});
it('test 21',async() => {
await instance.batchTransfer([accounts[29],accounts[44],accounts[75],accounts[52],accounts[89]],4014,{from:accounts[0]});

result = await instance.transfer(accounts[0],942,{from:accounts[3]});

await instance.approve(accounts[113], 32632, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[113], 1000, {from: accounts[113]});

});
it('test 22',async() => {

await instance.approve(accounts[160], 36066, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[160], 1000, {from: accounts[160]});

await instance.batchTransfer([accounts[24],accounts[5],accounts[94],accounts[47],accounts[67],accounts[50],accounts[45],accounts[67],accounts[55],accounts[81]],7118,{from:accounts[0]});

result = await instance.transfer(accounts[5],248,{from:accounts[5]});
});
it('test 23',async() => {
result = await instance.transfer(accounts[4],582,{from:accounts[3]});

await instance.approve(accounts[143], 21251, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[143], 1000, {from: accounts[143]});

await instance.batchTransfer([accounts[32],accounts[61],accounts[52],accounts[91],accounts[16],accounts[51],accounts[14],accounts[74],accounts[90]],7586,{from:accounts[0]});

});
it('test 24',async() => {
await instance.batchTransfer([accounts[44],accounts[20],accounts[91],accounts[81],accounts[79],accounts[93],accounts[2],accounts[6],accounts[81]],2802,{from:accounts[0]});


await instance.approve(accounts[36], 21683, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[36], 1000, {from: accounts[36]});

result = await instance.transfer(accounts[0],556,{from:accounts[0]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 25',async() => {

await instance.approve(accounts[192], 38556, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[192], 1000, {from: accounts[192]});

result = await instance.transfer(accounts[2],817,{from:accounts[3]});
await instance.batchTransfer([accounts[74],accounts[18],accounts[36],accounts[79],accounts[57],accounts[90],accounts[47]],9766,{from:accounts[0]});

});
it('test 26',async() => {
await instance.batchTransfer([accounts[82],accounts[55],accounts[22],accounts[94],accounts[28],accounts[26],accounts[55],accounts[99],accounts[98],accounts[83]],9199,{from:accounts[0]});


await instance.approve(accounts[174], 28862, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

result = await instance.transfer(accounts[2],830,{from:accounts[5]});
});
it('test 27',async() => {
await instance.batchTransfer([accounts[51],accounts[65],accounts[68],accounts[44],accounts[4],accounts[87],accounts[3],accounts[68],accounts[11]],4195,{from:accounts[0]});

result = await instance.transfer(accounts[3],361,{from:accounts[1]});

await instance.approve(accounts[83], 28986, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

});
it('test 28',async() => {

await instance.approve(accounts[122], 32644, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[122], 1000, {from: accounts[122]});

result = await instance.transfer(accounts[1],509,{from:accounts[1]});
await instance.batchTransfer([accounts[38],accounts[28]],2011,{from:accounts[0]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[47],accounts[14],accounts[61]],4034,{from:accounts[0]});

result = await instance.transfer(accounts[2],893,{from:accounts[1]});

await instance.approve(accounts[82], 33143, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

});
});
