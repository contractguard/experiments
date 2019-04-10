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
result = await instance.transfer(accounts[4],764,{from:accounts[3]});
await instance.batchTransfer([accounts[22],accounts[41],accounts[7],accounts[2],accounts[88],accounts[10],accounts[23]],5831,{from:accounts[0]});


await instance.approve(accounts[125], 27674, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[5],240,{from:accounts[4]});

await instance.approve(accounts[41], 31100, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

await instance.batchTransfer([accounts[33],accounts[78]],6292,{from:accounts[0]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[1],908,{from:accounts[1]});

await instance.approve(accounts[115], 34836, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

await instance.batchTransfer([accounts[58],accounts[96],accounts[40],accounts[35],accounts[11]],4994,{from:accounts[0]});

});
it('test 3',async() => {
await instance.batchTransfer([accounts[64],accounts[77],accounts[21],accounts[11],accounts[85],accounts[59],accounts[82],accounts[10],accounts[58]],3954,{from:accounts[0]});


await instance.approve(accounts[12], 38430, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[12], 1000, {from: accounts[12]});

result = await instance.transfer(accounts[2],562,{from:accounts[3]});
});
it('test 4',async() => {
await instance.batchTransfer([accounts[70],accounts[70]],3869,{from:accounts[0]});


await instance.approve(accounts[53], 34285, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

result = await instance.transfer(accounts[4],882,{from:accounts[1]});
});
it('test 5',async() => {

await instance.approve(accounts[15], 22307, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[15], 1000, {from: accounts[15]});

result = await instance.transfer(accounts[4],531,{from:accounts[3]});
await instance.batchTransfer([accounts[15],accounts[60],accounts[36]],3702,{from:accounts[0]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[41],accounts[34],accounts[94],accounts[90],accounts[54]],2997,{from:accounts[0]});


await instance.approve(accounts[55], 35787, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

result = await instance.transfer(accounts[5],300,{from:accounts[0]});
});
it('test 7',async() => {
result = await instance.transfer(accounts[2],975,{from:accounts[3]});

await instance.approve(accounts[37], 38130, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

await instance.batchTransfer([accounts[48],accounts[38]],6473,{from:accounts[0]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[5],369,{from:accounts[4]});

await instance.approve(accounts[103], 29124, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[103], 1000, {from: accounts[103]});

await instance.batchTransfer([accounts[57],accounts[82],accounts[10]],2815,{from:accounts[0]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[51],accounts[68],accounts[64],accounts[82],accounts[77],accounts[60],accounts[22],accounts[20],accounts[61],accounts[17]],9367,{from:accounts[0]});


await instance.approve(accounts[12], 25414, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[12], 1000, {from: accounts[12]});

result = await instance.transfer(accounts[2],434,{from:accounts[4]});
});
it('test 10',async() => {
result = await instance.transfer(accounts[0],688,{from:accounts[4]});

await instance.approve(accounts[32], 27647, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[32], 1000, {from: accounts[32]});

await instance.batchTransfer([accounts[26],accounts[50],accounts[76],accounts[40],accounts[63],accounts[85],accounts[4],accounts[57],accounts[24]],1393,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {

await instance.approve(accounts[187], 21104, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[187], 1000, {from: accounts[187]});

result = await instance.transfer(accounts[5],992,{from:accounts[5]});
await instance.batchTransfer([accounts[3],accounts[68],accounts[53],accounts[17],accounts[84]],1782,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[22],accounts[84]],9978,{from:accounts[0]});


await instance.approve(accounts[176], 25719, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

result = await instance.transfer(accounts[5],903,{from:accounts[4]});
});
it('test 13',async() => {
await instance.batchTransfer([accounts[36],accounts[79],accounts[13],accounts[18],accounts[21],accounts[37],accounts[32],accounts[69],accounts[14],accounts[51]],6010,{from:accounts[0]});

result = await instance.transfer(accounts[3],876,{from:accounts[5]});

await instance.approve(accounts[54], 22296, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[33],accounts[83],accounts[41],accounts[55],accounts[23],accounts[45]],8922,{from:accounts[0]});

result = await instance.transfer(accounts[5],270,{from:accounts[3]});

await instance.approve(accounts[160], 29993, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[160], 1000, {from: accounts[160]});

});
it('test 15',async() => {

await instance.approve(accounts[104], 33373, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[104], 1000, {from: accounts[104]});

await instance.batchTransfer([accounts[18],accounts[91],accounts[78]],9318,{from:accounts[0]});

result = await instance.transfer(accounts[1],489,{from:accounts[0]});
});
it('test 16',async() => {

await instance.approve(accounts[44], 23937, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

await instance.batchTransfer([accounts[95],accounts[88],accounts[78],accounts[52],accounts[46],accounts[23],accounts[45],accounts[8],accounts[85],accounts[56]],4818,{from:accounts[0]});

result = await instance.transfer(accounts[3],914,{from:accounts[5]});
});
it('test 17',async() => {

await instance.approve(accounts[69], 35226, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

await instance.batchTransfer([accounts[43],accounts[75],accounts[31],accounts[10],accounts[79],accounts[46],accounts[89]],3313,{from:accounts[0]});

result = await instance.transfer(accounts[5],263,{from:accounts[5]});
});
it('test 18',async() => {
await instance.batchTransfer([accounts[59],accounts[14],accounts[79],accounts[48],accounts[92],accounts[92],accounts[49],accounts[12]],7400,{from:accounts[0]});

result = await instance.transfer(accounts[3],494,{from:accounts[1]});

await instance.approve(accounts[169], 34185, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[169], 1000, {from: accounts[169]});

});
it('test 19',async() => {

await instance.approve(accounts[2], 24403, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

result = await instance.transfer(accounts[3],288,{from:accounts[0]});
await instance.batchTransfer([accounts[47],accounts[35],accounts[30],accounts[34]],1026,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[19],accounts[54],accounts[18],accounts[39],accounts[61],accounts[64],accounts[33],accounts[80],accounts[23]],9738,{from:accounts[0]});


await instance.approve(accounts[28], 22174, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[28], 1000, {from: accounts[28]});

result = await instance.transfer(accounts[5],581,{from:accounts[0]});
});
it('test 21',async() => {
result = await instance.transfer(accounts[3],989,{from:accounts[3]});
await instance.batchTransfer([accounts[28],accounts[56],accounts[90],accounts[91],accounts[79],accounts[97],accounts[39],accounts[56],accounts[70],accounts[82]],7412,{from:accounts[0]});


await instance.approve(accounts[156], 24478, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[156], 1000, {from: accounts[156]});

});
it('test 22',async() => {
result = await instance.transfer(accounts[5],289,{from:accounts[3]});
await instance.batchTransfer([accounts[7],accounts[58],accounts[46],accounts[57],accounts[18],accounts[60],accounts[40]],5994,{from:accounts[0]});


await instance.approve(accounts[197], 39354, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[197], 1000, {from: accounts[197]});

});
it('test 23',async() => {

await instance.approve(accounts[4], 26988, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[4], 1000, {from: accounts[4]});

result = await instance.transfer(accounts[5],393,{from:accounts[4]});
await instance.batchTransfer([accounts[16],accounts[42],accounts[37],accounts[5],accounts[3]],2922,{from:accounts[0]});

});
it('test 24',async() => {
await instance.batchTransfer([accounts[25],accounts[31],accounts[61],accounts[48],accounts[58],accounts[4],accounts[12],accounts[81]],7912,{from:accounts[0]});


await instance.approve(accounts[74], 25524, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[74], 1000, {from: accounts[74]});

result = await instance.transfer(accounts[1],209,{from:accounts[2]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 25',async() => {
await instance.batchTransfer([accounts[70],accounts[63],accounts[33],accounts[39],accounts[15],accounts[76]],7326,{from:accounts[0]});

result = await instance.transfer(accounts[2],256,{from:accounts[5]});

await instance.approve(accounts[81], 31316, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[81], 1000, {from: accounts[81]});

});
it('test 26',async() => {

await instance.approve(accounts[174], 35405, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

await instance.batchTransfer([accounts[43],accounts[13],accounts[66],accounts[10],accounts[49],accounts[71],accounts[67],accounts[21],accounts[82]],5663,{from:accounts[0]});

result = await instance.transfer(accounts[0],281,{from:accounts[0]});
});
it('test 27',async() => {

await instance.approve(accounts[153], 37814, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[153], 1000, {from: accounts[153]});

result = await instance.transfer(accounts[4],410,{from:accounts[2]});
await instance.batchTransfer([accounts[64],accounts[22],accounts[49],accounts[88]],5369,{from:accounts[0]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[93],accounts[81],accounts[91],accounts[100],accounts[5],accounts[24],accounts[5],accounts[33],accounts[100]],6761,{from:accounts[0]});

result = await instance.transfer(accounts[4],834,{from:accounts[0]});

await instance.approve(accounts[4], 25790, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[4], 1000, {from: accounts[4]});

});
it('test 29',async() => {

await instance.approve(accounts[145], 28688, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

result = await instance.transfer(accounts[1],845,{from:accounts[5]});
await instance.batchTransfer([accounts[13],accounts[59],accounts[59],accounts[66],accounts[95],accounts[10],accounts[49],accounts[15],accounts[11]],9208,{from:accounts[0]});

});
});
