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
result = await instance.transfer(accounts[0],827,{from:accounts[4]});
await instance.batchTransfer([accounts[73],accounts[71],accounts[75],accounts[94],accounts[84],accounts[9],accounts[50],accounts[65],accounts[54],accounts[90]],2515,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[37], 38964, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[18]],7939,{from:accounts[0]});


await instance.approve(accounts[82], 25719, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

result = await instance.transfer(accounts[0],263,{from:accounts[0]});
});
it('test 2',async() => {

await instance.approve(accounts[170], 30074, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

await instance.batchTransfer([accounts[49],accounts[63],accounts[58],accounts[17],accounts[36],accounts[63]],8459,{from:accounts[0]});

result = await instance.transfer(accounts[0],431,{from:accounts[2]});
});
it('test 3',async() => {
await instance.batchTransfer([accounts[27],accounts[69],accounts[72],accounts[7],accounts[82],accounts[37],accounts[69],accounts[49]],1771,{from:accounts[0]});


await instance.approve(accounts[92], 30494, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[92], 1000, {from: accounts[92]});

result = await instance.transfer(accounts[4],263,{from:accounts[0]});
});
it('test 4',async() => {
await instance.batchTransfer([accounts[47]],1056,{from:accounts[0]});


await instance.approve(accounts[131], 36037, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[131], 1000, {from: accounts[131]});

result = await instance.transfer(accounts[1],439,{from:accounts[4]});
});
it('test 5',async() => {
await instance.batchTransfer([accounts[2],accounts[24],accounts[18],accounts[93],accounts[42],accounts[32],accounts[89],accounts[22]],3236,{from:accounts[0]});


await instance.approve(accounts[36], 32475, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[36], 1000, {from: accounts[36]});

result = await instance.transfer(accounts[5],864,{from:accounts[2]});
});
it('test 6',async() => {
await instance.batchTransfer([accounts[34],accounts[35],accounts[65],accounts[4],accounts[98],accounts[90],accounts[53],accounts[72],accounts[12]],3750,{from:accounts[0]});

result = await instance.transfer(accounts[3],986,{from:accounts[5]});

await instance.approve(accounts[161], 30307, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[161], 1000, {from: accounts[161]});

});
it('test 7',async() => {
await instance.batchTransfer([accounts[9],accounts[44],accounts[1]],3698,{from:accounts[0]});

result = await instance.transfer(accounts[2],320,{from:accounts[4]});

await instance.approve(accounts[118], 22588, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[118], 1000, {from: accounts[118]});

});
it('test 8',async() => {

await instance.approve(accounts[104], 38389, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[104], 1000, {from: accounts[104]});

await instance.batchTransfer([accounts[55]],7335,{from:accounts[0]});

result = await instance.transfer(accounts[1],270,{from:accounts[5]});
});
it('test 9',async() => {
await instance.batchTransfer([accounts[56],accounts[4],accounts[42],accounts[64],accounts[59],accounts[91],accounts[81],accounts[31],accounts[60],accounts[50]],7353,{from:accounts[0]});

result = await instance.transfer(accounts[1],789,{from:accounts[4]});

await instance.approve(accounts[77], 29694, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

});
it('test 10',async() => {
await instance.batchTransfer([accounts[53],accounts[94],accounts[38]],2213,{from:accounts[0]});


await instance.approve(accounts[144], 28388, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[0],890,{from:accounts[4]});
});
it('test 11',async() => {
await instance.batchTransfer([accounts[53]],1820,{from:accounts[0]});


await instance.approve(accounts[144], 23916, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

result = await instance.transfer(accounts[3],681,{from:accounts[0]});
});
it('test 12',async() => {
await instance.batchTransfer([accounts[57],accounts[75],accounts[69],accounts[79],accounts[56],accounts[81],accounts[34]],3750,{from:accounts[0]});


await instance.approve(accounts[151], 32035, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

result = await instance.transfer(accounts[3],327,{from:accounts[3]});
});
it('test 13',async() => {
await instance.batchTransfer([accounts[43],accounts[99],accounts[35],accounts[50],accounts[17]],9794,{from:accounts[0]});

result = await instance.transfer(accounts[0],301,{from:accounts[0]});

await instance.approve(accounts[83], 30591, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[44],accounts[49],accounts[26],accounts[83],accounts[80],accounts[1],accounts[87],accounts[18],accounts[37]],3238,{from:accounts[0]});

result = await instance.transfer(accounts[1],331,{from:accounts[5]});

await instance.approve(accounts[140], 20466, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

});
it('test 15',async() => {

await instance.approve(accounts[46], 34655, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[46], 1000, {from: accounts[46]});

await instance.batchTransfer([accounts[90],accounts[62],accounts[66],accounts[70]],3249,{from:accounts[0]});

result = await instance.transfer(accounts[0],365,{from:accounts[2]});
});
it('test 16',async() => {
await instance.batchTransfer([accounts[25],accounts[13],accounts[95],accounts[10],accounts[40]],2876,{from:accounts[0]});


await instance.approve(accounts[111], 23701, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[111], 1000, {from: accounts[111]});

result = await instance.transfer(accounts[1],769,{from:accounts[3]});
});
it('test 17',async() => {
result = await instance.transfer(accounts[3],712,{from:accounts[4]});

await instance.approve(accounts[95], 36160, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[95], 1000, {from: accounts[95]});

await instance.batchTransfer([accounts[98],accounts[70],accounts[32],accounts[81]],4712,{from:accounts[0]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[0],683,{from:accounts[0]});
await instance.batchTransfer([accounts[81],accounts[27],accounts[77]],6204,{from:accounts[0]});


await instance.approve(accounts[134], 35026, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[134], 1000, {from: accounts[134]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[2],343,{from:accounts[5]});
await instance.batchTransfer([accounts[79],accounts[42],accounts[71],accounts[53],accounts[28],accounts[72],accounts[17],accounts[61],accounts[43],accounts[88]],3722,{from:accounts[0]});


await instance.approve(accounts[37], 39557, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[2],516,{from:accounts[4]});

await instance.approve(accounts[125], 28486, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

await instance.batchTransfer([accounts[69],accounts[88],accounts[46],accounts[10],accounts[29],accounts[53],accounts[54],accounts[44]],4792,{from:accounts[0]});

});
it('test 21',async() => {
await instance.batchTransfer([accounts[72],accounts[57],accounts[88],accounts[65],accounts[81],accounts[25],accounts[4],accounts[95],accounts[96],accounts[10]],8258,{from:accounts[0]});


await instance.approve(accounts[77], 39904, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

result = await instance.transfer(accounts[0],244,{from:accounts[3]});
});
it('test 22',async() => {

await instance.approve(accounts[7], 32039, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[7], 1000, {from: accounts[7]});

result = await instance.transfer(accounts[5],445,{from:accounts[2]});
await instance.batchTransfer([accounts[72],accounts[30],accounts[15],accounts[45],accounts[23]],5555,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {
await instance.batchTransfer([accounts[43],accounts[6],accounts[73],accounts[81],accounts[60],accounts[74]],2804,{from:accounts[0]});


await instance.approve(accounts[126], 38862, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

result = await instance.transfer(accounts[4],909,{from:accounts[1]});
});
it('test 24',async() => {

await instance.approve(accounts[65], 39159, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[65], 1000, {from: accounts[65]});

await instance.batchTransfer([accounts[22]],4518,{from:accounts[0]});

result = await instance.transfer(accounts[3],515,{from:accounts[0]});
});
it('test 25',async() => {

await instance.approve(accounts[89], 25956, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[89], 1000, {from: accounts[89]});

result = await instance.transfer(accounts[3],931,{from:accounts[5]});
await instance.batchTransfer([accounts[1],accounts[80],accounts[31],accounts[7],accounts[90],accounts[73],accounts[74],accounts[21],accounts[75]],6332,{from:accounts[0]});

});
it('test 26',async() => {

await instance.approve(accounts[59], 33090, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[59], 1000, {from: accounts[59]});

await instance.batchTransfer([accounts[82],accounts[14],accounts[98],accounts[77],accounts[90],accounts[85]],7534,{from:accounts[0]});

result = await instance.transfer(accounts[0],839,{from:accounts[5]});
});
it('test 27',async() => {
await instance.batchTransfer([accounts[30],accounts[52],accounts[66],accounts[84],accounts[13],accounts[6],accounts[29],accounts[29]],3398,{from:accounts[0]});

result = await instance.transfer(accounts[3],657,{from:accounts[2]});

await instance.approve(accounts[34], 21827, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[47],accounts[71],accounts[55],accounts[83],accounts[87],accounts[44],accounts[4],accounts[76],accounts[55],accounts[73]],4946,{from:accounts[0]});

result = await instance.transfer(accounts[0],577,{from:accounts[1]});

await instance.approve(accounts[111], 30108, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[111], 1000, {from: accounts[111]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[82],accounts[86],accounts[53],accounts[11],accounts[42],accounts[67]],3982,{from:accounts[0]});

result = await instance.transfer(accounts[0],981,{from:accounts[4]});

await instance.approve(accounts[134], 38666, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[134], 1000, {from: accounts[134]});

});
});
