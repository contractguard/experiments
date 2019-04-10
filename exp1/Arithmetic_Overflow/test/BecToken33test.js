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

await instance.approve(accounts[125], 26124, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

result = await instance.transfer(accounts[4],605,{from:accounts[4]});
await instance.batchTransfer([accounts[7],accounts[20],accounts[46],accounts[21],accounts[32],accounts[87],accounts[67]],9196,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[3],736,{from:accounts[2]});
await instance.batchTransfer([accounts[51],accounts[31],accounts[69],accounts[12],accounts[41]],9334,{from:accounts[0]});


await instance.approve(accounts[97], 28140, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[67],accounts[41],accounts[23],accounts[57],accounts[67],accounts[32],accounts[16]],7122,{from:accounts[0]});


await instance.approve(accounts[40], 39273, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[40], 1000, {from: accounts[40]});

result = await instance.transfer(accounts[3],381,{from:accounts[0]});
});
it('test 3',async() => {
result = await instance.transfer(accounts[0],421,{from:accounts[2]});

await instance.approve(accounts[7], 27919, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[7], 1000, {from: accounts[7]});

await instance.batchTransfer([accounts[42],accounts[16],accounts[79],accounts[100],accounts[81],accounts[26]],3500,{from:accounts[0]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[2],567,{from:accounts[4]});

await instance.approve(accounts[141], 29296, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[141], 1000, {from: accounts[141]});

await instance.batchTransfer([accounts[82],accounts[30],accounts[63]],3081,{from:accounts[0]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[90],accounts[74],accounts[46],accounts[32],accounts[37],accounts[2],accounts[23],accounts[28],accounts[98]],2766,{from:accounts[0]});

result = await instance.transfer(accounts[5],323,{from:accounts[0]});

await instance.approve(accounts[21], 28868, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

});
it('test 6',async() => {

await instance.approve(accounts[116], 33178, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[116], 1000, {from: accounts[116]});

await instance.batchTransfer([accounts[88],accounts[22],accounts[52]],3091,{from:accounts[0]});

result = await instance.transfer(accounts[5],934,{from:accounts[4]});
});
it('test 7',async() => {
await instance.batchTransfer([accounts[92],accounts[40],accounts[52],accounts[13],accounts[66],accounts[97],accounts[83]],8838,{from:accounts[0]});

result = await instance.transfer(accounts[5],200,{from:accounts[2]});

await instance.approve(accounts[92], 37341, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[92], 1000, {from: accounts[92]});

});
it('test 8',async() => {

await instance.approve(accounts[110], 21211, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[110], 1000, {from: accounts[110]});

await instance.batchTransfer([accounts[51],accounts[76],accounts[45],accounts[3],accounts[16]],5840,{from:accounts[0]});

result = await instance.transfer(accounts[2],456,{from:accounts[1]});
});
it('test 9',async() => {
await instance.batchTransfer([accounts[52],accounts[93],accounts[7],accounts[56]],9965,{from:accounts[0]});

result = await instance.transfer(accounts[4],691,{from:accounts[4]});

await instance.approve(accounts[2], 37198, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[4],259,{from:accounts[2]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[34],accounts[53],accounts[83]],7955,{from:accounts[0]});


await instance.approve(accounts[137], 34276, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[22],accounts[46],accounts[88],accounts[57]],2191,{from:accounts[0]});

result = await instance.transfer(accounts[4],399,{from:accounts[3]});

await instance.approve(accounts[114], 27797, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[114], 1000, {from: accounts[114]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[24],accounts[63],accounts[95],accounts[30],accounts[81]],3995,{from:accounts[0]});

result = await instance.transfer(accounts[4],793,{from:accounts[3]});

await instance.approve(accounts[21], 24425, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[73],accounts[26],accounts[27]],1104,{from:accounts[0]});


await instance.approve(accounts[169], 24405, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[169], 1000, {from: accounts[169]});

result = await instance.transfer(accounts[5],891,{from:accounts[4]});
});
it('test 14',async() => {
result = await instance.transfer(accounts[1],559,{from:accounts[3]});
await instance.batchTransfer([accounts[47],accounts[41],accounts[83],accounts[17],accounts[42],accounts[62],accounts[36],accounts[33],accounts[30]],6434,{from:accounts[0]});


await instance.approve(accounts[71], 31155, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[71], 1000, {from: accounts[71]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[3],699,{from:accounts[3]});
await instance.batchTransfer([accounts[7],accounts[19],accounts[37],accounts[98],accounts[77],accounts[14],accounts[9],accounts[19]],3844,{from:accounts[0]});


await instance.approve(accounts[6], 26015, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[6], 1000, {from: accounts[6]});

});
it('test 16',async() => {

await instance.approve(accounts[170], 28736, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

await instance.batchTransfer([accounts[23]],5447,{from:accounts[0]});

result = await instance.transfer(accounts[0],984,{from:accounts[0]});
});
it('test 17',async() => {

await instance.approve(accounts[136], 39376, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[136], 1000, {from: accounts[136]});

result = await instance.transfer(accounts[2],668,{from:accounts[0]});
await instance.batchTransfer([accounts[38],accounts[51],accounts[29],accounts[77],accounts[9]],6296,{from:accounts[0]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[67]],5408,{from:accounts[0]});


await instance.approve(accounts[176], 32519, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

result = await instance.transfer(accounts[4],367,{from:accounts[3]});
});
it('test 19',async() => {
await instance.batchTransfer([accounts[84],accounts[100],accounts[76],accounts[56],accounts[72],accounts[31],accounts[1],accounts[24],accounts[88]],3041,{from:accounts[0]});

result = await instance.transfer(accounts[0],717,{from:accounts[4]});

await instance.approve(accounts[118], 28468, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[118], 1000, {from: accounts[118]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[5],253,{from:accounts[2]});
await instance.batchTransfer([accounts[30],accounts[62],accounts[50],accounts[71],accounts[57],accounts[79],accounts[12],accounts[86],accounts[87]],4974,{from:accounts[0]});


await instance.approve(accounts[85], 26832, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[85], 1000, {from: accounts[85]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 21',async() => {

await instance.approve(accounts[125], 25473, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

await instance.batchTransfer([accounts[89],accounts[33],accounts[14],accounts[31],accounts[53],accounts[44],accounts[27],accounts[77],accounts[74],accounts[97]],3766,{from:accounts[0]});

result = await instance.transfer(accounts[0],555,{from:accounts[5]});
});
it('test 22',async() => {
await instance.batchTransfer([accounts[20]],9184,{from:accounts[0]});


await instance.approve(accounts[182], 31439, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

result = await instance.transfer(accounts[3],268,{from:accounts[5]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {
await instance.batchTransfer([accounts[33],accounts[5],accounts[56],accounts[39],accounts[40],accounts[39]],2405,{from:accounts[0]});


await instance.approve(accounts[52], 37419, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[52], 1000, {from: accounts[52]});

result = await instance.transfer(accounts[2],646,{from:accounts[5]});
});
it('test 24',async() => {
result = await instance.transfer(accounts[5],333,{from:accounts[2]});

await instance.approve(accounts[68], 20000, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[68], 1000, {from: accounts[68]});

await instance.batchTransfer([accounts[3],accounts[72]],9645,{from:accounts[0]});

});
it('test 25',async() => {
await instance.batchTransfer([accounts[60],accounts[76],accounts[69],accounts[49],accounts[43]],2538,{from:accounts[0]});


await instance.approve(accounts[124], 21381, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[124], 1000, {from: accounts[124]});

result = await instance.transfer(accounts[2],792,{from:accounts[3]});
});
it('test 26',async() => {

await instance.approve(accounts[103], 39042, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[103], 1000, {from: accounts[103]});

await instance.batchTransfer([accounts[5],accounts[50],accounts[38],accounts[1],accounts[40],accounts[19],accounts[99],accounts[86]],7451,{from:accounts[0]});

result = await instance.transfer(accounts[0],600,{from:accounts[2]});
});
it('test 27',async() => {

await instance.approve(accounts[26], 36863, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[26], 1000, {from: accounts[26]});

await instance.batchTransfer([accounts[66]],1228,{from:accounts[0]});

result = await instance.transfer(accounts[5],222,{from:accounts[5]});
});
it('test 28',async() => {

await instance.approve(accounts[122], 36284, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[122], 1000, {from: accounts[122]});

await instance.batchTransfer([accounts[61],accounts[76],accounts[79],accounts[14],accounts[16],accounts[96],accounts[80]],3391,{from:accounts[0]});

result = await instance.transfer(accounts[2],381,{from:accounts[5]});
});
it('test 29',async() => {
result = await instance.transfer(accounts[2],368,{from:accounts[0]});

await instance.approve(accounts[188], 35522, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[188], 1000, {from: accounts[188]});

await instance.batchTransfer([accounts[12],accounts[32],accounts[68]],5892,{from:accounts[0]});

});
});
