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
result = await instance.claimThrone("OYGABSnNM1",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(849396);
await instance.sendTransaction({from:accounts[1],value:88});

});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(438573);
await instance.sendTransaction({from:accounts[1],value:93});

result = await instance.claimThrone("7yjUinslwFZuH",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 2',async() => {
result = await instance.claimThrone("StgMIP9vpO5EJlhe",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(363405);
await instance.sendTransaction({from:accounts[5],value:25});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[4],value:89});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(885497);
result = await instance.claimThrone("eRrgfFMTwVJLt",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(521119);
await instance.sendTransaction({from:accounts[1],value:31});

result = await instance.claimThrone("I6OvLrTg1l",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(546343);
await instance.sendTransaction({from:accounts[3],value:77});

result = await instance.claimThrone("Gmx0NOfMyXjEc2",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 6',async() => {
result = await instance.sweepCommission(520558);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[2],value:80});

result = await instance.claimThrone("1oSfMzDPjBwFRqk",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 7',async() => {
result = await instance.claimThrone("RHJnubAFWY",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:72});

result = await instance.sweepCommission(656183);
result = await instance.transferOwnership(accounts[0]);
});
it('test 8',async() => {
result = await instance.claimThrone("0rUj32ymtH",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(679352);
await instance.sendTransaction({from:accounts[6],value:38});

result = await instance.transferOwnership(accounts[4]);
});
it('test 9',async() => {
result = await instance.claimThrone("gjQMbV3wRDA85",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:16});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(440739);
});
it('test 10',async() => {
result = await instance.sweepCommission(367000);
result = await instance.claimThrone("hXaW8S2AlN43VIg5H9",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[5],value:3});

result = await instance.transferOwnership(accounts[2]);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(638771);
result = await instance.claimThrone("6DeIzs3RFuT",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:72});

});
it('test 12',async() => {
result = await instance.claimThrone("W9JFH70aczjVi",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[1],value:88});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(555516);
});
it('test 13',async() => {
result = await instance.sweepCommission(589479);
await instance.sendTransaction({from:accounts[7],value:17});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("5sEFIqdwKZYbJDT",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 14',async() => {
result = await instance.claimThrone("P4DvNWROdFVteSoE5um",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(120070);
await instance.sendTransaction({from:accounts[5],value:66});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[6],value:93});

result = await instance.sweepCommission(837291);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("yq3eJaG0cN86F",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 16',async() => {
result = await instance.claimThrone("5oXzewy28mpiZKD",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(261981);
await instance.sendTransaction({from:accounts[4],value:90});

result = await instance.transferOwnership(accounts[0]);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[3],value:72});

result = await instance.claimThrone("JfE1zhYs4DTHt",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(742864);
result = await instance.transferOwnership(accounts[5]);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[8],value:42});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(396858);
result = await instance.claimThrone("TWe0GofpU4kLtXAjqaB",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("X2kUvVw1HlLhjQWM7Jx",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[9],value:62});

result = await instance.sweepCommission(491936);
});
it('test 20',async() => {
result = await instance.claimThrone("Yvn5r3kwaoRq2Z8I",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(236561);
await instance.sendTransaction({from:accounts[4],value:81});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[4],value:69});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("HFpdzP6es2On59mNuiQr",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(710828);
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[8],value:58});

result = await instance.sweepCommission(343939);
result = await instance.claimThrone("IWn0MeGuv2QPS",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[3],value:88});

result = await instance.claimThrone("7rcMU5xZ1kFWCHusVhfA",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(653580);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
result = await instance.sweepCommission(1002053);
await instance.sendTransaction({from:accounts[7],value:34});

result = await instance.claimThrone("So51lMbuw6",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[7],value:36});

result = await instance.sweepCommission(974397);
result = await instance.claimThrone("HCwd5lapZ96UM1",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 26',async() => {
result = await instance.sweepCommission(189939);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[7],value:88});

result = await instance.claimThrone("bhDpLoVaOxiC7Qyrwd9",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 27',async() => {
result = await instance.sweepCommission(178835);
await instance.sendTransaction({from:accounts[5],value:38});

result = await instance.claimThrone("HmDPWd6I9UkF8xtXaKf",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 28',async() => {
result = await instance.claimThrone("t4fhcOXLT0Ck57q",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(809163);
await instance.sendTransaction({from:accounts[8],value:30});

result = await instance.transferOwnership(accounts[0]);
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[8],value:9});

result = await instance.sweepCommission(665338);
result = await instance.claimThrone("JCGN49bMROIsZ56vLrd",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(1))});
});
});
