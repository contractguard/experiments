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


await instance.approve(accounts[17], 24104, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[17], 1000, {from: accounts[17]});

result = await instance.transfer(accounts[1],374,{from:accounts[0]});
await instance.batchTransfer([accounts[33],accounts[12],accounts[89],accounts[89],accounts[42],accounts[7],accounts[85]],7035,{from:accounts[0]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[95],accounts[93],accounts[43],accounts[31],accounts[2],accounts[92]],1565,{from:accounts[0]});


await instance.approve(accounts[27], 37007, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

result = await instance.transfer(accounts[3],610,{from:accounts[2]});
});
it('test 2',async() => {

await instance.approve(accounts[107], 34544, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

await instance.batchTransfer([accounts[53],accounts[30],accounts[11]],5193,{from:accounts[0]});

result = await instance.transfer(accounts[4],597,{from:accounts[4]});
});
it('test 3',async() => {
result = await instance.transfer(accounts[1],471,{from:accounts[3]});

await instance.approve(accounts[58], 31611, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[58], 1000, {from: accounts[58]});

await instance.batchTransfer([accounts[1],accounts[45],accounts[56]],1171,{from:accounts[0]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[0],325,{from:accounts[2]});
await instance.batchTransfer([accounts[31],accounts[67],accounts[75],accounts[99]],4346,{from:accounts[0]});


await instance.approve(accounts[137], 37923, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

});
it('test 5',async() => {

await instance.approve(accounts[137], 39907, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

await instance.batchTransfer([accounts[30],accounts[38],accounts[68],accounts[75],accounts[16],accounts[48],accounts[11],accounts[23],accounts[67]],1897,{from:accounts[0]});

result = await instance.transfer(accounts[5],468,{from:accounts[5]});
});
it('test 6',async() => {
await instance.batchTransfer([accounts[73],accounts[31],accounts[14],accounts[72]],8413,{from:accounts[0]});

result = await instance.transfer(accounts[0],566,{from:accounts[3]});

await instance.approve(accounts[113], 22466, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[113], 1000, {from: accounts[113]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[4],388,{from:accounts[2]});

await instance.approve(accounts[115], 35792, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

await instance.batchTransfer([accounts[6],accounts[86],accounts[86],accounts[8],accounts[65],accounts[29],accounts[12],accounts[62]],8364,{from:accounts[0]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[1],368,{from:accounts[2]});
await instance.batchTransfer([accounts[41],accounts[92],accounts[73]],8224,{from:accounts[0]});


await instance.approve(accounts[193], 28183, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[193], 1000, {from: accounts[193]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[2],214,{from:accounts[4]});
await instance.batchTransfer([accounts[95],accounts[38],accounts[20],accounts[78],accounts[46],accounts[86],accounts[48],accounts[91],accounts[78],accounts[28]],6449,{from:accounts[0]});


await instance.approve(accounts[170], 29589, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[4],582,{from:accounts[0]});

await instance.approve(accounts[145], 22244, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[49],accounts[36]],7144,{from:accounts[0]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[5],374,{from:accounts[3]});

await instance.approve(accounts[75], 39508, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

await instance.batchTransfer([accounts[40],accounts[53],accounts[35],accounts[63],accounts[85],accounts[38],accounts[30]],5866,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[75],accounts[34],accounts[69],accounts[13],accounts[49],accounts[36],accounts[72],accounts[75]],5847,{from:accounts[0]});

result = await instance.transfer(accounts[4],640,{from:accounts[5]});

await instance.approve(accounts[132], 20950, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[132], 1000, {from: accounts[132]});

});
it('test 13',async() => {

await instance.approve(accounts[43], 38304, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[43], 1000, {from: accounts[43]});

result = await instance.transfer(accounts[0],407,{from:accounts[2]});
await instance.batchTransfer([accounts[43],accounts[13],accounts[97],accounts[72],accounts[10],accounts[35]],4148,{from:accounts[0]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[47],accounts[5],accounts[51],accounts[11],accounts[11],accounts[49]],9725,{from:accounts[0]});

result = await instance.transfer(accounts[3],371,{from:accounts[2]});

await instance.approve(accounts[195], 36979, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[195], 1000, {from: accounts[195]});

});
it('test 15',async() => {

await instance.approve(accounts[11], 37753, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[11], 1000, {from: accounts[11]});

await instance.batchTransfer([accounts[92],accounts[78]],3806,{from:accounts[0]});

result = await instance.transfer(accounts[5],320,{from:accounts[4]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[4],945,{from:accounts[3]});
await instance.batchTransfer([accounts[80],accounts[91],accounts[10],accounts[15],accounts[88],accounts[47],accounts[45]],4097,{from:accounts[0]});


await instance.approve(accounts[45], 29545, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

});
it('test 17',async() => {

await instance.approve(accounts[105], 27748, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[105], 1000, {from: accounts[105]});

await instance.batchTransfer([accounts[75],accounts[81],accounts[27],accounts[67],accounts[32],accounts[2],accounts[9],accounts[95],accounts[13]],9291,{from:accounts[0]});

result = await instance.transfer(accounts[5],435,{from:accounts[3]});
});
it('test 18',async() => {

await instance.approve(accounts[95], 31728, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[95], 1000, {from: accounts[95]});

result = await instance.transfer(accounts[4],727,{from:accounts[4]});
await instance.batchTransfer([accounts[75],accounts[64],accounts[95],accounts[24],accounts[72],accounts[68],accounts[1],accounts[20],accounts[100]],3108,{from:accounts[0]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[42],accounts[59],accounts[25],accounts[28],accounts[97],accounts[20]],9895,{from:accounts[0]});


await instance.approve(accounts[182], 22992, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

result = await instance.transfer(accounts[2],675,{from:accounts[0]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[85], 23989, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[85], 1000, {from: accounts[85]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[0],963,{from:accounts[2]});
await instance.batchTransfer([accounts[66],accounts[36],accounts[65],accounts[18]],8244,{from:accounts[0]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[3],457,{from:accounts[3]});
await instance.batchTransfer([accounts[25],accounts[62],accounts[80],accounts[62],accounts[38]],1797,{from:accounts[0]});


await instance.approve(accounts[30], 35661, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[30], 1000, {from: accounts[30]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[63],accounts[34],accounts[94],accounts[32],accounts[48],accounts[36],accounts[19],accounts[64]],7023,{from:accounts[0]});

result = await instance.transfer(accounts[1],391,{from:accounts[1]});

await instance.approve(accounts[91], 32684, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {
result = await instance.transfer(accounts[4],757,{from:accounts[5]});

await instance.approve(accounts[103], 24999, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[103], 1000, {from: accounts[103]});

await instance.batchTransfer([accounts[38],accounts[98],accounts[54],accounts[55],accounts[11],accounts[13],accounts[41],accounts[56]],3861,{from:accounts[0]});

});
it('test 24',async() => {
await instance.batchTransfer([accounts[84],accounts[23],accounts[50],accounts[35],accounts[16],accounts[30],accounts[18]],1213,{from:accounts[0]});


await instance.approve(accounts[88], 20084, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[88], 1000, {from: accounts[88]});

result = await instance.transfer(accounts[3],417,{from:accounts[2]});
});
it('test 25',async() => {

await instance.approve(accounts[72], 21059, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

await instance.batchTransfer([accounts[92],accounts[22],accounts[30],accounts[72],accounts[43]],9348,{from:accounts[0]});

result = await instance.transfer(accounts[0],668,{from:accounts[3]});
});
it('test 26',async() => {

await instance.approve(accounts[192], 28847, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[192], 1000, {from: accounts[192]});

await instance.batchTransfer([accounts[92],accounts[7],accounts[89],accounts[18],accounts[6],accounts[79]],8825,{from:accounts[0]});

result = await instance.transfer(accounts[3],486,{from:accounts[3]});
});
it('test 27',async() => {
result = await instance.transfer(accounts[0],571,{from:accounts[4]});

await instance.approve(accounts[196], 29399, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[196], 1000, {from: accounts[196]});

await instance.batchTransfer([accounts[43],accounts[77]],9653,{from:accounts[0]});

});
it('test 28',async() => {

await instance.approve(accounts[113], 28124, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[113], 1000, {from: accounts[113]});

result = await instance.transfer(accounts[5],550,{from:accounts[3]});
await instance.batchTransfer([accounts[84],accounts[46],accounts[8],accounts[68],accounts[81],accounts[90],accounts[51],accounts[95],accounts[8]],2590,{from:accounts[0]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[3],562,{from:accounts[3]});
await instance.batchTransfer([accounts[79],accounts[68],accounts[19]],7509,{from:accounts[0]});


await instance.approve(accounts[140], 21052, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

});
});
