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
await instance.batchTransfer([accounts[14],accounts[29]],1970,{from:accounts[0]});


await instance.approve(accounts[125], 30772, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

result = await instance.transfer(accounts[2],495,{from:accounts[3]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {

await instance.approve(accounts[107], 28609, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

result = await instance.transfer(accounts[0],707,{from:accounts[3]});
await instance.batchTransfer([accounts[59],accounts[1],accounts[12]],8597,{from:accounts[0]});

});
it('test 2',async() => {

await instance.approve(accounts[72], 28106, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

result = await instance.transfer(accounts[5],722,{from:accounts[4]});
await instance.batchTransfer([accounts[18],accounts[70]],5976,{from:accounts[0]});

});
it('test 3',async() => {

await instance.approve(accounts[194], 27680, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[194], 1000, {from: accounts[194]});

await instance.batchTransfer([accounts[66],accounts[90],accounts[26],accounts[41],accounts[36],accounts[67],accounts[63],accounts[53],accounts[77]],9989,{from:accounts[0]});

result = await instance.transfer(accounts[4],312,{from:accounts[2]});
});
it('test 4',async() => {
await instance.batchTransfer([accounts[87]],3714,{from:accounts[0]});


await instance.approve(accounts[110], 30480, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[110], 1000, {from: accounts[110]});

result = await instance.transfer(accounts[2],342,{from:accounts[4]});
});
it('test 5',async() => {
await instance.batchTransfer([accounts[94],accounts[73],accounts[96],accounts[13]],9434,{from:accounts[0]});


await instance.approve(accounts[92], 32035, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[92], 1000, {from: accounts[92]});

result = await instance.transfer(accounts[3],423,{from:accounts[0]});
});
it('test 6',async() => {

await instance.approve(accounts[54], 31947, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

await instance.batchTransfer([accounts[13],accounts[77],accounts[18]],3521,{from:accounts[0]});

result = await instance.transfer(accounts[2],898,{from:accounts[1]});
});
it('test 7',async() => {
await instance.batchTransfer([accounts[8]],5735,{from:accounts[0]});


await instance.approve(accounts[66], 31885, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[66], 1000, {from: accounts[66]});

result = await instance.transfer(accounts[3],398,{from:accounts[5]});
});
it('test 8',async() => {

await instance.approve(accounts[87], 33400, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[87], 1000, {from: accounts[87]});

result = await instance.transfer(accounts[4],263,{from:accounts[2]});
await instance.batchTransfer([accounts[60],accounts[72],accounts[38],accounts[92],accounts[11],accounts[57],accounts[44],accounts[73],accounts[19],accounts[13]],1846,{from:accounts[0]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[78],accounts[27],accounts[35],accounts[8],accounts[74],accounts[71],accounts[7],accounts[95],accounts[8]],4481,{from:accounts[0]});


await instance.approve(accounts[144], 30406, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

result = await instance.transfer(accounts[0],829,{from:accounts[0]});
});
it('test 10',async() => {
result = await instance.transfer(accounts[2],347,{from:accounts[0]});

await instance.approve(accounts[11], 38590, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[11], 1000, {from: accounts[11]});

await instance.batchTransfer([accounts[1],accounts[53],accounts[68],accounts[77],accounts[16],accounts[35],accounts[79],accounts[63]],6454,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[3],409,{from:accounts[5]});

await instance.approve(accounts[147], 22994, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[147], 1000, {from: accounts[147]});

await instance.batchTransfer([accounts[18],accounts[36],accounts[90],accounts[26],accounts[81],accounts[62],accounts[19],accounts[77],accounts[63]],1410,{from:accounts[0]});

});
it('test 12',async() => {

await instance.approve(accounts[84], 28889, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[84], 1000, {from: accounts[84]});

await instance.batchTransfer([accounts[56],accounts[11],accounts[88]],9897,{from:accounts[0]});

result = await instance.transfer(accounts[0],439,{from:accounts[2]});
});
it('test 13',async() => {
await instance.batchTransfer([accounts[17],accounts[34]],3604,{from:accounts[0]});

result = await instance.transfer(accounts[1],460,{from:accounts[4]});

await instance.approve(accounts[127], 34009, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[127], 1000, {from: accounts[127]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[64],accounts[68],accounts[7],accounts[60],accounts[48],accounts[88]],5947,{from:accounts[0]});

result = await instance.transfer(accounts[0],692,{from:accounts[5]});

await instance.approve(accounts[174], 34864, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[12],accounts[83],accounts[24],accounts[54],accounts[61],accounts[57]],7706,{from:accounts[0]});


await instance.approve(accounts[65], 30388, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[65], 1000, {from: accounts[65]});

result = await instance.transfer(accounts[5],878,{from:accounts[4]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[3],585,{from:accounts[2]});

await instance.approve(accounts[154], 24609, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

await instance.batchTransfer([accounts[3],accounts[87],accounts[49],accounts[18]],6585,{from:accounts[0]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[3],989,{from:accounts[4]});
await instance.batchTransfer([accounts[41],accounts[100],accounts[8],accounts[85],accounts[41],accounts[48],accounts[88]],6889,{from:accounts[0]});


await instance.approve(accounts[133], 31119, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[133], 1000, {from: accounts[133]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[20],accounts[28],accounts[53],accounts[60],accounts[64],accounts[37],accounts[92],accounts[47],accounts[65]],1885,{from:accounts[0]});

result = await instance.transfer(accounts[1],844,{from:accounts[5]});

await instance.approve(accounts[100], 30021, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[100], 1000, {from: accounts[100]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[48],accounts[88],accounts[93],accounts[28],accounts[58],accounts[43],accounts[89],accounts[42],accounts[84],accounts[63]],4152,{from:accounts[0]});

result = await instance.transfer(accounts[1],635,{from:accounts[0]});

await instance.approve(accounts[10], 33810, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[176], 36249, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],596,{from:accounts[0]});
await instance.batchTransfer([accounts[91],accounts[87],accounts[63],accounts[15],accounts[4],accounts[8],accounts[95],accounts[27],accounts[97],accounts[47]],8290,{from:accounts[0]});

});
it('test 21',async() => {
await instance.batchTransfer([accounts[52],accounts[40],accounts[90]],7470,{from:accounts[0]});


await instance.approve(accounts[52], 24416, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[52], 1000, {from: accounts[52]});

result = await instance.transfer(accounts[1],792,{from:accounts[3]});
});
it('test 22',async() => {
await instance.batchTransfer([accounts[15],accounts[17]],8604,{from:accounts[0]});

result = await instance.transfer(accounts[0],971,{from:accounts[0]});

await instance.approve(accounts[144], 26046, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

});
it('test 23',async() => {
result = await instance.transfer(accounts[3],302,{from:accounts[3]});
await instance.batchTransfer([accounts[81],accounts[91],accounts[46],accounts[38],accounts[4],accounts[77]],5630,{from:accounts[0]});


await instance.approve(accounts[23], 35330, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[23], 1000, {from: accounts[23]});

});
it('test 24',async() => {
result = await instance.transfer(accounts[1],206,{from:accounts[4]});
await instance.batchTransfer([accounts[23]],2933,{from:accounts[0]});


await instance.approve(accounts[27], 36343, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

});
it('test 25',async() => {

await instance.approve(accounts[156], 33282, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[156], 1000, {from: accounts[156]});

result = await instance.transfer(accounts[3],312,{from:accounts[1]});
await instance.batchTransfer([accounts[89],accounts[55],accounts[91]],3797,{from:accounts[0]});

});
it('test 26',async() => {

await instance.approve(accounts[92], 34476, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[92], 1000, {from: accounts[92]});

result = await instance.transfer(accounts[5],718,{from:accounts[5]});
await instance.batchTransfer([accounts[5]],2245,{from:accounts[0]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[0],790,{from:accounts[3]});
await instance.batchTransfer([accounts[95],accounts[19],accounts[99],accounts[79],accounts[38],accounts[29],accounts[20],accounts[66],accounts[43]],7382,{from:accounts[0]});


await instance.approve(accounts[41], 37533, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[63],accounts[60],accounts[1]],2151,{from:accounts[0]});


await instance.approve(accounts[180], 23746, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[180], 1000, {from: accounts[180]});

result = await instance.transfer(accounts[4],269,{from:accounts[0]});
});
it('test 29',async() => {
result = await instance.transfer(accounts[4],318,{from:accounts[5]});

await instance.approve(accounts[200], 21674, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[200], 1000, {from: accounts[200]});

await instance.batchTransfer([accounts[23],accounts[31],accounts[32],accounts[29],accounts[40],accounts[43],accounts[44]],2876,{from:accounts[0]});

});
});
