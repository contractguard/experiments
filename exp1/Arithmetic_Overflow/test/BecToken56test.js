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
result = await instance.transfer(accounts[4],420,{from:accounts[2]});

await instance.approve(accounts[149], 20667, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[149], 1000, {from: accounts[149]});

await instance.batchTransfer([accounts[14],accounts[62],accounts[15],accounts[83],accounts[47],accounts[24],accounts[28],accounts[24]],2874,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[0],519,{from:accounts[2]});
await instance.batchTransfer([accounts[22],accounts[38],accounts[67],accounts[61],accounts[42],accounts[11]],6538,{from:accounts[0]});


await instance.approve(accounts[175], 30560, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[175], 1000, {from: accounts[175]});

});
it('test 2',async() => {

await instance.approve(accounts[195], 31550, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[195], 1000, {from: accounts[195]});

await instance.batchTransfer([accounts[20],accounts[29],accounts[78],accounts[8],accounts[72],accounts[74],accounts[20],accounts[24]],3273,{from:accounts[0]});

result = await instance.transfer(accounts[2],272,{from:accounts[1]});
});
it('test 3',async() => {

await instance.approve(accounts[154], 36460, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

await instance.batchTransfer([accounts[99],accounts[35],accounts[42],accounts[50],accounts[56],accounts[54],accounts[100],accounts[56],accounts[91],accounts[74]],5896,{from:accounts[0]});

result = await instance.transfer(accounts[1],333,{from:accounts[0]});
});
it('test 4',async() => {
await instance.batchTransfer([accounts[72],accounts[21],accounts[72],accounts[2],accounts[31],accounts[78]],8805,{from:accounts[0]});


await instance.approve(accounts[46], 35032, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[46], 1000, {from: accounts[46]});

result = await instance.transfer(accounts[4],735,{from:accounts[3]});
});
it('test 5',async() => {

await instance.approve(accounts[27], 39901, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

await instance.batchTransfer([accounts[43],accounts[7],accounts[31],accounts[99],accounts[23]],8979,{from:accounts[0]});

result = await instance.transfer(accounts[3],584,{from:accounts[1]});
});
it('test 6',async() => {

await instance.approve(accounts[117], 25092, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[117], 1000, {from: accounts[117]});

await instance.batchTransfer([accounts[41],accounts[39],accounts[98],accounts[98]],7216,{from:accounts[0]});

result = await instance.transfer(accounts[0],634,{from:accounts[4]});
});
it('test 7',async() => {

await instance.approve(accounts[52], 22909, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[52], 1000, {from: accounts[52]});

result = await instance.transfer(accounts[1],383,{from:accounts[0]});
await instance.batchTransfer([accounts[95],accounts[89],accounts[87],accounts[66]],6431,{from:accounts[0]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[60],accounts[80],accounts[8],accounts[7],accounts[8],accounts[46],accounts[33],accounts[91],accounts[52],accounts[4]],2577,{from:accounts[0]});

result = await instance.transfer(accounts[1],293,{from:accounts[5]});

await instance.approve(accounts[94], 34054, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[94], 1000, {from: accounts[94]});

});
it('test 9',async() => {

await instance.approve(accounts[124], 27563, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[124], 1000, {from: accounts[124]});

result = await instance.transfer(accounts[1],795,{from:accounts[1]});
await instance.batchTransfer([accounts[58]],1791,{from:accounts[0]});

});
it('test 10',async() => {

await instance.approve(accounts[37], 26622, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

await instance.batchTransfer([accounts[45],accounts[53],accounts[59],accounts[71],accounts[24],accounts[2],accounts[21]],6090,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[2],330,{from:accounts[0]});
});
it('test 11',async() => {
await instance.batchTransfer([accounts[43],accounts[19],accounts[51],accounts[17]],2288,{from:accounts[0]});

result = await instance.transfer(accounts[2],869,{from:accounts[1]});

await instance.approve(accounts[28], 34782, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[28], 1000, {from: accounts[28]});

});
it('test 12',async() => {

await instance.approve(accounts[127], 20005, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[127], 1000, {from: accounts[127]});

result = await instance.transfer(accounts[2],667,{from:accounts[0]});
await instance.batchTransfer([accounts[77]],1669,{from:accounts[0]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[3],762,{from:accounts[2]});
await instance.batchTransfer([accounts[65],accounts[39],accounts[2],accounts[67],accounts[59],accounts[46],accounts[26],accounts[77]],1471,{from:accounts[0]});


await instance.approve(accounts[56], 25553, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[56], 1000, {from: accounts[56]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[3],575,{from:accounts[0]});

await instance.approve(accounts[43], 29979, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[43], 1000, {from: accounts[43]});

await instance.batchTransfer([accounts[51],accounts[65]],4661,{from:accounts[0]});

});
it('test 15',async() => {

await instance.approve(accounts[36], 36362, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[36], 1000, {from: accounts[36]});

result = await instance.transfer(accounts[2],524,{from:accounts[1]});
await instance.batchTransfer([accounts[91],accounts[76],accounts[25],accounts[41]],4901,{from:accounts[0]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[97],accounts[63],accounts[71]],5213,{from:accounts[0]});


await instance.approve(accounts[64], 32076, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[64], 1000, {from: accounts[64]});

result = await instance.transfer(accounts[2],428,{from:accounts[2]});
});
it('test 17',async() => {

await instance.approve(accounts[135], 20538, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

await instance.batchTransfer([accounts[38],accounts[52],accounts[83],accounts[87]],7655,{from:accounts[0]});

result = await instance.transfer(accounts[3],693,{from:accounts[1]});
});
it('test 18',async() => {
result = await instance.transfer(accounts[3],610,{from:accounts[1]});

await instance.approve(accounts[161], 37096, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[161], 1000, {from: accounts[161]});

await instance.batchTransfer([accounts[79],accounts[98],accounts[86],accounts[3]],9908,{from:accounts[0]});

});
it('test 19',async() => {

await instance.approve(accounts[69], 26669, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

await instance.batchTransfer([accounts[49],accounts[16],accounts[100],accounts[80],accounts[95],accounts[25]],2881,{from:accounts[0]});

result = await instance.transfer(accounts[4],716,{from:accounts[2]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[3],810,{from:accounts[0]});
await instance.batchTransfer([accounts[72],accounts[56],accounts[29],accounts[6]],1598,{from:accounts[0]});


await instance.approve(accounts[166], 35315, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[166], 1000, {from: accounts[166]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 21',async() => {

await instance.approve(accounts[170], 25175, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

await instance.batchTransfer([accounts[71],accounts[36],accounts[4],accounts[93],accounts[62],accounts[77],accounts[26],accounts[43]],9723,{from:accounts[0]});

result = await instance.transfer(accounts[5],440,{from:accounts[5]});
});
it('test 22',async() => {

await instance.approve(accounts[176], 33088, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

result = await instance.transfer(accounts[4],548,{from:accounts[2]});
await instance.batchTransfer([accounts[5],accounts[91],accounts[49],accounts[20],accounts[60],accounts[83],accounts[28],accounts[93]],4105,{from:accounts[0]});

});
it('test 23',async() => {
result = await instance.transfer(accounts[2],580,{from:accounts[1]});
await instance.batchTransfer([accounts[43],accounts[86]],1457,{from:accounts[0]});


await instance.approve(accounts[41], 34283, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

});
it('test 24',async() => {
await instance.batchTransfer([accounts[35],accounts[26],accounts[62],accounts[40],accounts[51],accounts[34]],9392,{from:accounts[0]});


await instance.approve(accounts[64], 20788, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[64], 1000, {from: accounts[64]});

result = await instance.transfer(accounts[2],737,{from:accounts[3]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 25',async() => {
result = await instance.transfer(accounts[0],818,{from:accounts[1]});

await instance.approve(accounts[94], 23468, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[94], 1000, {from: accounts[94]});

await instance.batchTransfer([accounts[41],accounts[23]],5310,{from:accounts[0]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[5],974,{from:accounts[0]});

await instance.approve(accounts[82], 36654, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

await instance.batchTransfer([accounts[3],accounts[25],accounts[83],accounts[59],accounts[91]],8278,{from:accounts[0]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[2],647,{from:accounts[1]});

await instance.approve(accounts[179], 24164, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[179], 1000, {from: accounts[179]});

await instance.batchTransfer([accounts[57],accounts[58],accounts[40],accounts[70],accounts[3]],9201,{from:accounts[0]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[2],437,{from:accounts[5]});

await instance.approve(accounts[16], 21489, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[16], 1000, {from: accounts[16]});

await instance.batchTransfer([accounts[38],accounts[10]],7073,{from:accounts[0]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[72]],6115,{from:accounts[0]});

result = await instance.transfer(accounts[4],218,{from:accounts[2]});

await instance.approve(accounts[57], 39502, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[57], 1000, {from: accounts[57]});

});
});
