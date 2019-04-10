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

await instance.approve(accounts[6], 39506, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[6], 1000, {from: accounts[6]});

result = await instance.transfer(accounts[2],242,{from:accounts[0]});
await instance.batchTransfer([accounts[68]],8473,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[0],240,{from:accounts[2]});

await instance.approve(accounts[44], 39242, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

await instance.batchTransfer([accounts[30]],8100,{from:accounts[0]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[8],accounts[94],accounts[75],accounts[26],accounts[45],accounts[81],accounts[94],accounts[25]],2570,{from:accounts[0]});

result = await instance.transfer(accounts[5],450,{from:accounts[0]});

await instance.approve(accounts[169], 20816, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[169], 1000, {from: accounts[169]});

});
it('test 3',async() => {

await instance.approve(accounts[154], 21741, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

await instance.batchTransfer([accounts[49],accounts[34],accounts[8],accounts[65],accounts[59],accounts[38]],9412,{from:accounts[0]});

result = await instance.transfer(accounts[4],980,{from:accounts[2]});
});
it('test 4',async() => {
await instance.batchTransfer([accounts[56],accounts[77],accounts[31],accounts[52],accounts[2],accounts[78],accounts[78],accounts[95],accounts[70],accounts[65]],9291,{from:accounts[0]});

result = await instance.transfer(accounts[3],261,{from:accounts[4]});

await instance.approve(accounts[184], 32292, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[184], 1000, {from: accounts[184]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[25],accounts[93],accounts[29],accounts[28],accounts[1],accounts[2],accounts[40]],1672,{from:accounts[0]});

result = await instance.transfer(accounts[4],327,{from:accounts[2]});

await instance.approve(accounts[144], 34557, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[82],accounts[72],accounts[38]],5893,{from:accounts[0]});

result = await instance.transfer(accounts[4],919,{from:accounts[5]});

await instance.approve(accounts[150], 36233, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[150], 1000, {from: accounts[150]});

});
it('test 7',async() => {

await instance.approve(accounts[33], 33850, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

await instance.batchTransfer([accounts[93],accounts[12],accounts[43]],3073,{from:accounts[0]});

result = await instance.transfer(accounts[3],772,{from:accounts[2]});
});
it('test 8',async() => {
await instance.batchTransfer([accounts[62],accounts[33],accounts[42],accounts[12]],7740,{from:accounts[0]});

result = await instance.transfer(accounts[4],328,{from:accounts[3]});

await instance.approve(accounts[154], 36981, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[99],accounts[46],accounts[23],accounts[52],accounts[32]],1702,{from:accounts[0]});

result = await instance.transfer(accounts[0],279,{from:accounts[1]});

await instance.approve(accounts[2], 34761, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[1],868,{from:accounts[4]});
await instance.batchTransfer([accounts[18],accounts[97]],8551,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[35], 39814, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[33],accounts[8],accounts[75]],1028,{from:accounts[0]});


await instance.approve(accounts[56], 31082, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[56], 1000, {from: accounts[56]});

result = await instance.transfer(accounts[0],515,{from:accounts[1]});
});
it('test 12',async() => {

await instance.approve(accounts[190], 34886, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[190], 1000, {from: accounts[190]});

result = await instance.transfer(accounts[2],886,{from:accounts[5]});
await instance.batchTransfer([accounts[28],accounts[5],accounts[49],accounts[43],accounts[90],accounts[45],accounts[37],accounts[47]],9197,{from:accounts[0]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[62],accounts[12],accounts[75],accounts[26],accounts[6],accounts[61]],6201,{from:accounts[0]});

result = await instance.transfer(accounts[4],663,{from:accounts[0]});

await instance.approve(accounts[67], 38839, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

});
it('test 14',async() => {

await instance.approve(accounts[91], 29218, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

result = await instance.transfer(accounts[4],905,{from:accounts[0]});
await instance.batchTransfer([accounts[72],accounts[69],accounts[71],accounts[65],accounts[24],accounts[43]],6125,{from:accounts[0]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[1],687,{from:accounts[2]});

await instance.approve(accounts[22], 20545, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[22], 1000, {from: accounts[22]});

await instance.batchTransfer([accounts[74],accounts[60],accounts[95],accounts[68],accounts[91],accounts[15],accounts[2],accounts[2],accounts[49]],1995,{from:accounts[0]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[2],432,{from:accounts[5]});
await instance.batchTransfer([accounts[49],accounts[24],accounts[3],accounts[35]],6163,{from:accounts[0]});


await instance.approve(accounts[91], 25015, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[0],544,{from:accounts[2]});

await instance.approve(accounts[76], 27771, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

await instance.batchTransfer([accounts[17],accounts[96],accounts[88],accounts[68],accounts[68],accounts[31]],9282,{from:accounts[0]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[2],988,{from:accounts[1]});
await instance.batchTransfer([accounts[22],accounts[27],accounts[30],accounts[27],accounts[18]],4910,{from:accounts[0]});


await instance.approve(accounts[53], 31460, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[52],accounts[11],accounts[2],accounts[77],accounts[14],accounts[31]],2844,{from:accounts[0]});

result = await instance.transfer(accounts[4],641,{from:accounts[2]});

await instance.approve(accounts[101], 39954, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[101], 1000, {from: accounts[101]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[22],accounts[95],accounts[43],accounts[55],accounts[25],accounts[14],accounts[10],accounts[18]],6591,{from:accounts[0]});

result = await instance.transfer(accounts[1],559,{from:accounts[1]});

await instance.approve(accounts[168], 22444, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {

await instance.approve(accounts[156], 34330, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[156], 1000, {from: accounts[156]});

await instance.batchTransfer([accounts[22],accounts[67],accounts[74],accounts[28]],8578,{from:accounts[0]});

result = await instance.transfer(accounts[0],256,{from:accounts[4]});
});
it('test 22',async() => {
result = await instance.transfer(accounts[1],560,{from:accounts[0]});
await instance.batchTransfer([accounts[8]],3857,{from:accounts[0]});


await instance.approve(accounts[28], 31676, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[28], 1000, {from: accounts[28]});

});
it('test 23',async() => {

await instance.approve(accounts[61], 26669, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

await instance.batchTransfer([accounts[80],accounts[65],accounts[86],accounts[17],accounts[8],accounts[64],accounts[42],accounts[53],accounts[32],accounts[52]],7768,{from:accounts[0]});

result = await instance.transfer(accounts[4],314,{from:accounts[5]});
});
it('test 24',async() => {
result = await instance.transfer(accounts[2],205,{from:accounts[3]});

await instance.approve(accounts[97], 35631, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

await instance.batchTransfer([accounts[39],accounts[7],accounts[53],accounts[64],accounts[72],accounts[30],accounts[54],accounts[29],accounts[34]],1355,{from:accounts[0]});

});
it('test 25',async() => {
await instance.batchTransfer([accounts[6]],6845,{from:accounts[0]});

result = await instance.transfer(accounts[0],243,{from:accounts[0]});

await instance.approve(accounts[154], 35750, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

});
it('test 26',async() => {

await instance.approve(accounts[9], 39415, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

await instance.batchTransfer([accounts[95]],2114,{from:accounts[0]});

result = await instance.transfer(accounts[5],907,{from:accounts[1]});
});
it('test 27',async() => {
await instance.batchTransfer([accounts[58],accounts[6],accounts[50],accounts[36]],2478,{from:accounts[0]});


await instance.approve(accounts[81], 34087, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[81], 1000, {from: accounts[81]});

result = await instance.transfer(accounts[2],321,{from:accounts[3]});
});
it('test 28',async() => {
await instance.batchTransfer([accounts[73]],8411,{from:accounts[0]});


await instance.approve(accounts[88], 35745, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[88], 1000, {from: accounts[88]});

result = await instance.transfer(accounts[1],841,{from:accounts[0]});
});
it('test 29',async() => {
await instance.batchTransfer([accounts[22],accounts[60],accounts[12],accounts[46],accounts[61],accounts[99],accounts[1],accounts[62],accounts[84],accounts[38]],4403,{from:accounts[0]});

result = await instance.transfer(accounts[1],249,{from:accounts[1]});

await instance.approve(accounts[22], 24160, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[22], 1000, {from: accounts[22]});

});
});
