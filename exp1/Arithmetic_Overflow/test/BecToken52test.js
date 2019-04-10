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
await instance.batchTransfer([accounts[65],accounts[48]],4688,{from:accounts[0]});


await instance.approve(accounts[117], 29782, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[117], 1000, {from: accounts[117]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],834,{from:accounts[4]});
});
it('test 1',async() => {
result = await instance.transfer(accounts[4],828,{from:accounts[3]});
await instance.batchTransfer([accounts[58],accounts[72],accounts[23],accounts[4]],9360,{from:accounts[0]});


await instance.approve(accounts[154], 30670, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

});
it('test 2',async() => {

await instance.approve(accounts[69], 23050, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

result = await instance.transfer(accounts[3],539,{from:accounts[1]});
await instance.batchTransfer([accounts[86]],6340,{from:accounts[0]});

});
it('test 3',async() => {

await instance.approve(accounts[99], 25595, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[99], 1000, {from: accounts[99]});

await instance.batchTransfer([accounts[78],accounts[92],accounts[56],accounts[39],accounts[75],accounts[22],accounts[98],accounts[90],accounts[24]],7237,{from:accounts[0]});

result = await instance.transfer(accounts[1],344,{from:accounts[4]});
});
it('test 4',async() => {
await instance.batchTransfer([accounts[53],accounts[1],accounts[25],accounts[77],accounts[88],accounts[62]],3231,{from:accounts[0]});

result = await instance.transfer(accounts[1],413,{from:accounts[2]});

await instance.approve(accounts[157], 34753, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[157], 1000, {from: accounts[157]});

});
it('test 5',async() => {

await instance.approve(accounts[125], 22507, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

result = await instance.transfer(accounts[5],380,{from:accounts[1]});
await instance.batchTransfer([accounts[20],accounts[75],accounts[48],accounts[61],accounts[70]],8381,{from:accounts[0]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[96],accounts[53],accounts[2],accounts[75],accounts[32],accounts[4]],9786,{from:accounts[0]});


await instance.approve(accounts[190], 30865, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[190], 1000, {from: accounts[190]});

result = await instance.transfer(accounts[2],757,{from:accounts[1]});
});
it('test 7',async() => {
await instance.batchTransfer([accounts[57]],1960,{from:accounts[0]});

result = await instance.transfer(accounts[2],798,{from:accounts[3]});

await instance.approve(accounts[34], 32730, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[46],accounts[64],accounts[10],accounts[69],accounts[65],accounts[27],accounts[86],accounts[66],accounts[30],accounts[57]],5544,{from:accounts[0]});


await instance.approve(accounts[39], 28513, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

result = await instance.transfer(accounts[0],361,{from:accounts[3]});
});
it('test 9',async() => {
result = await instance.transfer(accounts[0],601,{from:accounts[0]});

await instance.approve(accounts[76], 37331, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

await instance.batchTransfer([accounts[21],accounts[41],accounts[4],accounts[79],accounts[53],accounts[10],accounts[49]],1668,{from:accounts[0]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[0],787,{from:accounts[0]});
await instance.batchTransfer([accounts[81],accounts[100],accounts[84],accounts[77],accounts[41]],1033,{from:accounts[0]});


await instance.approve(accounts[200], 30742, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[200], 1000, {from: accounts[200]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {

await instance.approve(accounts[5], 22958, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[5], 1000, {from: accounts[5]});

result = await instance.transfer(accounts[2],467,{from:accounts[3]});
await instance.batchTransfer([accounts[13],accounts[7]],9706,{from:accounts[0]});

});
it('test 12',async() => {

await instance.approve(accounts[47], 33338, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[47], 1000, {from: accounts[47]});

await instance.batchTransfer([accounts[99],accounts[24]],9023,{from:accounts[0]});

result = await instance.transfer(accounts[1],449,{from:accounts[0]});
});
it('test 13',async() => {
result = await instance.transfer(accounts[3],652,{from:accounts[1]});
await instance.batchTransfer([accounts[43],accounts[26],accounts[67],accounts[26],accounts[86],accounts[46]],4893,{from:accounts[0]});


await instance.approve(accounts[172], 29100, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

});
it('test 14',async() => {

await instance.approve(accounts[93], 25877, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

result = await instance.transfer(accounts[3],247,{from:accounts[2]});
await instance.batchTransfer([accounts[88],accounts[72],accounts[60],accounts[26],accounts[53]],8911,{from:accounts[0]});

});
it('test 15',async() => {

await instance.approve(accounts[41], 37681, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

result = await instance.transfer(accounts[2],747,{from:accounts[5]});
await instance.batchTransfer([accounts[96],accounts[92],accounts[4],accounts[57],accounts[87]],3178,{from:accounts[0]});

});
it('test 16',async() => {

await instance.approve(accounts[113], 36292, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[113], 1000, {from: accounts[113]});

await instance.batchTransfer([accounts[100],accounts[100],accounts[13]],5927,{from:accounts[0]});

result = await instance.transfer(accounts[4],853,{from:accounts[0]});
});
it('test 17',async() => {
await instance.batchTransfer([accounts[23],accounts[80],accounts[42],accounts[96],accounts[83],accounts[18],accounts[13],accounts[37],accounts[32],accounts[21]],7270,{from:accounts[0]});

result = await instance.transfer(accounts[5],655,{from:accounts[5]});

await instance.approve(accounts[190], 36470, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[190], 1000, {from: accounts[190]});

});
it('test 18',async() => {

await instance.approve(accounts[158], 38335, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

await instance.batchTransfer([accounts[61],accounts[69],accounts[5],accounts[72],accounts[39],accounts[92],accounts[99],accounts[22]],4029,{from:accounts[0]});

result = await instance.transfer(accounts[3],600,{from:accounts[0]});
});
it('test 19',async() => {

await instance.approve(accounts[86], 28946, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[86], 1000, {from: accounts[86]});

await instance.batchTransfer([accounts[20],accounts[84],accounts[35],accounts[85],accounts[35],accounts[20],accounts[54],accounts[26],accounts[18],accounts[3]],4345,{from:accounts[0]});

result = await instance.transfer(accounts[3],652,{from:accounts[3]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[2],232,{from:accounts[1]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[19],accounts[63],accounts[56],accounts[61],accounts[98],accounts[34],accounts[71],accounts[66],accounts[2]],4823,{from:accounts[0]});


await instance.approve(accounts[158], 38050, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

});
it('test 21',async() => {
await instance.batchTransfer([accounts[65],accounts[20]],8990,{from:accounts[0]});


await instance.approve(accounts[119], 29940, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

result = await instance.transfer(accounts[1],820,{from:accounts[5]});
});
it('test 22',async() => {
await instance.batchTransfer([accounts[8],accounts[14],accounts[95],accounts[86],accounts[93],accounts[34],accounts[75]],8129,{from:accounts[0]});


await instance.approve(accounts[112], 29780, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[112], 1000, {from: accounts[112]});

result = await instance.transfer(accounts[3],776,{from:accounts[1]});
});
it('test 23',async() => {
await instance.batchTransfer([accounts[36],accounts[11],accounts[1],accounts[95],accounts[61]],9147,{from:accounts[0]});

result = await instance.transfer(accounts[4],638,{from:accounts[3]});

await instance.approve(accounts[102], 33277, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[102], 1000, {from: accounts[102]});

});
it('test 24',async() => {

await instance.approve(accounts[72], 28189, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

await instance.batchTransfer([accounts[3],accounts[54],accounts[32]],6540,{from:accounts[0]});

result = await instance.transfer(accounts[2],957,{from:accounts[3]});
});
it('test 25',async() => {
await instance.batchTransfer([accounts[72],accounts[62],accounts[64],accounts[33],accounts[92],accounts[12],accounts[12],accounts[10]],9636,{from:accounts[0]});

result = await instance.transfer(accounts[3],446,{from:accounts[1]});

await instance.approve(accounts[48], 38797, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[48], 1000, {from: accounts[48]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[1],427,{from:accounts[5]});

await instance.approve(accounts[106], 33773, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[106], 1000, {from: accounts[106]});

await instance.batchTransfer([accounts[88],accounts[31]],2371,{from:accounts[0]});

});
it('test 27',async() => {

await instance.approve(accounts[123], 20968, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[123], 1000, {from: accounts[123]});

await instance.batchTransfer([accounts[10],accounts[2],accounts[38],accounts[37],accounts[46]],3219,{from:accounts[0]});

result = await instance.transfer(accounts[2],329,{from:accounts[0]});
});
it('test 28',async() => {

await instance.approve(accounts[114], 25641, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[114], 1000, {from: accounts[114]});

result = await instance.transfer(accounts[5],723,{from:accounts[3]});
await instance.batchTransfer([accounts[56],accounts[27],accounts[72],accounts[12]],5611,{from:accounts[0]});

});
it('test 29',async() => {

await instance.approve(accounts[29], 27885, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[29], 1000, {from: accounts[29]});

result = await instance.transfer(accounts[4],401,{from:accounts[4]});
await instance.batchTransfer([accounts[46],accounts[66],accounts[86],accounts[34],accounts[95]],2439,{from:accounts[0]});

});
});
