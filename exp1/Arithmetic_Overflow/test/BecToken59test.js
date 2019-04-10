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

await instance.approve(accounts[18], 38087, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

await instance.batchTransfer([accounts[25],accounts[50],accounts[13],accounts[81],accounts[55],accounts[88],accounts[3],accounts[51],accounts[97],accounts[72]],5784,{from:accounts[0]});

result = await instance.transfer(accounts[0],937,{from:accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[81],accounts[97],accounts[20],accounts[79],accounts[56]],6589,{from:accounts[0]});


await instance.approve(accounts[102], 35967, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[102], 1000, {from: accounts[102]});

result = await instance.transfer(accounts[1],980,{from:accounts[4]});
});
it('test 2',async() => {
await instance.batchTransfer([accounts[7],accounts[8],accounts[84],accounts[13],accounts[96],accounts[37],accounts[18]],5048,{from:accounts[0]});

result = await instance.transfer(accounts[4],816,{from:accounts[4]});

await instance.approve(accounts[65], 20819, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[65], 1000, {from: accounts[65]});

});
it('test 3',async() => {

await instance.approve(accounts[87], 38441, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[87], 1000, {from: accounts[87]});

await instance.batchTransfer([accounts[96],accounts[20],accounts[4],accounts[78],accounts[86],accounts[79],accounts[38],accounts[73],accounts[73]],3755,{from:accounts[0]});

result = await instance.transfer(accounts[1],257,{from:accounts[5]});
});
it('test 4',async() => {
result = await instance.transfer(accounts[5],340,{from:accounts[3]});
await instance.batchTransfer([accounts[69],accounts[11]],8988,{from:accounts[0]});


await instance.approve(accounts[156], 34713, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[156], 1000, {from: accounts[156]});

});
it('test 5',async() => {

await instance.approve(accounts[55], 38569, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

await instance.batchTransfer([accounts[43]],7411,{from:accounts[0]});

result = await instance.transfer(accounts[2],266,{from:accounts[2]});
});
it('test 6',async() => {

await instance.approve(accounts[90], 23401, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[90], 1000, {from: accounts[90]});

result = await instance.transfer(accounts[2],216,{from:accounts[1]});
await instance.batchTransfer([accounts[30],accounts[67],accounts[98],accounts[87],accounts[25]],1446,{from:accounts[0]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[1],508,{from:accounts[5]});

await instance.approve(accounts[72], 31525, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

await instance.batchTransfer([accounts[8],accounts[26],accounts[99],accounts[97],accounts[5],accounts[42],accounts[7],accounts[59]],3048,{from:accounts[0]});

});
it('test 8',async() => {

await instance.approve(accounts[75], 28569, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

result = await instance.transfer(accounts[3],631,{from:accounts[3]});
await instance.batchTransfer([accounts[94],accounts[10],accounts[53],accounts[5],accounts[69],accounts[88]],3280,{from:accounts[0]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[50],accounts[81]],9694,{from:accounts[0]});

result = await instance.transfer(accounts[4],632,{from:accounts[1]});

await instance.approve(accounts[45], 38247, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

});
it('test 10',async() => {

await instance.approve(accounts[35], 38740, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[77]],3860,{from:accounts[0]});

result = await instance.transfer(accounts[5],479,{from:accounts[2]});
});
it('test 11',async() => {
result = await instance.transfer(accounts[1],299,{from:accounts[2]});
await instance.batchTransfer([accounts[46],accounts[50],accounts[2],accounts[17],accounts[39],accounts[40]],6359,{from:accounts[0]});


await instance.approve(accounts[173], 35383, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[173], 1000, {from: accounts[173]});

});
it('test 12',async() => {
result = await instance.transfer(accounts[3],524,{from:accounts[1]});
await instance.batchTransfer([accounts[69],accounts[66]],3582,{from:accounts[0]});


await instance.approve(accounts[22], 30950, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[22], 1000, {from: accounts[22]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[85],accounts[48],accounts[45],accounts[63],accounts[19],accounts[28],accounts[36],accounts[90],accounts[5],accounts[82]],8580,{from:accounts[0]});

result = await instance.transfer(accounts[2],944,{from:accounts[1]});

await instance.approve(accounts[119], 22271, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

});
it('test 14',async() => {

await instance.approve(accounts[147], 36556, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[147], 1000, {from: accounts[147]});

result = await instance.transfer(accounts[0],728,{from:accounts[4]});
await instance.batchTransfer([accounts[91],accounts[86],accounts[91]],5034,{from:accounts[0]});

});
it('test 15',async() => {

await instance.approve(accounts[87], 24807, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[87], 1000, {from: accounts[87]});

result = await instance.transfer(accounts[3],563,{from:accounts[4]});
await instance.batchTransfer([accounts[9],accounts[45]],9270,{from:accounts[0]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[0],711,{from:accounts[4]});
await instance.batchTransfer([accounts[92],accounts[58],accounts[68]],5935,{from:accounts[0]});


await instance.approve(accounts[167], 32127, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[167], 1000, {from: accounts[167]});

});
it('test 17',async() => {

await instance.approve(accounts[97], 33384, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

result = await instance.transfer(accounts[0],933,{from:accounts[4]});
await instance.batchTransfer([accounts[58],accounts[21],accounts[16],accounts[84]],1692,{from:accounts[0]});

});
it('test 18',async() => {

await instance.approve(accounts[56], 34766, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[56], 1000, {from: accounts[56]});

await instance.batchTransfer([accounts[22],accounts[61]],2627,{from:accounts[0]});

result = await instance.transfer(accounts[2],301,{from:accounts[3]});
});
it('test 19',async() => {

await instance.approve(accounts[179], 30266, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[179], 1000, {from: accounts[179]});

await instance.batchTransfer([accounts[57],accounts[44],accounts[79],accounts[75],accounts[89],accounts[54],accounts[45]],8045,{from:accounts[0]});

result = await instance.transfer(accounts[4],535,{from:accounts[3]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[101], 30376, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[101], 1000, {from: accounts[101]});

result = await instance.transfer(accounts[4],236,{from:accounts[4]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[86],accounts[74],accounts[66],accounts[99],accounts[98],accounts[3],accounts[74],accounts[5],accounts[52]],7846,{from:accounts[0]});

});
it('test 21',async() => {
await instance.batchTransfer([accounts[26],accounts[79],accounts[45],accounts[76],accounts[43],accounts[100],accounts[4],accounts[16]],8362,{from:accounts[0]});

result = await instance.transfer(accounts[3],214,{from:accounts[4]});

await instance.approve(accounts[42], 25350, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

});
it('test 22',async() => {

await instance.approve(accounts[139], 34204, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[139], 1000, {from: accounts[139]});

await instance.batchTransfer([accounts[50],accounts[11],accounts[54],accounts[71],accounts[42],accounts[75],accounts[16]],6818,{from:accounts[0]});

result = await instance.transfer(accounts[5],954,{from:accounts[0]});
});
it('test 23',async() => {
result = await instance.transfer(accounts[3],242,{from:accounts[4]});

await instance.approve(accounts[44], 39688, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

await instance.batchTransfer([accounts[2],accounts[35],accounts[89],accounts[20],accounts[8],accounts[6],accounts[25]],7247,{from:accounts[0]});

});
it('test 24',async() => {

await instance.approve(accounts[45], 21333, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

await instance.batchTransfer([accounts[72],accounts[97],accounts[45],accounts[8],accounts[34],accounts[22],accounts[88]],2508,{from:accounts[0]});

result = await instance.transfer(accounts[2],734,{from:accounts[4]});
});
it('test 25',async() => {

await instance.approve(accounts[41], 37707, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

await instance.batchTransfer([accounts[55]],9206,{from:accounts[0]});

result = await instance.transfer(accounts[1],640,{from:accounts[0]});
});
it('test 26',async() => {
result = await instance.transfer(accounts[5],978,{from:accounts[3]});
await instance.batchTransfer([accounts[28]],9188,{from:accounts[0]});


await instance.approve(accounts[120], 36657, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[5],439,{from:accounts[4]});

await instance.approve(accounts[83], 25047, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

await instance.batchTransfer([accounts[2],accounts[63],accounts[46],accounts[38],accounts[47],accounts[94],accounts[59],accounts[86],accounts[79],accounts[1]],9506,{from:accounts[0]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[28],accounts[28],accounts[74],accounts[55]],7877,{from:accounts[0]});


await instance.approve(accounts[196], 29184, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[196], 1000, {from: accounts[196]});

result = await instance.transfer(accounts[5],563,{from:accounts[4]});
});
it('test 29',async() => {
result = await instance.transfer(accounts[5],344,{from:accounts[4]});

await instance.approve(accounts[58], 24631, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[58], 1000, {from: accounts[58]});

await instance.batchTransfer([accounts[99],accounts[77],accounts[86],accounts[50]],2379,{from:accounts[0]});

});
});
