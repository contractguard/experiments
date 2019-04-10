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

await instance.approve(accounts[89], 21548, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[89], 1000, {from: accounts[89]});

result = await instance.transfer(accounts[4],439,{from:accounts[4]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[21],accounts[75]],7873,{from:accounts[0]});

});
it('test 1',async() => {

await instance.approve(accounts[88], 27927, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[88], 1000, {from: accounts[88]});

result = await instance.transfer(accounts[5],773,{from:accounts[2]});
await instance.batchTransfer([accounts[78],accounts[75],accounts[82],accounts[64],accounts[73],accounts[42],accounts[100],accounts[80],accounts[86],accounts[49]],3967,{from:accounts[0]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[37]],5336,{from:accounts[0]});


await instance.approve(accounts[125], 27231, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

result = await instance.transfer(accounts[1],325,{from:accounts[5]});
});
it('test 3',async() => {
result = await instance.transfer(accounts[3],858,{from:accounts[1]});
await instance.batchTransfer([accounts[74],accounts[7]],3235,{from:accounts[0]});


await instance.approve(accounts[7], 27743, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[7], 1000, {from: accounts[7]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[71],accounts[37],accounts[44],accounts[2],accounts[60],accounts[58],accounts[34]],6652,{from:accounts[0]});

result = await instance.transfer(accounts[1],709,{from:accounts[2]});

await instance.approve(accounts[51], 30822, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[51], 1000, {from: accounts[51]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[70],accounts[89],accounts[60],accounts[73],accounts[50],accounts[97],accounts[91],accounts[18]],7087,{from:accounts[0]});

result = await instance.transfer(accounts[0],440,{from:accounts[2]});

await instance.approve(accounts[61], 38662, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[4],560,{from:accounts[5]});
await instance.batchTransfer([accounts[16],accounts[83],accounts[35],accounts[28],accounts[81],accounts[72],accounts[22],accounts[98],accounts[67],accounts[28]],3532,{from:accounts[0]});


await instance.approve(accounts[160], 21453, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[160], 1000, {from: accounts[160]});

});
it('test 7',async() => {

await instance.approve(accounts[148], 23580, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[148], 1000, {from: accounts[148]});

await instance.batchTransfer([accounts[10],accounts[63],accounts[35],accounts[24],accounts[14],accounts[87],accounts[35],accounts[14]],3043,{from:accounts[0]});

result = await instance.transfer(accounts[2],380,{from:accounts[5]});
});
it('test 8',async() => {

await instance.approve(accounts[67], 39980, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

result = await instance.transfer(accounts[4],483,{from:accounts[1]});
await instance.batchTransfer([accounts[29],accounts[46],accounts[72],accounts[66],accounts[62],accounts[27],accounts[34],accounts[37],accounts[62]],9433,{from:accounts[0]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[59],accounts[14]],4100,{from:accounts[0]});

result = await instance.transfer(accounts[3],555,{from:accounts[2]});

await instance.approve(accounts[130], 32780, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[130], 1000, {from: accounts[130]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[2],691,{from:accounts[5]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[16], 36803, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[16], 1000, {from: accounts[16]});

await instance.batchTransfer([accounts[94],accounts[28],accounts[88],accounts[31],accounts[77],accounts[94],accounts[42]],3601,{from:accounts[0]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[0],541,{from:accounts[2]});

await instance.approve(accounts[104], 29836, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[104], 1000, {from: accounts[104]});

await instance.batchTransfer([accounts[16],accounts[16],accounts[81],accounts[36],accounts[58],accounts[66],accounts[24],accounts[50],accounts[83]],5607,{from:accounts[0]});

});
it('test 12',async() => {

await instance.approve(accounts[60], 29511, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[60], 1000, {from: accounts[60]});

await instance.batchTransfer([accounts[86],accounts[22],accounts[2],accounts[27],accounts[100]],5674,{from:accounts[0]});

result = await instance.transfer(accounts[4],928,{from:accounts[5]});
});
it('test 13',async() => {
await instance.batchTransfer([accounts[25],accounts[49]],7088,{from:accounts[0]});


await instance.approve(accounts[179], 34203, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[179], 1000, {from: accounts[179]});

result = await instance.transfer(accounts[2],536,{from:accounts[1]});
});
it('test 14',async() => {

await instance.approve(accounts[200], 30371, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[200], 1000, {from: accounts[200]});

result = await instance.transfer(accounts[2],682,{from:accounts[2]});
await instance.batchTransfer([accounts[17],accounts[57],accounts[41],accounts[65]],2163,{from:accounts[0]});

});
it('test 15',async() => {

await instance.approve(accounts[109], 32190, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[109], 1000, {from: accounts[109]});

result = await instance.transfer(accounts[1],621,{from:accounts[5]});
await instance.batchTransfer([accounts[63],accounts[36],accounts[61]],8669,{from:accounts[0]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[21],accounts[78],accounts[48],accounts[27],accounts[97],accounts[27],accounts[29]],6137,{from:accounts[0]});

result = await instance.transfer(accounts[0],536,{from:accounts[3]});

await instance.approve(accounts[38], 25791, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[38], 1000, {from: accounts[38]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[3],514,{from:accounts[2]});
await instance.batchTransfer([accounts[67],accounts[63],accounts[53],accounts[12]],4308,{from:accounts[0]});


await instance.approve(accounts[79], 32635, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[79], 1000, {from: accounts[79]});

});
it('test 18',async() => {

await instance.approve(accounts[79], 23466, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[79], 1000, {from: accounts[79]});

await instance.batchTransfer([accounts[49],accounts[52],accounts[40]],2098,{from:accounts[0]});

result = await instance.transfer(accounts[0],439,{from:accounts[3]});
});
it('test 19',async() => {
await instance.batchTransfer([accounts[35],accounts[46],accounts[73],accounts[63],accounts[1],accounts[71],accounts[91],accounts[31],accounts[48]],7433,{from:accounts[0]});


await instance.approve(accounts[50], 23373, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[50], 1000, {from: accounts[50]});

result = await instance.transfer(accounts[1],471,{from:accounts[2]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[5],683,{from:accounts[3]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[87], 27493, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[87], 1000, {from: accounts[87]});

await instance.batchTransfer([accounts[85],accounts[44],accounts[92],accounts[6],accounts[33],accounts[4],accounts[17],accounts[3],accounts[69],accounts[9]],4324,{from:accounts[0]});

});
it('test 21',async() => {
await instance.batchTransfer([accounts[61],accounts[79],accounts[80],accounts[74],accounts[27],accounts[20],accounts[9],accounts[37],accounts[82],accounts[24]],1741,{from:accounts[0]});

result = await instance.transfer(accounts[3],685,{from:accounts[5]});

await instance.approve(accounts[107], 34225, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 22',async() => {
await instance.batchTransfer([accounts[11]],7110,{from:accounts[0]});


await instance.approve(accounts[17], 28844, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[17], 1000, {from: accounts[17]});

result = await instance.transfer(accounts[5],809,{from:accounts[0]});
});
it('test 23',async() => {

await instance.approve(accounts[105], 28095, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[105], 1000, {from: accounts[105]});

await instance.batchTransfer([accounts[74],accounts[3],accounts[40],accounts[14],accounts[40]],6721,{from:accounts[0]});

result = await instance.transfer(accounts[4],863,{from:accounts[3]});
});
it('test 24',async() => {
await instance.batchTransfer([accounts[95],accounts[5],accounts[78],accounts[52],accounts[77],accounts[87],accounts[14]],5141,{from:accounts[0]});


await instance.approve(accounts[120], 22621, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

result = await instance.transfer(accounts[3],993,{from:accounts[3]});
});
it('test 25',async() => {
result = await instance.transfer(accounts[2],447,{from:accounts[2]});

await instance.approve(accounts[16], 23903, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[16], 1000, {from: accounts[16]});

await instance.batchTransfer([accounts[74],accounts[76],accounts[1],accounts[9],accounts[44],accounts[11],accounts[59],accounts[66],accounts[11]],4994,{from:accounts[0]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[0],488,{from:accounts[1]});
await instance.batchTransfer([accounts[54],accounts[88],accounts[37],accounts[70],accounts[66]],7296,{from:accounts[0]});


await instance.approve(accounts[9], 38949, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[1],743,{from:accounts[3]});

await instance.approve(accounts[176], 24705, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

await instance.batchTransfer([accounts[94],accounts[19],accounts[44],accounts[30],accounts[30],accounts[73],accounts[81],accounts[57],accounts[81],accounts[55]],2294,{from:accounts[0]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[65],accounts[93],accounts[23],accounts[92]],7798,{from:accounts[0]});


await instance.approve(accounts[26], 31588, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[26], 1000, {from: accounts[26]});

result = await instance.transfer(accounts[2],392,{from:accounts[5]});
});
it('test 29',async() => {
await instance.batchTransfer([accounts[95],accounts[49],accounts[54],accounts[81],accounts[17]],2630,{from:accounts[0]});

result = await instance.transfer(accounts[2],920,{from:accounts[5]});

await instance.approve(accounts[98], 24842, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[98], 1000, {from: accounts[98]});

});
});
