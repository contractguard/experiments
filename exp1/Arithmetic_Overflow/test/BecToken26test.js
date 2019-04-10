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
await instance.batchTransfer([accounts[71],accounts[72],accounts[63],accounts[5]],2953,{from:accounts[0]});

result = await instance.transfer(accounts[0],607,{from:accounts[2]});

await instance.approve(accounts[129], 24427, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[50],accounts[1],accounts[50],accounts[34],accounts[18],accounts[39],accounts[53]],9508,{from:accounts[0]});

result = await instance.transfer(accounts[2],249,{from:accounts[0]});

await instance.approve(accounts[77], 22802, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[1],911,{from:accounts[3]});

await instance.approve(accounts[86], 31893, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[86], 1000, {from: accounts[86]});

await instance.batchTransfer([accounts[89],accounts[43],accounts[88],accounts[57],accounts[53],accounts[96]],3186,{from:accounts[0]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[4],530,{from:accounts[2]});

await instance.approve(accounts[145], 39753, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

await instance.batchTransfer([accounts[23],accounts[55],accounts[98],accounts[88],accounts[85],accounts[75],accounts[48]],3471,{from:accounts[0]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[2],545,{from:accounts[1]});
await instance.batchTransfer([accounts[51],accounts[55],accounts[78],accounts[98],accounts[41],accounts[48],accounts[64],accounts[68],accounts[81]],9046,{from:accounts[0]});


await instance.approve(accounts[164], 30276, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[164], 1000, {from: accounts[164]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[7]],3208,{from:accounts[0]});

result = await instance.transfer(accounts[0],332,{from:accounts[5]});

await instance.approve(accounts[73], 38315, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[73], 1000, {from: accounts[73]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[75],accounts[4],accounts[93],accounts[12],accounts[98],accounts[84],accounts[88]],1838,{from:accounts[0]});


await instance.approve(accounts[61], 24973, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

result = await instance.transfer(accounts[1],618,{from:accounts[4]});
});
it('test 7',async() => {
result = await instance.transfer(accounts[4],299,{from:accounts[2]});
await instance.batchTransfer([accounts[31],accounts[77],accounts[67],accounts[18],accounts[67],accounts[8],accounts[97]],5133,{from:accounts[0]});


await instance.approve(accounts[43], 33615, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[43], 1000, {from: accounts[43]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[4],838,{from:accounts[0]});

await instance.approve(accounts[2], 23837, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

await instance.batchTransfer([accounts[60],accounts[7],accounts[55],accounts[53],accounts[69],accounts[46],accounts[52],accounts[13],accounts[40]],8716,{from:accounts[0]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[17],accounts[23],accounts[33],accounts[85],accounts[99],accounts[40],accounts[24],accounts[100],accounts[11],accounts[79]],6570,{from:accounts[0]});

result = await instance.transfer(accounts[3],928,{from:accounts[0]});

await instance.approve(accounts[71], 20715, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[71], 1000, {from: accounts[71]});

});
it('test 10',async() => {

await instance.approve(accounts[74], 29316, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[74], 1000, {from: accounts[74]});

await instance.batchTransfer([accounts[31],accounts[71],accounts[47]],5236,{from:accounts[0]});

result = await instance.transfer(accounts[1],572,{from:accounts[2]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {

await instance.approve(accounts[144], 23604, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

await instance.batchTransfer([accounts[76],accounts[65],accounts[39],accounts[77],accounts[63],accounts[73]],3115,{from:accounts[0]});

result = await instance.transfer(accounts[5],592,{from:accounts[4]});
});
it('test 12',async() => {

await instance.approve(accounts[45], 36830, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

await instance.batchTransfer([accounts[52],accounts[53],accounts[48]],1792,{from:accounts[0]});

result = await instance.transfer(accounts[1],344,{from:accounts[4]});
});
it('test 13',async() => {
await instance.batchTransfer([accounts[10],accounts[9],accounts[35],accounts[80],accounts[69],accounts[79]],9465,{from:accounts[0]});

result = await instance.transfer(accounts[4],738,{from:accounts[3]});

await instance.approve(accounts[92], 32156, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[92], 1000, {from: accounts[92]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[1],971,{from:accounts[2]});

await instance.approve(accounts[20], 35808, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[20], 1000, {from: accounts[20]});

await instance.batchTransfer([accounts[6],accounts[34],accounts[88],accounts[56],accounts[60],accounts[68]],4995,{from:accounts[0]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[5],accounts[60],accounts[82],accounts[48],accounts[55]],3884,{from:accounts[0]});

result = await instance.transfer(accounts[5],321,{from:accounts[5]});

await instance.approve(accounts[196], 28209, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[196], 1000, {from: accounts[196]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[0],547,{from:accounts[0]});
await instance.batchTransfer([accounts[91],accounts[42],accounts[74],accounts[57],accounts[77]],2227,{from:accounts[0]});


await instance.approve(accounts[41], 27628, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[4],680,{from:accounts[4]});
await instance.batchTransfer([accounts[65],accounts[61],accounts[76]],1223,{from:accounts[0]});


await instance.approve(accounts[159], 22207, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[159], 1000, {from: accounts[159]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[4],accounts[70],accounts[99],accounts[60],accounts[16],accounts[69],accounts[1]],5475,{from:accounts[0]});


await instance.approve(accounts[135], 21360, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

result = await instance.transfer(accounts[4],236,{from:accounts[0]});
});
it('test 19',async() => {
await instance.batchTransfer([accounts[77]],9375,{from:accounts[0]});

result = await instance.transfer(accounts[1],727,{from:accounts[0]});

await instance.approve(accounts[40], 26861, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[40], 1000, {from: accounts[40]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[66],accounts[11],accounts[91],accounts[52],accounts[95]],4051,{from:accounts[0]});


await instance.approve(accounts[149], 27417, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[149], 1000, {from: accounts[149]});

result = await instance.transfer(accounts[0],593,{from:accounts[4]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 21',async() => {
await instance.batchTransfer([accounts[50],accounts[95],accounts[25],accounts[93],accounts[71],accounts[78],accounts[66],accounts[52],accounts[70]],7323,{from:accounts[0]});

result = await instance.transfer(accounts[1],394,{from:accounts[3]});

await instance.approve(accounts[94], 24759, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[94], 1000, {from: accounts[94]});

});
it('test 22',async() => {
result = await instance.transfer(accounts[3],420,{from:accounts[3]});
await instance.batchTransfer([accounts[39],accounts[9],accounts[66],accounts[62],accounts[94],accounts[65],accounts[85],accounts[39]],1260,{from:accounts[0]});


await instance.approve(accounts[186], 22309, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[186], 1000, {from: accounts[186]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {

await instance.approve(accounts[112], 34454, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[112], 1000, {from: accounts[112]});

await instance.batchTransfer([accounts[56],accounts[64],accounts[41],accounts[56],accounts[38],accounts[93],accounts[57],accounts[92],accounts[5],accounts[77]],1162,{from:accounts[0]});

result = await instance.transfer(accounts[1],994,{from:accounts[0]});
});
it('test 24',async() => {
result = await instance.transfer(accounts[2],361,{from:accounts[5]});
await instance.batchTransfer([accounts[61],accounts[25],accounts[22],accounts[23],accounts[1],accounts[68],accounts[37],accounts[49],accounts[90]],5193,{from:accounts[0]});


await instance.approve(accounts[70], 37498, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[70], 1000, {from: accounts[70]});

});
it('test 25',async() => {

await instance.approve(accounts[71], 28650, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[71], 1000, {from: accounts[71]});

result = await instance.transfer(accounts[1],774,{from:accounts[1]});
await instance.batchTransfer([accounts[41],accounts[21],accounts[46],accounts[11],accounts[21],accounts[10],accounts[45],accounts[80],accounts[79]],1891,{from:accounts[0]});

});
it('test 26',async() => {

await instance.approve(accounts[186], 24429, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[186], 1000, {from: accounts[186]});

await instance.batchTransfer([accounts[6],accounts[74],accounts[2],accounts[68],accounts[84],accounts[65],accounts[62]],9338,{from:accounts[0]});

result = await instance.transfer(accounts[5],255,{from:accounts[1]});
});
it('test 27',async() => {
await instance.batchTransfer([accounts[64],accounts[80],accounts[67],accounts[59],accounts[11],accounts[48],accounts[92],accounts[94],accounts[93],accounts[54]],6471,{from:accounts[0]});

result = await instance.transfer(accounts[4],969,{from:accounts[0]});

await instance.approve(accounts[22], 39716, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[22], 1000, {from: accounts[22]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[31],accounts[4]],6536,{from:accounts[0]});

result = await instance.transfer(accounts[1],463,{from:accounts[1]});

await instance.approve(accounts[66], 29704, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[66], 1000, {from: accounts[66]});

});
it('test 29',async() => {

await instance.approve(accounts[43], 34185, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[43], 1000, {from: accounts[43]});

result = await instance.transfer(accounts[3],902,{from:accounts[0]});
await instance.batchTransfer([accounts[54],accounts[80],accounts[5],accounts[61],accounts[35],accounts[7]],1827,{from:accounts[0]});

});
});
