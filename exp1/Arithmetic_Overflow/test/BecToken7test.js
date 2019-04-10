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

await instance.approve(accounts[171], 23302, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[171], 1000, {from: accounts[171]});

result = await instance.transfer(accounts[2],792,{from:accounts[5]});
await instance.batchTransfer([accounts[21]],5831,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[3],970,{from:accounts[4]});
await instance.batchTransfer([accounts[29],accounts[23],accounts[43],accounts[88],accounts[57],accounts[95],accounts[4]],2455,{from:accounts[0]});


await instance.approve(accounts[198], 24837, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[198], 1000, {from: accounts[198]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[4],703,{from:accounts[1]});

await instance.approve(accounts[145], 20635, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

await instance.batchTransfer([accounts[84],accounts[76],accounts[37]],1430,{from:accounts[0]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[2],735,{from:accounts[2]});
await instance.batchTransfer([accounts[76],accounts[99],accounts[1],accounts[29],accounts[5],accounts[48],accounts[5],accounts[100],accounts[3]],4165,{from:accounts[0]});


await instance.approve(accounts[68], 21520, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[68], 1000, {from: accounts[68]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[77]],7871,{from:accounts[0]});

result = await instance.transfer(accounts[4],741,{from:accounts[1]});

await instance.approve(accounts[188], 21128, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[188], 1000, {from: accounts[188]});

});
it('test 5',async() => {

await instance.approve(accounts[52], 25716, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[52], 1000, {from: accounts[52]});

await instance.batchTransfer([accounts[78],accounts[19],accounts[39],accounts[83],accounts[85],accounts[76],accounts[16],accounts[23],accounts[37]],2954,{from:accounts[0]});

result = await instance.transfer(accounts[2],827,{from:accounts[1]});
});
it('test 6',async() => {
await instance.batchTransfer([accounts[50],accounts[58],accounts[89],accounts[1],accounts[89],accounts[6],accounts[34],accounts[47],accounts[100],accounts[58]],7246,{from:accounts[0]});

result = await instance.transfer(accounts[5],303,{from:accounts[4]});

await instance.approve(accounts[107], 30788, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

});
it('test 7',async() => {

await instance.approve(accounts[145], 35203, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

result = await instance.transfer(accounts[1],710,{from:accounts[0]});
await instance.batchTransfer([accounts[12],accounts[42],accounts[77],accounts[44],accounts[53],accounts[66]],5581,{from:accounts[0]});

});
it('test 8',async() => {

await instance.approve(accounts[110], 24150, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[110], 1000, {from: accounts[110]});

await instance.batchTransfer([accounts[13],accounts[37],accounts[84],accounts[63],accounts[22]],7606,{from:accounts[0]});

result = await instance.transfer(accounts[3],625,{from:accounts[3]});
});
it('test 9',async() => {
await instance.batchTransfer([accounts[62],accounts[63],accounts[42],accounts[1],accounts[6],accounts[17]],2807,{from:accounts[0]});


await instance.approve(accounts[129], 31898, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

result = await instance.transfer(accounts[4],656,{from:accounts[4]});
});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[0],317,{from:accounts[4]});
await instance.batchTransfer([accounts[69],accounts[24],accounts[8],accounts[34],accounts[58],accounts[66],accounts[74],accounts[34],accounts[58]],6624,{from:accounts[0]});


await instance.approve(accounts[109], 33538, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[109], 1000, {from: accounts[109]});

});
it('test 11',async() => {

await instance.approve(accounts[160], 21524, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[160], 1000, {from: accounts[160]});

result = await instance.transfer(accounts[4],286,{from:accounts[5]});
await instance.batchTransfer([accounts[39],accounts[45],accounts[11],accounts[21],accounts[73],accounts[99]],3161,{from:accounts[0]});

});
it('test 12',async() => {
result = await instance.transfer(accounts[2],594,{from:accounts[4]});
await instance.batchTransfer([accounts[100],accounts[5],accounts[93],accounts[97],accounts[37],accounts[6],accounts[61]],2097,{from:accounts[0]});


await instance.approve(accounts[134], 35571, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[134], 1000, {from: accounts[134]});

});
it('test 13',async() => {

await instance.approve(accounts[128], 35263, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[128], 1000, {from: accounts[128]});

result = await instance.transfer(accounts[0],260,{from:accounts[4]});
await instance.batchTransfer([accounts[84],accounts[88],accounts[33],accounts[5],accounts[100],accounts[95],accounts[1],accounts[68]],3991,{from:accounts[0]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[47],accounts[68],accounts[33],accounts[43]],7988,{from:accounts[0]});


await instance.approve(accounts[185], 22657, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[185], 1000, {from: accounts[185]});

result = await instance.transfer(accounts[0],972,{from:accounts[0]});
});
it('test 15',async() => {
result = await instance.transfer(accounts[5],367,{from:accounts[4]});

await instance.approve(accounts[67], 24689, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

await instance.batchTransfer([accounts[41],accounts[63],accounts[64],accounts[90],accounts[48],accounts[93],accounts[39],accounts[35]],6515,{from:accounts[0]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[1],accounts[13],accounts[77],accounts[2],accounts[92],accounts[91],accounts[92],accounts[69],accounts[79]],6630,{from:accounts[0]});

result = await instance.transfer(accounts[4],378,{from:accounts[0]});

await instance.approve(accounts[150], 31053, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[150], 1000, {from: accounts[150]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[76],accounts[2],accounts[59],accounts[63],accounts[32],accounts[53]],7550,{from:accounts[0]});


await instance.approve(accounts[3], 25798, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[3], 1000, {from: accounts[3]});

result = await instance.transfer(accounts[5],427,{from:accounts[4]});
});
it('test 18',async() => {

await instance.approve(accounts[188], 20791, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[188], 1000, {from: accounts[188]});

result = await instance.transfer(accounts[2],496,{from:accounts[4]});
await instance.batchTransfer([accounts[83],accounts[94],accounts[37],accounts[71],accounts[41],accounts[26],accounts[22],accounts[54]],7380,{from:accounts[0]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[3],975,{from:accounts[0]});

await instance.approve(accounts[8], 34561, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

await instance.batchTransfer([accounts[25],accounts[24],accounts[38],accounts[90],accounts[10],accounts[7],accounts[7],accounts[47],accounts[51]],5552,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[66],accounts[68],accounts[93],accounts[50],accounts[6],accounts[24],accounts[47],accounts[20],accounts[7]],6433,{from:accounts[0]});

result = await instance.transfer(accounts[4],829,{from:accounts[2]});

await instance.approve(accounts[22], 22366, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[22], 1000, {from: accounts[22]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 21',async() => {

await instance.approve(accounts[199], 31422, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[199], 1000, {from: accounts[199]});

result = await instance.transfer(accounts[4],450,{from:accounts[2]});
await instance.batchTransfer([accounts[55]],6935,{from:accounts[0]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[38],accounts[36],accounts[40],accounts[100]],2365,{from:accounts[0]});


await instance.approve(accounts[135], 26025, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

result = await instance.transfer(accounts[5],862,{from:accounts[3]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {

await instance.approve(accounts[191], 24675, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[191], 1000, {from: accounts[191]});

result = await instance.transfer(accounts[5],482,{from:accounts[3]});
await instance.batchTransfer([accounts[46],accounts[49],accounts[29],accounts[8],accounts[83],accounts[43],accounts[22],accounts[36]],9443,{from:accounts[0]});

});
it('test 24',async() => {

await instance.approve(accounts[86], 30386, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[86], 1000, {from: accounts[86]});

result = await instance.transfer(accounts[5],243,{from:accounts[2]});
await instance.batchTransfer([accounts[9]],9589,{from:accounts[0]});

});
it('test 25',async() => {
await instance.batchTransfer([accounts[85],accounts[24],accounts[96],accounts[30],accounts[52],accounts[83]],3873,{from:accounts[0]});

result = await instance.transfer(accounts[1],740,{from:accounts[1]});

await instance.approve(accounts[140], 36064, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

});
it('test 26',async() => {

await instance.approve(accounts[115], 22801, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

result = await instance.transfer(accounts[2],500,{from:accounts[3]});
await instance.batchTransfer([accounts[27],accounts[40],accounts[26],accounts[78],accounts[31]],4972,{from:accounts[0]});

});
it('test 27',async() => {

await instance.approve(accounts[156], 28019, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[156], 1000, {from: accounts[156]});

result = await instance.transfer(accounts[0],437,{from:accounts[0]});
await instance.batchTransfer([accounts[47],accounts[95],accounts[72],accounts[57]],3083,{from:accounts[0]});

});
it('test 28',async() => {

await instance.approve(accounts[66], 23278, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[66], 1000, {from: accounts[66]});

await instance.batchTransfer([accounts[91],accounts[23],accounts[72],accounts[20],accounts[27],accounts[78],accounts[56],accounts[84],accounts[47],accounts[44]],4096,{from:accounts[0]});

result = await instance.transfer(accounts[2],716,{from:accounts[1]});
});
it('test 29',async() => {
await instance.batchTransfer([accounts[57],accounts[15]],6252,{from:accounts[0]});


await instance.approve(accounts[151], 26807, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

result = await instance.transfer(accounts[5],541,{from:accounts[4]});
});
});
