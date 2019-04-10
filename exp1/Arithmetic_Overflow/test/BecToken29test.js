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

await instance.approve(accounts[131], 36501, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[131], 1000, {from: accounts[131]});

await instance.batchTransfer([accounts[70],accounts[44],accounts[55],accounts[11],accounts[55]],8118,{from:accounts[0]});

result = await instance.transfer(accounts[3],940,{from:accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[26],accounts[54],accounts[60],accounts[63],accounts[12],accounts[54]],5083,{from:accounts[0]});


await instance.approve(accounts[99], 22513, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[99], 1000, {from: accounts[99]});

result = await instance.transfer(accounts[4],900,{from:accounts[1]});
});
it('test 2',async() => {
await instance.batchTransfer([accounts[90],accounts[59],accounts[86],accounts[35]],8956,{from:accounts[0]});

result = await instance.transfer(accounts[2],423,{from:accounts[3]});

await instance.approve(accounts[147], 30912, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[147], 1000, {from: accounts[147]});

});
it('test 3',async() => {

await instance.approve(accounts[162], 39597, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[162], 1000, {from: accounts[162]});

await instance.batchTransfer([accounts[88],accounts[59],accounts[38],accounts[32],accounts[4],accounts[14],accounts[95]],3039,{from:accounts[0]});

result = await instance.transfer(accounts[2],934,{from:accounts[1]});
});
it('test 4',async() => {
result = await instance.transfer(accounts[5],546,{from:accounts[4]});

await instance.approve(accounts[82], 22920, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

await instance.batchTransfer([accounts[59]],6016,{from:accounts[0]});

});
it('test 5',async() => {

await instance.approve(accounts[164], 31553, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[164], 1000, {from: accounts[164]});

result = await instance.transfer(accounts[2],867,{from:accounts[0]});
await instance.batchTransfer([accounts[28]],5092,{from:accounts[0]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[0],538,{from:accounts[0]});

await instance.approve(accounts[117], 30968, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[117], 1000, {from: accounts[117]});

await instance.batchTransfer([accounts[17],accounts[34],accounts[34],accounts[91],accounts[13],accounts[11]],2414,{from:accounts[0]});

});
it('test 7',async() => {
await instance.batchTransfer([accounts[52],accounts[85],accounts[73],accounts[23],accounts[92],accounts[46]],3649,{from:accounts[0]});

result = await instance.transfer(accounts[5],757,{from:accounts[4]});

await instance.approve(accounts[63], 33161, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[63], 1000, {from: accounts[63]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[0],266,{from:accounts[5]});

await instance.approve(accounts[158], 37142, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

await instance.batchTransfer([accounts[54],accounts[68],accounts[57],accounts[79],accounts[54],accounts[22],accounts[81]],5732,{from:accounts[0]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[34],accounts[38],accounts[12],accounts[14],accounts[30],accounts[22],accounts[32],accounts[85],accounts[68]],9511,{from:accounts[0]});


await instance.approve(accounts[66], 25841, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[66], 1000, {from: accounts[66]});

result = await instance.transfer(accounts[2],586,{from:accounts[3]});
});
it('test 10',async() => {
result = await instance.transfer(accounts[4],373,{from:accounts[3]});
await instance.batchTransfer([accounts[73],accounts[100],accounts[71],accounts[1],accounts[97],accounts[13]],4640,{from:accounts[0]});


await instance.approve(accounts[171], 21674, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[171], 1000, {from: accounts[171]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[4],558,{from:accounts[1]});
await instance.batchTransfer([accounts[59],accounts[96],accounts[57],accounts[52]],6925,{from:accounts[0]});


await instance.approve(accounts[76], 39638, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

});
it('test 12',async() => {
result = await instance.transfer(accounts[3],525,{from:accounts[1]});

await instance.approve(accounts[80], 35980, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[80], 1000, {from: accounts[80]});

await instance.batchTransfer([accounts[35],accounts[35],accounts[3],accounts[17],accounts[17],accounts[15],accounts[5],accounts[17],accounts[52],accounts[79]],6162,{from:accounts[0]});

});
it('test 13',async() => {

await instance.approve(accounts[196], 32420, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[196], 1000, {from: accounts[196]});

await instance.batchTransfer([accounts[100],accounts[78],accounts[42],accounts[26],accounts[38],accounts[79],accounts[68],accounts[10]],4258,{from:accounts[0]});

result = await instance.transfer(accounts[2],943,{from:accounts[4]});
});
it('test 14',async() => {
await instance.batchTransfer([accounts[35],accounts[24],accounts[12],accounts[19],accounts[58],accounts[63],accounts[65],accounts[59],accounts[19]],1264,{from:accounts[0]});


await instance.approve(accounts[47], 32692, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[47], 1000, {from: accounts[47]});

result = await instance.transfer(accounts[0],927,{from:accounts[0]});
});
it('test 15',async() => {
result = await instance.transfer(accounts[0],854,{from:accounts[3]});

await instance.approve(accounts[58], 38982, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[58], 1000, {from: accounts[58]});

await instance.batchTransfer([accounts[66],accounts[42],accounts[34],accounts[84],accounts[9],accounts[11],accounts[48]],1042,{from:accounts[0]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[4],509,{from:accounts[4]});
await instance.batchTransfer([accounts[28],accounts[90],accounts[12],accounts[96]],5770,{from:accounts[0]});


await instance.approve(accounts[111], 31819, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[111], 1000, {from: accounts[111]});

});
it('test 17',async() => {

await instance.approve(accounts[198], 30258, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[198], 1000, {from: accounts[198]});

result = await instance.transfer(accounts[2],638,{from:accounts[0]});
await instance.batchTransfer([accounts[40],accounts[47],accounts[34],accounts[91],accounts[62],accounts[19]],7158,{from:accounts[0]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[0],451,{from:accounts[0]});

await instance.approve(accounts[196], 36835, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[196], 1000, {from: accounts[196]});

await instance.batchTransfer([accounts[90],accounts[8],accounts[17],accounts[49],accounts[56],accounts[23]],8496,{from:accounts[0]});

});
it('test 19',async() => {

await instance.approve(accounts[70], 32888, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[70], 1000, {from: accounts[70]});

result = await instance.transfer(accounts[5],230,{from:accounts[5]});
await instance.batchTransfer([accounts[87],accounts[72],accounts[39],accounts[55],accounts[34],accounts[76],accounts[8],accounts[88],accounts[99]],1226,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[0],794,{from:accounts[3]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[58], 30489, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[58], 1000, {from: accounts[58]});

await instance.batchTransfer([accounts[71],accounts[33],accounts[46],accounts[40],accounts[13],accounts[11]],1574,{from:accounts[0]});

});
it('test 21',async() => {

await instance.approve(accounts[170], 28741, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

await instance.batchTransfer([accounts[97]],9342,{from:accounts[0]});

result = await instance.transfer(accounts[0],988,{from:accounts[1]});
});
it('test 22',async() => {

await instance.approve(accounts[174], 21362, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

result = await instance.transfer(accounts[3],621,{from:accounts[3]});
await instance.batchTransfer([accounts[91],accounts[87],accounts[93]],5360,{from:accounts[0]});

});
it('test 23',async() => {
result = await instance.transfer(accounts[3],668,{from:accounts[1]});

await instance.approve(accounts[105], 24877, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[105], 1000, {from: accounts[105]});

await instance.batchTransfer([accounts[73],accounts[79],accounts[81]],2872,{from:accounts[0]});

});
it('test 24',async() => {
await instance.batchTransfer([accounts[12],accounts[73],accounts[83]],9066,{from:accounts[0]});


await instance.approve(accounts[1], 38109, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[1], 1000, {from: accounts[1]});

result = await instance.transfer(accounts[0],308,{from:accounts[2]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 25',async() => {
await instance.batchTransfer([accounts[49],accounts[18],accounts[70],accounts[32],accounts[55],accounts[26],accounts[92],accounts[11],accounts[94],accounts[92]],8473,{from:accounts[0]});

result = await instance.transfer(accounts[1],329,{from:accounts[5]});

await instance.approve(accounts[105], 32399, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[105], 1000, {from: accounts[105]});

});
it('test 26',async() => {

await instance.approve(accounts[54], 26085, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

result = await instance.transfer(accounts[1],671,{from:accounts[4]});
await instance.batchTransfer([accounts[24],accounts[95],accounts[92],accounts[44],accounts[42],accounts[70]],7788,{from:accounts[0]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[2],536,{from:accounts[3]});
await instance.batchTransfer([accounts[77],accounts[82],accounts[8],accounts[59]],2060,{from:accounts[0]});


await instance.approve(accounts[146], 29904, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[146], 1000, {from: accounts[146]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[2],741,{from:accounts[2]});

await instance.approve(accounts[5], 27210, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[5], 1000, {from: accounts[5]});

await instance.batchTransfer([accounts[98],accounts[55],accounts[88],accounts[58],accounts[74],accounts[2],accounts[56]],9266,{from:accounts[0]});

});
it('test 29',async() => {

await instance.approve(accounts[128], 20712, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[128], 1000, {from: accounts[128]});

result = await instance.transfer(accounts[5],909,{from:accounts[3]});
await instance.batchTransfer([accounts[54],accounts[23],accounts[64],accounts[39],accounts[57],accounts[83],accounts[21],accounts[89],accounts[81],accounts[25]],7324,{from:accounts[0]});

});
});
