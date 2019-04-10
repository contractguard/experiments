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
await instance.batchTransfer([accounts[67],accounts[55],accounts[82]],3457,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[40], 23094, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[40], 1000, {from: accounts[40]});

result = await instance.transfer(accounts[5],271,{from:accounts[1]});
});
it('test 1',async() => {
await instance.batchTransfer([accounts[48],accounts[71],accounts[40],accounts[46],accounts[58]],2347,{from:accounts[0]});


await instance.approve(accounts[168], 32182, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

result = await instance.transfer(accounts[2],361,{from:accounts[1]});
});
it('test 2',async() => {
result = await instance.transfer(accounts[5],962,{from:accounts[2]});

await instance.approve(accounts[182], 39236, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

await instance.batchTransfer([accounts[95],accounts[19],accounts[59],accounts[89],accounts[68],accounts[16],accounts[29],accounts[44]],9205,{from:accounts[0]});

});
it('test 3',async() => {

await instance.approve(accounts[177], 24556, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[177], 1000, {from: accounts[177]});

await instance.batchTransfer([accounts[99],accounts[62],accounts[83],accounts[38],accounts[67],accounts[53],accounts[20]],3343,{from:accounts[0]});

result = await instance.transfer(accounts[2],656,{from:accounts[0]});
});
it('test 4',async() => {
await instance.batchTransfer([accounts[98],accounts[39]],3936,{from:accounts[0]});


await instance.approve(accounts[184], 32258, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[184], 1000, {from: accounts[184]});

result = await instance.transfer(accounts[5],314,{from:accounts[1]});
});
it('test 5',async() => {
result = await instance.transfer(accounts[1],427,{from:accounts[2]});
await instance.batchTransfer([accounts[32],accounts[48],accounts[66],accounts[10],accounts[41]],2144,{from:accounts[0]});


await instance.approve(accounts[9], 33524, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[12],accounts[39],accounts[7],accounts[49]],9408,{from:accounts[0]});


await instance.approve(accounts[137], 23857, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

result = await instance.transfer(accounts[1],614,{from:accounts[0]});
});
it('test 7',async() => {
result = await instance.transfer(accounts[3],410,{from:accounts[5]});
await instance.batchTransfer([accounts[67],accounts[42]],1307,{from:accounts[0]});


await instance.approve(accounts[179], 36355, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[179], 1000, {from: accounts[179]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[77],accounts[92],accounts[26],accounts[82],accounts[26],accounts[3],accounts[13],accounts[51]],9728,{from:accounts[0]});


await instance.approve(accounts[90], 36640, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[90], 1000, {from: accounts[90]});

result = await instance.transfer(accounts[1],723,{from:accounts[3]});
});
it('test 9',async() => {

await instance.approve(accounts[144], 32326, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

result = await instance.transfer(accounts[4],225,{from:accounts[5]});
await instance.batchTransfer([accounts[28],accounts[58],accounts[93]],5337,{from:accounts[0]});

});
it('test 10',async() => {

await instance.approve(accounts[25], 29002, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[25], 1000, {from: accounts[25]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[14],accounts[6],accounts[6]],5942,{from:accounts[0]});

result = await instance.transfer(accounts[0],808,{from:accounts[5]});
});
it('test 11',async() => {
result = await instance.transfer(accounts[4],632,{from:accounts[5]});
await instance.batchTransfer([accounts[50],accounts[36],accounts[53],accounts[92]],8702,{from:accounts[0]});


await instance.approve(accounts[174], 34487, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

});
it('test 12',async() => {

await instance.approve(accounts[150], 34656, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[150], 1000, {from: accounts[150]});

await instance.batchTransfer([accounts[26],accounts[23],accounts[20],accounts[43],accounts[82],accounts[86]],9371,{from:accounts[0]});

result = await instance.transfer(accounts[5],974,{from:accounts[3]});
});
it('test 13',async() => {
result = await instance.transfer(accounts[1],966,{from:accounts[1]});

await instance.approve(accounts[24], 39068, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[24], 1000, {from: accounts[24]});

await instance.batchTransfer([accounts[75],accounts[98]],2356,{from:accounts[0]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[29],accounts[9]],2849,{from:accounts[0]});


await instance.approve(accounts[105], 25478, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[105], 1000, {from: accounts[105]});

result = await instance.transfer(accounts[1],944,{from:accounts[1]});
});
it('test 15',async() => {
await instance.batchTransfer([accounts[71],accounts[63],accounts[54],accounts[93],accounts[26],accounts[87],accounts[19],accounts[34]],4886,{from:accounts[0]});

result = await instance.transfer(accounts[4],343,{from:accounts[2]});

await instance.approve(accounts[116], 26444, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[116], 1000, {from: accounts[116]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[32],accounts[95],accounts[88]],5567,{from:accounts[0]});

result = await instance.transfer(accounts[5],843,{from:accounts[5]});

await instance.approve(accounts[152], 27741, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[24],accounts[99],accounts[54],accounts[84],accounts[19],accounts[26],accounts[89],accounts[68],accounts[74],accounts[56]],1024,{from:accounts[0]});

result = await instance.transfer(accounts[0],675,{from:accounts[5]});

await instance.approve(accounts[192], 36451, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[192], 1000, {from: accounts[192]});

});
it('test 18',async() => {

await instance.approve(accounts[87], 26811, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[87], 1000, {from: accounts[87]});

result = await instance.transfer(accounts[0],841,{from:accounts[2]});
await instance.batchTransfer([accounts[29],accounts[2],accounts[42]],2000,{from:accounts[0]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[65]],9551,{from:accounts[0]});


await instance.approve(accounts[8], 20786, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

result = await instance.transfer(accounts[2],974,{from:accounts[4]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[16]],7629,{from:accounts[0]});

result = await instance.transfer(accounts[2],679,{from:accounts[0]});

await instance.approve(accounts[99], 35265, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[99], 1000, {from: accounts[99]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 21',async() => {

await instance.approve(accounts[72], 37234, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

await instance.batchTransfer([accounts[78]],6644,{from:accounts[0]});

result = await instance.transfer(accounts[4],884,{from:accounts[1]});
});
it('test 22',async() => {
await instance.batchTransfer([accounts[45],accounts[75],accounts[27]],4169,{from:accounts[0]});


await instance.approve(accounts[136], 35224, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[136], 1000, {from: accounts[136]});

result = await instance.transfer(accounts[1],496,{from:accounts[3]});
});
it('test 23',async() => {

await instance.approve(accounts[142], 35247, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[142], 1000, {from: accounts[142]});

await instance.batchTransfer([accounts[59],accounts[47],accounts[1],accounts[9]],4150,{from:accounts[0]});

result = await instance.transfer(accounts[5],362,{from:accounts[5]});
});
it('test 24',async() => {

await instance.approve(accounts[94], 31450, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[94], 1000, {from: accounts[94]});

result = await instance.transfer(accounts[1],302,{from:accounts[4]});
await instance.batchTransfer([accounts[18],accounts[98],accounts[40],accounts[23],accounts[64],accounts[26],accounts[82],accounts[23],accounts[66]],2468,{from:accounts[0]});

});
it('test 25',async() => {
result = await instance.transfer(accounts[3],662,{from:accounts[5]});
await instance.batchTransfer([accounts[35],accounts[67],accounts[86]],8885,{from:accounts[0]});


await instance.approve(accounts[115], 20563, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

});
it('test 26',async() => {

await instance.approve(accounts[49], 36984, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[49], 1000, {from: accounts[49]});

result = await instance.transfer(accounts[4],891,{from:accounts[5]});
await instance.batchTransfer([accounts[20],accounts[87],accounts[31]],1911,{from:accounts[0]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[0],976,{from:accounts[3]});

await instance.approve(accounts[129], 29976, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

await instance.batchTransfer([accounts[96],accounts[98],accounts[56],accounts[34],accounts[87],accounts[24],accounts[1],accounts[31],accounts[6]],1269,{from:accounts[0]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[25],accounts[34],accounts[39],accounts[96],accounts[80]],9717,{from:accounts[0]});

result = await instance.transfer(accounts[4],745,{from:accounts[4]});

await instance.approve(accounts[146], 22073, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[146], 1000, {from: accounts[146]});

});
it('test 29',async() => {

await instance.approve(accounts[128], 27495, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[128], 1000, {from: accounts[128]});

await instance.batchTransfer([accounts[47],accounts[90],accounts[23],accounts[90],accounts[18],accounts[85]],3146,{from:accounts[0]});

result = await instance.transfer(accounts[0],709,{from:accounts[4]});
});
});
