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

await instance.approve(accounts[27], 26530, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

result = await instance.transfer(accounts[2],580,{from:accounts[3]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[33],accounts[76],accounts[74]],2592,{from:accounts[0]});

});
it('test 1',async() => {

await instance.approve(accounts[144], 24915, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

await instance.batchTransfer([accounts[81],accounts[88]],4002,{from:accounts[0]});

result = await instance.transfer(accounts[1],220,{from:accounts[4]});
});
it('test 2',async() => {
await instance.batchTransfer([accounts[61],accounts[5],accounts[59],accounts[67]],1124,{from:accounts[0]});


await instance.approve(accounts[155], 24231, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[155], 1000, {from: accounts[155]});

result = await instance.transfer(accounts[3],769,{from:accounts[3]});
});
it('test 3',async() => {

await instance.approve(accounts[195], 27438, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[195], 1000, {from: accounts[195]});

result = await instance.transfer(accounts[4],609,{from:accounts[1]});
await instance.batchTransfer([accounts[24],accounts[74],accounts[80],accounts[78],accounts[13],accounts[82]],6881,{from:accounts[0]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[75],accounts[91],accounts[20],accounts[47],accounts[25]],6701,{from:accounts[0]});


await instance.approve(accounts[15], 39905, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[15], 1000, {from: accounts[15]});

result = await instance.transfer(accounts[2],345,{from:accounts[0]});
});
it('test 5',async() => {
result = await instance.transfer(accounts[0],847,{from:accounts[1]});

await instance.approve(accounts[143], 25818, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[143], 1000, {from: accounts[143]});

await instance.batchTransfer([accounts[55],accounts[57],accounts[87],accounts[1],accounts[25],accounts[66],accounts[99],accounts[41],accounts[97]],5426,{from:accounts[0]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[89],accounts[36],accounts[82]],4461,{from:accounts[0]});


await instance.approve(accounts[66], 27479, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[66], 1000, {from: accounts[66]});

result = await instance.transfer(accounts[4],347,{from:accounts[3]});
});
it('test 7',async() => {

await instance.approve(accounts[173], 30972, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[173], 1000, {from: accounts[173]});

result = await instance.transfer(accounts[3],870,{from:accounts[2]});
await instance.batchTransfer([accounts[17],accounts[22],accounts[77],accounts[53],accounts[30],accounts[41],accounts[35],accounts[81],accounts[81]],2761,{from:accounts[0]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[79],accounts[17],accounts[66],accounts[20],accounts[59],accounts[49]],7363,{from:accounts[0]});

result = await instance.transfer(accounts[2],779,{from:accounts[2]});

await instance.approve(accounts[144], 24224, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[1],909,{from:accounts[1]});
await instance.batchTransfer([accounts[2],accounts[59],accounts[87],accounts[85],accounts[84],accounts[97],accounts[31],accounts[6]],2346,{from:accounts[0]});


await instance.approve(accounts[34], 27214, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

});
it('test 10',async() => {

await instance.approve(accounts[31], 30253, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[31], 1000, {from: accounts[31]});

result = await instance.transfer(accounts[3],984,{from:accounts[5]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[1]],9049,{from:accounts[0]});

});
it('test 11',async() => {

await instance.approve(accounts[122], 22486, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[122], 1000, {from: accounts[122]});

result = await instance.transfer(accounts[3],539,{from:accounts[3]});
await instance.batchTransfer([accounts[64],accounts[76],accounts[6],accounts[4],accounts[82],accounts[23],accounts[43],accounts[45]],1940,{from:accounts[0]});

});
it('test 12',async() => {
result = await instance.transfer(accounts[3],207,{from:accounts[0]});

await instance.approve(accounts[32], 29211, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[32], 1000, {from: accounts[32]});

await instance.batchTransfer([accounts[25],accounts[67]],6292,{from:accounts[0]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[42],accounts[27],accounts[84],accounts[35],accounts[77],accounts[16]],3204,{from:accounts[0]});


await instance.approve(accounts[130], 32526, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[130], 1000, {from: accounts[130]});

result = await instance.transfer(accounts[5],314,{from:accounts[4]});
});
it('test 14',async() => {
await instance.batchTransfer([accounts[4],accounts[95],accounts[89],accounts[44]],6523,{from:accounts[0]});

result = await instance.transfer(accounts[3],896,{from:accounts[0]});

await instance.approve(accounts[89], 29435, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[89], 1000, {from: accounts[89]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[2],532,{from:accounts[3]});

await instance.approve(accounts[14], 28158, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[14], 1000, {from: accounts[14]});

await instance.batchTransfer([accounts[93],accounts[52]],6097,{from:accounts[0]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[50],accounts[35],accounts[26],accounts[73],accounts[68],accounts[92]],6570,{from:accounts[0]});

result = await instance.transfer(accounts[3],582,{from:accounts[3]});

await instance.approve(accounts[144], 34484, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[87],accounts[91]],2747,{from:accounts[0]});

result = await instance.transfer(accounts[0],224,{from:accounts[5]});

await instance.approve(accounts[140], 28616, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[1],704,{from:accounts[0]});

await instance.approve(accounts[173], 24520, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[173], 1000, {from: accounts[173]});

await instance.batchTransfer([accounts[30],accounts[12],accounts[96],accounts[35],accounts[68]],4810,{from:accounts[0]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[4],773,{from:accounts[2]});

await instance.approve(accounts[166], 31949, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[166], 1000, {from: accounts[166]});

await instance.batchTransfer([accounts[91],accounts[50],accounts[35],accounts[8],accounts[76],accounts[79],accounts[30],accounts[20],accounts[87]],2684,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[60],accounts[48]],9620,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],789,{from:accounts[4]});

await instance.approve(accounts[54], 30692, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[3],877,{from:accounts[5]});

await instance.approve(accounts[195], 32978, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[195], 1000, {from: accounts[195]});

await instance.batchTransfer([accounts[5],accounts[24],accounts[36]],8165,{from:accounts[0]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[77],accounts[5],accounts[94],accounts[80],accounts[76],accounts[56],accounts[59],accounts[80],accounts[56],accounts[5]],6521,{from:accounts[0]});

result = await instance.transfer(accounts[3],805,{from:accounts[0]});

await instance.approve(accounts[90], 21540, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[90], 1000, {from: accounts[90]});

});
it('test 23',async() => {

await instance.approve(accounts[143], 39895, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[143], 1000, {from: accounts[143]});

await instance.batchTransfer([accounts[99],accounts[36]],3749,{from:accounts[0]});

result = await instance.transfer(accounts[4],931,{from:accounts[4]});
});
it('test 24',async() => {
result = await instance.transfer(accounts[3],909,{from:accounts[0]});
await instance.batchTransfer([accounts[2],accounts[82],accounts[36],accounts[49]],9934,{from:accounts[0]});


await instance.approve(accounts[171], 20470, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[171], 1000, {from: accounts[171]});

});
it('test 25',async() => {
await instance.batchTransfer([accounts[33],accounts[53],accounts[21],accounts[75],accounts[91]],8756,{from:accounts[0]});

result = await instance.transfer(accounts[2],658,{from:accounts[0]});

await instance.approve(accounts[66], 21213, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[66], 1000, {from: accounts[66]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[0],824,{from:accounts[3]});
await instance.batchTransfer([accounts[60],accounts[26],accounts[2],accounts[80],accounts[79],accounts[47],accounts[71]],1488,{from:accounts[0]});


await instance.approve(accounts[21], 28584, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[4],378,{from:accounts[2]});

await instance.approve(accounts[197], 35643, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[197], 1000, {from: accounts[197]});

await instance.batchTransfer([accounts[21]],3071,{from:accounts[0]});

});
it('test 28',async() => {

await instance.approve(accounts[194], 26891, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[194], 1000, {from: accounts[194]});

result = await instance.transfer(accounts[5],467,{from:accounts[4]});
await instance.batchTransfer([accounts[2],accounts[60],accounts[18]],6107,{from:accounts[0]});

});
it('test 29',async() => {

await instance.approve(accounts[39], 21494, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

result = await instance.transfer(accounts[4],802,{from:accounts[0]});
await instance.batchTransfer([accounts[45],accounts[80],accounts[55]],8406,{from:accounts[0]});

});
});
