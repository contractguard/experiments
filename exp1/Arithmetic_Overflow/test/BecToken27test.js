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
await instance.batchTransfer([accounts[23],accounts[1]],2686,{from:accounts[0]});


await instance.approve(accounts[172], 27285, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[5],571,{from:accounts[4]});
});
it('test 1',async() => {
result = await instance.transfer(accounts[3],380,{from:accounts[1]});
await instance.batchTransfer([accounts[16],accounts[56],accounts[69]],6213,{from:accounts[0]});


await instance.approve(accounts[152], 35471, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[3],384,{from:accounts[4]});
await instance.batchTransfer([accounts[82],accounts[49],accounts[45]],9533,{from:accounts[0]});


await instance.approve(accounts[39], 33316, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

});
it('test 3',async() => {

await instance.approve(accounts[12], 39195, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[12], 1000, {from: accounts[12]});

result = await instance.transfer(accounts[4],549,{from:accounts[5]});
await instance.batchTransfer([accounts[92],accounts[82]],7403,{from:accounts[0]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[2],345,{from:accounts[5]});
await instance.batchTransfer([accounts[66]],2252,{from:accounts[0]});


await instance.approve(accounts[199], 37649, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[199], 1000, {from: accounts[199]});

});
it('test 5',async() => {
result = await instance.transfer(accounts[3],474,{from:accounts[4]});

await instance.approve(accounts[3], 28677, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[3], 1000, {from: accounts[3]});

await instance.batchTransfer([accounts[75]],6461,{from:accounts[0]});

});
it('test 6',async() => {

await instance.approve(accounts[154], 32598, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

result = await instance.transfer(accounts[2],855,{from:accounts[5]});
await instance.batchTransfer([accounts[31]],3408,{from:accounts[0]});

});
it('test 7',async() => {

await instance.approve(accounts[45], 20866, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

result = await instance.transfer(accounts[3],971,{from:accounts[2]});
await instance.batchTransfer([accounts[79],accounts[44],accounts[3],accounts[48],accounts[21],accounts[1],accounts[25],accounts[20],accounts[27],accounts[89]],4744,{from:accounts[0]});

});
it('test 8',async() => {

await instance.approve(accounts[124], 34850, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[124], 1000, {from: accounts[124]});

await instance.batchTransfer([accounts[75],accounts[44],accounts[58],accounts[39],accounts[3]],1673,{from:accounts[0]});

result = await instance.transfer(accounts[3],449,{from:accounts[1]});
});
it('test 9',async() => {
await instance.batchTransfer([accounts[32],accounts[38],accounts[49],accounts[100]],2174,{from:accounts[0]});


await instance.approve(accounts[6], 21545, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[6], 1000, {from: accounts[6]});

result = await instance.transfer(accounts[3],931,{from:accounts[2]});
});
it('test 10',async() => {
await instance.batchTransfer([accounts[34]],4028,{from:accounts[0]});

result = await instance.transfer(accounts[0],401,{from:accounts[1]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[83], 32613, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[77],accounts[66],accounts[70],accounts[19],accounts[31],accounts[24],accounts[67]],6703,{from:accounts[0]});


await instance.approve(accounts[83], 38451, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

result = await instance.transfer(accounts[0],390,{from:accounts[4]});
});
it('test 12',async() => {

await instance.approve(accounts[147], 28420, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[147], 1000, {from: accounts[147]});

await instance.batchTransfer([accounts[56],accounts[32],accounts[31],accounts[48],accounts[13],accounts[22],accounts[45],accounts[11],accounts[57]],1572,{from:accounts[0]});

result = await instance.transfer(accounts[3],267,{from:accounts[4]});
});
it('test 13',async() => {
result = await instance.transfer(accounts[0],220,{from:accounts[1]});
await instance.batchTransfer([accounts[100],accounts[39],accounts[79],accounts[38],accounts[84],accounts[59],accounts[14],accounts[82]],2774,{from:accounts[0]});


await instance.approve(accounts[82], 34810, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[0],414,{from:accounts[0]});
await instance.batchTransfer([accounts[5],accounts[74],accounts[91],accounts[38],accounts[59]],8221,{from:accounts[0]});


await instance.approve(accounts[154], 29559, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[4],257,{from:accounts[5]});

await instance.approve(accounts[108], 24091, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[108], 1000, {from: accounts[108]});

await instance.batchTransfer([accounts[44],accounts[44],accounts[73],accounts[24]],4498,{from:accounts[0]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[4],443,{from:accounts[5]});
await instance.batchTransfer([accounts[35],accounts[22],accounts[71],accounts[97],accounts[92],accounts[6],accounts[30],accounts[46],accounts[82]],6248,{from:accounts[0]});


await instance.approve(accounts[120], 22057, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[3],209,{from:accounts[3]});

await instance.approve(accounts[135], 39645, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

await instance.batchTransfer([accounts[56],accounts[3],accounts[26],accounts[13]],1824,{from:accounts[0]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[36],accounts[87],accounts[35]],9422,{from:accounts[0]});

result = await instance.transfer(accounts[2],465,{from:accounts[1]});

await instance.approve(accounts[191], 29937, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[191], 1000, {from: accounts[191]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[1],537,{from:accounts[0]});
await instance.batchTransfer([accounts[20],accounts[77],accounts[68],accounts[81],accounts[9]],5427,{from:accounts[0]});


await instance.approve(accounts[81], 23276, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[81], 1000, {from: accounts[81]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[161], 21744, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[161], 1000, {from: accounts[161]});

await instance.batchTransfer([accounts[44],accounts[83],accounts[33],accounts[71],accounts[66],accounts[74]],2921,{from:accounts[0]});

result = await instance.transfer(accounts[4],518,{from:accounts[4]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 21',async() => {
await instance.batchTransfer([accounts[1],accounts[8],accounts[28],accounts[88],accounts[31]],9253,{from:accounts[0]});

result = await instance.transfer(accounts[4],271,{from:accounts[1]});

await instance.approve(accounts[64], 32973, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[64], 1000, {from: accounts[64]});

});
it('test 22',async() => {
result = await instance.transfer(accounts[5],679,{from:accounts[3]});

await instance.approve(accounts[76], 26534, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

await instance.batchTransfer([accounts[57],accounts[46],accounts[25],accounts[4]],6356,{from:accounts[0]});

});
it('test 23',async() => {
result = await instance.transfer(accounts[1],297,{from:accounts[0]});
await instance.batchTransfer([accounts[87],accounts[34],accounts[41],accounts[75],accounts[32],accounts[94],accounts[31],accounts[92],accounts[62],accounts[60]],8836,{from:accounts[0]});


await instance.approve(accounts[172], 37330, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

});
it('test 24',async() => {

await instance.approve(accounts[54], 21984, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

result = await instance.transfer(accounts[1],524,{from:accounts[5]});
await instance.batchTransfer([accounts[97],accounts[78],accounts[44],accounts[9],accounts[91],accounts[36],accounts[53],accounts[62],accounts[13]],7037,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 25',async() => {

await instance.approve(accounts[104], 39908, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[104], 1000, {from: accounts[104]});

await instance.batchTransfer([accounts[1]],8562,{from:accounts[0]});

result = await instance.transfer(accounts[5],625,{from:accounts[5]});
});
it('test 26',async() => {
await instance.batchTransfer([accounts[38],accounts[73],accounts[55],accounts[23],accounts[46],accounts[29],accounts[43],accounts[16],accounts[4],accounts[34]],7168,{from:accounts[0]});


await instance.approve(accounts[66], 39190, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[66], 1000, {from: accounts[66]});

result = await instance.transfer(accounts[5],791,{from:accounts[5]});
});
it('test 27',async() => {
result = await instance.transfer(accounts[1],584,{from:accounts[4]});

await instance.approve(accounts[18], 34268, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

await instance.batchTransfer([accounts[29]],1937,{from:accounts[0]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[46],accounts[67],accounts[29],accounts[70],accounts[68],accounts[20]],1968,{from:accounts[0]});

result = await instance.transfer(accounts[2],326,{from:accounts[2]});

await instance.approve(accounts[72], 24239, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[20],accounts[58],accounts[11],accounts[76]],2297,{from:accounts[0]});


await instance.approve(accounts[173], 37693, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[173], 1000, {from: accounts[173]});

result = await instance.transfer(accounts[2],570,{from:accounts[0]});
});
});
