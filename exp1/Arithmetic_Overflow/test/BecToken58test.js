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
await instance.batchTransfer([accounts[18],accounts[95]],2438,{from:accounts[0]});


await instance.approve(accounts[48], 34197, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[48], 1000, {from: accounts[48]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[5],386,{from:accounts[5]});
});
it('test 1',async() => {
result = await instance.transfer(accounts[2],315,{from:accounts[1]});
await instance.batchTransfer([accounts[66],accounts[21],accounts[37],accounts[72],accounts[53]],7084,{from:accounts[0]});


await instance.approve(accounts[17], 38527, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[17], 1000, {from: accounts[17]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[1],905,{from:accounts[4]});

await instance.approve(accounts[61], 39553, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

await instance.batchTransfer([accounts[48],accounts[81],accounts[65],accounts[92],accounts[25],accounts[10],accounts[37],accounts[40],accounts[80],accounts[39]],9026,{from:accounts[0]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[5],486,{from:accounts[1]});
await instance.batchTransfer([accounts[13],accounts[80],accounts[7],accounts[55],accounts[83]],2905,{from:accounts[0]});


await instance.approve(accounts[39], 27664, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[4],502,{from:accounts[2]});
await instance.batchTransfer([accounts[14],accounts[88]],3573,{from:accounts[0]});


await instance.approve(accounts[189], 28032, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[189], 1000, {from: accounts[189]});

});
it('test 5',async() => {

await instance.approve(accounts[5], 26374, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[5], 1000, {from: accounts[5]});

await instance.batchTransfer([accounts[56],accounts[17],accounts[82],accounts[21],accounts[72],accounts[45],accounts[29],accounts[60],accounts[81],accounts[85]],6208,{from:accounts[0]});

result = await instance.transfer(accounts[3],695,{from:accounts[4]});
});
it('test 6',async() => {
await instance.batchTransfer([accounts[64],accounts[87],accounts[98],accounts[35],accounts[91],accounts[68],accounts[23],accounts[2],accounts[44]],2013,{from:accounts[0]});

result = await instance.transfer(accounts[0],863,{from:accounts[2]});

await instance.approve(accounts[44], 38367, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

});
it('test 7',async() => {

await instance.approve(accounts[31], 35108, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[31], 1000, {from: accounts[31]});

await instance.batchTransfer([accounts[59],accounts[34],accounts[65],accounts[60],accounts[48],accounts[81],accounts[78],accounts[56],accounts[5],accounts[36]],2353,{from:accounts[0]});

result = await instance.transfer(accounts[4],994,{from:accounts[3]});
});
it('test 8',async() => {
await instance.batchTransfer([accounts[51],accounts[66],accounts[82],accounts[97]],1142,{from:accounts[0]});

result = await instance.transfer(accounts[5],925,{from:accounts[4]});

await instance.approve(accounts[181], 26082, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[181], 1000, {from: accounts[181]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[2],740,{from:accounts[1]});
await instance.batchTransfer([accounts[10],accounts[82],accounts[23],accounts[30],accounts[100],accounts[25],accounts[75],accounts[16],accounts[61]],3274,{from:accounts[0]});


await instance.approve(accounts[37], 21533, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

});
it('test 10',async() => {
await instance.batchTransfer([accounts[25],accounts[12],accounts[24],accounts[1],accounts[8]],7408,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[1],968,{from:accounts[0]});

await instance.approve(accounts[51], 27115, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[51], 1000, {from: accounts[51]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[37],accounts[89],accounts[48],accounts[28],accounts[35]],1682,{from:accounts[0]});

result = await instance.transfer(accounts[5],887,{from:accounts[4]});

await instance.approve(accounts[130], 22580, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[130], 1000, {from: accounts[130]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[8],accounts[47],accounts[16],accounts[78],accounts[41],accounts[17],accounts[97],accounts[97],accounts[93]],4273,{from:accounts[0]});

result = await instance.transfer(accounts[2],625,{from:accounts[3]});

await instance.approve(accounts[118], 31397, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[118], 1000, {from: accounts[118]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[3],accounts[13],accounts[34]],9958,{from:accounts[0]});


await instance.approve(accounts[178], 27340, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

result = await instance.transfer(accounts[4],757,{from:accounts[4]});
});
it('test 14',async() => {
await instance.batchTransfer([accounts[86],accounts[24],accounts[47],accounts[92],accounts[48],accounts[29],accounts[46]],3126,{from:accounts[0]});


await instance.approve(accounts[123], 38555, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[123], 1000, {from: accounts[123]});

result = await instance.transfer(accounts[1],438,{from:accounts[2]});
});
it('test 15',async() => {
await instance.batchTransfer([accounts[38],accounts[62]],8417,{from:accounts[0]});


await instance.approve(accounts[86], 37680, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[86], 1000, {from: accounts[86]});

result = await instance.transfer(accounts[5],611,{from:accounts[3]});
});
it('test 16',async() => {
await instance.batchTransfer([accounts[100],accounts[1],accounts[56],accounts[19],accounts[65],accounts[2]],6400,{from:accounts[0]});

result = await instance.transfer(accounts[3],656,{from:accounts[2]});

await instance.approve(accounts[65], 35374, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[65], 1000, {from: accounts[65]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[14],accounts[7],accounts[90],accounts[10],accounts[37],accounts[37],accounts[4],accounts[26],accounts[40]],1692,{from:accounts[0]});


await instance.approve(accounts[57], 27473, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[57], 1000, {from: accounts[57]});

result = await instance.transfer(accounts[4],592,{from:accounts[3]});
});
it('test 18',async() => {

await instance.approve(accounts[99], 28712, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[99], 1000, {from: accounts[99]});

await instance.batchTransfer([accounts[40],accounts[66],accounts[12],accounts[91],accounts[100]],9937,{from:accounts[0]});

result = await instance.transfer(accounts[4],479,{from:accounts[5]});
});
it('test 19',async() => {
result = await instance.transfer(accounts[3],624,{from:accounts[1]});
await instance.batchTransfer([accounts[17],accounts[18],accounts[63],accounts[42],accounts[13]],5393,{from:accounts[0]});


await instance.approve(accounts[163], 21379, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[163], 1000, {from: accounts[163]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[138], 32246, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[138], 1000, {from: accounts[138]});

await instance.batchTransfer([accounts[12],accounts[93],accounts[23],accounts[81]],2671,{from:accounts[0]});

result = await instance.transfer(accounts[3],735,{from:accounts[2]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 21',async() => {
await instance.batchTransfer([accounts[49],accounts[7],accounts[71],accounts[54],accounts[32],accounts[28],accounts[94],accounts[67],accounts[72]],8339,{from:accounts[0]});


await instance.approve(accounts[63], 36977, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[63], 1000, {from: accounts[63]});

result = await instance.transfer(accounts[0],785,{from:accounts[3]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 22',async() => {
await instance.batchTransfer([accounts[71],accounts[89]],6205,{from:accounts[0]});

result = await instance.transfer(accounts[3],278,{from:accounts[3]});

await instance.approve(accounts[32], 20479, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[32], 1000, {from: accounts[32]});

});
it('test 23',async() => {

await instance.approve(accounts[178], 31553, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

result = await instance.transfer(accounts[3],969,{from:accounts[4]});
await instance.batchTransfer([accounts[36],accounts[28],accounts[52],accounts[39],accounts[66],accounts[76],accounts[78],accounts[26],accounts[53]],7216,{from:accounts[0]});

});
it('test 24',async() => {
await instance.batchTransfer([accounts[73],accounts[4],accounts[75],accounts[5],accounts[51],accounts[26],accounts[27]],5850,{from:accounts[0]});


await instance.approve(accounts[126], 26552, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

result = await instance.transfer(accounts[1],792,{from:accounts[0]});
});
it('test 25',async() => {
await instance.batchTransfer([accounts[86],accounts[94],accounts[45],accounts[48],accounts[97]],5436,{from:accounts[0]});


await instance.approve(accounts[139], 29446, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[139], 1000, {from: accounts[139]});

result = await instance.transfer(accounts[1],261,{from:accounts[1]});
});
it('test 26',async() => {
await instance.batchTransfer([accounts[75],accounts[1],accounts[48],accounts[34],accounts[39],accounts[8],accounts[49],accounts[39]],4249,{from:accounts[0]});

result = await instance.transfer(accounts[4],706,{from:accounts[1]});

await instance.approve(accounts[161], 28564, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[161], 1000, {from: accounts[161]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[2],765,{from:accounts[1]});

await instance.approve(accounts[167], 28882, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[167], 1000, {from: accounts[167]});

await instance.batchTransfer([accounts[57],accounts[45],accounts[16],accounts[65],accounts[6],accounts[49],accounts[86],accounts[37],accounts[20],accounts[33]],8694,{from:accounts[0]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[88],accounts[32]],1649,{from:accounts[0]});


await instance.approve(accounts[197], 24205, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[197], 1000, {from: accounts[197]});

result = await instance.transfer(accounts[0],697,{from:accounts[0]});
});
it('test 29',async() => {

await instance.approve(accounts[45], 32563, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

await instance.batchTransfer([accounts[78],accounts[54]],8665,{from:accounts[0]});

result = await instance.transfer(accounts[2],401,{from:accounts[5]});
});
});
