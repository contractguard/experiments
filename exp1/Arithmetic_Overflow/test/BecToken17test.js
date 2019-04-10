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
await instance.batchTransfer([accounts[19],accounts[59],accounts[29],accounts[97],accounts[64]],9402,{from:accounts[0]});

result = await instance.transfer(accounts[2],344,{from:accounts[3]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[35], 27953, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

});
it('test 1',async() => {

await instance.approve(accounts[21], 29354, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

result = await instance.transfer(accounts[4],249,{from:accounts[5]});
await instance.batchTransfer([accounts[9],accounts[26],accounts[77],accounts[86]],1230,{from:accounts[0]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[0],780,{from:accounts[2]});

await instance.approve(accounts[158], 23233, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

await instance.batchTransfer([accounts[53],accounts[78],accounts[9],accounts[22],accounts[43]],6594,{from:accounts[0]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[3],540,{from:accounts[4]});

await instance.approve(accounts[31], 25489, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[31], 1000, {from: accounts[31]});

await instance.batchTransfer([accounts[2],accounts[30]],2659,{from:accounts[0]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[2],833,{from:accounts[1]});

await instance.approve(accounts[7], 35956, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[7], 1000, {from: accounts[7]});

await instance.batchTransfer([accounts[19],accounts[56],accounts[16],accounts[78],accounts[76]],1332,{from:accounts[0]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[43]],8499,{from:accounts[0]});

result = await instance.transfer(accounts[5],365,{from:accounts[1]});

await instance.approve(accounts[61], 26672, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

});
it('test 6',async() => {

await instance.approve(accounts[185], 36193, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[185], 1000, {from: accounts[185]});

result = await instance.transfer(accounts[5],454,{from:accounts[3]});
await instance.batchTransfer([accounts[38],accounts[37],accounts[83],accounts[47],accounts[99]],8191,{from:accounts[0]});

});
it('test 7',async() => {

await instance.approve(accounts[54], 35096, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

result = await instance.transfer(accounts[4],504,{from:accounts[0]});
await instance.batchTransfer([accounts[17],accounts[40],accounts[85],accounts[73]],5652,{from:accounts[0]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[0],501,{from:accounts[3]});

await instance.approve(accounts[129], 28144, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

await instance.batchTransfer([accounts[63],accounts[5],accounts[26],accounts[4],accounts[98],accounts[73],accounts[47],accounts[4],accounts[99]],1274,{from:accounts[0]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[3],288,{from:accounts[0]});

await instance.approve(accounts[61], 37384, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

await instance.batchTransfer([accounts[1],accounts[71]],1798,{from:accounts[0]});

});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[22], 29325, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[22], 1000, {from: accounts[22]});

result = await instance.transfer(accounts[2],232,{from:accounts[2]});
await instance.batchTransfer([accounts[47],accounts[19],accounts[99],accounts[80]],6272,{from:accounts[0]});

});
it('test 11',async() => {

await instance.approve(accounts[45], 34005, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

result = await instance.transfer(accounts[0],755,{from:accounts[2]});
await instance.batchTransfer([accounts[92],accounts[99],accounts[89],accounts[81],accounts[43]],2650,{from:accounts[0]});

});
it('test 12',async() => {

await instance.approve(accounts[184], 38453, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[184], 1000, {from: accounts[184]});

result = await instance.transfer(accounts[2],598,{from:accounts[2]});
await instance.batchTransfer([accounts[75]],3670,{from:accounts[0]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[96],accounts[100],accounts[98]],1508,{from:accounts[0]});


await instance.approve(accounts[1], 34562, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[1], 1000, {from: accounts[1]});

result = await instance.transfer(accounts[2],583,{from:accounts[2]});
});
it('test 14',async() => {
result = await instance.transfer(accounts[4],800,{from:accounts[3]});

await instance.approve(accounts[150], 31533, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[150], 1000, {from: accounts[150]});

await instance.batchTransfer([accounts[33],accounts[11],accounts[55],accounts[42],accounts[27]],8743,{from:accounts[0]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[0],737,{from:accounts[3]});
await instance.batchTransfer([accounts[45],accounts[95],accounts[45],accounts[5],accounts[77],accounts[55],accounts[12],accounts[43]],4611,{from:accounts[0]});


await instance.approve(accounts[116], 26118, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[116], 1000, {from: accounts[116]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[86],accounts[11]],9983,{from:accounts[0]});


await instance.approve(accounts[132], 25716, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[132], 1000, {from: accounts[132]});

result = await instance.transfer(accounts[0],272,{from:accounts[4]});
});
it('test 17',async() => {
result = await instance.transfer(accounts[0],392,{from:accounts[4]});

await instance.approve(accounts[82], 35338, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

await instance.batchTransfer([accounts[51],accounts[30],accounts[56],accounts[66],accounts[96],accounts[81],accounts[20],accounts[72],accounts[8],accounts[84]],7653,{from:accounts[0]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[43],accounts[58],accounts[70]],5067,{from:accounts[0]});

result = await instance.transfer(accounts[3],698,{from:accounts[4]});

await instance.approve(accounts[57], 36771, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[57], 1000, {from: accounts[57]});

});
it('test 19',async() => {

await instance.approve(accounts[16], 25080, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[16], 1000, {from: accounts[16]});

result = await instance.transfer(accounts[5],906,{from:accounts[4]});
await instance.batchTransfer([accounts[53],accounts[41]],3430,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[41], 24966, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

result = await instance.transfer(accounts[4],685,{from:accounts[1]});
await instance.batchTransfer([accounts[50],accounts[45],accounts[21],accounts[84]],8938,{from:accounts[0]});

});
it('test 21',async() => {
await instance.batchTransfer([accounts[84],accounts[74],accounts[62],accounts[62],accounts[12],accounts[31],accounts[2]],8482,{from:accounts[0]});

result = await instance.transfer(accounts[5],290,{from:accounts[2]});

await instance.approve(accounts[96], 35594, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[96], 1000, {from: accounts[96]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[72],accounts[59],accounts[63],accounts[69]],5998,{from:accounts[0]});


await instance.approve(accounts[177], 25625, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[177], 1000, {from: accounts[177]});

result = await instance.transfer(accounts[1],581,{from:accounts[1]});
});
it('test 23',async() => {
result = await instance.transfer(accounts[4],842,{from:accounts[1]});

await instance.approve(accounts[175], 34516, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[175], 1000, {from: accounts[175]});

await instance.batchTransfer([accounts[32],accounts[71],accounts[34],accounts[6],accounts[61],accounts[39]],3207,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 24',async() => {
await instance.batchTransfer([accounts[96]],2953,{from:accounts[0]});

result = await instance.transfer(accounts[5],723,{from:accounts[3]});

await instance.approve(accounts[42], 20447, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

});
it('test 25',async() => {
result = await instance.transfer(accounts[3],319,{from:accounts[4]});
await instance.batchTransfer([accounts[99],accounts[89],accounts[78],accounts[81],accounts[4],accounts[12],accounts[3],accounts[29],accounts[77],accounts[10]],2422,{from:accounts[0]});


await instance.approve(accounts[177], 21577, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[177], 1000, {from: accounts[177]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[3],435,{from:accounts[4]});
await instance.batchTransfer([accounts[14],accounts[68],accounts[77],accounts[53],accounts[47],accounts[13],accounts[81]],6324,{from:accounts[0]});


await instance.approve(accounts[23], 24850, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[23], 1000, {from: accounts[23]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[4],455,{from:accounts[5]});
await instance.batchTransfer([accounts[76]],7681,{from:accounts[0]});


await instance.approve(accounts[29], 28448, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[29], 1000, {from: accounts[29]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[0],759,{from:accounts[3]});
await instance.batchTransfer([accounts[23],accounts[42],accounts[73]],7655,{from:accounts[0]});


await instance.approve(accounts[37], 33247, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[17],accounts[30]],8733,{from:accounts[0]});


await instance.approve(accounts[23], 22787, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[23], 1000, {from: accounts[23]});

result = await instance.transfer(accounts[2],781,{from:accounts[0]});
});
});
