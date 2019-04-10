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
await instance.batchTransfer([accounts[94],accounts[1],accounts[57]],4153,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[5],311,{from:accounts[0]});

await instance.approve(accounts[129], 21688, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[62],accounts[80],accounts[59],accounts[95],accounts[11]],1168,{from:accounts[0]});


await instance.approve(accounts[185], 38789, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[185], 1000, {from: accounts[185]});

result = await instance.transfer(accounts[2],745,{from:accounts[5]});
});
it('test 2',async() => {
await instance.batchTransfer([accounts[75]],6937,{from:accounts[0]});


await instance.approve(accounts[76], 37302, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

result = await instance.transfer(accounts[2],931,{from:accounts[5]});
});
it('test 3',async() => {

await instance.approve(accounts[75], 25109, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

result = await instance.transfer(accounts[5],553,{from:accounts[5]});
await instance.batchTransfer([accounts[77],accounts[69]],4946,{from:accounts[0]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[12],accounts[82],accounts[92],accounts[95],accounts[72]],1499,{from:accounts[0]});

result = await instance.transfer(accounts[0],387,{from:accounts[0]});

await instance.approve(accounts[140], 30832, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[4],accounts[10],accounts[90]],6712,{from:accounts[0]});

result = await instance.transfer(accounts[5],968,{from:accounts[2]});

await instance.approve(accounts[151], 25896, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[5],494,{from:accounts[5]});

await instance.approve(accounts[182], 28339, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

await instance.batchTransfer([accounts[95],accounts[33],accounts[65],accounts[54],accounts[5],accounts[45]],1348,{from:accounts[0]});

});
it('test 7',async() => {
await instance.batchTransfer([accounts[100],accounts[28],accounts[1]],4750,{from:accounts[0]});

result = await instance.transfer(accounts[1],440,{from:accounts[2]});

await instance.approve(accounts[88], 35939, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[88], 1000, {from: accounts[88]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[92]],9752,{from:accounts[0]});


await instance.approve(accounts[52], 29856, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[52], 1000, {from: accounts[52]});

result = await instance.transfer(accounts[0],671,{from:accounts[5]});
});
it('test 9',async() => {

await instance.approve(accounts[75], 23355, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

result = await instance.transfer(accounts[0],692,{from:accounts[0]});
await instance.batchTransfer([accounts[70],accounts[73],accounts[20]],6877,{from:accounts[0]});

});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[70], 32631, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[70], 1000, {from: accounts[70]});

result = await instance.transfer(accounts[1],396,{from:accounts[4]});
await instance.batchTransfer([accounts[67],accounts[4],accounts[61],accounts[23],accounts[99]],1099,{from:accounts[0]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[4],468,{from:accounts[2]});
await instance.batchTransfer([accounts[14],accounts[11],accounts[38],accounts[78],accounts[78],accounts[68]],9405,{from:accounts[0]});


await instance.approve(accounts[69], 31367, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[5],accounts[52],accounts[40],accounts[69],accounts[85],accounts[62],accounts[8],accounts[81],accounts[11]],8462,{from:accounts[0]});


await instance.approve(accounts[77], 33691, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

result = await instance.transfer(accounts[3],612,{from:accounts[3]});
});
it('test 13',async() => {

await instance.approve(accounts[99], 24235, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[99], 1000, {from: accounts[99]});

result = await instance.transfer(accounts[5],408,{from:accounts[4]});
await instance.batchTransfer([accounts[51],accounts[55],accounts[99]],2335,{from:accounts[0]});

});
it('test 14',async() => {

await instance.approve(accounts[177], 36617, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[177], 1000, {from: accounts[177]});

result = await instance.transfer(accounts[2],964,{from:accounts[2]});
await instance.batchTransfer([accounts[10],accounts[3],accounts[43],accounts[89]],8466,{from:accounts[0]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[4],947,{from:accounts[4]});

await instance.approve(accounts[107], 36536, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

await instance.batchTransfer([accounts[35],accounts[28],accounts[65],accounts[44],accounts[69],accounts[5],accounts[82]],1324,{from:accounts[0]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[38],accounts[53],accounts[20],accounts[61],accounts[83],accounts[87]],2131,{from:accounts[0]});


await instance.approve(accounts[126], 23851, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

result = await instance.transfer(accounts[1],459,{from:accounts[4]});
});
it('test 17',async() => {

await instance.approve(accounts[106], 30508, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[106], 1000, {from: accounts[106]});

result = await instance.transfer(accounts[5],444,{from:accounts[3]});
await instance.batchTransfer([accounts[65],accounts[54],accounts[74],accounts[47],accounts[54]],3079,{from:accounts[0]});

});
it('test 18',async() => {

await instance.approve(accounts[144], 28238, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

await instance.batchTransfer([accounts[53],accounts[23]],7542,{from:accounts[0]});

result = await instance.transfer(accounts[2],340,{from:accounts[4]});
});
it('test 19',async() => {

await instance.approve(accounts[64], 38960, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[64], 1000, {from: accounts[64]});

await instance.batchTransfer([accounts[46]],4325,{from:accounts[0]});

result = await instance.transfer(accounts[1],201,{from:accounts[2]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[17], 25470, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[17], 1000, {from: accounts[17]});

await instance.batchTransfer([accounts[78],accounts[59],accounts[91],accounts[30],accounts[94],accounts[77],accounts[19],accounts[88],accounts[46],accounts[6]],8993,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[1],839,{from:accounts[3]});
});
it('test 21',async() => {
result = await instance.transfer(accounts[1],598,{from:accounts[2]});
await instance.batchTransfer([accounts[34],accounts[24],accounts[27],accounts[15]],9335,{from:accounts[0]});


await instance.approve(accounts[28], 23743, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[28], 1000, {from: accounts[28]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[58],accounts[77],accounts[58],accounts[40],accounts[61],accounts[94],accounts[78],accounts[80],accounts[35],accounts[50]],3701,{from:accounts[0]});

result = await instance.transfer(accounts[2],844,{from:accounts[5]});

await instance.approve(accounts[188], 38909, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[188], 1000, {from: accounts[188]});

});
it('test 23',async() => {

await instance.approve(accounts[185], 32925, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[185], 1000, {from: accounts[185]});

result = await instance.transfer(accounts[2],959,{from:accounts[3]});
await instance.batchTransfer([accounts[36]],9119,{from:accounts[0]});

});
it('test 24',async() => {
result = await instance.transfer(accounts[5],312,{from:accounts[1]});
await instance.batchTransfer([accounts[69],accounts[21],accounts[98],accounts[82],accounts[26],accounts[51],accounts[50],accounts[38]],4457,{from:accounts[0]});


await instance.approve(accounts[9], 23403, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 25',async() => {
await instance.batchTransfer([accounts[65],accounts[45],accounts[49],accounts[87],accounts[12],accounts[29],accounts[9],accounts[6],accounts[4]],2997,{from:accounts[0]});


await instance.approve(accounts[25], 29378, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[25], 1000, {from: accounts[25]});

result = await instance.transfer(accounts[3],388,{from:accounts[1]});
});
it('test 26',async() => {
await instance.batchTransfer([accounts[79],accounts[58],accounts[48],accounts[43],accounts[100]],2808,{from:accounts[0]});


await instance.approve(accounts[105], 36695, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[105], 1000, {from: accounts[105]});

result = await instance.transfer(accounts[5],524,{from:accounts[0]});
});
it('test 27',async() => {

await instance.approve(accounts[158], 33665, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

await instance.batchTransfer([accounts[64],accounts[52],accounts[38],accounts[12],accounts[65],accounts[63],accounts[24]],2525,{from:accounts[0]});

result = await instance.transfer(accounts[5],921,{from:accounts[0]});
});
it('test 28',async() => {

await instance.approve(accounts[76], 23004, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

result = await instance.transfer(accounts[1],544,{from:accounts[0]});
await instance.batchTransfer([accounts[78],accounts[5]],5384,{from:accounts[0]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[4],281,{from:accounts[4]});
await instance.batchTransfer([accounts[98],accounts[76],accounts[28]],2323,{from:accounts[0]});


await instance.approve(accounts[81], 22705, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[81], 1000, {from: accounts[81]});

});
});
