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
result = await instance.transfer(accounts[2],616,{from:accounts[3]});

await instance.approve(accounts[198], 30171, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[198], 1000, {from: accounts[198]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[17],accounts[69],accounts[17],accounts[19],accounts[75],accounts[85],accounts[61],accounts[100],accounts[23],accounts[53]],8525,{from:accounts[0]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[2],230,{from:accounts[1]});

await instance.approve(accounts[107], 20845, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

await instance.batchTransfer([accounts[47],accounts[49],accounts[61],accounts[49]],1057,{from:accounts[0]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[1],789,{from:accounts[4]});
await instance.batchTransfer([accounts[80],accounts[48],accounts[6],accounts[81],accounts[3],accounts[73]],3800,{from:accounts[0]});


await instance.approve(accounts[143], 23563, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[143], 1000, {from: accounts[143]});

});
it('test 3',async() => {
await instance.batchTransfer([accounts[41],accounts[1],accounts[71],accounts[52],accounts[84],accounts[56],accounts[93],accounts[76]],2123,{from:accounts[0]});

result = await instance.transfer(accounts[2],970,{from:accounts[4]});

await instance.approve(accounts[93], 27666, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[87],accounts[24],accounts[42],accounts[98],accounts[9],accounts[90],accounts[41],accounts[54]],2270,{from:accounts[0]});


await instance.approve(accounts[55], 32953, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

result = await instance.transfer(accounts[1],860,{from:accounts[2]});
});
it('test 5',async() => {
result = await instance.transfer(accounts[2],657,{from:accounts[2]});
await instance.batchTransfer([accounts[70],accounts[33],accounts[100],accounts[73],accounts[48],accounts[92],accounts[58]],9232,{from:accounts[0]});


await instance.approve(accounts[166], 27241, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[166], 1000, {from: accounts[166]});

});
it('test 6',async() => {

await instance.approve(accounts[126], 39327, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

result = await instance.transfer(accounts[5],973,{from:accounts[4]});
await instance.batchTransfer([accounts[33],accounts[82],accounts[88],accounts[55],accounts[39],accounts[67],accounts[18],accounts[3]],9130,{from:accounts[0]});

});
it('test 7',async() => {
await instance.batchTransfer([accounts[6],accounts[47],accounts[68],accounts[68]],2712,{from:accounts[0]});


await instance.approve(accounts[44], 20382, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

result = await instance.transfer(accounts[0],895,{from:accounts[0]});
});
it('test 8',async() => {

await instance.approve(accounts[145], 38953, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

await instance.batchTransfer([accounts[61],accounts[18],accounts[99],accounts[13],accounts[19]],9082,{from:accounts[0]});

result = await instance.transfer(accounts[0],744,{from:accounts[3]});
});
it('test 9',async() => {

await instance.approve(accounts[123], 39731, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[123], 1000, {from: accounts[123]});

await instance.batchTransfer([accounts[20],accounts[19],accounts[48]],6847,{from:accounts[0]});

result = await instance.transfer(accounts[4],681,{from:accounts[2]});
});
it('test 10',async() => {
await instance.batchTransfer([accounts[63],accounts[29],accounts[94],accounts[84],accounts[88]],9178,{from:accounts[0]});

result = await instance.transfer(accounts[5],986,{from:accounts[1]});

await instance.approve(accounts[30], 27511, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[30], 1000, {from: accounts[30]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {

await instance.approve(accounts[185], 23153, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[185], 1000, {from: accounts[185]});

await instance.batchTransfer([accounts[95],accounts[90],accounts[35],accounts[39],accounts[17],accounts[25]],6102,{from:accounts[0]});

result = await instance.transfer(accounts[1],397,{from:accounts[3]});
});
it('test 12',async() => {

await instance.approve(accounts[178], 24297, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

await instance.batchTransfer([accounts[31]],7956,{from:accounts[0]});

result = await instance.transfer(accounts[2],340,{from:accounts[5]});
});
it('test 13',async() => {
result = await instance.transfer(accounts[2],342,{from:accounts[4]});

await instance.approve(accounts[104], 22907, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[104], 1000, {from: accounts[104]});

await instance.batchTransfer([accounts[45]],8429,{from:accounts[0]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[4],200,{from:accounts[3]});
await instance.batchTransfer([accounts[84]],7696,{from:accounts[0]});


await instance.approve(accounts[33], 38965, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[1],588,{from:accounts[4]});

await instance.approve(accounts[158], 27973, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

await instance.batchTransfer([accounts[8],accounts[57],accounts[13],accounts[29],accounts[56],accounts[53],accounts[49],accounts[57]],2008,{from:accounts[0]});

});
it('test 16',async() => {

await instance.approve(accounts[142], 37699, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[142], 1000, {from: accounts[142]});

result = await instance.transfer(accounts[2],502,{from:accounts[1]});
await instance.batchTransfer([accounts[72],accounts[9],accounts[23],accounts[45],accounts[47],accounts[79],accounts[19],accounts[44]],7261,{from:accounts[0]});

});
it('test 17',async() => {

await instance.approve(accounts[197], 21168, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[197], 1000, {from: accounts[197]});

await instance.batchTransfer([accounts[96],accounts[32],accounts[22],accounts[92]],8318,{from:accounts[0]});

result = await instance.transfer(accounts[5],613,{from:accounts[3]});
});
it('test 18',async() => {
await instance.batchTransfer([accounts[57],accounts[18],accounts[64],accounts[96],accounts[93],accounts[39],accounts[85],accounts[35],accounts[26],accounts[76]],3460,{from:accounts[0]});


await instance.approve(accounts[29], 33692, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[29], 1000, {from: accounts[29]});

result = await instance.transfer(accounts[2],421,{from:accounts[0]});
});
it('test 19',async() => {

await instance.approve(accounts[177], 20025, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[177], 1000, {from: accounts[177]});

result = await instance.transfer(accounts[0],315,{from:accounts[3]});
await instance.batchTransfer([accounts[58],accounts[43],accounts[6]],7609,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[16],accounts[32]],4874,{from:accounts[0]});

result = await instance.transfer(accounts[4],265,{from:accounts[3]});

await instance.approve(accounts[172], 38099, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

});
it('test 21',async() => {

await instance.approve(accounts[97], 38516, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

await instance.batchTransfer([accounts[79],accounts[87],accounts[23],accounts[37],accounts[16],accounts[31],accounts[31],accounts[32]],7206,{from:accounts[0]});

result = await instance.transfer(accounts[4],212,{from:accounts[3]});
});
it('test 22',async() => {

await instance.approve(accounts[21], 21432, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

result = await instance.transfer(accounts[2],579,{from:accounts[5]});
await instance.batchTransfer([accounts[24],accounts[55],accounts[72],accounts[27],accounts[42],accounts[89]],6305,{from:accounts[0]});

});
it('test 23',async() => {
result = await instance.transfer(accounts[2],389,{from:accounts[4]});
await instance.batchTransfer([accounts[15],accounts[43],accounts[67],accounts[91],accounts[45],accounts[14],accounts[14],accounts[40],accounts[67],accounts[68]],1861,{from:accounts[0]});


await instance.approve(accounts[126], 30288, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

});
it('test 24',async() => {
await instance.batchTransfer([accounts[49],accounts[49],accounts[64],accounts[84],accounts[62]],5893,{from:accounts[0]});


await instance.approve(accounts[125], 32888, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

result = await instance.transfer(accounts[4],864,{from:accounts[4]});
});
it('test 25',async() => {

await instance.approve(accounts[121], 24224, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

result = await instance.transfer(accounts[2],715,{from:accounts[4]});
await instance.batchTransfer([accounts[8],accounts[42],accounts[86],accounts[72],accounts[53],accounts[100],accounts[30],accounts[30],accounts[77]],5484,{from:accounts[0]});

});
it('test 26',async() => {
await instance.batchTransfer([accounts[52],accounts[5],accounts[88]],6492,{from:accounts[0]});


await instance.approve(accounts[166], 37444, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[166], 1000, {from: accounts[166]});

result = await instance.transfer(accounts[3],670,{from:accounts[3]});
});
it('test 27',async() => {

await instance.approve(accounts[33], 21159, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

await instance.batchTransfer([accounts[53]],6539,{from:accounts[0]});

result = await instance.transfer(accounts[0],529,{from:accounts[3]});
});
it('test 28',async() => {

await instance.approve(accounts[183], 23916, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[183], 1000, {from: accounts[183]});

await instance.batchTransfer([accounts[98]],9329,{from:accounts[0]});

result = await instance.transfer(accounts[3],375,{from:accounts[5]});
});
it('test 29',async() => {
await instance.batchTransfer([accounts[86],accounts[97],accounts[85]],4610,{from:accounts[0]});

result = await instance.transfer(accounts[0],293,{from:accounts[5]});

await instance.approve(accounts[31], 23655, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[31], 1000, {from: accounts[31]});

});
});
