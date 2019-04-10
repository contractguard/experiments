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

await instance.approve(accounts[126], 23041, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

await instance.batchTransfer([accounts[1],accounts[64],accounts[79],accounts[64],accounts[10],accounts[56],accounts[95],accounts[51],accounts[69]],6094,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[0],218,{from:accounts[4]});
});
it('test 1',async() => {
await instance.batchTransfer([accounts[41],accounts[72],accounts[21]],5649,{from:accounts[0]});

result = await instance.transfer(accounts[1],885,{from:accounts[4]});

await instance.approve(accounts[104], 38865, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[104], 1000, {from: accounts[104]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[2],878,{from:accounts[0]});

await instance.approve(accounts[98], 21790, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[98], 1000, {from: accounts[98]});

await instance.batchTransfer([accounts[71],accounts[20],accounts[49],accounts[87],accounts[30],accounts[90],accounts[20]],4066,{from:accounts[0]});

});
it('test 3',async() => {
await instance.batchTransfer([accounts[41],accounts[37],accounts[76],accounts[82],accounts[6],accounts[47],accounts[88],accounts[59]],9130,{from:accounts[0]});


await instance.approve(accounts[26], 27721, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[26], 1000, {from: accounts[26]});

result = await instance.transfer(accounts[0],660,{from:accounts[2]});
});
it('test 4',async() => {
result = await instance.transfer(accounts[5],900,{from:accounts[1]});

await instance.approve(accounts[152], 37013, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

await instance.batchTransfer([accounts[49],accounts[79],accounts[6]],9433,{from:accounts[0]});

});
it('test 5',async() => {

await instance.approve(accounts[108], 37752, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[108], 1000, {from: accounts[108]});

await instance.batchTransfer([accounts[25],accounts[73],accounts[89],accounts[84],accounts[47],accounts[59],accounts[37]],9712,{from:accounts[0]});

result = await instance.transfer(accounts[4],419,{from:accounts[4]});
});
it('test 6',async() => {
result = await instance.transfer(accounts[4],225,{from:accounts[2]});

await instance.approve(accounts[150], 32087, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[150], 1000, {from: accounts[150]});

await instance.batchTransfer([accounts[20]],5725,{from:accounts[0]});

});
it('test 7',async() => {

await instance.approve(accounts[187], 36849, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[187], 1000, {from: accounts[187]});

result = await instance.transfer(accounts[4],373,{from:accounts[1]});
await instance.batchTransfer([accounts[41],accounts[86],accounts[40]],9016,{from:accounts[0]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[18]],1857,{from:accounts[0]});


await instance.approve(accounts[187], 33166, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[187], 1000, {from: accounts[187]});

result = await instance.transfer(accounts[1],449,{from:accounts[4]});
});
it('test 9',async() => {
result = await instance.transfer(accounts[2],950,{from:accounts[3]});
await instance.batchTransfer([accounts[62],accounts[59]],6467,{from:accounts[0]});


await instance.approve(accounts[136], 21557, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[136], 1000, {from: accounts[136]});

});
it('test 10',async() => {
await instance.batchTransfer([accounts[29],accounts[40],accounts[48],accounts[92],accounts[95],accounts[77]],6223,{from:accounts[0]});


await instance.approve(accounts[47], 32360, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[47], 1000, {from: accounts[47]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],748,{from:accounts[3]});
});
it('test 11',async() => {
await instance.batchTransfer([accounts[23]],9508,{from:accounts[0]});


await instance.approve(accounts[107], 21017, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

result = await instance.transfer(accounts[5],610,{from:accounts[0]});
});
it('test 12',async() => {
await instance.batchTransfer([accounts[19],accounts[12],accounts[63],accounts[36]],9906,{from:accounts[0]});

result = await instance.transfer(accounts[2],208,{from:accounts[3]});

await instance.approve(accounts[31], 25680, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[31], 1000, {from: accounts[31]});

});
it('test 13',async() => {

await instance.approve(accounts[128], 25989, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[128], 1000, {from: accounts[128]});

result = await instance.transfer(accounts[0],331,{from:accounts[3]});
await instance.batchTransfer([accounts[87],accounts[24],accounts[89],accounts[56],accounts[70],accounts[37],accounts[52]],7119,{from:accounts[0]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[3],accounts[21],accounts[91],accounts[96]],8967,{from:accounts[0]});

result = await instance.transfer(accounts[3],616,{from:accounts[4]});

await instance.approve(accounts[53], 36698, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

});
it('test 15',async() => {

await instance.approve(accounts[107], 32100, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

result = await instance.transfer(accounts[3],953,{from:accounts[2]});
await instance.batchTransfer([accounts[95],accounts[13],accounts[9],accounts[15]],5272,{from:accounts[0]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[3],217,{from:accounts[2]});

await instance.approve(accounts[48], 22379, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[48], 1000, {from: accounts[48]});

await instance.batchTransfer([accounts[88],accounts[66],accounts[35]],2292,{from:accounts[0]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[1],636,{from:accounts[4]});

await instance.approve(accounts[154], 26938, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

await instance.batchTransfer([accounts[6],accounts[95],accounts[54],accounts[15],accounts[89],accounts[44],accounts[20]],5495,{from:accounts[0]});

});
it('test 18',async() => {

await instance.approve(accounts[67], 37691, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

result = await instance.transfer(accounts[1],775,{from:accounts[2]});
await instance.batchTransfer([accounts[42],accounts[72],accounts[54],accounts[64],accounts[95],accounts[43],accounts[44],accounts[34],accounts[44]],9150,{from:accounts[0]});

});
it('test 19',async() => {

await instance.approve(accounts[197], 24935, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[197], 1000, {from: accounts[197]});

result = await instance.transfer(accounts[1],535,{from:accounts[5]});
await instance.batchTransfer([accounts[52],accounts[46],accounts[71],accounts[2],accounts[43],accounts[99]],3197,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[5],808,{from:accounts[4]});

await instance.approve(accounts[135], 22255, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

await instance.batchTransfer([accounts[32],accounts[40],accounts[52],accounts[43],accounts[60],accounts[48],accounts[76],accounts[8],accounts[49],accounts[77]],7042,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[3],919,{from:accounts[2]});

await instance.approve(accounts[43], 28741, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[43], 1000, {from: accounts[43]});

await instance.batchTransfer([accounts[4],accounts[55],accounts[74],accounts[21],accounts[91]],6951,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 22',async() => {

await instance.approve(accounts[76], 27289, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

await instance.batchTransfer([accounts[91],accounts[46],accounts[95],accounts[78],accounts[14],accounts[52],accounts[14],accounts[57],accounts[26],accounts[94]],8316,{from:accounts[0]});

result = await instance.transfer(accounts[3],821,{from:accounts[2]});
});
it('test 23',async() => {

await instance.approve(accounts[15], 34022, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[15], 1000, {from: accounts[15]});

result = await instance.transfer(accounts[1],427,{from:accounts[0]});
await instance.batchTransfer([accounts[41],accounts[56],accounts[13],accounts[91],accounts[42],accounts[78],accounts[64],accounts[21]],5304,{from:accounts[0]});

});
it('test 24',async() => {

await instance.approve(accounts[46], 27064, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[46], 1000, {from: accounts[46]});

await instance.batchTransfer([accounts[59],accounts[9]],5952,{from:accounts[0]});

result = await instance.transfer(accounts[5],432,{from:accounts[4]});
});
it('test 25',async() => {

await instance.approve(accounts[170], 27993, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

await instance.batchTransfer([accounts[33],accounts[71],accounts[55],accounts[9],accounts[86],accounts[70],accounts[77]],3495,{from:accounts[0]});

result = await instance.transfer(accounts[5],361,{from:accounts[5]});
});
it('test 26',async() => {

await instance.approve(accounts[131], 23428, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[131], 1000, {from: accounts[131]});

await instance.batchTransfer([accounts[98],accounts[71],accounts[86],accounts[68],accounts[77],accounts[75],accounts[24],accounts[20],accounts[56]],5498,{from:accounts[0]});

result = await instance.transfer(accounts[4],517,{from:accounts[3]});
});
it('test 27',async() => {
await instance.batchTransfer([accounts[83],accounts[69],accounts[20],accounts[29],accounts[22],accounts[72],accounts[14],accounts[25],accounts[34],accounts[1]],9344,{from:accounts[0]});


await instance.approve(accounts[26], 27953, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[26], 1000, {from: accounts[26]});

result = await instance.transfer(accounts[1],523,{from:accounts[3]});
});
it('test 28',async() => {

await instance.approve(accounts[132], 34765, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[132], 1000, {from: accounts[132]});

result = await instance.transfer(accounts[2],376,{from:accounts[1]});
await instance.batchTransfer([accounts[3],accounts[40],accounts[87],accounts[30],accounts[29],accounts[49],accounts[41],accounts[60],accounts[92]],8204,{from:accounts[0]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[55],accounts[54],accounts[31],accounts[57],accounts[71]],3024,{from:accounts[0]});


await instance.approve(accounts[135], 33381, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

result = await instance.transfer(accounts[4],384,{from:accounts[4]});
});
});
