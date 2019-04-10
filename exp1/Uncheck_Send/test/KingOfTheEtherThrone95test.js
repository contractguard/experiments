const Attack = artifacts.require("Attack");
const KingOfTheEtherThrone = artifacts.require("KingOfTheEtherThrone");
contract('KingOfTheEtherThrone', async (accounts) => {
const owner = accounts[0];
let attack;let instance;
let result;
before('setup contract for each test',async() => {
instance = await KingOfTheEtherThrone.new({from:accounts[0]});
attack = await Attack.new(instance.address,{from:accounts[400]});
});
it('test 0',async() => {
await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[1], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[2], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[4], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[9],value:49});

result = await instance.claimThrone("pqbrgt7DlAULTswjxz",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(808577);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[5],value:50});

result = await instance.sweepCommission(559817);
result = await instance.claimThrone("1YRJpPfXzwq9b",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("m7rRCNytvzQkHuJagwi",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(636650);
await instance.sendTransaction({from:accounts[8],value:66});

});
it('test 3',async() => {
result = await instance.claimThrone("OjBK4PqJr8",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(111454);
await instance.sendTransaction({from:accounts[6],value:5});

result = await instance.transferOwnership(accounts[2]);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[9],value:86});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("VoBROjJvm5Lbq7Tdne",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(723010);
});
it('test 5',async() => {
result = await instance.sweepCommission(666731);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[2],value:59});

result = await instance.claimThrone("yCbrslzj5wQ",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[7],value:95});

result = await instance.sweepCommission(932382);
result = await instance.claimThrone("WckqM8T0E9tsnLJjIOGN",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("V7I0gGe68D5yPEFYJkmb",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(94261);
await instance.sendTransaction({from:accounts[3],value:39});

});
it('test 8',async() => {
result = await instance.sweepCommission(1006719);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[6],value:90});

result = await instance.claimThrone("1fIqahCSVlzvJw",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[6],value:79});

result = await instance.claimThrone("t3KfGbeXy5HTVBn",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(718252);
});
it('test 10',async() => {
result = await instance.sweepCommission(305304);
result = await instance.claimThrone("kiXL2YwGDaupoVZ1M",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:95});

result = await instance.transferOwnership(accounts[4]);
});
it('test 11',async() => {
result = await instance.claimThrone("zGhjKMmd8LO9VFq",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:100});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(544192);
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[8],value:4});

result = await instance.sweepCommission(574847);
result = await instance.claimThrone("L4GMmYbeS2rhZ3fI",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(242675);
await instance.sendTransaction({from:accounts[7],value:86});

result = await instance.claimThrone("pxM05lVHfjr6Rm",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(279836);
result = await instance.claimThrone("glTOSjXW48",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[6],value:55});

});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[1],value:72});

result = await instance.claimThrone("inY3oEVyLgZQ",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(835358);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[9],value:28});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("Pro8cpli7KU0e",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(691097);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[7],value:55});

result = await instance.claimThrone("DFL3dy17wvirmk",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(94927);
result = await instance.transferOwnership(accounts[5]);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[9],value:19});

result = await instance.sweepCommission(887614);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("e2c7a35ugjoYO",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 19',async() => {
result = await instance.claimThrone("WRUmptTaHxci4kX19",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(902195);
await instance.sendTransaction({from:accounts[2],value:76});

result = await instance.transferOwnership(accounts[4]);
});
it('test 20',async() => {
result = await instance.sweepCommission(584160);
result = await instance.claimThrone("dwKny82IfUAzO5qrF",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:33});

});
it('test 21',async() => {
result = await instance.sweepCommission(536699);
await instance.sendTransaction({from:accounts[9],value:6});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("SVlhHBAigXG1YaIrwx7",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[4],value:92});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("Yz182ecTqW9Qrm",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(437921);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[9],value:70});

result = await instance.claimThrone("LqabywWnvG5iU0HROzpc",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(960586);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[4],value:2});

result = await instance.claimThrone("XR9PxDeoEMy6nu52",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(139954);
});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[2],value:53});

result = await instance.sweepCommission(907973);
result = await instance.claimThrone("JvZV5g1xzBCOnPKo2",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(604164);
result = await instance.claimThrone("l1Y9v3BWzR8ti",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:11});

});
it('test 27',async() => {
result = await instance.sweepCommission(619134);
result = await instance.claimThrone("Psv2VzIDdTh",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[8],value:97});

});
it('test 28',async() => {
result = await instance.sweepCommission(733081);
await instance.sendTransaction({from:accounts[3],value:35});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("WoaVdNDEGexHQzis0lr",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[9],value:58});

result = await instance.claimThrone("eZV01DIQtfh",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(995205);
});
});
