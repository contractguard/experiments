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
result = await instance.transfer(accounts[4],542,{from:accounts[5]});
await instance.batchTransfer([accounts[60],accounts[58]],1346,{from:accounts[0]});


await instance.approve(accounts[36], 32373, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[36], 1000, {from: accounts[36]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[3],239,{from:accounts[3]});
await instance.batchTransfer([accounts[15],accounts[27],accounts[81],accounts[66],accounts[87],accounts[19],accounts[15],accounts[66]],8720,{from:accounts[0]});


await instance.approve(accounts[144], 39133, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[58],accounts[54],accounts[26],accounts[95]],3339,{from:accounts[0]});


await instance.approve(accounts[148], 26932, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[148], 1000, {from: accounts[148]});

result = await instance.transfer(accounts[2],839,{from:accounts[3]});
});
it('test 3',async() => {
result = await instance.transfer(accounts[0],960,{from:accounts[3]});

await instance.approve(accounts[162], 21695, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[162], 1000, {from: accounts[162]});

await instance.batchTransfer([accounts[25],accounts[11],accounts[32],accounts[88],accounts[91],accounts[19],accounts[14]],5750,{from:accounts[0]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[8],accounts[75]],5950,{from:accounts[0]});

result = await instance.transfer(accounts[5],770,{from:accounts[3]});

await instance.approve(accounts[195], 27376, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[195], 1000, {from: accounts[195]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[87],accounts[10],accounts[22],accounts[34],accounts[85],accounts[27],accounts[58],accounts[18]],3303,{from:accounts[0]});

result = await instance.transfer(accounts[4],946,{from:accounts[0]});

await instance.approve(accounts[156], 25637, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[156], 1000, {from: accounts[156]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[10],accounts[94],accounts[16],accounts[3],accounts[69],accounts[84],accounts[4]],6869,{from:accounts[0]});


await instance.approve(accounts[68], 22541, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[68], 1000, {from: accounts[68]});

result = await instance.transfer(accounts[4],667,{from:accounts[1]});
});
it('test 7',async() => {
await instance.batchTransfer([accounts[25],accounts[59],accounts[44]],7841,{from:accounts[0]});


await instance.approve(accounts[15], 34445, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[15], 1000, {from: accounts[15]});

result = await instance.transfer(accounts[3],250,{from:accounts[0]});
});
it('test 8',async() => {
await instance.batchTransfer([accounts[28],accounts[57],accounts[72],accounts[3],accounts[56]],9957,{from:accounts[0]});

result = await instance.transfer(accounts[1],550,{from:accounts[1]});

await instance.approve(accounts[120], 33367, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

});
it('test 9',async() => {

await instance.approve(accounts[186], 26065, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[186], 1000, {from: accounts[186]});

await instance.batchTransfer([accounts[51],accounts[94],accounts[47],accounts[90]],8046,{from:accounts[0]});

result = await instance.transfer(accounts[3],738,{from:accounts[3]});
});
it('test 10',async() => {

await instance.approve(accounts[115], 30444, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

await instance.batchTransfer([accounts[86],accounts[55],accounts[81],accounts[65],accounts[18],accounts[80],accounts[48]],5995,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],681,{from:accounts[2]});
});
it('test 11',async() => {
await instance.batchTransfer([accounts[23],accounts[13],accounts[81],accounts[15]],3466,{from:accounts[0]});

result = await instance.transfer(accounts[4],352,{from:accounts[0]});

await instance.approve(accounts[74], 29390, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[74], 1000, {from: accounts[74]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[25]],8437,{from:accounts[0]});

result = await instance.transfer(accounts[0],631,{from:accounts[0]});

await instance.approve(accounts[40], 36178, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[40], 1000, {from: accounts[40]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[5],775,{from:accounts[0]});
await instance.batchTransfer([accounts[35],accounts[79]],8953,{from:accounts[0]});


await instance.approve(accounts[163], 33101, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[163], 1000, {from: accounts[163]});

});
it('test 14',async() => {

await instance.approve(accounts[166], 29813, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[166], 1000, {from: accounts[166]});

result = await instance.transfer(accounts[2],302,{from:accounts[3]});
await instance.batchTransfer([accounts[8],accounts[90],accounts[35],accounts[89],accounts[69],accounts[29],accounts[22],accounts[30],accounts[5]],2894,{from:accounts[0]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[5],931,{from:accounts[3]});
await instance.batchTransfer([accounts[23],accounts[13],accounts[12],accounts[50],accounts[17],accounts[17],accounts[91],accounts[73]],1316,{from:accounts[0]});


await instance.approve(accounts[174], 20814, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

});
it('test 16',async() => {

await instance.approve(accounts[19], 21226, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

await instance.batchTransfer([accounts[32],accounts[30],accounts[44],accounts[81],accounts[13],accounts[43]],9959,{from:accounts[0]});

result = await instance.transfer(accounts[1],619,{from:accounts[5]});
});
it('test 17',async() => {

await instance.approve(accounts[47], 35793, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[47], 1000, {from: accounts[47]});

await instance.batchTransfer([accounts[1],accounts[1],accounts[11],accounts[81]],8650,{from:accounts[0]});

result = await instance.transfer(accounts[1],674,{from:accounts[3]});
});
it('test 18',async() => {

await instance.approve(accounts[156], 34679, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[156], 1000, {from: accounts[156]});

await instance.batchTransfer([accounts[35]],8091,{from:accounts[0]});

result = await instance.transfer(accounts[3],762,{from:accounts[3]});
});
it('test 19',async() => {

await instance.approve(accounts[89], 36698, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[89], 1000, {from: accounts[89]});

await instance.batchTransfer([accounts[10],accounts[87],accounts[58],accounts[84],accounts[92],accounts[90]],7706,{from:accounts[0]});

result = await instance.transfer(accounts[2],591,{from:accounts[2]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[135], 21616, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

await instance.batchTransfer([accounts[84]],7606,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[2],798,{from:accounts[3]});
});
it('test 21',async() => {
await instance.batchTransfer([accounts[18],accounts[17],accounts[56],accounts[99],accounts[98],accounts[21],accounts[67],accounts[53],accounts[52],accounts[8]],5444,{from:accounts[0]});

result = await instance.transfer(accounts[1],502,{from:accounts[5]});

await instance.approve(accounts[130], 32196, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[130], 1000, {from: accounts[130]});

});
it('test 22',async() => {

await instance.approve(accounts[186], 36489, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[186], 1000, {from: accounts[186]});

await instance.batchTransfer([accounts[70]],2298,{from:accounts[0]});

result = await instance.transfer(accounts[5],247,{from:accounts[2]});
});
it('test 23',async() => {

await instance.approve(accounts[180], 32462, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[180], 1000, {from: accounts[180]});

result = await instance.transfer(accounts[4],492,{from:accounts[4]});
await instance.batchTransfer([accounts[6],accounts[56],accounts[53],accounts[90],accounts[33],accounts[79],accounts[29],accounts[76]],1128,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 24',async() => {
result = await instance.transfer(accounts[5],636,{from:accounts[5]});
await instance.batchTransfer([accounts[75],accounts[42],accounts[46],accounts[72]],7055,{from:accounts[0]});


await instance.approve(accounts[33], 39362, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

});
it('test 25',async() => {
result = await instance.transfer(accounts[0],446,{from:accounts[5]});

await instance.approve(accounts[75], 35395, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

await instance.batchTransfer([accounts[37],accounts[24],accounts[53],accounts[67],accounts[82]],1398,{from:accounts[0]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[4],247,{from:accounts[3]});
await instance.batchTransfer([accounts[40],accounts[20],accounts[90],accounts[8],accounts[71],accounts[11],accounts[41],accounts[100],accounts[45]],3626,{from:accounts[0]});


await instance.approve(accounts[150], 21962, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[150], 1000, {from: accounts[150]});

});
it('test 27',async() => {

await instance.approve(accounts[154], 27999, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

result = await instance.transfer(accounts[1],983,{from:accounts[2]});
await instance.batchTransfer([accounts[77],accounts[60],accounts[46],accounts[92],accounts[93],accounts[24],accounts[85]],5750,{from:accounts[0]});

});
it('test 28',async() => {

await instance.approve(accounts[96], 24732, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[96], 1000, {from: accounts[96]});

await instance.batchTransfer([accounts[8],accounts[44],accounts[42],accounts[64],accounts[84],accounts[14],accounts[21],accounts[82],accounts[17]],7891,{from:accounts[0]});

result = await instance.transfer(accounts[5],399,{from:accounts[5]});
});
it('test 29',async() => {
result = await instance.transfer(accounts[4],925,{from:accounts[2]});
await instance.batchTransfer([accounts[22],accounts[85]],8890,{from:accounts[0]});


await instance.approve(accounts[134], 25542, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[134], 1000, {from: accounts[134]});

});
});
