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
await instance.batchTransfer([accounts[49],accounts[63],accounts[55],accounts[58],accounts[88],accounts[40],accounts[41]],7276,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[55], 30025, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

result = await instance.transfer(accounts[2],549,{from:accounts[1]});
});
it('test 1',async() => {
await instance.batchTransfer([accounts[7],accounts[88]],3870,{from:accounts[0]});

result = await instance.transfer(accounts[4],227,{from:accounts[5]});

await instance.approve(accounts[119], 23424, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

});
it('test 2',async() => {

await instance.approve(accounts[18], 26148, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

result = await instance.transfer(accounts[4],828,{from:accounts[2]});
await instance.batchTransfer([accounts[80],accounts[97],accounts[61],accounts[92],accounts[100],accounts[16],accounts[40],accounts[96],accounts[38],accounts[96]],8201,{from:accounts[0]});

});
it('test 3',async() => {
await instance.batchTransfer([accounts[38],accounts[71],accounts[38],accounts[18],accounts[9],accounts[3],accounts[85],accounts[69],accounts[84],accounts[35]],4501,{from:accounts[0]});

result = await instance.transfer(accounts[2],233,{from:accounts[2]});

await instance.approve(accounts[28], 25802, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[28], 1000, {from: accounts[28]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[0],604,{from:accounts[3]});

await instance.approve(accounts[140], 28016, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

await instance.batchTransfer([accounts[83],accounts[73],accounts[35]],6181,{from:accounts[0]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[82],accounts[51],accounts[83]],8031,{from:accounts[0]});

result = await instance.transfer(accounts[0],273,{from:accounts[3]});

await instance.approve(accounts[141], 24085, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[141], 1000, {from: accounts[141]});

});
it('test 6',async() => {

await instance.approve(accounts[67], 27228, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

result = await instance.transfer(accounts[2],681,{from:accounts[5]});
await instance.batchTransfer([accounts[25],accounts[19],accounts[44],accounts[80],accounts[18]],8488,{from:accounts[0]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[4],283,{from:accounts[0]});
await instance.batchTransfer([accounts[49],accounts[45],accounts[46],accounts[81],accounts[85],accounts[60],accounts[84],accounts[84],accounts[38]],2422,{from:accounts[0]});


await instance.approve(accounts[33], 35236, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

});
it('test 8',async() => {

await instance.approve(accounts[147], 31317, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[147], 1000, {from: accounts[147]});

await instance.batchTransfer([accounts[84],accounts[51],accounts[83],accounts[8],accounts[40],accounts[34],accounts[65],accounts[36]],3778,{from:accounts[0]});

result = await instance.transfer(accounts[3],241,{from:accounts[0]});
});
it('test 9',async() => {

await instance.approve(accounts[142], 39367, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[142], 1000, {from: accounts[142]});

await instance.batchTransfer([accounts[60],accounts[40],accounts[84],accounts[58]],1957,{from:accounts[0]});

result = await instance.transfer(accounts[5],551,{from:accounts[5]});
});
it('test 10',async() => {
result = await instance.transfer(accounts[2],525,{from:accounts[0]});
await instance.batchTransfer([accounts[92]],4106,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[129], 23274, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

});
it('test 11',async() => {

await instance.approve(accounts[128], 38058, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[128], 1000, {from: accounts[128]});

result = await instance.transfer(accounts[5],698,{from:accounts[5]});
await instance.batchTransfer([accounts[56],accounts[11],accounts[35],accounts[64],accounts[99]],4574,{from:accounts[0]});

});
it('test 12',async() => {

await instance.approve(accounts[196], 25246, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[196], 1000, {from: accounts[196]});

await instance.batchTransfer([accounts[26],accounts[50],accounts[72]],8321,{from:accounts[0]});

result = await instance.transfer(accounts[4],929,{from:accounts[4]});
});
it('test 13',async() => {
await instance.batchTransfer([accounts[83],accounts[86]],2216,{from:accounts[0]});

result = await instance.transfer(accounts[0],464,{from:accounts[2]});

await instance.approve(accounts[113], 25013, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[113], 1000, {from: accounts[113]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[0],511,{from:accounts[4]});
await instance.batchTransfer([accounts[56]],6294,{from:accounts[0]});


await instance.approve(accounts[123], 36591, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[123], 1000, {from: accounts[123]});

});
it('test 15',async() => {

await instance.approve(accounts[168], 24813, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

await instance.batchTransfer([accounts[3],accounts[47],accounts[37],accounts[7],accounts[32],accounts[70]],7882,{from:accounts[0]});

result = await instance.transfer(accounts[3],263,{from:accounts[2]});
});
it('test 16',async() => {

await instance.approve(accounts[135], 23514, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

await instance.batchTransfer([accounts[8],accounts[84],accounts[76],accounts[29],accounts[76],accounts[93],accounts[30],accounts[56],accounts[37],accounts[86]],4232,{from:accounts[0]});

result = await instance.transfer(accounts[0],895,{from:accounts[3]});
});
it('test 17',async() => {

await instance.approve(accounts[53], 39005, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

result = await instance.transfer(accounts[3],832,{from:accounts[1]});
await instance.batchTransfer([accounts[30],accounts[9],accounts[79]],7857,{from:accounts[0]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[0],936,{from:accounts[1]});

await instance.approve(accounts[103], 39537, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[103], 1000, {from: accounts[103]});

await instance.batchTransfer([accounts[15],accounts[43],accounts[76],accounts[54],accounts[20],accounts[21],accounts[23],accounts[24],accounts[22]],8076,{from:accounts[0]});

});
it('test 19',async() => {

await instance.approve(accounts[3], 33156, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[3], 1000, {from: accounts[3]});

result = await instance.transfer(accounts[1],749,{from:accounts[3]});
await instance.batchTransfer([accounts[75],accounts[88],accounts[22],accounts[70],accounts[90]],4965,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[97], 23726, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

result = await instance.transfer(accounts[2],996,{from:accounts[3]});
await instance.batchTransfer([accounts[69],accounts[63],accounts[93]],8594,{from:accounts[0]});

});
it('test 21',async() => {

await instance.approve(accounts[120], 38064, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

await instance.batchTransfer([accounts[50],accounts[66],accounts[40],accounts[70],accounts[17],accounts[99],accounts[83],accounts[72],accounts[11]],6208,{from:accounts[0]});

result = await instance.transfer(accounts[4],658,{from:accounts[3]});
});
it('test 22',async() => {
await instance.batchTransfer([accounts[65],accounts[49],accounts[22],accounts[5],accounts[9],accounts[76],accounts[16],accounts[100],accounts[94]],5901,{from:accounts[0]});

result = await instance.transfer(accounts[5],310,{from:accounts[4]});

await instance.approve(accounts[62], 39312, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[62], 1000, {from: accounts[62]});

});
it('test 23',async() => {
result = await instance.transfer(accounts[0],576,{from:accounts[4]});
await instance.batchTransfer([accounts[76],accounts[16]],5025,{from:accounts[0]});


await instance.approve(accounts[127], 39158, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[127], 1000, {from: accounts[127]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 24',async() => {

await instance.approve(accounts[81], 26491, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[81], 1000, {from: accounts[81]});

result = await instance.transfer(accounts[1],913,{from:accounts[1]});
await instance.batchTransfer([accounts[45],accounts[20],accounts[18],accounts[93],accounts[32],accounts[91]],4877,{from:accounts[0]});

});
it('test 25',async() => {
result = await instance.transfer(accounts[1],723,{from:accounts[4]});

await instance.approve(accounts[19], 28126, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

await instance.batchTransfer([accounts[8]],2412,{from:accounts[0]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[4],789,{from:accounts[1]});

await instance.approve(accounts[33], 36065, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

await instance.batchTransfer([accounts[23],accounts[8],accounts[40],accounts[89],accounts[42]],9815,{from:accounts[0]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[5],364,{from:accounts[5]});

await instance.approve(accounts[136], 32712, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[136], 1000, {from: accounts[136]});

await instance.batchTransfer([accounts[26],accounts[87],accounts[80],accounts[10],accounts[40],accounts[80],accounts[3],accounts[73],accounts[93]],7804,{from:accounts[0]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[26],accounts[10]],9717,{from:accounts[0]});

result = await instance.transfer(accounts[4],367,{from:accounts[3]});

await instance.approve(accounts[138], 20330, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[138], 1000, {from: accounts[138]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[86],accounts[88],accounts[16],accounts[69],accounts[77]],5466,{from:accounts[0]});


await instance.approve(accounts[191], 36504, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[191], 1000, {from: accounts[191]});

result = await instance.transfer(accounts[5],282,{from:accounts[2]});
});
});
