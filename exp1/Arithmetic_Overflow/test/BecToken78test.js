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

await instance.approve(accounts[197], 21048, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[197], 1000, {from: accounts[197]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[5],759,{from:accounts[2]});
await instance.batchTransfer([accounts[30],accounts[85],accounts[29],accounts[59],accounts[9],accounts[94],accounts[17],accounts[1]],2149,{from:accounts[0]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[24],accounts[14],accounts[100],accounts[27]],8071,{from:accounts[0]});


await instance.approve(accounts[109], 29502, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[109], 1000, {from: accounts[109]});

result = await instance.transfer(accounts[1],843,{from:accounts[5]});
});
it('test 2',async() => {

await instance.approve(accounts[181], 31714, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[181], 1000, {from: accounts[181]});

result = await instance.transfer(accounts[0],931,{from:accounts[0]});
await instance.batchTransfer([accounts[70],accounts[10],accounts[57],accounts[29],accounts[31]],6943,{from:accounts[0]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[3],688,{from:accounts[0]});

await instance.approve(accounts[75], 24957, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

await instance.batchTransfer([accounts[88],accounts[12],accounts[73],accounts[67],accounts[62]],2263,{from:accounts[0]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[53],accounts[28],accounts[92],accounts[27],accounts[23],accounts[53],accounts[34]],5272,{from:accounts[0]});

result = await instance.transfer(accounts[1],635,{from:accounts[3]});

await instance.approve(accounts[87], 26873, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[87], 1000, {from: accounts[87]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[87],accounts[97],accounts[77],accounts[44],accounts[65]],5056,{from:accounts[0]});

result = await instance.transfer(accounts[2],558,{from:accounts[5]});

await instance.approve(accounts[189], 26066, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[189], 1000, {from: accounts[189]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[3],916,{from:accounts[4]});

await instance.approve(accounts[190], 30659, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[190], 1000, {from: accounts[190]});

await instance.batchTransfer([accounts[2],accounts[40],accounts[9],accounts[2],accounts[86],accounts[40],accounts[43],accounts[55]],3397,{from:accounts[0]});

});
it('test 7',async() => {
await instance.batchTransfer([accounts[58],accounts[47],accounts[17],accounts[28],accounts[41],accounts[40],accounts[72]],6923,{from:accounts[0]});

result = await instance.transfer(accounts[5],299,{from:accounts[1]});

await instance.approve(accounts[154], 25637, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[37],accounts[16],accounts[41],accounts[2],accounts[19],accounts[36],accounts[63],accounts[19],accounts[41]],1814,{from:accounts[0]});


await instance.approve(accounts[11], 25473, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[11], 1000, {from: accounts[11]});

result = await instance.transfer(accounts[3],669,{from:accounts[5]});
});
it('test 9',async() => {
await instance.batchTransfer([accounts[96],accounts[90],accounts[65],accounts[81],accounts[36],accounts[58],accounts[50],accounts[89],accounts[87]],4035,{from:accounts[0]});

result = await instance.transfer(accounts[1],255,{from:accounts[5]});

await instance.approve(accounts[169], 34927, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[169], 1000, {from: accounts[169]});

});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[1],896,{from:accounts[5]});

await instance.approve(accounts[84], 20404, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[84], 1000, {from: accounts[84]});

await instance.batchTransfer([accounts[28],accounts[34],accounts[45],accounts[4],accounts[81],accounts[4],accounts[60],accounts[20],accounts[63],accounts[92]],6850,{from:accounts[0]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[1],920,{from:accounts[3]});

await instance.approve(accounts[192], 30299, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[192], 1000, {from: accounts[192]});

await instance.batchTransfer([accounts[63],accounts[27],accounts[65],accounts[43],accounts[41],accounts[26],accounts[97],accounts[58]],6721,{from:accounts[0]});

});
it('test 12',async() => {
result = await instance.transfer(accounts[5],883,{from:accounts[1]});

await instance.approve(accounts[65], 20960, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[65], 1000, {from: accounts[65]});

await instance.batchTransfer([accounts[3],accounts[59],accounts[19],accounts[85],accounts[8],accounts[57],accounts[5],accounts[11],accounts[84]],6555,{from:accounts[0]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[100],accounts[25],accounts[57],accounts[41],accounts[24]],1057,{from:accounts[0]});

result = await instance.transfer(accounts[3],598,{from:accounts[3]});

await instance.approve(accounts[178], 26645, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[20],accounts[25],accounts[52],accounts[52],accounts[50],accounts[87],accounts[39]],2787,{from:accounts[0]});

result = await instance.transfer(accounts[0],978,{from:accounts[4]});

await instance.approve(accounts[125], 31842, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[0],435,{from:accounts[1]});

await instance.approve(accounts[158], 28279, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

await instance.batchTransfer([accounts[14],accounts[91],accounts[54],accounts[2],accounts[55],accounts[4],accounts[28],accounts[59],accounts[34],accounts[82]],4100,{from:accounts[0]});

});
it('test 16',async() => {

await instance.approve(accounts[50], 37232, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[50], 1000, {from: accounts[50]});

await instance.batchTransfer([accounts[63],accounts[81],accounts[82],accounts[69],accounts[53],accounts[94],accounts[19],accounts[31]],1663,{from:accounts[0]});

result = await instance.transfer(accounts[3],385,{from:accounts[5]});
});
it('test 17',async() => {
await instance.batchTransfer([accounts[68],accounts[9],accounts[6],accounts[67],accounts[44],accounts[92],accounts[45],accounts[81]],4268,{from:accounts[0]});

result = await instance.transfer(accounts[4],884,{from:accounts[4]});

await instance.approve(accounts[18], 22557, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[50],accounts[87],accounts[20],accounts[53],accounts[10],accounts[41],accounts[75],accounts[17]],5153,{from:accounts[0]});


await instance.approve(accounts[144], 39959, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

result = await instance.transfer(accounts[1],276,{from:accounts[4]});
});
it('test 19',async() => {

await instance.approve(accounts[120], 25749, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

result = await instance.transfer(accounts[0],209,{from:accounts[2]});
await instance.batchTransfer([accounts[15],accounts[8],accounts[35],accounts[27],accounts[94],accounts[54],accounts[77],accounts[62],accounts[93]],5881,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[22],accounts[96],accounts[78],accounts[4],accounts[8],accounts[59]],1818,{from:accounts[0]});

result = await instance.transfer(accounts[1],308,{from:accounts[1]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[33], 29695, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

});
it('test 21',async() => {

await instance.approve(accounts[110], 35617, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[110], 1000, {from: accounts[110]});

await instance.batchTransfer([accounts[11],accounts[31],accounts[41],accounts[63],accounts[15]],9642,{from:accounts[0]});

result = await instance.transfer(accounts[4],498,{from:accounts[1]});
});
it('test 22',async() => {

await instance.approve(accounts[177], 33194, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[177], 1000, {from: accounts[177]});

result = await instance.transfer(accounts[3],706,{from:accounts[3]});
await instance.batchTransfer([accounts[67],accounts[22],accounts[2]],1294,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {

await instance.approve(accounts[193], 33021, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[193], 1000, {from: accounts[193]});

result = await instance.transfer(accounts[5],434,{from:accounts[3]});
await instance.batchTransfer([accounts[2],accounts[46]],7695,{from:accounts[0]});

});
it('test 24',async() => {
result = await instance.transfer(accounts[2],286,{from:accounts[5]});

await instance.approve(accounts[181], 34924, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[181], 1000, {from: accounts[181]});

await instance.batchTransfer([accounts[2],accounts[17],accounts[75],accounts[79],accounts[88],accounts[19],accounts[1],accounts[10],accounts[44],accounts[36]],6752,{from:accounts[0]});

});
it('test 25',async() => {
result = await instance.transfer(accounts[4],499,{from:accounts[3]});

await instance.approve(accounts[27], 22920, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

await instance.batchTransfer([accounts[97],accounts[44],accounts[48],accounts[39],accounts[19],accounts[99]],4072,{from:accounts[0]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[3],573,{from:accounts[1]});

await instance.approve(accounts[39], 26574, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

await instance.batchTransfer([accounts[33],accounts[99]],2850,{from:accounts[0]});

});
it('test 27',async() => {
await instance.batchTransfer([accounts[57],accounts[75],accounts[2],accounts[31],accounts[57],accounts[85],accounts[2]],9053,{from:accounts[0]});

result = await instance.transfer(accounts[5],357,{from:accounts[5]});

await instance.approve(accounts[21], 33541, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

});
it('test 28',async() => {

await instance.approve(accounts[174], 26072, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

result = await instance.transfer(accounts[3],299,{from:accounts[2]});
await instance.batchTransfer([accounts[15]],8318,{from:accounts[0]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[3],416,{from:accounts[5]});

await instance.approve(accounts[13], 24367, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[13], 1000, {from: accounts[13]});

await instance.batchTransfer([accounts[71]],1912,{from:accounts[0]});

});
});
