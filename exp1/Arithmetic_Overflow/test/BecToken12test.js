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
result = await instance.transfer(accounts[3],914,{from:accounts[0]});
await instance.batchTransfer([accounts[63],accounts[66],accounts[70],accounts[4],accounts[68],accounts[42],accounts[12]],5548,{from:accounts[0]});


await instance.approve(accounts[81], 32392, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[81], 1000, {from: accounts[81]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {

await instance.approve(accounts[191], 33205, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[191], 1000, {from: accounts[191]});

result = await instance.transfer(accounts[0],667,{from:accounts[3]});
await instance.batchTransfer([accounts[13],accounts[94],accounts[26],accounts[82],accounts[35],accounts[81],accounts[9],accounts[59],accounts[79],accounts[28]],1054,{from:accounts[0]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[1],465,{from:accounts[0]});

await instance.approve(accounts[134], 30151, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[134], 1000, {from: accounts[134]});

await instance.batchTransfer([accounts[2]],5433,{from:accounts[0]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[1],449,{from:accounts[2]});

await instance.approve(accounts[54], 39577, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

await instance.batchTransfer([accounts[58],accounts[42],accounts[27]],8530,{from:accounts[0]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[42],accounts[59]],3180,{from:accounts[0]});

result = await instance.transfer(accounts[2],401,{from:accounts[4]});

await instance.approve(accounts[117], 36243, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[117], 1000, {from: accounts[117]});

});
it('test 5',async() => {
result = await instance.transfer(accounts[5],206,{from:accounts[4]});
await instance.batchTransfer([accounts[92],accounts[92]],1683,{from:accounts[0]});


await instance.approve(accounts[184], 37311, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[184], 1000, {from: accounts[184]});

});
it('test 6',async() => {

await instance.approve(accounts[36], 34559, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[36], 1000, {from: accounts[36]});

await instance.batchTransfer([accounts[65],accounts[33],accounts[25],accounts[89],accounts[13],accounts[61]],9658,{from:accounts[0]});

result = await instance.transfer(accounts[4],940,{from:accounts[1]});
});
it('test 7',async() => {

await instance.approve(accounts[115], 38047, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

result = await instance.transfer(accounts[0],848,{from:accounts[0]});
await instance.batchTransfer([accounts[67],accounts[76],accounts[72],accounts[90],accounts[45],accounts[99]],8015,{from:accounts[0]});

});
it('test 8',async() => {

await instance.approve(accounts[79], 33305, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[79], 1000, {from: accounts[79]});

result = await instance.transfer(accounts[1],628,{from:accounts[0]});
await instance.batchTransfer([accounts[25],accounts[60],accounts[46],accounts[8],accounts[3],accounts[37],accounts[46]],2087,{from:accounts[0]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[79],accounts[99],accounts[10]],5288,{from:accounts[0]});

result = await instance.transfer(accounts[2],217,{from:accounts[0]});

await instance.approve(accounts[74], 36044, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[74], 1000, {from: accounts[74]});

});
it('test 10',async() => {
await instance.batchTransfer([accounts[68],accounts[90],accounts[15],accounts[56],accounts[9],accounts[68],accounts[60],accounts[94],accounts[44]],6852,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[4],945,{from:accounts[3]});

await instance.approve(accounts[114], 27642, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[114], 1000, {from: accounts[114]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[4],678,{from:accounts[0]});

await instance.approve(accounts[13], 37703, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[13], 1000, {from: accounts[13]});

await instance.batchTransfer([accounts[54],accounts[7],accounts[26],accounts[87],accounts[70],accounts[48]],7683,{from:accounts[0]});

});
it('test 12',async() => {

await instance.approve(accounts[78], 37402, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[78], 1000, {from: accounts[78]});

result = await instance.transfer(accounts[0],317,{from:accounts[5]});
await instance.batchTransfer([accounts[16],accounts[92],accounts[12]],9286,{from:accounts[0]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[2],795,{from:accounts[5]});
await instance.batchTransfer([accounts[97],accounts[67],accounts[91],accounts[85],accounts[38],accounts[58],accounts[11]],6120,{from:accounts[0]});


await instance.approve(accounts[130], 28014, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[130], 1000, {from: accounts[130]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[61],accounts[13],accounts[36],accounts[55],accounts[55],accounts[56],accounts[54],accounts[21],accounts[71]],7442,{from:accounts[0]});


await instance.approve(accounts[139], 25597, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[139], 1000, {from: accounts[139]});

result = await instance.transfer(accounts[4],894,{from:accounts[1]});
});
it('test 15',async() => {
result = await instance.transfer(accounts[1],676,{from:accounts[3]});

await instance.approve(accounts[94], 39083, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[94], 1000, {from: accounts[94]});

await instance.batchTransfer([accounts[48],accounts[2],accounts[34],accounts[64],accounts[21],accounts[97]],8138,{from:accounts[0]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[0],264,{from:accounts[1]});
await instance.batchTransfer([accounts[75],accounts[15],accounts[63],accounts[71],accounts[90],accounts[39],accounts[70],accounts[23]],6939,{from:accounts[0]});


await instance.approve(accounts[182], 24181, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[58],accounts[18],accounts[11],accounts[29],accounts[54],accounts[68],accounts[44]],8707,{from:accounts[0]});


await instance.approve(accounts[128], 23346, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[128], 1000, {from: accounts[128]});

result = await instance.transfer(accounts[5],411,{from:accounts[1]});
});
it('test 18',async() => {

await instance.approve(accounts[197], 23476, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[197], 1000, {from: accounts[197]});

await instance.batchTransfer([accounts[69],accounts[92],accounts[60],accounts[60]],9944,{from:accounts[0]});

result = await instance.transfer(accounts[0],605,{from:accounts[5]});
});
it('test 19',async() => {

await instance.approve(accounts[57], 34999, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[57], 1000, {from: accounts[57]});

await instance.batchTransfer([accounts[95],accounts[58],accounts[56],accounts[90]],2085,{from:accounts[0]});

result = await instance.transfer(accounts[1],811,{from:accounts[5]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[55],accounts[32],accounts[73]],3348,{from:accounts[0]});

result = await instance.transfer(accounts[0],794,{from:accounts[3]});

await instance.approve(accounts[55], 35701, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[2],961,{from:accounts[5]});
await instance.batchTransfer([accounts[44],accounts[49],accounts[31],accounts[64],accounts[98]],1730,{from:accounts[0]});


await instance.approve(accounts[96], 23559, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[96], 1000, {from: accounts[96]});

});
it('test 22',async() => {

await instance.approve(accounts[26], 28600, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[26], 1000, {from: accounts[26]});

await instance.batchTransfer([accounts[30],accounts[76],accounts[48],accounts[93],accounts[11],accounts[37],accounts[77],accounts[32],accounts[83],accounts[35]],2360,{from:accounts[0]});

result = await instance.transfer(accounts[2],507,{from:accounts[2]});
});
it('test 23',async() => {

await instance.approve(accounts[113], 36194, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[113], 1000, {from: accounts[113]});

result = await instance.transfer(accounts[0],306,{from:accounts[4]});
await instance.batchTransfer([accounts[96],accounts[92],accounts[42],accounts[92]],3699,{from:accounts[0]});

});
it('test 24',async() => {
result = await instance.transfer(accounts[2],939,{from:accounts[3]});

await instance.approve(accounts[166], 33741, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[166], 1000, {from: accounts[166]});

await instance.batchTransfer([accounts[99],accounts[17],accounts[71],accounts[63],accounts[59],accounts[56],accounts[99]],6681,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 25',async() => {

await instance.approve(accounts[59], 38977, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[59], 1000, {from: accounts[59]});

result = await instance.transfer(accounts[2],820,{from:accounts[2]});
await instance.batchTransfer([accounts[18],accounts[70],accounts[99],accounts[79],accounts[68],accounts[58]],6070,{from:accounts[0]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[5],781,{from:accounts[4]});
await instance.batchTransfer([accounts[75],accounts[31],accounts[22],accounts[96],accounts[90]],8419,{from:accounts[0]});


await instance.approve(accounts[47], 31641, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[47], 1000, {from: accounts[47]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[1],424,{from:accounts[4]});

await instance.approve(accounts[35], 37578, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

await instance.batchTransfer([accounts[83],accounts[100],accounts[43]],2235,{from:accounts[0]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[0],564,{from:accounts[4]});

await instance.approve(accounts[115], 25101, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

await instance.batchTransfer([accounts[79],accounts[49],accounts[73],accounts[84]],4330,{from:accounts[0]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[40],accounts[6],accounts[61],accounts[26],accounts[92],accounts[41],accounts[71]],8243,{from:accounts[0]});

result = await instance.transfer(accounts[4],983,{from:accounts[0]});

await instance.approve(accounts[110], 29122, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[110], 1000, {from: accounts[110]});

});
});
