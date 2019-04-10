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
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[18],accounts[84],accounts[51],accounts[16],accounts[49],accounts[96],accounts[80],accounts[16],accounts[94]],6394,{from:accounts[0]});

result = await instance.transfer(accounts[4],300,{from:accounts[4]});

await instance.approve(accounts[89], 37080, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[89], 1000, {from: accounts[89]});

});
it('test 1',async() => {

await instance.approve(accounts[30], 32357, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[30], 1000, {from: accounts[30]});

await instance.batchTransfer([accounts[46],accounts[93],accounts[33],accounts[82],accounts[8],accounts[91],accounts[38]],1817,{from:accounts[0]});

result = await instance.transfer(accounts[0],685,{from:accounts[5]});
});
it('test 2',async() => {

await instance.approve(accounts[71], 37516, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[71], 1000, {from: accounts[71]});

result = await instance.transfer(accounts[1],810,{from:accounts[4]});
await instance.batchTransfer([accounts[13],accounts[43],accounts[35],accounts[67],accounts[85],accounts[51]],7732,{from:accounts[0]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[0],932,{from:accounts[2]});

await instance.approve(accounts[178], 39751, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

await instance.batchTransfer([accounts[6],accounts[53],accounts[62],accounts[24],accounts[48],accounts[93],accounts[10],accounts[88],accounts[96],accounts[16]],8526,{from:accounts[0]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[25],accounts[97],accounts[9],accounts[86],accounts[67],accounts[34],accounts[85],accounts[5],accounts[99],accounts[57]],7716,{from:accounts[0]});


await instance.approve(accounts[161], 25353, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[161], 1000, {from: accounts[161]});

result = await instance.transfer(accounts[4],416,{from:accounts[4]});
});
it('test 5',async() => {

await instance.approve(accounts[95], 29856, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[95], 1000, {from: accounts[95]});

await instance.batchTransfer([accounts[97],accounts[21],accounts[12],accounts[25],accounts[87],accounts[82],accounts[30],accounts[45]],3030,{from:accounts[0]});

result = await instance.transfer(accounts[3],761,{from:accounts[5]});
});
it('test 6',async() => {
result = await instance.transfer(accounts[1],1000,{from:accounts[0]});
await instance.batchTransfer([accounts[75]],6797,{from:accounts[0]});


await instance.approve(accounts[131], 39229, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[131], 1000, {from: accounts[131]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[4],435,{from:accounts[5]});

await instance.approve(accounts[160], 34041, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[160], 1000, {from: accounts[160]});

await instance.batchTransfer([accounts[53],accounts[22],accounts[57],accounts[57],accounts[25]],9362,{from:accounts[0]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[3],accounts[91],accounts[39],accounts[88],accounts[30],accounts[48]],8313,{from:accounts[0]});

result = await instance.transfer(accounts[3],260,{from:accounts[2]});

await instance.approve(accounts[36], 37462, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[36], 1000, {from: accounts[36]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[0],833,{from:accounts[5]});

await instance.approve(accounts[195], 20268, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[195], 1000, {from: accounts[195]});

await instance.batchTransfer([accounts[29]],5969,{from:accounts[0]});

});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[5],226,{from:accounts[1]});

await instance.approve(accounts[103], 37606, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[103], 1000, {from: accounts[103]});

await instance.batchTransfer([accounts[100]],1042,{from:accounts[0]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[1],556,{from:accounts[5]});

await instance.approve(accounts[176], 32228, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

await instance.batchTransfer([accounts[44]],7848,{from:accounts[0]});

});
it('test 12',async() => {

await instance.approve(accounts[137], 24470, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

await instance.batchTransfer([accounts[76],accounts[87],accounts[10],accounts[69]],7785,{from:accounts[0]});

result = await instance.transfer(accounts[3],341,{from:accounts[5]});
});
it('test 13',async() => {
await instance.batchTransfer([accounts[48],accounts[83],accounts[68],accounts[45],accounts[67],accounts[52],accounts[60]],2670,{from:accounts[0]});


await instance.approve(accounts[131], 34211, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[131], 1000, {from: accounts[131]});

result = await instance.transfer(accounts[2],357,{from:accounts[4]});
});
it('test 14',async() => {
result = await instance.transfer(accounts[3],302,{from:accounts[2]});
await instance.batchTransfer([accounts[28]],9630,{from:accounts[0]});


await instance.approve(accounts[175], 28967, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[175], 1000, {from: accounts[175]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[1],717,{from:accounts[0]});

await instance.approve(accounts[36], 20193, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[36], 1000, {from: accounts[36]});

await instance.batchTransfer([accounts[10],accounts[51],accounts[53],accounts[23],accounts[90],accounts[26],accounts[93],accounts[83],accounts[41]],1817,{from:accounts[0]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[4],928,{from:accounts[1]});
await instance.batchTransfer([accounts[71],accounts[8],accounts[2],accounts[12],accounts[25]],7406,{from:accounts[0]});


await instance.approve(accounts[26], 20894, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[26], 1000, {from: accounts[26]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[54],accounts[18],accounts[13],accounts[1],accounts[78],accounts[99],accounts[88],accounts[97],accounts[40],accounts[2]],5157,{from:accounts[0]});


await instance.approve(accounts[24], 39427, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[24], 1000, {from: accounts[24]});

result = await instance.transfer(accounts[4],901,{from:accounts[0]});
});
it('test 18',async() => {
await instance.batchTransfer([accounts[95],accounts[27],accounts[35],accounts[73],accounts[35],accounts[42],accounts[5],accounts[93]],6459,{from:accounts[0]});

result = await instance.transfer(accounts[3],959,{from:accounts[2]});

await instance.approve(accounts[107], 37733, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

});
it('test 19',async() => {

await instance.approve(accounts[148], 23809, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[148], 1000, {from: accounts[148]});

result = await instance.transfer(accounts[1],362,{from:accounts[5]});
await instance.batchTransfer([accounts[39]],5110,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[11],accounts[22],accounts[4],accounts[39],accounts[56],accounts[57]],5794,{from:accounts[0]});


await instance.approve(accounts[145], 39219, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

result = await instance.transfer(accounts[3],715,{from:accounts[3]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {

await instance.approve(accounts[91], 25541, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

result = await instance.transfer(accounts[5],874,{from:accounts[3]});
await instance.batchTransfer([accounts[14],accounts[21],accounts[26],accounts[20]],7162,{from:accounts[0]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[87],accounts[99],accounts[65],accounts[80],accounts[53],accounts[36],accounts[86]],9197,{from:accounts[0]});


await instance.approve(accounts[171], 30511, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[171], 1000, {from: accounts[171]});

result = await instance.transfer(accounts[1],674,{from:accounts[1]});
});
it('test 23',async() => {
await instance.batchTransfer([accounts[66],accounts[78],accounts[21]],4746,{from:accounts[0]});

result = await instance.transfer(accounts[5],279,{from:accounts[4]});

await instance.approve(accounts[82], 36822, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

});
it('test 24',async() => {

await instance.approve(accounts[70], 32388, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[70], 1000, {from: accounts[70]});

await instance.batchTransfer([accounts[52],accounts[24],accounts[49],accounts[54],accounts[8]],4017,{from:accounts[0]});

result = await instance.transfer(accounts[3],226,{from:accounts[5]});
});
it('test 25',async() => {

await instance.approve(accounts[162], 31258, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[162], 1000, {from: accounts[162]});

result = await instance.transfer(accounts[1],696,{from:accounts[0]});
await instance.batchTransfer([accounts[28],accounts[4]],8480,{from:accounts[0]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[3],252,{from:accounts[5]});

await instance.approve(accounts[101], 30913, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[101], 1000, {from: accounts[101]});

await instance.batchTransfer([accounts[63],accounts[55]],3007,{from:accounts[0]});

});
it('test 27',async() => {
await instance.batchTransfer([accounts[2],accounts[42],accounts[90],accounts[46],accounts[82],accounts[45]],9469,{from:accounts[0]});


await instance.approve(accounts[10], 24415, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

result = await instance.transfer(accounts[4],987,{from:accounts[2]});
});
it('test 28',async() => {
result = await instance.transfer(accounts[1],354,{from:accounts[0]});
await instance.batchTransfer([accounts[26],accounts[45],accounts[63],accounts[45],accounts[38],accounts[13]],2904,{from:accounts[0]});


await instance.approve(accounts[116], 35299, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[116], 1000, {from: accounts[116]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[4],498,{from:accounts[5]});

await instance.approve(accounts[49], 23322, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[49], 1000, {from: accounts[49]});

await instance.batchTransfer([accounts[34]],6392,{from:accounts[0]});

});
});
