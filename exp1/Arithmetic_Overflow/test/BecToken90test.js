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
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[0],779,{from:accounts[1]});
await instance.batchTransfer([accounts[17],accounts[66],accounts[87],accounts[69],accounts[93],accounts[24],accounts[21]],1855,{from:accounts[0]});


await instance.approve(accounts[179], 22964, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[179], 1000, {from: accounts[179]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[5],875,{from:accounts[5]});
await instance.batchTransfer([accounts[56]],8846,{from:accounts[0]});


await instance.approve(accounts[183], 35517, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[183], 1000, {from: accounts[183]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[5],817,{from:accounts[4]});
await instance.batchTransfer([accounts[7],accounts[62]],5785,{from:accounts[0]});


await instance.approve(accounts[46], 29325, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[46], 1000, {from: accounts[46]});

});
it('test 3',async() => {

await instance.approve(accounts[9], 35040, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

await instance.batchTransfer([accounts[52],accounts[95],accounts[98],accounts[90]],9249,{from:accounts[0]});

result = await instance.transfer(accounts[2],725,{from:accounts[0]});
});
it('test 4',async() => {
await instance.batchTransfer([accounts[12],accounts[1],accounts[27],accounts[84],accounts[37],accounts[69],accounts[71],accounts[43]],9873,{from:accounts[0]});


await instance.approve(accounts[169], 33668, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[169], 1000, {from: accounts[169]});

result = await instance.transfer(accounts[4],233,{from:accounts[5]});
});
it('test 5',async() => {

await instance.approve(accounts[151], 36800, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

result = await instance.transfer(accounts[2],573,{from:accounts[4]});
await instance.batchTransfer([accounts[25],accounts[77],accounts[75],accounts[76],accounts[75],accounts[47],accounts[23],accounts[47],accounts[88]],7340,{from:accounts[0]});

});
it('test 6',async() => {

await instance.approve(accounts[171], 33587, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[171], 1000, {from: accounts[171]});

result = await instance.transfer(accounts[1],522,{from:accounts[2]});
await instance.batchTransfer([accounts[55],accounts[66],accounts[35],accounts[75],accounts[88]],3739,{from:accounts[0]});

});
it('test 7',async() => {

await instance.approve(accounts[168], 34523, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

await instance.batchTransfer([accounts[6],accounts[4]],8823,{from:accounts[0]});

result = await instance.transfer(accounts[5],961,{from:accounts[0]});
});
it('test 8',async() => {
result = await instance.transfer(accounts[1],386,{from:accounts[3]});

await instance.approve(accounts[119], 25112, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

await instance.batchTransfer([accounts[79],accounts[72],accounts[49],accounts[81],accounts[29]],9759,{from:accounts[0]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[75]],4170,{from:accounts[0]});

result = await instance.transfer(accounts[1],629,{from:accounts[5]});

await instance.approve(accounts[13], 29127, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[13], 1000, {from: accounts[13]});

});
it('test 10',async() => {
await instance.batchTransfer([accounts[97],accounts[87],accounts[63],accounts[24]],8345,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[122], 24556, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[122], 1000, {from: accounts[122]});

result = await instance.transfer(accounts[0],431,{from:accounts[0]});
});
it('test 11',async() => {
result = await instance.transfer(accounts[0],260,{from:accounts[3]});

await instance.approve(accounts[102], 36671, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[102], 1000, {from: accounts[102]});

await instance.batchTransfer([accounts[32],accounts[70],accounts[75],accounts[93],accounts[57],accounts[17],accounts[90]],3675,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[73],accounts[97],accounts[72],accounts[26],accounts[72]],1959,{from:accounts[0]});


await instance.approve(accounts[189], 28334, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[189], 1000, {from: accounts[189]});

result = await instance.transfer(accounts[3],383,{from:accounts[3]});
});
it('test 13',async() => {
await instance.batchTransfer([accounts[25],accounts[83],accounts[14],accounts[83],accounts[41],accounts[7],accounts[52],accounts[22],accounts[2]],2435,{from:accounts[0]});


await instance.approve(accounts[181], 24064, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[181], 1000, {from: accounts[181]});

result = await instance.transfer(accounts[5],809,{from:accounts[1]});
});
it('test 14',async() => {
result = await instance.transfer(accounts[2],627,{from:accounts[5]});
await instance.batchTransfer([accounts[49],accounts[44],accounts[12],accounts[54]],3178,{from:accounts[0]});


await instance.approve(accounts[42], 26294, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

});
it('test 15',async() => {

await instance.approve(accounts[178], 29547, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

result = await instance.transfer(accounts[5],451,{from:accounts[2]});
await instance.batchTransfer([accounts[76],accounts[74],accounts[55],accounts[27],accounts[30]],1690,{from:accounts[0]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[95],accounts[2],accounts[97],accounts[67],accounts[95],accounts[62],accounts[83]],2429,{from:accounts[0]});

result = await instance.transfer(accounts[3],264,{from:accounts[1]});

await instance.approve(accounts[24], 36792, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[24], 1000, {from: accounts[24]});

});
it('test 17',async() => {

await instance.approve(accounts[180], 23767, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[180], 1000, {from: accounts[180]});

result = await instance.transfer(accounts[0],579,{from:accounts[0]});
await instance.batchTransfer([accounts[11],accounts[44],accounts[6],accounts[20],accounts[15],accounts[81],accounts[41],accounts[2],accounts[91]],1472,{from:accounts[0]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[61],accounts[39],accounts[7]],4710,{from:accounts[0]});

result = await instance.transfer(accounts[4],575,{from:accounts[5]});

await instance.approve(accounts[155], 23002, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[155], 1000, {from: accounts[155]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[2],280,{from:accounts[1]});

await instance.approve(accounts[19], 23239, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

await instance.batchTransfer([accounts[90],accounts[86],accounts[89],accounts[45]],7920,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[5],924,{from:accounts[3]});

await instance.approve(accounts[97], 30328, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[56],accounts[21],accounts[15]],8165,{from:accounts[0]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[4],347,{from:accounts[2]});
await instance.batchTransfer([accounts[26],accounts[96],accounts[69],accounts[100],accounts[65],accounts[94],accounts[61],accounts[88],accounts[12]],5612,{from:accounts[0]});


await instance.approve(accounts[114], 34390, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[114], 1000, {from: accounts[114]});

});
it('test 22',async() => {

await instance.approve(accounts[112], 22987, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[112], 1000, {from: accounts[112]});

await instance.batchTransfer([accounts[44],accounts[47],accounts[97],accounts[77],accounts[91],accounts[29]],2237,{from:accounts[0]});

result = await instance.transfer(accounts[4],372,{from:accounts[3]});
});
it('test 23',async() => {
await instance.batchTransfer([accounts[71],accounts[78],accounts[45],accounts[39],accounts[35],accounts[16],accounts[31],accounts[12]],8984,{from:accounts[0]});


await instance.approve(accounts[7], 21501, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[7], 1000, {from: accounts[7]});

result = await instance.transfer(accounts[4],557,{from:accounts[0]});
});
it('test 24',async() => {
result = await instance.transfer(accounts[2],869,{from:accounts[5]});

await instance.approve(accounts[144], 20272, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

await instance.batchTransfer([accounts[4],accounts[45],accounts[82],accounts[48],accounts[77],accounts[38],accounts[100]],5866,{from:accounts[0]});

});
it('test 25',async() => {

await instance.approve(accounts[58], 35322, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[58], 1000, {from: accounts[58]});

await instance.batchTransfer([accounts[88],accounts[62],accounts[10],accounts[40],accounts[49],accounts[94],accounts[58],accounts[55],accounts[43],accounts[65]],2957,{from:accounts[0]});

result = await instance.transfer(accounts[2],344,{from:accounts[2]});
});
it('test 26',async() => {
await instance.batchTransfer([accounts[29],accounts[41],accounts[11],accounts[40],accounts[65],accounts[70],accounts[70]],8835,{from:accounts[0]});

result = await instance.transfer(accounts[2],964,{from:accounts[4]});

await instance.approve(accounts[67], 35484, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

});
it('test 27',async() => {

await instance.approve(accounts[92], 30300, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[92], 1000, {from: accounts[92]});

await instance.batchTransfer([accounts[60],accounts[78],accounts[71],accounts[11],accounts[81],accounts[72],accounts[3],accounts[73],accounts[79],accounts[31]],4235,{from:accounts[0]});

result = await instance.transfer(accounts[0],280,{from:accounts[5]});
});
it('test 28',async() => {
await instance.batchTransfer([accounts[14],accounts[93],accounts[98],accounts[87],accounts[41],accounts[89],accounts[14],accounts[29]],7656,{from:accounts[0]});


await instance.approve(accounts[128], 37531, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[128], 1000, {from: accounts[128]});

result = await instance.transfer(accounts[3],356,{from:accounts[0]});
});
it('test 29',async() => {
await instance.batchTransfer([accounts[28],accounts[2],accounts[57],accounts[91],accounts[51],accounts[68]],8373,{from:accounts[0]});


await instance.approve(accounts[151], 38137, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

result = await instance.transfer(accounts[3],521,{from:accounts[4]});
});
});
