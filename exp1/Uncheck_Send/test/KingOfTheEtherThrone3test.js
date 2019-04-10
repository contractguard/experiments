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
await instance.sendTransaction({from:accounts[9],value:16});

result = await instance.sweepCommission(923952);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("ekIDwgWRsHrvZTLM",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 1',async() => {
result = await instance.claimThrone("8CgRuSctUi7",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(971940);
await instance.sendTransaction({from:accounts[8],value:75});

result = await instance.transferOwnership(accounts[3]);
});
it('test 2',async() => {
result = await instance.claimThrone("rvJVNI2TRaQF9nlZL86h",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(1021063);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:95});

});
it('test 3',async() => {
result = await instance.claimThrone("6dvS57bpr3ynt2",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(828317);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[2],value:46});

});
it('test 4',async() => {
result = await instance.claimThrone("DhQ6gxk4GH",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(935850);
await instance.sendTransaction({from:accounts[5],value:47});

result = await instance.transferOwnership(accounts[4]);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[9],value:18});

result = await instance.claimThrone("YBZWVzrUe0C6i9FvAp",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(522751);
result = await instance.transferOwnership(accounts[1]);
});
it('test 6',async() => {
result = await instance.sweepCommission(414856);
await instance.sendTransaction({from:accounts[7],value:55});

result = await instance.claimThrone("mFXDxWILldqafGuHyEhw",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 7',async() => {
result = await instance.sweepCommission(117061);
await instance.sendTransaction({from:accounts[6],value:59});

result = await instance.claimThrone("HADkhsyIBJOftc",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[1],value:94});

result = await instance.claimThrone("gdjZ7marHDqRX5lUiMKC",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(728399);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[5],value:65});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("7GxwTh9Lz8d4",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(56634);
});
it('test 10',async() => {
result = await instance.sweepCommission(226345);
result = await instance.claimThrone("j4NalsmufLrtUZR",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[4],value:61});

});
it('test 11',async() => {
result = await instance.claimThrone("iHJLdF2kGPn6Db",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(398237);
await instance.sendTransaction({from:accounts[2],value:67});

result = await instance.transferOwnership(accounts[5]);
});
it('test 12',async() => {
result = await instance.claimThrone("71LpP60uIbMS4",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(550332);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:57});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[4],value:55});

result = await instance.sweepCommission(94239);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("R9XwQxoyztBms",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[5],value:52});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(877448);
result = await instance.claimThrone("t59QXhiF8nJMzRDaLm",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 15',async() => {
result = await instance.claimThrone("OGTcnxN34ZdztESvLe",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[4],value:15});

result = await instance.sweepCommission(81143);
result = await instance.transferOwnership(accounts[5]);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[7],value:81});

result = await instance.claimThrone("gAUqMXlDh3",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(906695);
});
it('test 17',async() => {
result = await instance.claimThrone("sJDb7Yh61plLTfmSCKZd",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(683595);
await instance.sendTransaction({from:accounts[5],value:79});

});
it('test 18',async() => {
result = await instance.claimThrone("fjagqcKFyN",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[2],value:37});

result = await instance.sweepCommission(725736);
result = await instance.transferOwnership(accounts[2]);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[1],value:60});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("UtRHxA6aNu",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(26894);
});
it('test 20',async() => {
result = await instance.claimThrone("aplfHLV06YT",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(739758);
await instance.sendTransaction({from:accounts[6],value:19});

});
it('test 21',async() => {
result = await instance.sweepCommission(210492);
await instance.sendTransaction({from:accounts[5],value:61});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("Tfz97vesMHgx",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(603120);
result = await instance.claimThrone("fEDLwzhrMl3pQ45",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:35});

});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[3],value:22});

result = await instance.sweepCommission(709442);
result = await instance.claimThrone("RT02mzIh8YOqtN3x4",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[1],value:71});

result = await instance.claimThrone("G2qzR85XiBduV97akHlK",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(172199);
});
it('test 25',async() => {
result = await instance.claimThrone("90tDIiPQrwjfBUE",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(911570);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[6],value:82});

});
it('test 26',async() => {
result = await instance.sweepCommission(64429);
await instance.sendTransaction({from:accounts[1],value:55});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("2oxfdZwH3bgm5ar",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 27',async() => {
result = await instance.claimThrone("VBRDrJtW6LopXT5bQfO",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[4],value:24});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(431605);
});
it('test 28',async() => {
result = await instance.claimThrone("vIDB5efATSClXpbLc31s",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[6],value:100});

result = await instance.sweepCommission(757774);
result = await instance.transferOwnership(accounts[5]);
});
it('test 29',async() => {
result = await instance.claimThrone("szPNF0539ly",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(241194);
await instance.sendTransaction({from:accounts[4],value:38});

});
});
