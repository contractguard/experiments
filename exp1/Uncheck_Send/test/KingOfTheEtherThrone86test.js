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
result = await instance.sweepCommission(140034);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[2],value:85});

result = await instance.claimThrone("5ba6EgwqrQ",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 1',async() => {
result = await instance.claimThrone("6cHoIj4ZmAs",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[1],value:51});

result = await instance.sweepCommission(880659);
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(840550);
result = await instance.claimThrone("pSxegoQnkJlTA702",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:26});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[9],value:56});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(339700);
result = await instance.claimThrone("MsBFCH0fJROnlP",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[9],value:57});

result = await instance.sweepCommission(810666);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("V1n6CmFzsfKSJ",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 5',async() => {
result = await instance.sweepCommission(245627);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[9],value:30});

result = await instance.claimThrone("W0juD3SsR64hKpcm9",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[7],value:80});

result = await instance.sweepCommission(57114);
result = await instance.claimThrone("huZEfLCKiBk2SeIs",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 7',async() => {
result = await instance.claimThrone("OemzkEPl4UtDHZL1",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:79});

result = await instance.sweepCommission(542584);
result = await instance.transferOwnership(accounts[5]);
});
it('test 8',async() => {
result = await instance.sweepCommission(658102);
result = await instance.claimThrone("UswGWyHMIJd2S",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[1],value:99});

});
it('test 9',async() => {
result = await instance.claimThrone("Ud4rIv90D5GO",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:75});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(430815);
});
it('test 10',async() => {
result = await instance.sweepCommission(802523);
result = await instance.claimThrone("tybNoDHZUrf",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[6],value:32});

});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(21768);
result = await instance.claimThrone("Rn7mYerTEcgKi",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:9});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[7],value:10});

result = await instance.claimThrone("plNgLn793M",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(579761);
result = await instance.transferOwnership(accounts[4]);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[8],value:67});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("kYA12IG8iDKeLd",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(637868);
});
it('test 14',async() => {
result = await instance.claimThrone("ycN9QSDPEv43sh1ote5",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(819638);
await instance.sendTransaction({from:accounts[4],value:14});

result = await instance.transferOwnership(accounts[4]);
});
it('test 15',async() => {
result = await instance.sweepCommission(802982);
await instance.sendTransaction({from:accounts[7],value:32});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("KLT0RvtUOlcXAb",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 16',async() => {
result = await instance.claimThrone("aiJBYNbX8CuTpAejV",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[6],value:7});

result = await instance.sweepCommission(1046318);
result = await instance.transferOwnership(accounts[5]);
});
it('test 17',async() => {
result = await instance.claimThrone("BL1ns8N7zX",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(739302);
await instance.sendTransaction({from:accounts[4],value:77});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[7],value:50});

result = await instance.claimThrone("Mrbo2IL1wBCuOaSlG8",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(928499);
result = await instance.transferOwnership(accounts[5]);
});
it('test 19',async() => {
result = await instance.claimThrone("regFp75A3fR",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(237403);
await instance.sendTransaction({from:accounts[2],value:56});

result = await instance.transferOwnership(accounts[4]);
});
it('test 20',async() => {
result = await instance.sweepCommission(570514);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[5],value:32});

result = await instance.claimThrone("V2EWkdz3JOF0tgiQre",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[6],value:74});

result = await instance.sweepCommission(571715);
result = await instance.claimThrone("vEFHORjIWcSlY26",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
result = await instance.claimThrone("WdpSqfEDL0XGRhb",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(963062);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[2],value:84});

});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[9],value:30});

result = await instance.claimThrone("qCpui6BGLT8o",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(864595);
});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[5],value:98});

result = await instance.claimThrone("ZRVBFJXEbHAS25uyLsvq",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(352945);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[9],value:78});

result = await instance.claimThrone("6IJorcQVh0Zp",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(506516);
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(999372);
result = await instance.claimThrone("QugyUO8rzkEoCAqit2WD",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:76});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[4],value:66});

result = await instance.sweepCommission(833491);
result = await instance.claimThrone("mtBPvS87KkTDa6FApQ1",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 28',async() => {
result = await instance.claimThrone("hAXZOCFTua",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:65});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(701461);
});
it('test 29',async() => {
result = await instance.claimThrone("QTZUDfjXiAlhv5WEdu",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(1047077);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[7],value:33});

});
});
