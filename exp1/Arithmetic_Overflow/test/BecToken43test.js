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


await instance.approve(accounts[20], 23618, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[20], 1000, {from: accounts[20]});

await instance.batchTransfer([accounts[54],accounts[16],accounts[22],accounts[86]],3207,{from:accounts[0]});

result = await instance.transfer(accounts[0],590,{from:accounts[2]});
});
it('test 1',async() => {

await instance.approve(accounts[45], 27046, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

result = await instance.transfer(accounts[4],681,{from:accounts[2]});
await instance.batchTransfer([accounts[88],accounts[50],accounts[42],accounts[24],accounts[92],accounts[60],accounts[63]],3541,{from:accounts[0]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[91],accounts[31],accounts[31],accounts[78],accounts[37]],4157,{from:accounts[0]});


await instance.approve(accounts[192], 22461, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[192], 1000, {from: accounts[192]});

result = await instance.transfer(accounts[5],750,{from:accounts[4]});
});
it('test 3',async() => {
result = await instance.transfer(accounts[0],823,{from:accounts[2]});

await instance.approve(accounts[55], 35984, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

await instance.batchTransfer([accounts[10],accounts[99],accounts[3]],3276,{from:accounts[0]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[13]],3614,{from:accounts[0]});


await instance.approve(accounts[70], 31031, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[70], 1000, {from: accounts[70]});

result = await instance.transfer(accounts[0],414,{from:accounts[5]});
});
it('test 5',async() => {
await instance.batchTransfer([accounts[56],accounts[84],accounts[30],accounts[2],accounts[27],accounts[15],accounts[80],accounts[14],accounts[7]],9126,{from:accounts[0]});

result = await instance.transfer(accounts[1],430,{from:accounts[3]});

await instance.approve(accounts[134], 22943, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[134], 1000, {from: accounts[134]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[59],accounts[70],accounts[5],accounts[27],accounts[78],accounts[100],accounts[44],accounts[2]],3065,{from:accounts[0]});


await instance.approve(accounts[19], 33840, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

result = await instance.transfer(accounts[2],981,{from:accounts[5]});
});
it('test 7',async() => {
await instance.batchTransfer([accounts[69],accounts[95],accounts[18]],3001,{from:accounts[0]});

result = await instance.transfer(accounts[4],243,{from:accounts[1]});

await instance.approve(accounts[75], 25004, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

});
it('test 8',async() => {

await instance.approve(accounts[82], 22275, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

await instance.batchTransfer([accounts[23]],3179,{from:accounts[0]});

result = await instance.transfer(accounts[0],557,{from:accounts[3]});
});
it('test 9',async() => {
await instance.batchTransfer([accounts[15],accounts[100],accounts[43],accounts[90],accounts[36]],4083,{from:accounts[0]});

result = await instance.transfer(accounts[1],422,{from:accounts[4]});

await instance.approve(accounts[151], 32776, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[5],202,{from:accounts[2]});
await instance.batchTransfer([accounts[54],accounts[94],accounts[73],accounts[8],accounts[68],accounts[23],accounts[78],accounts[35]],6467,{from:accounts[0]});


await instance.approve(accounts[198], 25795, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[198], 1000, {from: accounts[198]});

});
it('test 11',async() => {

await instance.approve(accounts[4], 38517, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[4], 1000, {from: accounts[4]});

result = await instance.transfer(accounts[3],893,{from:accounts[4]});
await instance.batchTransfer([accounts[74],accounts[64],accounts[82],accounts[91],accounts[52],accounts[60],accounts[9],accounts[92]],1608,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[90],accounts[29],accounts[63],accounts[72],accounts[66],accounts[82],accounts[83],accounts[20]],7980,{from:accounts[0]});

result = await instance.transfer(accounts[2],958,{from:accounts[3]});

await instance.approve(accounts[189], 29097, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[189], 1000, {from: accounts[189]});

});
it('test 13',async() => {

await instance.approve(accounts[158], 31075, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

await instance.batchTransfer([accounts[82],accounts[97],accounts[13],accounts[66],accounts[14],accounts[38],accounts[82],accounts[38]],2704,{from:accounts[0]});

result = await instance.transfer(accounts[1],695,{from:accounts[4]});
});
it('test 14',async() => {

await instance.approve(accounts[107], 31076, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

await instance.batchTransfer([accounts[33],accounts[86],accounts[55],accounts[23],accounts[73],accounts[83],accounts[64],accounts[23],accounts[71]],6854,{from:accounts[0]});

result = await instance.transfer(accounts[0],810,{from:accounts[2]});
});
it('test 15',async() => {
result = await instance.transfer(accounts[5],365,{from:accounts[4]});
await instance.batchTransfer([accounts[43],accounts[41],accounts[47],accounts[33],accounts[50],accounts[2],accounts[28],accounts[52]],6492,{from:accounts[0]});


await instance.approve(accounts[92], 21804, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[92], 1000, {from: accounts[92]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[29]],8752,{from:accounts[0]});


await instance.approve(accounts[84], 32726, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[84], 1000, {from: accounts[84]});

result = await instance.transfer(accounts[5],289,{from:accounts[4]});
});
it('test 17',async() => {
await instance.batchTransfer([accounts[59],accounts[37],accounts[96],accounts[40],accounts[24]],9193,{from:accounts[0]});

result = await instance.transfer(accounts[3],384,{from:accounts[4]});

await instance.approve(accounts[76], 31905, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[4],509,{from:accounts[1]});

await instance.approve(accounts[45], 34706, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

await instance.batchTransfer([accounts[55],accounts[86],accounts[8],accounts[61],accounts[93],accounts[79],accounts[43]],7764,{from:accounts[0]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[5],814,{from:accounts[1]});

await instance.approve(accounts[67], 29305, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

await instance.batchTransfer([accounts[21],accounts[48],accounts[61],accounts[22],accounts[100],accounts[31],accounts[56],accounts[16]],3863,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[11],accounts[22],accounts[23]],5254,{from:accounts[0]});

result = await instance.transfer(accounts[5],641,{from:accounts[1]});

await instance.approve(accounts[39], 25464, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[5],748,{from:accounts[2]});

await instance.approve(accounts[189], 33892, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[189], 1000, {from: accounts[189]});

await instance.batchTransfer([accounts[98],accounts[60],accounts[58],accounts[71],accounts[6]],7420,{from:accounts[0]});

});
it('test 22',async() => {

await instance.approve(accounts[163], 37310, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[163], 1000, {from: accounts[163]});

await instance.batchTransfer([accounts[89],accounts[92],accounts[77],accounts[70],accounts[75],accounts[63],accounts[78],accounts[5],accounts[37],accounts[63]],8123,{from:accounts[0]});

result = await instance.transfer(accounts[0],272,{from:accounts[3]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {

await instance.approve(accounts[19], 38003, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

result = await instance.transfer(accounts[2],868,{from:accounts[3]});
await instance.batchTransfer([accounts[4],accounts[9]],8431,{from:accounts[0]});

});
it('test 24',async() => {

await instance.approve(accounts[175], 39445, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[175], 1000, {from: accounts[175]});

await instance.batchTransfer([accounts[14],accounts[19],accounts[58],accounts[63]],2117,{from:accounts[0]});

result = await instance.transfer(accounts[2],632,{from:accounts[0]});
});
it('test 25',async() => {
await instance.batchTransfer([accounts[19],accounts[42],accounts[70]],2900,{from:accounts[0]});

result = await instance.transfer(accounts[3],656,{from:accounts[4]});

await instance.approve(accounts[152], 36712, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

});
it('test 26',async() => {

await instance.approve(accounts[97], 20990, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

result = await instance.transfer(accounts[2],246,{from:accounts[5]});
await instance.batchTransfer([accounts[84],accounts[71],accounts[70],accounts[6]],9760,{from:accounts[0]});

});
it('test 27',async() => {
await instance.batchTransfer([accounts[43],accounts[98]],9484,{from:accounts[0]});


await instance.approve(accounts[107], 35457, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

result = await instance.transfer(accounts[0],576,{from:accounts[0]});
});
it('test 28',async() => {
await instance.batchTransfer([accounts[10],accounts[71]],8250,{from:accounts[0]});


await instance.approve(accounts[121], 27945, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

result = await instance.transfer(accounts[0],600,{from:accounts[0]});
});
it('test 29',async() => {

await instance.approve(accounts[7], 30560, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[7], 1000, {from: accounts[7]});

await instance.batchTransfer([accounts[43],accounts[83],accounts[67],accounts[26]],3821,{from:accounts[0]});

result = await instance.transfer(accounts[1],605,{from:accounts[0]});
});
});
