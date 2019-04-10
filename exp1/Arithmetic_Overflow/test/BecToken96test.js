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

await instance.approve(accounts[133], 36161, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[133], 1000, {from: accounts[133]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[0],357,{from:accounts[5]});
await instance.batchTransfer([accounts[8],accounts[44],accounts[76],accounts[59],accounts[36],accounts[91],accounts[4]],9168,{from:accounts[0]});

});
it('test 1',async() => {

await instance.approve(accounts[4], 38799, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[4], 1000, {from: accounts[4]});

await instance.batchTransfer([accounts[15],accounts[11],accounts[4],accounts[86],accounts[80],accounts[88],accounts[61]],5825,{from:accounts[0]});

result = await instance.transfer(accounts[4],231,{from:accounts[4]});
});
it('test 2',async() => {
await instance.batchTransfer([accounts[8],accounts[12],accounts[8],accounts[33],accounts[37],accounts[38],accounts[93],accounts[57]],1100,{from:accounts[0]});

result = await instance.transfer(accounts[0],233,{from:accounts[5]});

await instance.approve(accounts[75], 24845, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[3],665,{from:accounts[1]});
await instance.batchTransfer([accounts[40],accounts[30]],5243,{from:accounts[0]});


await instance.approve(accounts[5], 26979, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[5], 1000, {from: accounts[5]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[93],accounts[95],accounts[52],accounts[91],accounts[79],accounts[10],accounts[62],accounts[98]],9299,{from:accounts[0]});


await instance.approve(accounts[1], 26677, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[1], 1000, {from: accounts[1]});

result = await instance.transfer(accounts[5],467,{from:accounts[2]});
});
it('test 5',async() => {

await instance.approve(accounts[149], 23416, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[149], 1000, {from: accounts[149]});

await instance.batchTransfer([accounts[85],accounts[97],accounts[45],accounts[41],accounts[35],accounts[44],accounts[73],accounts[14],accounts[14],accounts[31]],6080,{from:accounts[0]});

result = await instance.transfer(accounts[5],665,{from:accounts[1]});
});
it('test 6',async() => {
await instance.batchTransfer([accounts[17],accounts[73]],6292,{from:accounts[0]});


await instance.approve(accounts[82], 33581, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

result = await instance.transfer(accounts[0],701,{from:accounts[2]});
});
it('test 7',async() => {
result = await instance.transfer(accounts[5],942,{from:accounts[2]});
await instance.batchTransfer([accounts[59],accounts[62],accounts[78],accounts[75],accounts[49],accounts[18],accounts[39]],3419,{from:accounts[0]});


await instance.approve(accounts[175], 20545, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[175], 1000, {from: accounts[175]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[5],817,{from:accounts[4]});

await instance.approve(accounts[105], 30215, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[105], 1000, {from: accounts[105]});

await instance.batchTransfer([accounts[63],accounts[40],accounts[100],accounts[79],accounts[52],accounts[93],accounts[18],accounts[67]],6965,{from:accounts[0]});

});
it('test 9',async() => {

await instance.approve(accounts[84], 23786, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[84], 1000, {from: accounts[84]});

result = await instance.transfer(accounts[1],363,{from:accounts[4]});
await instance.batchTransfer([accounts[3],accounts[17],accounts[36]],9899,{from:accounts[0]});

});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[97],accounts[21],accounts[79],accounts[37],accounts[92],accounts[49],accounts[85],accounts[59],accounts[13]],8391,{from:accounts[0]});

result = await instance.transfer(accounts[1],220,{from:accounts[1]});

await instance.approve(accounts[33], 39942, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[89],accounts[15],accounts[94],accounts[1],accounts[39],accounts[1],accounts[52],accounts[87],accounts[77]],4032,{from:accounts[0]});

result = await instance.transfer(accounts[5],374,{from:accounts[1]});

await instance.approve(accounts[43], 22385, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[43], 1000, {from: accounts[43]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[60],accounts[20],accounts[12]],8659,{from:accounts[0]});

result = await instance.transfer(accounts[2],539,{from:accounts[4]});

