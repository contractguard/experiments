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
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(838600);
result = await instance.claimThrone("iVb6z4Qf7392hSG1R",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:58});

});
it('test 1',async() => {
result = await instance.sweepCommission(151385);
result = await instance.claimThrone("QeXAuHVnR4MslCvaqNk",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:78});

result = await instance.transferOwnership(accounts[1]);
});
it('test 2',async() => {
result = await instance.sweepCommission(232504);
result = await instance.claimThrone("st7eODo5E8uIx",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:71});

result = await instance.transferOwnership(accounts[4]);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[8],value:88});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(945860);
result = await instance.claimThrone("Siun6jWsl31DvE5X",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(525877);
result = await instance.claimThrone("k9l48CTVnKauFLf2",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[1],value:84});

});
it('test 5',async() => {
result = await instance.claimThrone("jGNuxgca1lRy",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:47});

result = await instance.sweepCommission(254403);
result = await instance.transferOwnership(accounts[5]);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[3],value:6});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("NftqMLQSWAn",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(792133);
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:9});

result = await instance.sweepCommission(958551);
result = await instance.claimThrone("ueSycVplgk1YFjh",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("hQaA9bYSJI",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:51});

result = await instance.sweepCommission(292880);
});
it('test 9',async() => {
result = await instance.sweepCommission(279911);
result = await instance.claimThrone("McTfYwNkQdsXxSHEra84",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:45});

});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[4],value:77});

result = await instance.sweepCommission(1007368);
result = await instance.claimThrone("TtFZj16HbRzBWQUyJu",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:58});

result = await instance.sweepCommission(394940);
result = await instance.claimThrone("ulivVeXNJB3",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 12',async() => {
result = await instance.sweepCommission(376253);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:95});

result = await instance.claimThrone("4poKO0P8crm",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 13',async() => {
result = await instance.sweepCommission(255704);
await instance.sendTransaction({from:accounts[5],value:70});

result = await instance.claimThrone("LsqTICmRvc3Pg",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 14',async() => {
result = await instance.sweepCommission(113933);
result = await instance.claimThrone("HR3dyMLmEeCT",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:30});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[7],value:100});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(489196);
result = await instance.claimThrone("wWd0JojvPBzOp3hX5N",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(7199);
result = await instance.claimThrone("1kaiFoA9sKyJVL",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:24});

});
it('test 17',async() => {
result = await instance.sweepCommission(598855);
result = await instance.claimThrone("Q9Ld0HkP53fuEDIblz",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[4],value:7});

});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("Z2vhNYpCG9fPU",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(150513);
await instance.sendTransaction({from:accounts[3],value:14});

});
it('test 19',async() => {
result = await instance.claimThrone("VS07la2yKFXGRsbI",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:53});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(721376);
});
it('test 20',async() => {
result = await instance.claimThrone("0VF1IPg76YS2awp",{from:accounts[44],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(420851);
await instance.sendTransaction({from:accounts[9],value:51});

result = await instance.transferOwnership(accounts[2]);
});
it('test 21',async() => {
result = await instance.claimThrone("6OvDZCKpgrk",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:89});

result = await instance.sweepCommission(398369);
result = await instance.transferOwnership(accounts[1]);
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("rOThkBni1eyg5XP2",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(734436);
await instance.sendTransaction({from:accounts[3],value:28});

});
it('test 23',async() => {
result = await instance.sweepCommission(890837);
result = await instance.claimThrone("kWh8xHJtQPEsd9",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:65});

result = await instance.transferOwnership(accounts[2]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(207906);
await instance.sendTransaction({from:accounts[6],value:88});

result = await instance.claimThrone("m7PSUChNZHIW",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[3],value:70});

result = await instance.claimThrone("nH9RyT4COJio1Gb2g",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(645589);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[3],value:70});

result = await instance.sweepCommission(6055);
result = await instance.claimThrone("Z2q81PUDRsIgKwmWf",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[8],value:84});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(703258);
result = await instance.claimThrone("cQzuH4YZ12FA5N",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 28',async() => {
result = await instance.claimThrone("uPmNKGfpgqBFRXClVjw",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(832886);
await instance.sendTransaction({from:accounts[8],value:81});

result = await instance.transferOwnership(accounts[4]);
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("QrLDiekK89JBOGM",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(165393);
await instance.sendTransaction({from:accounts[1],value:71});

});
});
