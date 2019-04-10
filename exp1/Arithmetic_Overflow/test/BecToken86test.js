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
result = await instance.transfer(accounts[3],905,{from:accounts[4]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[138], 36555, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[138], 1000, {from: accounts[138]});

await instance.batchTransfer([accounts[18]],5220,{from:accounts[0]});

});
it('test 1',async() => {

await instance.approve(accounts[172], 34064, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

result = await instance.transfer(accounts[0],524,{from:accounts[4]});
await instance.batchTransfer([accounts[7],accounts[27],accounts[96],accounts[6],accounts[10],accounts[82]],5592,{from:accounts[0]});

});
it('test 2',async() => {

await instance.approve(accounts[82], 20701, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

result = await instance.transfer(accounts[0],939,{from:accounts[3]});
await instance.batchTransfer([accounts[77],accounts[8],accounts[38],accounts[91]],5484,{from:accounts[0]});

});
it('test 3',async() => {

await instance.approve(accounts[13], 20103, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[13], 1000, {from: accounts[13]});

await instance.batchTransfer([accounts[81],accounts[80]],6555,{from:accounts[0]});

result = await instance.transfer(accounts[0],576,{from:accounts[2]});
});
it('test 4',async() => {
await instance.batchTransfer([accounts[88],accounts[79],accounts[3]],6877,{from:accounts[0]});


await instance.approve(accounts[169], 20267, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[169], 1000, {from: accounts[169]});

result = await instance.transfer(accounts[3],934,{from:accounts[3]});
});
it('test 5',async() => {
await instance.batchTransfer([accounts[54],accounts[27],accounts[29],accounts[88],accounts[87],accounts[35]],7630,{from:accounts[0]});

result = await instance.transfer(accounts[4],774,{from:accounts[4]});

await instance.approve(accounts[74], 38282, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[74], 1000, {from: accounts[74]});

});
it('test 6',async() => {

await instance.approve(accounts[36], 38582, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[36], 1000, {from: accounts[36]});

result = await instance.transfer(accounts[5],329,{from:accounts[0]});
await instance.batchTransfer([accounts[73],accounts[78],accounts[57],accounts[46],accounts[53],accounts[61],accounts[90],accounts[22],accounts[27],accounts[59]],7032,{from:accounts[0]});

});
it('test 7',async() => {

await instance.approve(accounts[93], 28931, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

result = await instance.transfer(accounts[1],966,{from:accounts[0]});
await instance.batchTransfer([accounts[47],accounts[66],accounts[1],accounts[8],accounts[5],accounts[2],accounts[39]],9916,{from:accounts[0]});

});
it('test 8',async() => {

await instance.approve(accounts[147], 22087, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[147], 1000, {from: accounts[147]});

result = await instance.transfer(accounts[3],325,{from:accounts[1]});
await instance.batchTransfer([accounts[70],accounts[82],accounts[100],accounts[22]],6082,{from:accounts[0]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[4],540,{from:accounts[4]});
await instance.batchTransfer([accounts[18],accounts[5],accounts[14],accounts[22],accounts[15]],2229,{from:accounts[0]});


await instance.approve(accounts[8], 25792, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

});
it('test 10',async() => {
await instance.batchTransfer([accounts[39],accounts[72]],8358,{from:accounts[0]});

result = await instance.transfer(accounts[5],911,{from:accounts[5]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[193], 33405, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[193], 1000, {from: accounts[193]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[21],accounts[68],accounts[42],accounts[77],accounts[14],accounts[70],accounts[53],accounts[75],accounts[42]],3009,{from:accounts[0]});


await instance.approve(accounts[58], 23302, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[58], 1000, {from: accounts[58]});

result = await instance.transfer(accounts[4],501,{from:accounts[0]});
});
it('test 12',async() => {

await instance.approve(accounts[140], 29439, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

result = await instance.transfer(accounts[1],718,{from:accounts[4]});
await instance.batchTransfer([accounts[72],accounts[22],accounts[27]],6979,{from:accounts[0]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[2],853,{from:accounts[4]});
await instance.batchTransfer([accounts[23],accounts[48]],4126,{from:accounts[0]});


await instance.approve(accounts[28], 33261, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[28], 1000, {from: accounts[28]});

});
it('test 14',async() => {

await instance.approve(accounts[95], 33033, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[95], 1000, {from: accounts[95]});

result = await instance.transfer(accounts[3],725,{from:accounts[3]});
await instance.batchTransfer([accounts[47],accounts[63],accounts[35],accounts[85],accounts[35],accounts[95],accounts[63],accounts[97],accounts[74]],4657,{from:accounts[0]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[84],accounts[56],accounts[25],accounts[74]],2134,{from:accounts[0]});


await instance.approve(accounts[117], 25368, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[117], 1000, {from: accounts[117]});

result = await instance.transfer(accounts[2],251,{from:accounts[0]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[1],281,{from:accounts[2]});
await instance.batchTransfer([accounts[17]],9941,{from:accounts[0]});


await instance.approve(accounts[115], 24802, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[34],accounts[71],accounts[86]],6852,{from:accounts[0]});

result = await instance.transfer(accounts[3],246,{from:accounts[0]});

await instance.approve(accounts[148], 22755, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[148], 1000, {from: accounts[148]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[1],880,{from:accounts[4]});

await instance.approve(accounts[160], 30637, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[160], 1000, {from: accounts[160]});

await instance.batchTransfer([accounts[86],accounts[60],accounts[87]],1128,{from:accounts[0]});

});
it('test 19',async() => {

await instance.approve(accounts[159], 23058, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[159], 1000, {from: accounts[159]});

await instance.batchTransfer([accounts[84],accounts[36],accounts[97],accounts[91],accounts[89],accounts[4],accounts[80],accounts[68]],1105,{from:accounts[0]});

result = await instance.transfer(accounts[0],340,{from:accounts[3]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[24],accounts[67]],3199,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[4],711,{from:accounts[5]});

await instance.approve(accounts[48], 34644, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[48], 1000, {from: accounts[48]});

});
it('test 21',async() => {

await instance.approve(accounts[190], 37747, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[190], 1000, {from: accounts[190]});

await instance.batchTransfer([accounts[88],accounts[61],accounts[1]],6565,{from:accounts[0]});

result = await instance.transfer(accounts[4],954,{from:accounts[5]});
});
it('test 22',async() => {

await instance.approve(accounts[93], 29587, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

result = await instance.transfer(accounts[4],632,{from:accounts[5]});
await instance.batchTransfer([accounts[51]],3731,{from:accounts[0]});

});
it('test 23',async() => {
await instance.batchTransfer([accounts[77],accounts[41],accounts[1],accounts[52],accounts[99]],2826,{from:accounts[0]});


await instance.approve(accounts[19], 34853, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

result = await instance.transfer(accounts[1],875,{from:accounts[2]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 24',async() => {

await instance.approve(accounts[106], 31227, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[106], 1000, {from: accounts[106]});

await instance.batchTransfer([accounts[10],accounts[25]],6029,{from:accounts[0]});

result = await instance.transfer(accounts[0],711,{from:accounts[5]});
});
it('test 25',async() => {
result = await instance.transfer(accounts[3],704,{from:accounts[0]});
await instance.batchTransfer([accounts[34],accounts[72],accounts[9],accounts[71]],4197,{from:accounts[0]});


await instance.approve(accounts[97], 31040, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

});
it('test 26',async() => {
await instance.batchTransfer([accounts[58]],9684,{from:accounts[0]});

result = await instance.transfer(accounts[5],684,{from:accounts[1]});

await instance.approve(accounts[136], 21996, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[136], 1000, {from: accounts[136]});

});
it('test 27',async() => {
await instance.batchTransfer([accounts[50]],7743,{from:accounts[0]});

result = await instance.transfer(accounts[4],664,{from:accounts[0]});

await instance.approve(accounts[169], 20778, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[169], 1000, {from: accounts[169]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[2],691,{from:accounts[2]});
await instance.batchTransfer([accounts[67]],5403,{from:accounts[0]});


await instance.approve(accounts[160], 23949, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[160], 1000, {from: accounts[160]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[92],accounts[5],accounts[71],accounts[33],accounts[82]],2778,{from:accounts[0]});


await instance.approve(accounts[129], 23283, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

result = await instance.transfer(accounts[1],281,{from:accounts[2]});
});
});
