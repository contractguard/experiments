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
result = await instance.transfer(accounts[4],884,{from:accounts[2]});

await instance.approve(accounts[158], 35622, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

await instance.batchTransfer([accounts[26],accounts[53],accounts[25]],6312,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {

await instance.approve(accounts[19], 29986, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

await instance.batchTransfer([accounts[52],accounts[66],accounts[87],accounts[49],accounts[37],accounts[35],accounts[25],accounts[62],accounts[14],accounts[56]],9412,{from:accounts[0]});

result = await instance.transfer(accounts[4],812,{from:accounts[2]});
});
it('test 2',async() => {
result = await instance.transfer(accounts[2],826,{from:accounts[4]});

await instance.approve(accounts[45], 24240, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

await instance.batchTransfer([accounts[55],accounts[29],accounts[94]],8157,{from:accounts[0]});

});
it('test 3',async() => {
await instance.batchTransfer([accounts[98],accounts[99],accounts[54],accounts[76],accounts[69],accounts[58],accounts[6],accounts[63]],4216,{from:accounts[0]});

result = await instance.transfer(accounts[4],242,{from:accounts[0]});

await instance.approve(accounts[198], 30431, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[198], 1000, {from: accounts[198]});

});
it('test 4',async() => {

await instance.approve(accounts[49], 34425, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[49], 1000, {from: accounts[49]});

await instance.batchTransfer([accounts[1]],4422,{from:accounts[0]});

result = await instance.transfer(accounts[5],356,{from:accounts[5]});
});
it('test 5',async() => {
result = await instance.transfer(accounts[2],977,{from:accounts[2]});

await instance.approve(accounts[67], 22533, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

await instance.batchTransfer([accounts[73],accounts[3],accounts[84],accounts[89],accounts[26],accounts[77],accounts[75],accounts[33]],1822,{from:accounts[0]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[92],accounts[10],accounts[65],accounts[35],accounts[19],accounts[15],accounts[24],accounts[67]],5769,{from:accounts[0]});

result = await instance.transfer(accounts[1],280,{from:accounts[2]});

await instance.approve(accounts[140], 36732, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

});
it('test 7',async() => {
await instance.batchTransfer([accounts[86],accounts[57],accounts[93],accounts[95],accounts[95],accounts[17],accounts[63],accounts[29]],1954,{from:accounts[0]});

result = await instance.transfer(accounts[4],782,{from:accounts[3]});

await instance.approve(accounts[74], 21284, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[74], 1000, {from: accounts[74]});

});
it('test 8',async() => {

await instance.approve(accounts[160], 34006, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[160], 1000, {from: accounts[160]});

result = await instance.transfer(accounts[3],795,{from:accounts[3]});
await instance.batchTransfer([accounts[82]],9520,{from:accounts[0]});

});
it('test 9',async() => {

await instance.approve(accounts[40], 24981, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[40], 1000, {from: accounts[40]});

result = await instance.transfer(accounts[0],577,{from:accounts[0]});
await instance.batchTransfer([accounts[65],accounts[55],accounts[75],accounts[71]],3665,{from:accounts[0]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[0],896,{from:accounts[3]});
await instance.batchTransfer([accounts[60],accounts[63],accounts[84],accounts[98],accounts[63],accounts[54],accounts[68]],9621,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[34], 29062, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

});
it('test 11',async() => {

await instance.approve(accounts[45], 24656, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

result = await instance.transfer(accounts[2],614,{from:accounts[2]});
await instance.batchTransfer([accounts[32],accounts[78],accounts[36],accounts[40]],5832,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[78],accounts[86],accounts[93],accounts[72],accounts[32],accounts[67]],6124,{from:accounts[0]});

result = await instance.transfer(accounts[1],241,{from:accounts[2]});

await instance.approve(accounts[93], 30490, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

});
it('test 13',async() => {

await instance.approve(accounts[180], 28017, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[180], 1000, {from: accounts[180]});

await instance.batchTransfer([accounts[1],accounts[46],accounts[27],accounts[90]],2664,{from:accounts[0]});

result = await instance.transfer(accounts[2],837,{from:accounts[5]});
});
it('test 14',async() => {

await instance.approve(accounts[55], 26841, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

await instance.batchTransfer([accounts[72]],3058,{from:accounts[0]});

result = await instance.transfer(accounts[5],492,{from:accounts[2]});
});
it('test 15',async() => {
await instance.batchTransfer([accounts[17],accounts[92],accounts[46],accounts[53],accounts[9],accounts[85],accounts[73],accounts[65]],1710,{from:accounts[0]});

result = await instance.transfer(accounts[4],567,{from:accounts[0]});

await instance.approve(accounts[75], 37834, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

});
it('test 16',async() => {

await instance.approve(accounts[23], 38711, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[23], 1000, {from: accounts[23]});

result = await instance.transfer(accounts[0],801,{from:accounts[5]});
await instance.batchTransfer([accounts[6],accounts[61],accounts[15],accounts[62],accounts[80]],8721,{from:accounts[0]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[2],766,{from:accounts[5]});
await instance.batchTransfer([accounts[74],accounts[54],accounts[24],accounts[52],accounts[93],accounts[56]],1240,{from:accounts[0]});


await instance.approve(accounts[50], 24312, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[50], 1000, {from: accounts[50]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[80],accounts[26],accounts[85],accounts[59],accounts[70]],8581,{from:accounts[0]});

result = await instance.transfer(accounts[4],914,{from:accounts[0]});

await instance.approve(accounts[97], 26477, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

});
it('test 19',async() => {

await instance.approve(accounts[175], 29143, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[175], 1000, {from: accounts[175]});

result = await instance.transfer(accounts[2],249,{from:accounts[2]});
await instance.batchTransfer([accounts[57],accounts[58],accounts[63],accounts[37],accounts[68]],6943,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[71]],5931,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[24], 22796, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[24], 1000, {from: accounts[24]});

result = await instance.transfer(accounts[4],975,{from:accounts[3]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {
await instance.batchTransfer([accounts[88],accounts[76],accounts[26],accounts[31],accounts[18],accounts[28],accounts[34],accounts[69],accounts[61]],8610,{from:accounts[0]});


await instance.approve(accounts[76], 24789, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

result = await instance.transfer(accounts[3],797,{from:accounts[0]});
});
it('test 22',async() => {
result = await instance.transfer(accounts[2],515,{from:accounts[2]});

await instance.approve(accounts[33], 35033, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

await instance.batchTransfer([accounts[7],accounts[21],accounts[95],accounts[30],accounts[46],accounts[71]],3176,{from:accounts[0]});

});
it('test 23',async() => {
result = await instance.transfer(accounts[5],678,{from:accounts[0]});

await instance.approve(accounts[83], 25480, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

await instance.batchTransfer([accounts[35],accounts[15],accounts[62],accounts[20],accounts[17],accounts[83],accounts[12],accounts[80],accounts[80]],8922,{from:accounts[0]});

});
it('test 24',async() => {

await instance.approve(accounts[188], 35453, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[188], 1000, {from: accounts[188]});

await instance.batchTransfer([accounts[65],accounts[49],accounts[86],accounts[67],accounts[28],accounts[14]],1926,{from:accounts[0]});

result = await instance.transfer(accounts[0],587,{from:accounts[1]});
});
it('test 25',async() => {
result = await instance.transfer(accounts[5],280,{from:accounts[4]});

await instance.approve(accounts[82], 22385, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

await instance.batchTransfer([accounts[55],accounts[76],accounts[89]],3621,{from:accounts[0]});

});
it('test 26',async() => {
await instance.batchTransfer([accounts[57],accounts[32]],4466,{from:accounts[0]});


await instance.approve(accounts[8], 37273, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

result = await instance.transfer(accounts[4],516,{from:accounts[3]});
});
it('test 27',async() => {
result = await instance.transfer(accounts[0],716,{from:accounts[2]});
await instance.batchTransfer([accounts[24],accounts[32],accounts[80]],9141,{from:accounts[0]});


await instance.approve(accounts[154], 21003, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[2],409,{from:accounts[3]});
await instance.batchTransfer([accounts[94],accounts[69],accounts[11],accounts[20],accounts[41]],1432,{from:accounts[0]});


await instance.approve(accounts[158], 26522, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[3],362,{from:accounts[0]});

await instance.approve(accounts[176], 34071, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

await instance.batchTransfer([accounts[6],accounts[19],accounts[8]],2584,{from:accounts[0]});

});
});
