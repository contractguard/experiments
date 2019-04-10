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
result = await instance.transfer(accounts[5],540,{from:accounts[3]});
await instance.batchTransfer([accounts[33],accounts[49]],8466,{from:accounts[0]});


await instance.approve(accounts[83], 37165, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {

await instance.approve(accounts[200], 33944, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[200], 1000, {from: accounts[200]});

result = await instance.transfer(accounts[5],843,{from:accounts[3]});
await instance.batchTransfer([accounts[93],accounts[79],accounts[96],accounts[54]],4369,{from:accounts[0]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[27],accounts[41],accounts[43],accounts[64]],9562,{from:accounts[0]});

result = await instance.transfer(accounts[1],400,{from:accounts[0]});

await instance.approve(accounts[111], 23361, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[111], 1000, {from: accounts[111]});

});
it('test 3',async() => {

await instance.approve(accounts[41], 36648, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

result = await instance.transfer(accounts[1],506,{from:accounts[4]});
await instance.batchTransfer([accounts[49],accounts[68],accounts[33],accounts[4],accounts[31],accounts[62],accounts[3],accounts[71]],2509,{from:accounts[0]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[93],accounts[98],accounts[19]],2687,{from:accounts[0]});

result = await instance.transfer(accounts[4],807,{from:accounts[0]});

await instance.approve(accounts[99], 38840, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[99], 1000, {from: accounts[99]});

});
it('test 5',async() => {
result = await instance.transfer(accounts[0],426,{from:accounts[1]});
await instance.batchTransfer([accounts[35],accounts[84],accounts[14],accounts[7]],4122,{from:accounts[0]});


await instance.approve(accounts[131], 27587, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[131], 1000, {from: accounts[131]});

});
it('test 6',async() => {

await instance.approve(accounts[127], 31675, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[127], 1000, {from: accounts[127]});

await instance.batchTransfer([accounts[50],accounts[79],accounts[17],accounts[39],accounts[44],accounts[39],accounts[9],accounts[29]],8293,{from:accounts[0]});

result = await instance.transfer(accounts[1],490,{from:accounts[2]});
});
it('test 7',async() => {
result = await instance.transfer(accounts[0],463,{from:accounts[1]});
await instance.batchTransfer([accounts[18],accounts[50],accounts[44],accounts[53],accounts[74],accounts[5],accounts[79]],6033,{from:accounts[0]});


await instance.approve(accounts[178], 22920, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

});
it('test 8',async() => {

await instance.approve(accounts[15], 35828, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[15], 1000, {from: accounts[15]});

await instance.batchTransfer([accounts[87],accounts[63]],5751,{from:accounts[0]});

result = await instance.transfer(accounts[3],279,{from:accounts[3]});
});
it('test 9',async() => {
await instance.batchTransfer([accounts[19],accounts[23]],2831,{from:accounts[0]});

result = await instance.transfer(accounts[3],372,{from:accounts[2]});

await instance.approve(accounts[43], 24655, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[43], 1000, {from: accounts[43]});

});
it('test 10',async() => {
await instance.batchTransfer([accounts[45],accounts[35],accounts[27],accounts[67]],2592,{from:accounts[0]});


await instance.approve(accounts[120], 21277, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[4],580,{from:accounts[0]});
});
it('test 11',async() => {
await instance.batchTransfer([accounts[85],accounts[43],accounts[3],accounts[97],accounts[7],accounts[55],accounts[46]],9735,{from:accounts[0]});


await instance.approve(accounts[11], 33681, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[11], 1000, {from: accounts[11]});

result = await instance.transfer(accounts[3],213,{from:accounts[0]});
});
it('test 12',async() => {
result = await instance.transfer(accounts[3],879,{from:accounts[2]});

await instance.approve(accounts[40], 22053, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[40], 1000, {from: accounts[40]});

await instance.batchTransfer([accounts[9],accounts[100]],7989,{from:accounts[0]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[39],accounts[92]],4432,{from:accounts[0]});

result = await instance.transfer(accounts[0],693,{from:accounts[4]});

await instance.approve(accounts[30], 27278, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[30], 1000, {from: accounts[30]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[54],accounts[42]],6715,{from:accounts[0]});

result = await instance.transfer(accounts[5],679,{from:accounts[0]});

await instance.approve(accounts[199], 30683, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[199], 1000, {from: accounts[199]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[2],484,{from:accounts[2]});

await instance.approve(accounts[105], 34978, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[105], 1000, {from: accounts[105]});

await instance.batchTransfer([accounts[6],accounts[38],accounts[50]],3408,{from:accounts[0]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[5],656,{from:accounts[1]});
await instance.batchTransfer([accounts[52],accounts[6],accounts[58],accounts[99],accounts[9]],5254,{from:accounts[0]});


await instance.approve(accounts[191], 20082, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[191], 1000, {from: accounts[191]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[33],accounts[72],accounts[99]],3979,{from:accounts[0]});

result = await instance.transfer(accounts[5],964,{from:accounts[1]});

await instance.approve(accounts[8], 22049, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[82],accounts[23],accounts[97],accounts[51],accounts[7],accounts[44],accounts[27],accounts[15],accounts[24],accounts[40]],7955,{from:accounts[0]});

result = await instance.transfer(accounts[4],314,{from:accounts[3]});

await instance.approve(accounts[116], 22520, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[116], 1000, {from: accounts[116]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[52]],5034,{from:accounts[0]});

result = await instance.transfer(accounts[2],374,{from:accounts[5]});

await instance.approve(accounts[13], 27130, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[13], 1000, {from: accounts[13]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[62],accounts[26],accounts[42],accounts[48],accounts[86],accounts[80],accounts[52],accounts[62]],1320,{from:accounts[0]});


await instance.approve(accounts[194], 32205, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[194], 1000, {from: accounts[194]});

result = await instance.transfer(accounts[1],206,{from:accounts[4]});
});
it('test 21',async() => {
await instance.batchTransfer([accounts[48]],1056,{from:accounts[0]});

result = await instance.transfer(accounts[0],219,{from:accounts[0]});

await instance.approve(accounts[64], 37854, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[64], 1000, {from: accounts[64]});

});
it('test 22',async() => {

await instance.approve(accounts[3], 21972, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[3], 1000, {from: accounts[3]});

await instance.batchTransfer([accounts[51],accounts[39],accounts[32],accounts[79],accounts[48],accounts[82],accounts[3]],8818,{from:accounts[0]});

result = await instance.transfer(accounts[4],800,{from:accounts[1]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {
await instance.batchTransfer([accounts[98],accounts[5],accounts[19],accounts[99],accounts[32],accounts[63],accounts[22],accounts[46],accounts[51],accounts[100]],6344,{from:accounts[0]});


await instance.approve(accounts[193], 28130, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[193], 1000, {from: accounts[193]});

result = await instance.transfer(accounts[0],719,{from:accounts[0]});
});
it('test 24',async() => {
await instance.batchTransfer([accounts[64]],3822,{from:accounts[0]});


await instance.approve(accounts[94], 22255, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[94], 1000, {from: accounts[94]});

result = await instance.transfer(accounts[0],591,{from:accounts[3]});
});
it('test 25',async() => {
await instance.batchTransfer([accounts[86],accounts[51],accounts[58],accounts[46],accounts[46],accounts[50],accounts[56],accounts[81],accounts[79]],7985,{from:accounts[0]});


await instance.approve(accounts[18], 34513, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

result = await instance.transfer(accounts[0],336,{from:accounts[0]});
});
it('test 26',async() => {

await instance.approve(accounts[191], 26408, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[191], 1000, {from: accounts[191]});

result = await instance.transfer(accounts[1],244,{from:accounts[3]});
await instance.batchTransfer([accounts[18]],1717,{from:accounts[0]});

});
it('test 27',async() => {
await instance.batchTransfer([accounts[94],accounts[37],accounts[16],accounts[32],accounts[16],accounts[60]],9301,{from:accounts[0]});

result = await instance.transfer(accounts[3],413,{from:accounts[4]});

await instance.approve(accounts[154], 21694, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

});
it('test 28',async() => {

await instance.approve(accounts[177], 32932, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[177], 1000, {from: accounts[177]});

await instance.batchTransfer([accounts[60],accounts[80],accounts[69],accounts[46]],5199,{from:accounts[0]});

result = await instance.transfer(accounts[5],634,{from:accounts[1]});
});
it('test 29',async() => {
await instance.batchTransfer([accounts[72],accounts[61]],2157,{from:accounts[0]});


await instance.approve(accounts[193], 37271, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[193], 1000, {from: accounts[193]});

result = await instance.transfer(accounts[4],507,{from:accounts[0]});
});
});
