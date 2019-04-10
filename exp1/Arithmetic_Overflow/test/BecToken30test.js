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

await instance.approve(accounts[182], 22097, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

result = await instance.transfer(accounts[4],242,{from:accounts[1]});
await instance.batchTransfer([accounts[65]],9341,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[5],447,{from:accounts[3]});
await instance.batchTransfer([accounts[97],accounts[15],accounts[66],accounts[62],accounts[62],accounts[9],accounts[15],accounts[63],accounts[75],accounts[32]],2382,{from:accounts[0]});


await instance.approve(accounts[29], 21666, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[29], 1000, {from: accounts[29]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[5],451,{from:accounts[4]});
await instance.batchTransfer([accounts[81],accounts[85],accounts[94],accounts[8],accounts[79],accounts[98],accounts[31],accounts[17]],1379,{from:accounts[0]});


await instance.approve(accounts[121], 35682, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

});
it('test 3',async() => {
await instance.batchTransfer([accounts[1],accounts[93],accounts[3],accounts[73],accounts[22],accounts[1],accounts[52],accounts[72],accounts[23],accounts[9]],5733,{from:accounts[0]});


await instance.approve(accounts[106], 23023, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[106], 1000, {from: accounts[106]});

result = await instance.transfer(accounts[0],483,{from:accounts[2]});
});
it('test 4',async() => {
await instance.batchTransfer([accounts[7],accounts[78],accounts[65],accounts[78],accounts[15],accounts[77],accounts[88],accounts[65]],3133,{from:accounts[0]});

result = await instance.transfer(accounts[3],378,{from:accounts[2]});

await instance.approve(accounts[34], 25032, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

});
it('test 5',async() => {

await instance.approve(accounts[172], 24311, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

result = await instance.transfer(accounts[5],256,{from:accounts[1]});
await instance.batchTransfer([accounts[68],accounts[83],accounts[56],accounts[20],accounts[40],accounts[57]],2234,{from:accounts[0]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[1],485,{from:accounts[4]});
await instance.batchTransfer([accounts[87],accounts[68],accounts[65],accounts[96],accounts[72],accounts[30],accounts[55],accounts[91]],6266,{from:accounts[0]});


await instance.approve(accounts[200], 20095, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[200], 1000, {from: accounts[200]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[3],607,{from:accounts[3]});

await instance.approve(accounts[194], 23465, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[194], 1000, {from: accounts[194]});

await instance.batchTransfer([accounts[77],accounts[2],accounts[90],accounts[51],accounts[60]],8195,{from:accounts[0]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[66],accounts[3],accounts[16],accounts[95]],3670,{from:accounts[0]});

result = await instance.transfer(accounts[3],627,{from:accounts[0]});

await instance.approve(accounts[12], 20954, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[12], 1000, {from: accounts[12]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[10],accounts[10]],8349,{from:accounts[0]});

result = await instance.transfer(accounts[3],728,{from:accounts[4]});

await instance.approve(accounts[197], 21301, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[197], 1000, {from: accounts[197]});

});
it('test 10',async() => {
await instance.batchTransfer([accounts[33],accounts[64],accounts[30],accounts[66],accounts[17],accounts[65],accounts[46],accounts[17],accounts[16]],5637,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[0],650,{from:accounts[3]});

await instance.approve(accounts[156], 21916, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[156], 1000, {from: accounts[156]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[4],317,{from:accounts[0]});

await instance.approve(accounts[61], 30340, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

await instance.batchTransfer([accounts[53],accounts[99],accounts[77],accounts[34],accounts[41],accounts[44],accounts[16],accounts[95],accounts[23]],1611,{from:accounts[0]});

});
it('test 12',async() => {

await instance.approve(accounts[97], 37775, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

result = await instance.transfer(accounts[1],252,{from:accounts[2]});
await instance.batchTransfer([accounts[47],accounts[25],accounts[70],accounts[4],accounts[44],accounts[80],accounts[9],accounts[69]],4389,{from:accounts[0]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[3],752,{from:accounts[3]});

await instance.approve(accounts[29], 27885, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[29], 1000, {from: accounts[29]});

await instance.batchTransfer([accounts[99],accounts[38],accounts[48],accounts[69],accounts[74]],4139,{from:accounts[0]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[61]],7340,{from:accounts[0]});

result = await instance.transfer(accounts[2],624,{from:accounts[0]});

await instance.approve(accounts[172], 36211, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[42],accounts[96],accounts[64],accounts[34],accounts[52],accounts[52],accounts[20],accounts[35],accounts[90]],1224,{from:accounts[0]});

result = await instance.transfer(accounts[5],333,{from:accounts[0]});

await instance.approve(accounts[160], 39525, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[160], 1000, {from: accounts[160]});

});
it('test 16',async() => {

await instance.approve(accounts[142], 27960, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[142], 1000, {from: accounts[142]});

result = await instance.transfer(accounts[2],514,{from:accounts[0]});
await instance.batchTransfer([accounts[78],accounts[39],accounts[76],accounts[39],accounts[43],accounts[50],accounts[73],accounts[91],accounts[81],accounts[26]],5870,{from:accounts[0]});

});
it('test 17',async() => {

await instance.approve(accounts[114], 33703, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[114], 1000, {from: accounts[114]});

result = await instance.transfer(accounts[0],513,{from:accounts[1]});
await instance.batchTransfer([accounts[3],accounts[39],accounts[48],accounts[98],accounts[70]],5190,{from:accounts[0]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[3],955,{from:accounts[5]});

await instance.approve(accounts[55], 30263, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

await instance.batchTransfer([accounts[91],accounts[7],accounts[50]],5005,{from:accounts[0]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[14]],6766,{from:accounts[0]});


await instance.approve(accounts[127], 25774, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[127], 1000, {from: accounts[127]});

result = await instance.transfer(accounts[4],506,{from:accounts[0]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],802,{from:accounts[5]});
await instance.batchTransfer([accounts[57],accounts[96],accounts[15],accounts[63],accounts[85],accounts[20],accounts[47],accounts[17],accounts[62]],7412,{from:accounts[0]});


await instance.approve(accounts[70], 23481, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[70], 1000, {from: accounts[70]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[3],275,{from:accounts[1]});
await instance.batchTransfer([accounts[58],accounts[50],accounts[62],accounts[47],accounts[6],accounts[24]],7299,{from:accounts[0]});


await instance.approve(accounts[35], 30770, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

});
it('test 22',async() => {

await instance.approve(accounts[72], 29806, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

await instance.batchTransfer([accounts[64],accounts[91],accounts[82],accounts[53],accounts[98]],4119,{from:accounts[0]});

result = await instance.transfer(accounts[0],501,{from:accounts[0]});
});
it('test 23',async() => {

await instance.approve(accounts[124], 22355, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[124], 1000, {from: accounts[124]});

await instance.batchTransfer([accounts[16],accounts[99]],4785,{from:accounts[0]});

result = await instance.transfer(accounts[2],423,{from:accounts[1]});
});
it('test 24',async() => {

await instance.approve(accounts[10], 22052, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

await instance.batchTransfer([accounts[68],accounts[14],accounts[59]],8571,{from:accounts[0]});

result = await instance.transfer(accounts[1],411,{from:accounts[3]});
});
it('test 25',async() => {
result = await instance.transfer(accounts[4],706,{from:accounts[3]});
await instance.batchTransfer([accounts[86],accounts[12],accounts[55],accounts[29],accounts[40],accounts[91],accounts[4],accounts[37],accounts[97],accounts[70]],1277,{from:accounts[0]});


await instance.approve(accounts[30], 21064, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[30], 1000, {from: accounts[30]});

});
it('test 26',async() => {

await instance.approve(accounts[159], 30818, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[159], 1000, {from: accounts[159]});

await instance.batchTransfer([accounts[9],accounts[64],accounts[41],accounts[43],accounts[77],accounts[82],accounts[9],accounts[95],accounts[30]],3973,{from:accounts[0]});

result = await instance.transfer(accounts[1],207,{from:accounts[0]});
});
it('test 27',async() => {
result = await instance.transfer(accounts[2],635,{from:accounts[1]});

await instance.approve(accounts[55], 37647, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

await instance.batchTransfer([accounts[97],accounts[1],accounts[4],accounts[44],accounts[100],accounts[66]],3138,{from:accounts[0]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[95],accounts[80],accounts[40],accounts[36]],5651,{from:accounts[0]});

result = await instance.transfer(accounts[3],642,{from:accounts[1]});

await instance.approve(accounts[37], 32174, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[4],accounts[59],accounts[91],accounts[25],accounts[5],accounts[37],accounts[38],accounts[100],accounts[39]],4268,{from:accounts[0]});

result = await instance.transfer(accounts[5],874,{from:accounts[5]});

await instance.approve(accounts[114], 23544, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[114], 1000, {from: accounts[114]});

});
});
