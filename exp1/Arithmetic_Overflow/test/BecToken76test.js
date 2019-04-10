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

await instance.batchTransfer([accounts[31],accounts[57],accounts[60],accounts[31],accounts[88],accounts[54],accounts[93],accounts[89]],6238,{from:accounts[0]});

result = await instance.transfer(accounts[4],454,{from:accounts[1]});

await instance.approve(accounts[185], 20467, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[185], 1000, {from: accounts[185]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[35],accounts[76],accounts[59],accounts[9],accounts[89],accounts[46],accounts[37],accounts[47]],2904,{from:accounts[0]});


await instance.approve(accounts[74], 20524, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[74], 1000, {from: accounts[74]});

result = await instance.transfer(accounts[0],423,{from:accounts[4]});
});
it('test 2',async() => {
await instance.batchTransfer([accounts[39]],7283,{from:accounts[0]});

result = await instance.transfer(accounts[4],386,{from:accounts[1]});

await instance.approve(accounts[133], 33976, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[133], 1000, {from: accounts[133]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[0],914,{from:accounts[3]});

await instance.approve(accounts[8], 26045, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

await instance.batchTransfer([accounts[43],accounts[68],accounts[68],accounts[70],accounts[2],accounts[10]],9543,{from:accounts[0]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[2],760,{from:accounts[0]});

await instance.approve(accounts[109], 32271, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[109], 1000, {from: accounts[109]});

await instance.batchTransfer([accounts[18],accounts[77],accounts[91],accounts[63],accounts[34],accounts[84],accounts[16],accounts[78],accounts[47]],2900,{from:accounts[0]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[12],accounts[23],accounts[69],accounts[68],accounts[15],accounts[25],accounts[25],accounts[17],accounts[40],accounts[57]],1898,{from:accounts[0]});

result = await instance.transfer(accounts[0],235,{from:accounts[2]});

await instance.approve(accounts[107], 24678, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[0],800,{from:accounts[0]});
await instance.batchTransfer([accounts[93],accounts[95],accounts[94],accounts[41]],7566,{from:accounts[0]});


await instance.approve(accounts[41], 38943, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

});
it('test 7',async() => {

await instance.approve(accounts[194], 31523, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[194], 1000, {from: accounts[194]});

await instance.batchTransfer([accounts[74],accounts[24],accounts[66],accounts[97],accounts[28],accounts[27],accounts[60],accounts[30]],3078,{from:accounts[0]});

result = await instance.transfer(accounts[0],602,{from:accounts[5]});
});
it('test 8',async() => {

await instance.approve(accounts[55], 22110, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

await instance.batchTransfer([accounts[27],accounts[31],accounts[48],accounts[87],accounts[42]],6435,{from:accounts[0]});

result = await instance.transfer(accounts[5],537,{from:accounts[0]});
});
it('test 9',async() => {
await instance.batchTransfer([accounts[62],accounts[86],accounts[17],accounts[79],accounts[71]],1278,{from:accounts[0]});


await instance.approve(accounts[160], 29064, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[160], 1000, {from: accounts[160]});

result = await instance.transfer(accounts[3],955,{from:accounts[0]});
});
it('test 10',async() => {

await instance.approve(accounts[88], 21444, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[88], 1000, {from: accounts[88]});

await instance.batchTransfer([accounts[35],accounts[21],accounts[45],accounts[25],accounts[42],accounts[8],accounts[86],accounts[50],accounts[19]],7344,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[1],516,{from:accounts[5]});
});
it('test 11',async() => {

await instance.approve(accounts[1], 29293, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[1], 1000, {from: accounts[1]});

result = await instance.transfer(accounts[4],819,{from:accounts[0]});
await instance.batchTransfer([accounts[85],accounts[89],accounts[20],accounts[67],accounts[61],accounts[65]],3257,{from:accounts[0]});

});
it('test 12',async() => {

await instance.approve(accounts[41], 24850, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

result = await instance.transfer(accounts[1],429,{from:accounts[0]});
await instance.batchTransfer([accounts[89],accounts[51],accounts[72],accounts[67],accounts[94],accounts[24],accounts[73],accounts[67]],2819,{from:accounts[0]});

});
it('test 13',async() => {

await instance.approve(accounts[181], 28339, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[181], 1000, {from: accounts[181]});

await instance.batchTransfer([accounts[62],accounts[94],accounts[67],accounts[92]],6102,{from:accounts[0]});

result = await instance.transfer(accounts[3],594,{from:accounts[2]});
});
it('test 14',async() => {
result = await instance.transfer(accounts[2],667,{from:accounts[2]});

await instance.approve(accounts[196], 36887, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[196], 1000, {from: accounts[196]});

await instance.batchTransfer([accounts[99],accounts[9]],4649,{from:accounts[0]});

});
it('test 15',async() => {

await instance.approve(accounts[160], 33237, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[160], 1000, {from: accounts[160]});

result = await instance.transfer(accounts[5],800,{from:accounts[5]});
await instance.batchTransfer([accounts[12],accounts[65],accounts[98],accounts[51],accounts[64]],5225,{from:accounts[0]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[60],accounts[24],accounts[20],accounts[39],accounts[39],accounts[60]],2757,{from:accounts[0]});

result = await instance.transfer(accounts[1],643,{from:accounts[1]});

await instance.approve(accounts[76], 23571, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[5],817,{from:accounts[3]});

await instance.approve(accounts[160], 39452, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[160], 1000, {from: accounts[160]});

await instance.batchTransfer([accounts[55],accounts[43],accounts[58],accounts[20],accounts[31]],2440,{from:accounts[0]});

});
it('test 18',async() => {

await instance.approve(accounts[18], 27113, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

await instance.batchTransfer([accounts[43],accounts[41],accounts[57],accounts[8],accounts[9],accounts[84]],9674,{from:accounts[0]});

result = await instance.transfer(accounts[3],456,{from:accounts[3]});
});
it('test 19',async() => {

await instance.approve(accounts[106], 32958, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[106], 1000, {from: accounts[106]});

await instance.batchTransfer([accounts[19],accounts[74],accounts[17],accounts[74],accounts[41],accounts[49]],6768,{from:accounts[0]});

result = await instance.transfer(accounts[2],438,{from:accounts[1]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[34]],8666,{from:accounts[0]});


await instance.approve(accounts[66], 27005, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[66], 1000, {from: accounts[66]});

result = await instance.transfer(accounts[2],220,{from:accounts[0]});
});
it('test 21',async() => {

await instance.approve(accounts[155], 32912, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[155], 1000, {from: accounts[155]});

await instance.batchTransfer([accounts[5],accounts[58],accounts[95],accounts[58],accounts[62],accounts[53],accounts[22]],3882,{from:accounts[0]});

result = await instance.transfer(accounts[4],896,{from:accounts[1]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 22',async() => {

await instance.approve(accounts[183], 32096, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[183], 1000, {from: accounts[183]});

result = await instance.transfer(accounts[0],915,{from:accounts[2]});
await instance.batchTransfer([accounts[47],accounts[51],accounts[34],accounts[82],accounts[18],accounts[54],accounts[87],accounts[6],accounts[32],accounts[25]],5141,{from:accounts[0]});

});
it('test 23',async() => {

await instance.approve(accounts[56], 32034, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[56], 1000, {from: accounts[56]});

await instance.batchTransfer([accounts[81],accounts[38],accounts[49],accounts[68],accounts[92]],8071,{from:accounts[0]});

result = await instance.transfer(accounts[3],933,{from:accounts[5]});
});
it('test 24',async() => {

await instance.approve(accounts[41], 25631, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

result = await instance.transfer(accounts[4],285,{from:accounts[3]});
await instance.batchTransfer([accounts[69]],9395,{from:accounts[0]});

});
it('test 25',async() => {
result = await instance.transfer(accounts[0],466,{from:accounts[0]});

await instance.approve(accounts[145], 21404, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

await instance.batchTransfer([accounts[72],accounts[35],accounts[28]],5115,{from:accounts[0]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[3],678,{from:accounts[2]});
await instance.batchTransfer([accounts[5],accounts[39]],1992,{from:accounts[0]});


await instance.approve(accounts[118], 25227, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[118], 1000, {from: accounts[118]});

});
it('test 27',async() => {
await instance.batchTransfer([accounts[5],accounts[62],accounts[53]],7745,{from:accounts[0]});

result = await instance.transfer(accounts[3],494,{from:accounts[1]});

await instance.approve(accounts[53], 23433, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[2],704,{from:accounts[2]});
await instance.batchTransfer([accounts[1],accounts[39],accounts[56],accounts[21],accounts[95],accounts[42]],6598,{from:accounts[0]});


await instance.approve(accounts[24], 27774, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[24], 1000, {from: accounts[24]});

});
it('test 29',async() => {

await instance.approve(accounts[79], 22888, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[79], 1000, {from: accounts[79]});

await instance.batchTransfer([accounts[80],accounts[91],accounts[97],accounts[90],accounts[74],accounts[2],accounts[11],accounts[90]],2399,{from:accounts[0]});

result = await instance.transfer(accounts[3],742,{from:accounts[4]});
});
});
