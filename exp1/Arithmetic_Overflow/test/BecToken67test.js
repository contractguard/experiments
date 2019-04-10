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

await instance.approve(accounts[161], 37754, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[161], 1000, {from: accounts[161]});

await instance.batchTransfer([accounts[21],accounts[47],accounts[37],accounts[36],accounts[37],accounts[39],accounts[56],accounts[50],accounts[95]],2731,{from:accounts[0]});

result = await instance.transfer(accounts[1],885,{from:accounts[5]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[3],895,{from:accounts[4]});
await instance.batchTransfer([accounts[95],accounts[65],accounts[92],accounts[4],accounts[20],accounts[54],accounts[61],accounts[35]],2087,{from:accounts[0]});


await instance.approve(accounts[45], 21320, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[47],accounts[5],accounts[41],accounts[49],accounts[90],accounts[98],accounts[99],accounts[38],accounts[14],accounts[71]],5009,{from:accounts[0]});

result = await instance.transfer(accounts[2],393,{from:accounts[1]});

await instance.approve(accounts[85], 25917, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[85], 1000, {from: accounts[85]});

});
it('test 3',async() => {

await instance.approve(accounts[19], 31356, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

await instance.batchTransfer([accounts[52]],1165,{from:accounts[0]});

result = await instance.transfer(accounts[2],527,{from:accounts[3]});
});
it('test 4',async() => {
result = await instance.transfer(accounts[0],540,{from:accounts[0]});

await instance.approve(accounts[151], 32573, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

await instance.batchTransfer([accounts[29],accounts[59],accounts[20]],6199,{from:accounts[0]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[22],accounts[17],accounts[11],accounts[65],accounts[88],accounts[83]],2278,{from:accounts[0]});

result = await instance.transfer(accounts[3],215,{from:accounts[2]});

await instance.approve(accounts[75], 26025, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[0],747,{from:accounts[0]});
await instance.batchTransfer([accounts[80],accounts[23],accounts[95],accounts[77],accounts[67],accounts[91],accounts[18],accounts[21],accounts[69]],1108,{from:accounts[0]});


await instance.approve(accounts[134], 27331, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[134], 1000, {from: accounts[134]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[3],229,{from:accounts[3]});

await instance.approve(accounts[24], 20271, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[24], 1000, {from: accounts[24]});

await instance.batchTransfer([accounts[5],accounts[90],accounts[88],accounts[38]],1699,{from:accounts[0]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[10],accounts[3],accounts[33],accounts[31],accounts[63],accounts[63],accounts[37],accounts[64]],5341,{from:accounts[0]});

result = await instance.transfer(accounts[3],301,{from:accounts[0]});

await instance.approve(accounts[54], 37112, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[20]],2066,{from:accounts[0]});


await instance.approve(accounts[137], 23277, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

result = await instance.transfer(accounts[1],812,{from:accounts[0]});
});
it('test 10',async() => {
result = await instance.transfer(accounts[4],592,{from:accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[118], 36895, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[118], 1000, {from: accounts[118]});

await instance.batchTransfer([accounts[61],accounts[70],accounts[52],accounts[27]],6320,{from:accounts[0]});

});
it('test 11',async() => {

await instance.approve(accounts[16], 29198, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[16], 1000, {from: accounts[16]});

result = await instance.transfer(accounts[1],589,{from:accounts[4]});
await instance.batchTransfer([accounts[46],accounts[72],accounts[36],accounts[80],accounts[75],accounts[67],accounts[61],accounts[66]],8319,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[80]],6928,{from:accounts[0]});

result = await instance.transfer(accounts[3],779,{from:accounts[2]});

await instance.approve(accounts[184], 21303, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[184], 1000, {from: accounts[184]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[83],accounts[40],accounts[95],accounts[63],accounts[1],accounts[23],accounts[76],accounts[37],accounts[90],accounts[70]],5811,{from:accounts[0]});

result = await instance.transfer(accounts[0],560,{from:accounts[5]});

await instance.approve(accounts[31], 35357, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[31], 1000, {from: accounts[31]});

});
it('test 14',async() => {

await instance.approve(accounts[54], 37672, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

result = await instance.transfer(accounts[4],777,{from:accounts[0]});
await instance.batchTransfer([accounts[97],accounts[81],accounts[49],accounts[66],accounts[45],accounts[65],accounts[79]],6570,{from:accounts[0]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[5],480,{from:accounts[1]});

await instance.approve(accounts[35], 37236, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

await instance.batchTransfer([accounts[65],accounts[87],accounts[55],accounts[45],accounts[77]],9103,{from:accounts[0]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[5],228,{from:accounts[4]});
await instance.batchTransfer([accounts[85]],3388,{from:accounts[0]});


await instance.approve(accounts[47], 30697, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[47], 1000, {from: accounts[47]});

});
it('test 17',async() => {

await instance.approve(accounts[76], 29281, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

await instance.batchTransfer([accounts[19],accounts[52],accounts[68],accounts[66],accounts[19],accounts[65],accounts[20]],3625,{from:accounts[0]});

result = await instance.transfer(accounts[5],206,{from:accounts[2]});
});
it('test 18',async() => {
result = await instance.transfer(accounts[0],550,{from:accounts[5]});

await instance.approve(accounts[70], 31366, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[70], 1000, {from: accounts[70]});

await instance.batchTransfer([accounts[68]],1866,{from:accounts[0]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[4],893,{from:accounts[3]});

await instance.approve(accounts[153], 20861, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[153], 1000, {from: accounts[153]});

await instance.batchTransfer([accounts[29],accounts[11],accounts[3],accounts[88],accounts[66],accounts[15]],7300,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[180], 26216, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[180], 1000, {from: accounts[180]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[100],accounts[10],accounts[72],accounts[6],accounts[5],accounts[17],accounts[78],accounts[74]],9921,{from:accounts[0]});

result = await instance.transfer(accounts[5],373,{from:accounts[2]});
});
it('test 21',async() => {
result = await instance.transfer(accounts[2],809,{from:accounts[1]});

await instance.approve(accounts[10], 25009, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

await instance.batchTransfer([accounts[100],accounts[54]],3406,{from:accounts[0]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[100],accounts[40],accounts[72],accounts[87]],1415,{from:accounts[0]});

result = await instance.transfer(accounts[2],862,{from:accounts[4]});

await instance.approve(accounts[8], 30383, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {

await instance.approve(accounts[22], 23750, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[22], 1000, {from: accounts[22]});

await instance.batchTransfer([accounts[25],accounts[86]],7892,{from:accounts[0]});

result = await instance.transfer(accounts[4],558,{from:accounts[3]});
});
it('test 24',async() => {
result = await instance.transfer(accounts[5],520,{from:accounts[2]});

await instance.approve(accounts[191], 26489, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[191], 1000, {from: accounts[191]});

await instance.batchTransfer([accounts[42],accounts[61],accounts[47],accounts[62],accounts[62],accounts[18]],3859,{from:accounts[0]});

});
it('test 25',async() => {

await instance.approve(accounts[148], 20055, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[148], 1000, {from: accounts[148]});

result = await instance.transfer(accounts[5],953,{from:accounts[0]});
await instance.batchTransfer([accounts[93]],4921,{from:accounts[0]});

});
it('test 26',async() => {
await instance.batchTransfer([accounts[1],accounts[5],accounts[81]],1202,{from:accounts[0]});


await instance.approve(accounts[131], 31609, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[131], 1000, {from: accounts[131]});

result = await instance.transfer(accounts[2],599,{from:accounts[2]});
});
it('test 27',async() => {
await instance.batchTransfer([accounts[70]],2222,{from:accounts[0]});


await instance.approve(accounts[29], 29622, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[29], 1000, {from: accounts[29]});

result = await instance.transfer(accounts[4],467,{from:accounts[5]});
});
it('test 28',async() => {
result = await instance.transfer(accounts[2],309,{from:accounts[5]});

await instance.approve(accounts[100], 33305, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[100], 1000, {from: accounts[100]});

await instance.batchTransfer([accounts[83]],3148,{from:accounts[0]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[4],999,{from:accounts[1]});
await instance.batchTransfer([accounts[93],accounts[12]],4635,{from:accounts[0]});


await instance.approve(accounts[173], 20289, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[173], 1000, {from: accounts[173]});

});
});