await instance.approve(accounts[199], 39274, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[199], 1000, {from: accounts[199]});

});
it('test 13',async() => {

await instance.approve(accounts[91], 30560, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

await instance.batchTransfer([accounts[35],accounts[20],accounts[68],accounts[94],accounts[55],accounts[79]],4422,{from:accounts[0]});

result = await instance.transfer(accounts[4],393,{from:accounts[5]});
});
it('test 14',async() => {
await instance.batchTransfer([accounts[46],accounts[2],accounts[4],accounts[58],accounts[62],accounts[59],accounts[73],accounts[15],accounts[34],accounts[19]],4720,{from:accounts[0]});


await instance.approve(accounts[140], 29364, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

result = await instance.transfer(accounts[3],852,{from:accounts[4]});
});
it('test 15',async() => {
result = await instance.transfer(accounts[4],977,{from:accounts[3]});

await instance.approve(accounts[165], 29285, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[165], 1000, {from: accounts[165]});

await instance.batchTransfer([accounts[55],accounts[53],accounts[44],accounts[78],accounts[19]],1399,{from:accounts[0]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[30],accounts[48],accounts[80],accounts[41],accounts[23],accounts[76],accounts[8],accounts[74],accounts[1]],4572,{from:accounts[0]});

result = await instance.transfer(accounts[5],261,{from:accounts[0]});

await instance.approve(accounts[110], 32198, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[110], 1000, {from: accounts[110]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[98],accounts[82],accounts[68],accounts[20],accounts[43],accounts[50],accounts[80],accounts[36],accounts[91]],9069,{from:accounts[0]});

result = await instance.transfer(accounts[5],987,{from:accounts[4]});

await instance.approve(accounts[50], 30840, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[50], 1000, {from: accounts[50]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[4],873,{from:accounts[5]});
await instance.batchTransfer([accounts[28],accounts[86],accounts[59],accounts[51]],9274,{from:accounts[0]});


await instance.approve(accounts[27], 39534, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[44],accounts[2]],5349,{from:accounts[0]});


await instance.approve(accounts[9], 37013, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

result = await instance.transfer(accounts[5],372,{from:accounts[0]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[97],accounts[95]],1559,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[0],557,{from:accounts[4]});

await instance.approve(accounts[158], 23609, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {
result = await instance.transfer(accounts[3],518,{from:accounts[3]});
await instance.batchTransfer([accounts[45],accounts[99],accounts[58],accounts[8]],3185,{from:accounts[0]});


await instance.approve(accounts[142], 27884, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[142], 1000, {from: accounts[142]});

});
it('test 22',async() => {
result = await instance.transfer(accounts[1],582,{from:accounts[3]});
await instance.batchTransfer([accounts[78],accounts[53],accounts[34],accounts[31],accounts[36]],6803,{from:accounts[0]});


await instance.approve(accounts[149], 23281, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[149], 1000, {from: accounts[149]});

});
it('test 23',async() => {

await instance.approve(accounts[141], 26276, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[141], 1000, {from: accounts[141]});

await instance.batchTransfer([accounts[50],accounts[52],accounts[62],accounts[21]],5444,{from:accounts[0]});

result = await instance.transfer(accounts[2],535,{from:accounts[2]});
});
it('test 24',async() => {
result = await instance.transfer(accounts[0],876,{from:accounts[0]});
await instance.batchTransfer([accounts[54],accounts[62],accounts[91]],7677,{from:accounts[0]});


await instance.approve(accounts[75], 39258, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

});
it('test 25',async() => {
await instance.batchTransfer([accounts[62],accounts[3],accounts[71],accounts[55],accounts[47],accounts[19]],7532,{from:accounts[0]});


await instance.approve(accounts[79], 25649, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[79], 1000, {from: accounts[79]});

result = await instance.transfer(accounts[0],911,{from:accounts[2]});
});
it('test 26',async() => {

await instance.approve(accounts[85], 25436, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[85], 1000, {from: accounts[85]});

await instance.batchTransfer([accounts[11],accounts[50],accounts[13]],5219,{from:accounts[0]});

result = await instance.transfer(accounts[1],398,{from:accounts[3]});
});
it('test 27',async() => {

await instance.approve(accounts[166], 39801, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[166], 1000, {from: accounts[166]});

await instance.batchTransfer([accounts[25],accounts[95],accounts[5],accounts[30],accounts[64],accounts[32],accounts[98]],9670,{from:accounts[0]});

result = await instance.transfer(accounts[5],577,{from:accounts[5]});
});
it('test 28',async() => {
await instance.batchTransfer([accounts[35],accounts[50],accounts[98]],6838,{from:accounts[0]});


await instance.approve(accounts[51], 32346, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[51], 1000, {from: accounts[51]});

result = await instance.transfer(accounts[5],666,{from:accounts[3]});
});
it('test 29',async() => {

await instance.approve(accounts[20], 27316, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[20], 1000, {from: accounts[20]});

result = await instance.transfer(accounts[1],863,{from:accounts[0]});
await instance.batchTransfer([accounts[100],accounts[63]],6137,{from:accounts[0]});

});
});
