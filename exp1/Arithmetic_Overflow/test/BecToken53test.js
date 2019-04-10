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
result = await instance.transfer(accounts[1],772,{from:accounts[0]});

await instance.approve(accounts[115], 21406, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

await instance.batchTransfer([accounts[49],accounts[86],accounts[71],accounts[19],accounts[36],accounts[99],accounts[70],accounts[16],accounts[72],accounts[88]],9651,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[59],accounts[3],accounts[33],accounts[99],accounts[63],accounts[61]],7883,{from:accounts[0]});


await instance.approve(accounts[96], 27514, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[96], 1000, {from: accounts[96]});

result = await instance.transfer(accounts[0],798,{from:accounts[3]});
});
it('test 2',async() => {
result = await instance.transfer(accounts[4],781,{from:accounts[5]});

await instance.approve(accounts[54], 26281, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

await instance.batchTransfer([accounts[64]],7012,{from:accounts[0]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[5],350,{from:accounts[5]});

await instance.approve(accounts[16], 22945, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[16], 1000, {from: accounts[16]});

await instance.batchTransfer([accounts[73],accounts[34],accounts[93],accounts[27],accounts[52]],4898,{from:accounts[0]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[4],412,{from:accounts[3]});
await instance.batchTransfer([accounts[26],accounts[62],accounts[28],accounts[37],accounts[4],accounts[93],accounts[59],accounts[22],accounts[37],accounts[86]],7229,{from:accounts[0]});


await instance.approve(accounts[100], 24732, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[100], 1000, {from: accounts[100]});

});
it('test 5',async() => {

await instance.approve(accounts[87], 34217, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[87], 1000, {from: accounts[87]});

result = await instance.transfer(accounts[0],390,{from:accounts[4]});
await instance.batchTransfer([accounts[51],accounts[42],accounts[92],accounts[6],accounts[27],accounts[97],accounts[37]],7886,{from:accounts[0]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[37],accounts[10],accounts[72],accounts[70],accounts[49],accounts[73],accounts[74],accounts[50],accounts[92]],5222,{from:accounts[0]});

result = await instance.transfer(accounts[2],862,{from:accounts[4]});

await instance.approve(accounts[120], 20042, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

});
it('test 7',async() => {

await instance.approve(accounts[105], 36472, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[105], 1000, {from: accounts[105]});

result = await instance.transfer(accounts[2],430,{from:accounts[2]});
await instance.batchTransfer([accounts[30],accounts[72],accounts[64],accounts[54]],3470,{from:accounts[0]});

});
it('test 8',async() => {

await instance.approve(accounts[186], 32788, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[186], 1000, {from: accounts[186]});

result = await instance.transfer(accounts[5],648,{from:accounts[0]});
await instance.batchTransfer([accounts[1],accounts[84],accounts[7],accounts[13]],9900,{from:accounts[0]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[0],625,{from:accounts[2]});

await instance.approve(accounts[84], 33770, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[84], 1000, {from: accounts[84]});

await instance.batchTransfer([accounts[14],accounts[62]],4478,{from:accounts[0]});

});
it('test 10',async() => {

await instance.approve(accounts[127], 39023, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[127], 1000, {from: accounts[127]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[2],345,{from:accounts[3]});
await instance.batchTransfer([accounts[7],accounts[58],accounts[59],accounts[80],accounts[85]],3821,{from:accounts[0]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[4],932,{from:accounts[3]});

await instance.approve(accounts[187], 24732, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[187], 1000, {from: accounts[187]});

await instance.batchTransfer([accounts[28],accounts[44],accounts[96],accounts[89],accounts[96]],4861,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[71],accounts[64],accounts[71],accounts[83],accounts[16],accounts[30],accounts[41]],6797,{from:accounts[0]});

result = await instance.transfer(accounts[0],565,{from:accounts[4]});

await instance.approve(accounts[18], 29088, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[1],207,{from:accounts[1]});
await instance.batchTransfer([accounts[25],accounts[91],accounts[46],accounts[100],accounts[96]],5646,{from:accounts[0]});


await instance.approve(accounts[7], 28898, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[7], 1000, {from: accounts[7]});

});
it('test 14',async() => {

await instance.approve(accounts[165], 36247, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[165], 1000, {from: accounts[165]});

result = await instance.transfer(accounts[2],339,{from:accounts[2]});
await instance.batchTransfer([accounts[73],accounts[53],accounts[40]],1113,{from:accounts[0]});

});
it('test 15',async() => {

await instance.approve(accounts[100], 34174, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[100], 1000, {from: accounts[100]});

await instance.batchTransfer([accounts[26]],1124,{from:accounts[0]});

result = await instance.transfer(accounts[2],546,{from:accounts[4]});
});
it('test 16',async() => {

await instance.approve(accounts[22], 38010, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[22], 1000, {from: accounts[22]});

await instance.batchTransfer([accounts[70],accounts[69]],7739,{from:accounts[0]});

result = await instance.transfer(accounts[4],685,{from:accounts[2]});
});
it('test 17',async() => {
result = await instance.transfer(accounts[4],760,{from:accounts[5]});

await instance.approve(accounts[62], 29765, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[62], 1000, {from: accounts[62]});

await instance.batchTransfer([accounts[10],accounts[42],accounts[44],accounts[57],accounts[100],accounts[47],accounts[29]],4027,{from:accounts[0]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[4],408,{from:accounts[5]});

await instance.approve(accounts[180], 24482, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[180], 1000, {from: accounts[180]});

await instance.batchTransfer([accounts[28]],4181,{from:accounts[0]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[89],accounts[62],accounts[98],accounts[68],accounts[69]],8015,{from:accounts[0]});


await instance.approve(accounts[194], 38252, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[194], 1000, {from: accounts[194]});

result = await instance.transfer(accounts[0],318,{from:accounts[2]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[54],accounts[27],accounts[5],accounts[80],accounts[32],accounts[31]],6260,{from:accounts[0]});

result = await instance.transfer(accounts[0],382,{from:accounts[4]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[103], 26118, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[103], 1000, {from: accounts[103]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[1],262,{from:accounts[2]});

await instance.approve(accounts[75], 28171, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

await instance.batchTransfer([accounts[22],accounts[19],accounts[75],accounts[87],accounts[5],accounts[8]],1211,{from:accounts[0]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[93],accounts[2],accounts[3]],2210,{from:accounts[0]});

result = await instance.transfer(accounts[4],372,{from:accounts[4]});

await instance.approve(accounts[85], 30145, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[85], 1000, {from: accounts[85]});

});
it('test 23',async() => {

await instance.approve(accounts[164], 34320, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[164], 1000, {from: accounts[164]});

result = await instance.transfer(accounts[0],506,{from:accounts[5]});
await instance.batchTransfer([accounts[52],accounts[13]],7750,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 24',async() => {
await instance.batchTransfer([accounts[3],accounts[54],accounts[35],accounts[41],accounts[35],accounts[58],accounts[98],accounts[27]],6925,{from:accounts[0]});


await instance.approve(accounts[165], 30583, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[165], 1000, {from: accounts[165]});

result = await instance.transfer(accounts[3],413,{from:accounts[3]});
});
it('test 25',async() => {
await instance.batchTransfer([accounts[29],accounts[82],accounts[71],accounts[56],accounts[84],accounts[8]],8569,{from:accounts[0]});


await instance.approve(accounts[18], 38083, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

result = await instance.transfer(accounts[1],290,{from:accounts[2]});
});
it('test 26',async() => {
await instance.batchTransfer([accounts[79]],2489,{from:accounts[0]});


await instance.approve(accounts[109], 36251, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[109], 1000, {from: accounts[109]});

result = await instance.transfer(accounts[0],232,{from:accounts[2]});
});
it('test 27',async() => {
await instance.batchTransfer([accounts[7],accounts[26],accounts[45],accounts[32],accounts[13],accounts[76]],2668,{from:accounts[0]});

result = await instance.transfer(accounts[5],808,{from:accounts[1]});

await instance.approve(accounts[147], 35775, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[147], 1000, {from: accounts[147]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[0],203,{from:accounts[0]});

await instance.approve(accounts[68], 25593, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[68], 1000, {from: accounts[68]});

await instance.batchTransfer([accounts[70],accounts[46],accounts[100],accounts[30]],1781,{from:accounts[0]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[3],410,{from:accounts[0]});
await instance.batchTransfer([accounts[65],accounts[33]],1171,{from:accounts[0]});


await instance.approve(accounts[39], 30467, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

});
});
