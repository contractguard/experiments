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

await instance.approve(accounts[77], 35283, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[0],936,{from:accounts[2]});
await instance.batchTransfer([accounts[62],accounts[77],accounts[70],accounts[76],accounts[67],accounts[6],accounts[1],accounts[51],accounts[60]],8665,{from:accounts[0]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[2],681,{from:accounts[0]});
await instance.batchTransfer([accounts[32]],7496,{from:accounts[0]});


await instance.approve(accounts[76], 28978, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[5],531,{from:accounts[2]});
await instance.batchTransfer([accounts[17],accounts[40],accounts[75],accounts[25],accounts[9],accounts[46],accounts[73],accounts[44]],5668,{from:accounts[0]});


await instance.approve(accounts[142], 22394, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[142], 1000, {from: accounts[142]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[1],367,{from:accounts[2]});
await instance.batchTransfer([accounts[88],accounts[27],accounts[30],accounts[38],accounts[52],accounts[58],accounts[37],accounts[17],accounts[70]],2134,{from:accounts[0]});


await instance.approve(accounts[193], 33958, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[193], 1000, {from: accounts[193]});

});
it('test 4',async() => {

await instance.approve(accounts[10], 36636, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

await instance.batchTransfer([accounts[1],accounts[99],accounts[67]],8825,{from:accounts[0]});

result = await instance.transfer(accounts[2],834,{from:accounts[0]});
});
it('test 5',async() => {
result = await instance.transfer(accounts[2],865,{from:accounts[2]});

await instance.approve(accounts[13], 28083, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[13], 1000, {from: accounts[13]});

await instance.batchTransfer([accounts[16],accounts[42],accounts[22],accounts[4],accounts[76],accounts[41],accounts[2],accounts[61],accounts[66]],9734,{from:accounts[0]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[1],533,{from:accounts[3]});
await instance.batchTransfer([accounts[8],accounts[37],accounts[9],accounts[25],accounts[2],accounts[94],accounts[98],accounts[40]],6694,{from:accounts[0]});


await instance.approve(accounts[33], 30626, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[1],677,{from:accounts[0]});
await instance.batchTransfer([accounts[83],accounts[74]],6630,{from:accounts[0]});


await instance.approve(accounts[199], 33369, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[199], 1000, {from: accounts[199]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[1],944,{from:accounts[3]});
await instance.batchTransfer([accounts[76],accounts[39],accounts[82],accounts[91],accounts[63],accounts[78],accounts[50],accounts[95]],6827,{from:accounts[0]});


await instance.approve(accounts[107], 31707, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[5],223,{from:accounts[1]});
await instance.batchTransfer([accounts[39],accounts[12],accounts[42],accounts[96],accounts[67],accounts[33]],3977,{from:accounts[0]});


await instance.approve(accounts[112], 31208, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[112], 1000, {from: accounts[112]});

});
it('test 10',async() => {

await instance.approve(accounts[129], 36238, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[0],347,{from:accounts[1]});
await instance.batchTransfer([accounts[15],accounts[91],accounts[65],accounts[64],accounts[67],accounts[38],accounts[37],accounts[55],accounts[87],accounts[43]],9657,{from:accounts[0]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[1],337,{from:accounts[2]});

await instance.approve(accounts[83], 22275, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

await instance.batchTransfer([accounts[54],accounts[92]],4023,{from:accounts[0]});

});
it('test 12',async() => {
result = await instance.transfer(accounts[2],777,{from:accounts[3]});

await instance.approve(accounts[177], 37818, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[177], 1000, {from: accounts[177]});

await instance.batchTransfer([accounts[36],accounts[66],accounts[40],accounts[96],accounts[65],accounts[51],accounts[87],accounts[93]],7938,{from:accounts[0]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[4],809,{from:accounts[2]});

await instance.approve(accounts[80], 24302, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[80], 1000, {from: accounts[80]});

await instance.batchTransfer([accounts[66],accounts[65],accounts[25],accounts[21],accounts[14],accounts[44],accounts[69],accounts[37]],7762,{from:accounts[0]});

});
it('test 14',async() => {

await instance.approve(accounts[120], 37263, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

await instance.batchTransfer([accounts[23],accounts[56],accounts[28],accounts[93],accounts[47],accounts[21],accounts[55],accounts[80]],8408,{from:accounts[0]});

result = await instance.transfer(accounts[0],629,{from:accounts[3]});
});
it('test 15',async() => {
await instance.batchTransfer([accounts[91],accounts[89],accounts[25],accounts[49],accounts[8],accounts[47],accounts[29]],7885,{from:accounts[0]});

result = await instance.transfer(accounts[5],838,{from:accounts[1]});

await instance.approve(accounts[9], 20789, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[29],accounts[8],accounts[19],accounts[89]],6938,{from:accounts[0]});

result = await instance.transfer(accounts[5],654,{from:accounts[4]});

await instance.approve(accounts[109], 34838, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[109], 1000, {from: accounts[109]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[88],accounts[100]],8052,{from:accounts[0]});


await instance.approve(accounts[29], 20413, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[29], 1000, {from: accounts[29]});

result = await instance.transfer(accounts[2],826,{from:accounts[0]});
});
it('test 18',async() => {

await instance.approve(accounts[156], 36971, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[156], 1000, {from: accounts[156]});

await instance.batchTransfer([accounts[91],accounts[79],accounts[46],accounts[29],accounts[59],accounts[47],accounts[58]],2832,{from:accounts[0]});

result = await instance.transfer(accounts[1],768,{from:accounts[3]});
});
it('test 19',async() => {
result = await instance.transfer(accounts[5],579,{from:accounts[3]});

await instance.approve(accounts[76], 31931, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

await instance.batchTransfer([accounts[52],accounts[68],accounts[43],accounts[6],accounts[35],accounts[57],accounts[78],accounts[5],accounts[24]],6165,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[184], 27183, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[184], 1000, {from: accounts[184]});

await instance.batchTransfer([accounts[3],accounts[84],accounts[29],accounts[66],accounts[38],accounts[11]],5082,{from:accounts[0]});

result = await instance.transfer(accounts[0],998,{from:accounts[4]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[4],293,{from:accounts[4]});

await instance.approve(accounts[122], 21404, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[122], 1000, {from: accounts[122]});

await instance.batchTransfer([accounts[88],accounts[18],accounts[2],accounts[24],accounts[80],accounts[96],accounts[34],accounts[36]],8881,{from:accounts[0]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[66],accounts[29],accounts[13],accounts[94]],6808,{from:accounts[0]});


await instance.approve(accounts[47], 39044, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[47], 1000, {from: accounts[47]});

result = await instance.transfer(accounts[0],595,{from:accounts[2]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {

await instance.approve(accounts[92], 37340, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[92], 1000, {from: accounts[92]});

result = await instance.transfer(accounts[0],685,{from:accounts[0]});
await instance.batchTransfer([accounts[77],accounts[26]],9017,{from:accounts[0]});

});
it('test 24',async() => {

await instance.approve(accounts[198], 31497, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[198], 1000, {from: accounts[198]});

result = await instance.transfer(accounts[5],942,{from:accounts[5]});
await instance.batchTransfer([accounts[33],accounts[9],accounts[68]],9664,{from:accounts[0]});

});
it('test 25',async() => {

await instance.approve(accounts[75], 26309, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

await instance.batchTransfer([accounts[83],accounts[59],accounts[6],accounts[22],accounts[41],accounts[85],accounts[48]],6108,{from:accounts[0]});

result = await instance.transfer(accounts[4],497,{from:accounts[5]});
});
it('test 26',async() => {
result = await instance.transfer(accounts[4],626,{from:accounts[4]});

await instance.approve(accounts[112], 30835, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[112], 1000, {from: accounts[112]});

await instance.batchTransfer([accounts[64],accounts[40],accounts[24],accounts[48],accounts[5],accounts[12]],1434,{from:accounts[0]});

});
it('test 27',async() => {
await instance.batchTransfer([accounts[11]],6657,{from:accounts[0]});


await instance.approve(accounts[147], 28737, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[147], 1000, {from: accounts[147]});

result = await instance.transfer(accounts[2],450,{from:accounts[0]});
});
it('test 28',async() => {
await instance.batchTransfer([accounts[44],accounts[33],accounts[97],accounts[20],accounts[79],accounts[34],accounts[60],accounts[29],accounts[30]],8200,{from:accounts[0]});

result = await instance.transfer(accounts[1],200,{from:accounts[2]});

await instance.approve(accounts[8], 21748, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[95],accounts[100],accounts[81],accounts[66]],1042,{from:accounts[0]});


await instance.approve(accounts[1], 27541, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[1], 1000, {from: accounts[1]});

result = await instance.transfer(accounts[2],214,{from:accounts[4]});
});
});
