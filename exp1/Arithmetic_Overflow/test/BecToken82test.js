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
result = await instance.transfer(accounts[3],661,{from:accounts[5]});

await instance.approve(accounts[119], 34299, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

await instance.batchTransfer([accounts[63]],5459,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {

await instance.approve(accounts[7], 24335, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[7], 1000, {from: accounts[7]});

result = await instance.transfer(accounts[0],739,{from:accounts[5]});
await instance.batchTransfer([accounts[2]],7074,{from:accounts[0]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[8],accounts[10],accounts[71],accounts[20],accounts[47],accounts[78],accounts[97]],6693,{from:accounts[0]});

result = await instance.transfer(accounts[0],594,{from:accounts[2]});

await instance.approve(accounts[59], 28178, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[59], 1000, {from: accounts[59]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[3],538,{from:accounts[5]});

await instance.approve(accounts[120], 26631, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

await instance.batchTransfer([accounts[5],accounts[43],accounts[58],accounts[85],accounts[82],accounts[59]],2827,{from:accounts[0]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[86],accounts[3],accounts[63]],9930,{from:accounts[0]});

result = await instance.transfer(accounts[0],866,{from:accounts[3]});

await instance.approve(accounts[90], 34073, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[90], 1000, {from: accounts[90]});

});
it('test 5',async() => {

await instance.approve(accounts[76], 24806, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

result = await instance.transfer(accounts[2],257,{from:accounts[5]});
await instance.batchTransfer([accounts[100],accounts[2],accounts[88],accounts[79]],1065,{from:accounts[0]});

});
it('test 6',async() => {

await instance.approve(accounts[21], 25630, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

await instance.batchTransfer([accounts[41],accounts[8],accounts[16],accounts[36],accounts[8],accounts[17],accounts[42],accounts[94],accounts[70],accounts[88]],3559,{from:accounts[0]});

result = await instance.transfer(accounts[1],641,{from:accounts[0]});
});
it('test 7',async() => {
result = await instance.transfer(accounts[1],424,{from:accounts[2]});
await instance.batchTransfer([accounts[18]],4868,{from:accounts[0]});


await instance.approve(accounts[176], 28416, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[58],accounts[41],accounts[80],accounts[26]],7012,{from:accounts[0]});


await instance.approve(accounts[137], 32611, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

result = await instance.transfer(accounts[1],884,{from:accounts[4]});
});
it('test 9',async() => {

await instance.approve(accounts[162], 34442, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[162], 1000, {from: accounts[162]});

await instance.batchTransfer([accounts[74],accounts[9],accounts[58],accounts[12],accounts[73],accounts[44]],2355,{from:accounts[0]});

result = await instance.transfer(accounts[3],389,{from:accounts[2]});
});
it('test 10',async() => {
result = await instance.transfer(accounts[2],312,{from:accounts[4]});

await instance.approve(accounts[126], 25769, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

await instance.batchTransfer([accounts[55],accounts[88],accounts[53],accounts[16],accounts[39],accounts[67],accounts[77],accounts[24],accounts[100]],8757,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {

await instance.approve(accounts[103], 24754, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[103], 1000, {from: accounts[103]});

await instance.batchTransfer([accounts[26],accounts[27],accounts[18],accounts[12],accounts[49],accounts[87],accounts[67],accounts[63],accounts[76]],3279,{from:accounts[0]});

result = await instance.transfer(accounts[5],217,{from:accounts[1]});
});
it('test 12',async() => {

await instance.approve(accounts[137], 29236, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

result = await instance.transfer(accounts[4],527,{from:accounts[4]});
await instance.batchTransfer([accounts[48],accounts[65],accounts[59],accounts[47],accounts[14],accounts[49],accounts[21],accounts[10]],7441,{from:accounts[0]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[45],accounts[88],accounts[86],accounts[96],accounts[13],accounts[19],accounts[40]],6949,{from:accounts[0]});


await instance.approve(accounts[58], 20775, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[58], 1000, {from: accounts[58]});

result = await instance.transfer(accounts[0],550,{from:accounts[4]});
});
it('test 14',async() => {
await instance.batchTransfer([accounts[64]],6774,{from:accounts[0]});

result = await instance.transfer(accounts[3],707,{from:accounts[0]});

await instance.approve(accounts[153], 23259, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[153], 1000, {from: accounts[153]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[1],891,{from:accounts[0]});
await instance.batchTransfer([accounts[15],accounts[81],accounts[33],accounts[10],accounts[60],accounts[46],accounts[35],accounts[61]],5375,{from:accounts[0]});


await instance.approve(accounts[168], 38643, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[4],926,{from:accounts[0]});

await instance.approve(accounts[102], 24703, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[102], 1000, {from: accounts[102]});

await instance.batchTransfer([accounts[19],accounts[87],accounts[12],accounts[62],accounts[7],accounts[18],accounts[16],accounts[7],accounts[88],accounts[81]],5618,{from:accounts[0]});

});
it('test 17',async() => {

await instance.approve(accounts[166], 35487, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[166], 1000, {from: accounts[166]});

await instance.batchTransfer([accounts[52],accounts[59],accounts[93],accounts[16],accounts[29],accounts[93],accounts[26],accounts[82]],4098,{from:accounts[0]});

result = await instance.transfer(accounts[0],221,{from:accounts[5]});
});
it('test 18',async() => {
await instance.batchTransfer([accounts[70],accounts[57],accounts[25],accounts[35],accounts[58]],3757,{from:accounts[0]});


await instance.approve(accounts[125], 34560, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

result = await instance.transfer(accounts[1],205,{from:accounts[3]});
});
it('test 19',async() => {

await instance.approve(accounts[195], 25777, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[195], 1000, {from: accounts[195]});

result = await instance.transfer(accounts[3],730,{from:accounts[5]});
await instance.batchTransfer([accounts[79],accounts[25],accounts[71],accounts[16],accounts[18],accounts[68]],4372,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[9],accounts[14],accounts[58],accounts[31],accounts[9],accounts[68],accounts[45],accounts[4],accounts[44],accounts[60]],2869,{from:accounts[0]});

result = await instance.transfer(accounts[2],486,{from:accounts[2]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[114], 35008, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[114], 1000, {from: accounts[114]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {
result = await instance.transfer(accounts[3],665,{from:accounts[0]});

await instance.approve(accounts[151], 39472, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

await instance.batchTransfer([accounts[69],accounts[44],accounts[11],accounts[52]],4499,{from:accounts[0]});

});
it('test 22',async() => {
result = await instance.transfer(accounts[1],366,{from:accounts[1]});

await instance.approve(accounts[141], 35551, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[141], 1000, {from: accounts[141]});

await instance.batchTransfer([accounts[27],accounts[32],accounts[19],accounts[23],accounts[42],accounts[86]],4376,{from:accounts[0]});

});
it('test 23',async() => {
result = await instance.transfer(accounts[1],891,{from:accounts[0]});

await instance.approve(accounts[143], 31314, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[143], 1000, {from: accounts[143]});

await instance.batchTransfer([accounts[31],accounts[67],accounts[14],accounts[30],accounts[73],accounts[79]],4085,{from:accounts[0]});

});
it('test 24',async() => {
await instance.batchTransfer([accounts[7],accounts[85],accounts[75],accounts[87]],5487,{from:accounts[0]});


await instance.approve(accounts[10], 23381, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

result = await instance.transfer(accounts[2],290,{from:accounts[5]});
});
it('test 25',async() => {
result = await instance.transfer(accounts[1],444,{from:accounts[2]});
await instance.batchTransfer([accounts[49],accounts[66],accounts[77],accounts[3],accounts[61],accounts[19]],4254,{from:accounts[0]});


await instance.approve(accounts[79], 27421, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[79], 1000, {from: accounts[79]});

});
it('test 26',async() => {
await instance.batchTransfer([accounts[10],accounts[49],accounts[2],accounts[84]],2161,{from:accounts[0]});


await instance.approve(accounts[19], 28316, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

result = await instance.transfer(accounts[2],477,{from:accounts[5]});
});
it('test 27',async() => {

await instance.approve(accounts[168], 22888, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

await instance.batchTransfer([accounts[50],accounts[55]],2328,{from:accounts[0]});

result = await instance.transfer(accounts[2],893,{from:accounts[5]});
});
it('test 28',async() => {
result = await instance.transfer(accounts[4],774,{from:accounts[0]});
await instance.batchTransfer([accounts[87],accounts[51],accounts[13]],1731,{from:accounts[0]});


await instance.approve(accounts[9], 33526, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[31],accounts[33],accounts[23]],7073,{from:accounts[0]});


await instance.approve(accounts[16], 32740, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[16], 1000, {from: accounts[16]});

result = await instance.transfer(accounts[2],508,{from:accounts[4]});
});
});
