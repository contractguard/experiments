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

await instance.approve(accounts[44], 37792, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[64],accounts[23],accounts[86],accounts[53],accounts[15],accounts[78],accounts[25],accounts[34],accounts[90],accounts[12]],9041,{from:accounts[0]});

result = await instance.transfer(accounts[5],932,{from:accounts[2]});
});
it('test 1',async() => {

await instance.approve(accounts[70], 23748, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[70], 1000, {from: accounts[70]});

result = await instance.transfer(accounts[1],283,{from:accounts[0]});
await instance.batchTransfer([accounts[82],accounts[26],accounts[18],accounts[65],accounts[54],accounts[34]],1097,{from:accounts[0]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[98],accounts[99],accounts[5],accounts[97],accounts[36],accounts[65],accounts[29],accounts[8],accounts[92],accounts[40]],5450,{from:accounts[0]});

result = await instance.transfer(accounts[4],824,{from:accounts[1]});

await instance.approve(accounts[30], 25993, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[30], 1000, {from: accounts[30]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[1],410,{from:accounts[1]});

await instance.approve(accounts[139], 39656, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[139], 1000, {from: accounts[139]});

await instance.batchTransfer([accounts[80],accounts[94],accounts[47],accounts[100],accounts[19],accounts[41],accounts[38],accounts[10],accounts[97],accounts[56]],6420,{from:accounts[0]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[3],632,{from:accounts[2]});
await instance.batchTransfer([accounts[29],accounts[69],accounts[78],accounts[3],accounts[32],accounts[63],accounts[84]],3994,{from:accounts[0]});


await instance.approve(accounts[35], 35611, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

});
it('test 5',async() => {
result = await instance.transfer(accounts[0],544,{from:accounts[0]});
await instance.batchTransfer([accounts[4],accounts[39]],5715,{from:accounts[0]});


await instance.approve(accounts[113], 33217, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[113], 1000, {from: accounts[113]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[0],401,{from:accounts[3]});
await instance.batchTransfer([accounts[41],accounts[69]],6132,{from:accounts[0]});


await instance.approve(accounts[140], 21930, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

});
it('test 7',async() => {

await instance.approve(accounts[116], 20189, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[116], 1000, {from: accounts[116]});

result = await instance.transfer(accounts[3],893,{from:accounts[0]});
await instance.batchTransfer([accounts[65],accounts[27],accounts[50],accounts[19],accounts[46],accounts[38]],3838,{from:accounts[0]});

});
it('test 8',async() => {

await instance.approve(accounts[64], 22371, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[64], 1000, {from: accounts[64]});

result = await instance.transfer(accounts[0],574,{from:accounts[3]});
await instance.batchTransfer([accounts[47],accounts[43],accounts[28],accounts[83],accounts[31],accounts[49],accounts[63],accounts[36],accounts[25]],8594,{from:accounts[0]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[2],596,{from:accounts[0]});
await instance.batchTransfer([accounts[67],accounts[49]],1222,{from:accounts[0]});


await instance.approve(accounts[60], 32308, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[60], 1000, {from: accounts[60]});

});
it('test 10',async() => {

await instance.approve(accounts[180], 28274, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[180], 1000, {from: accounts[180]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],762,{from:accounts[2]});
await instance.batchTransfer([accounts[1],accounts[86],accounts[94],accounts[40],accounts[71],accounts[35],accounts[96],accounts[89],accounts[17]],3952,{from:accounts[0]});

});
it('test 11',async() => {

await instance.approve(accounts[4], 22088, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[4], 1000, {from: accounts[4]});

await instance.batchTransfer([accounts[49],accounts[75],accounts[65],accounts[50],accounts[95],accounts[59],accounts[23],accounts[60]],1267,{from:accounts[0]});

result = await instance.transfer(accounts[1],783,{from:accounts[0]});
});
it('test 12',async() => {
result = await instance.transfer(accounts[4],499,{from:accounts[2]});

await instance.approve(accounts[85], 23301, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[85], 1000, {from: accounts[85]});

await instance.batchTransfer([accounts[97],accounts[100],accounts[8],accounts[44],accounts[40],accounts[48],accounts[63]],9086,{from:accounts[0]});

});
it('test 13',async() => {

await instance.approve(accounts[7], 39333, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[7], 1000, {from: accounts[7]});

result = await instance.transfer(accounts[2],246,{from:accounts[2]});
await instance.batchTransfer([accounts[37],accounts[25],accounts[32],accounts[90],accounts[83],accounts[61],accounts[67],accounts[50],accounts[54]],4946,{from:accounts[0]});

});
it('test 14',async() => {

await instance.approve(accounts[42], 38728, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

await instance.batchTransfer([accounts[96],accounts[36],accounts[38],accounts[21],accounts[12]],1267,{from:accounts[0]});

result = await instance.transfer(accounts[5],380,{from:accounts[2]});
});
it('test 15',async() => {

await instance.approve(accounts[17], 23047, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[17], 1000, {from: accounts[17]});

await instance.batchTransfer([accounts[12],accounts[84],accounts[73],accounts[85],accounts[72],accounts[88]],5273,{from:accounts[0]});

result = await instance.transfer(accounts[1],720,{from:accounts[0]});
});
it('test 16',async() => {

await instance.approve(accounts[143], 35090, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[143], 1000, {from: accounts[143]});

result = await instance.transfer(accounts[0],560,{from:accounts[2]});
await instance.batchTransfer([accounts[45],accounts[31],accounts[3],accounts[36],accounts[10],accounts[21],accounts[28]],4740,{from:accounts[0]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[100],accounts[38],accounts[1],accounts[95],accounts[94],accounts[8],accounts[24]],1563,{from:accounts[0]});

result = await instance.transfer(accounts[2],786,{from:accounts[1]});

await instance.approve(accounts[83], 30870, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[0],411,{from:accounts[0]});

await instance.approve(accounts[195], 38438, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[195], 1000, {from: accounts[195]});

await instance.batchTransfer([accounts[66],accounts[37],accounts[73],accounts[20],accounts[76],accounts[60],accounts[51]],3794,{from:accounts[0]});

});
it('test 19',async() => {

await instance.approve(accounts[122], 23968, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[122], 1000, {from: accounts[122]});

result = await instance.transfer(accounts[4],909,{from:accounts[0]});
await instance.batchTransfer([accounts[80],accounts[86],accounts[95],accounts[100],accounts[16],accounts[84],accounts[1],accounts[4],accounts[23]],6628,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[4],401,{from:accounts[1]});
await instance.batchTransfer([accounts[24],accounts[13],accounts[97],accounts[32],accounts[39],accounts[30],accounts[19]],1868,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[55], 39695, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[0],275,{from:accounts[1]});
await instance.batchTransfer([accounts[66],accounts[56],accounts[51],accounts[73],accounts[56],accounts[14],accounts[50],accounts[57]],1942,{from:accounts[0]});


await instance.approve(accounts[44], 36157, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 22',async() => {
result = await instance.transfer(accounts[3],932,{from:accounts[3]});

await instance.approve(accounts[42], 27809, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

await instance.batchTransfer([accounts[5],accounts[44],accounts[70],accounts[56],accounts[9]],2478,{from:accounts[0]});

});
it('test 23',async() => {

await instance.approve(accounts[59], 28691, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[59], 1000, {from: accounts[59]});

result = await instance.transfer(accounts[4],517,{from:accounts[0]});
await instance.batchTransfer([accounts[36],accounts[14],accounts[48],accounts[66],accounts[94],accounts[30],accounts[28],accounts[55],accounts[32]],5155,{from:accounts[0]});

});
it('test 24',async() => {
result = await instance.transfer(accounts[2],238,{from:accounts[1]});
await instance.batchTransfer([accounts[70],accounts[78],accounts[28],accounts[33],accounts[83]],2398,{from:accounts[0]});


await instance.approve(accounts[26], 33557, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[26], 1000, {from: accounts[26]});

});
it('test 25',async() => {
result = await instance.transfer(accounts[1],631,{from:accounts[2]});

await instance.approve(accounts[97], 39976, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

await instance.batchTransfer([accounts[95],accounts[92],accounts[12],accounts[41],accounts[10]],2010,{from:accounts[0]});

});
it('test 26',async() => {

await instance.approve(accounts[166], 33845, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[166], 1000, {from: accounts[166]});

result = await instance.transfer(accounts[0],834,{from:accounts[5]});
await instance.batchTransfer([accounts[78],accounts[87],accounts[73],accounts[37],accounts[95],accounts[36],accounts[32],accounts[99],accounts[94]],7191,{from:accounts[0]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[0],824,{from:accounts[2]});

await instance.approve(accounts[96], 36339, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[96], 1000, {from: accounts[96]});

await instance.batchTransfer([accounts[55],accounts[71],accounts[29],accounts[47],accounts[99],accounts[14],accounts[52],accounts[32],accounts[23],accounts[6]],6431,{from:accounts[0]});

});
it('test 28',async() => {

await instance.approve(accounts[61], 32746, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

result = await instance.transfer(accounts[4],953,{from:accounts[2]});
await instance.batchTransfer([accounts[8],accounts[30],accounts[66]],8494,{from:accounts[0]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[3],567,{from:accounts[1]});

await instance.approve(accounts[56], 34067, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[56], 1000, {from: accounts[56]});

await instance.batchTransfer([accounts[73],accounts[1],accounts[34],accounts[22],accounts[93]],7978,{from:accounts[0]});

});
});
