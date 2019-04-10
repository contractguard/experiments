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

await instance.approve(accounts[150], 25228, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[150], 1000, {from: accounts[150]});

await instance.batchTransfer([accounts[76],accounts[28]],4083,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[5],727,{from:accounts[2]});
});
it('test 1',async() => {
result = await instance.transfer(accounts[2],446,{from:accounts[0]});
await instance.batchTransfer([accounts[60],accounts[20],accounts[35],accounts[42],accounts[64],accounts[66]],3808,{from:accounts[0]});


await instance.approve(accounts[107], 24779, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

});
it('test 2',async() => {

await instance.approve(accounts[115], 29335, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

await instance.batchTransfer([accounts[72],accounts[19],accounts[96],accounts[10],accounts[95],accounts[48],accounts[71],accounts[5],accounts[43],accounts[49]],2088,{from:accounts[0]});

result = await instance.transfer(accounts[3],514,{from:accounts[0]});
});
it('test 3',async() => {

await instance.approve(accounts[186], 26220, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[186], 1000, {from: accounts[186]});

await instance.batchTransfer([accounts[38],accounts[56],accounts[33]],7504,{from:accounts[0]});

result = await instance.transfer(accounts[2],763,{from:accounts[5]});
});
it('test 4',async() => {
await instance.batchTransfer([accounts[71],accounts[18],accounts[65],accounts[91]],1456,{from:accounts[0]});

result = await instance.transfer(accounts[4],742,{from:accounts[2]});

await instance.approve(accounts[135], 35688, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[36],accounts[88],accounts[64]],2314,{from:accounts[0]});

result = await instance.transfer(accounts[3],820,{from:accounts[4]});

await instance.approve(accounts[73], 22645, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[73], 1000, {from: accounts[73]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[3],218,{from:accounts[0]});
await instance.batchTransfer([accounts[24],accounts[97],accounts[56],accounts[77],accounts[58]],1567,{from:accounts[0]});


await instance.approve(accounts[32], 20042, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[32], 1000, {from: accounts[32]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[1],665,{from:accounts[0]});

await instance.approve(accounts[55], 39570, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

await instance.batchTransfer([accounts[80],accounts[20],accounts[20],accounts[38],accounts[33],accounts[92],accounts[27],accounts[57],accounts[24]],7682,{from:accounts[0]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[4],969,{from:accounts[4]});
await instance.batchTransfer([accounts[21],accounts[65],accounts[17],accounts[86],accounts[67],accounts[12],accounts[80],accounts[85],accounts[63],accounts[33]],2918,{from:accounts[0]});


await instance.approve(accounts[52], 24441, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[52], 1000, {from: accounts[52]});

});
it('test 9',async() => {

await instance.approve(accounts[99], 22354, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[99], 1000, {from: accounts[99]});

result = await instance.transfer(accounts[3],436,{from:accounts[0]});
await instance.batchTransfer([accounts[66],accounts[45],accounts[35],accounts[24],accounts[90]],2045,{from:accounts[0]});

});
it('test 10',async() => {

await instance.approve(accounts[183], 35813, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[183], 1000, {from: accounts[183]});

await instance.batchTransfer([accounts[36],accounts[64],accounts[94]],5672,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[1],399,{from:accounts[4]});
});
it('test 11',async() => {
await instance.batchTransfer([accounts[42],accounts[23],accounts[48],accounts[64],accounts[23],accounts[50],accounts[26],accounts[41],accounts[50],accounts[16]],2305,{from:accounts[0]});

result = await instance.transfer(accounts[5],743,{from:accounts[0]});

await instance.approve(accounts[137], 28789, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

});
it('test 12',async() => {
result = await instance.transfer(accounts[3],315,{from:accounts[0]});
await instance.batchTransfer([accounts[26],accounts[10],accounts[92],accounts[40],accounts[13],accounts[70],accounts[22],accounts[2]],8609,{from:accounts[0]});


await instance.approve(accounts[19], 22505, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[5],401,{from:accounts[0]});
await instance.batchTransfer([accounts[66],accounts[62],accounts[79],accounts[58],accounts[2],accounts[21],accounts[89],accounts[45],accounts[74]],9918,{from:accounts[0]});


await instance.approve(accounts[147], 36144, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[147], 1000, {from: accounts[147]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[5],382,{from:accounts[2]});
await instance.batchTransfer([accounts[79],accounts[86]],4204,{from:accounts[0]});


await instance.approve(accounts[180], 32546, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[180], 1000, {from: accounts[180]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[84],accounts[50],accounts[18],accounts[14],accounts[48],accounts[87],accounts[25],accounts[36],accounts[15]],1003,{from:accounts[0]});

result = await instance.transfer(accounts[4],728,{from:accounts[5]});

await instance.approve(accounts[111], 27082, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[111], 1000, {from: accounts[111]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[5],938,{from:accounts[0]});
await instance.batchTransfer([accounts[90]],1881,{from:accounts[0]});


await instance.approve(accounts[121], 38199, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[12],accounts[99]],9853,{from:accounts[0]});


await instance.approve(accounts[31], 21530, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[31], 1000, {from: accounts[31]});

result = await instance.transfer(accounts[2],429,{from:accounts[4]});
});
it('test 18',async() => {
result = await instance.transfer(accounts[2],956,{from:accounts[0]});
await instance.batchTransfer([accounts[19],accounts[61]],8655,{from:accounts[0]});


await instance.approve(accounts[9], 26634, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[0],950,{from:accounts[3]});

await instance.approve(accounts[26], 21837, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[26], 1000, {from: accounts[26]});

await instance.batchTransfer([accounts[43],accounts[17],accounts[69],accounts[50],accounts[71],accounts[86],accounts[68],accounts[14]],7859,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[2],944,{from:accounts[3]});
await instance.batchTransfer([accounts[50],accounts[46],accounts[46],accounts[36]],6789,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[79], 31290, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[79], 1000, {from: accounts[79]});

});
it('test 21',async() => {
await instance.batchTransfer([accounts[93],accounts[81],accounts[23]],7389,{from:accounts[0]});

result = await instance.transfer(accounts[1],231,{from:accounts[4]});

await instance.approve(accounts[19], 31320, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[19],accounts[44],accounts[70],accounts[91],accounts[93],accounts[35],accounts[8],accounts[48],accounts[12],accounts[93]],9829,{from:accounts[0]});

result = await instance.transfer(accounts[0],462,{from:accounts[0]});

await instance.approve(accounts[187], 33464, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[187], 1000, {from: accounts[187]});

});
it('test 23',async() => {
result = await instance.transfer(accounts[4],774,{from:accounts[1]});

await instance.approve(accounts[192], 26548, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[192], 1000, {from: accounts[192]});

await instance.batchTransfer([accounts[41],accounts[6],accounts[53],accounts[37],accounts[72],accounts[81],accounts[63],accounts[40]],5047,{from:accounts[0]});

});
it('test 24',async() => {

await instance.approve(accounts[50], 27409, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[50], 1000, {from: accounts[50]});

await instance.batchTransfer([accounts[19],accounts[94],accounts[64],accounts[37],accounts[96]],7331,{from:accounts[0]});

result = await instance.transfer(accounts[2],725,{from:accounts[1]});
});
it('test 25',async() => {
await instance.batchTransfer([accounts[54],accounts[45],accounts[65],accounts[45],accounts[52],accounts[50],accounts[82]],1353,{from:accounts[0]});


await instance.approve(accounts[98], 24953, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[98], 1000, {from: accounts[98]});

result = await instance.transfer(accounts[1],592,{from:accounts[2]});
});
it('test 26',async() => {

await instance.approve(accounts[129], 36093, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

result = await instance.transfer(accounts[4],945,{from:accounts[4]});
await instance.batchTransfer([accounts[23],accounts[15],accounts[22],accounts[13],accounts[37]],5206,{from:accounts[0]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[0],520,{from:accounts[1]});
await instance.batchTransfer([accounts[72],accounts[41],accounts[28],accounts[26],accounts[45],accounts[4],accounts[8]],5667,{from:accounts[0]});


await instance.approve(accounts[140], 31189, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[3],907,{from:accounts[3]});

await instance.approve(accounts[142], 20004, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[142], 1000, {from: accounts[142]});

await instance.batchTransfer([accounts[81],accounts[100]],4938,{from:accounts[0]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[3],746,{from:accounts[0]});
await instance.batchTransfer([accounts[17],accounts[53],accounts[6],accounts[86],accounts[89]],3506,{from:accounts[0]});


await instance.approve(accounts[195], 36455, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[195], 1000, {from: accounts[195]});

});
});
