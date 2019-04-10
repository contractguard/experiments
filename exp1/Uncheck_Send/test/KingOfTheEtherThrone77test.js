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
result = await instance.claimThrone("Vmo4Dz6CAlg3k9R5",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(368303);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[2],value:79});

});
it('test 1',async() => {
result = await instance.sweepCommission(293177);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[4],value:78});

result = await instance.claimThrone("VyfoaKD8Pc1pdgGHCRXx",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("Xzp3ByinQ5EG",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(348574);
await instance.sendTransaction({from:accounts[7],value:33});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[3],value:96});

result = await instance.claimThrone("zw5PhMEqdUBLX",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(264210);
result = await instance.transferOwnership(accounts[4]);
});
it('test 4',async() => {
result = await instance.sweepCommission(827579);
result = await instance.claimThrone("hcp5KjDCf2",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[4],value:43});

});
it('test 5',async() => {
result = await instance.sweepCommission(998397);
await instance.sendTransaction({from:accounts[8],value:6});

result = await instance.claimThrone("NcmSCaK7gdpz",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[1],value:44});

result = await instance.sweepCommission(258136);
result = await instance.claimThrone("lk3xVfH4578AoX",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[5],value:90});

result = await instance.claimThrone("VDwQOoS0IXmuaypk9",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(839789);
result = await instance.transferOwnership(accounts[0]);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[1],value:80});

result = await instance.sweepCommission(610838);
result = await instance.claimThrone("u8qcPMLav9hfx13JH27T",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[4],value:47});

result = await instance.claimThrone("STHQXerpl9kW",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(554699);
});
it('test 10',async() => {
result = await instance.claimThrone("udpI8F4kx6zVQXcH",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:24});

result = await instance.sweepCommission(345929);
});
it('test 11',async() => {
result = await instance.claimThrone("uX28kSvNYhIW50s1",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[4],value:65});

result = await instance.sweepCommission(615047);
result = await instance.transferOwnership(accounts[2]);
});
it('test 12',async() => {
result = await instance.claimThrone("2pCOmyMcGETdRsNZniJ",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[4],value:72});

result = await instance.sweepCommission(602792);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[4],value:93});

result = await instance.sweepCommission(567334);
result = await instance.claimThrone("O4Yul21pTQ9o38ZAneC6",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[8],value:93});

result = await instance.sweepCommission(581691);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("PTcnLl7oWayO6zABG1Rj",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 15',async() => {
result = await instance.claimThrone("KF9Xi4kOdpg",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(684338);
await instance.sendTransaction({from:accounts[2],value:50});

result = await instance.transferOwnership(accounts[3]);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[9],value:4});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("9FhSARJMz5ts",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(654413);
});
it('test 17',async() => {
result = await instance.sweepCommission(269404);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("3gkH7szRcCb",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:38});

});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(640379);
await instance.sendTransaction({from:accounts[7],value:93});

result = await instance.claimThrone("LmHIQcA3XKtZ5x",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 19',async() => {
result = await instance.sweepCommission(783837);
result = await instance.claimThrone("p6HhSKcFO0e",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:25});

result = await instance.transferOwnership(accounts[3]);
});
it('test 20',async() => {
result = await instance.sweepCommission(1016525);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[8],value:77});

result = await instance.claimThrone("YxdKjguGPieyhO7c",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 21',async() => {
result = await instance.sweepCommission(660289);
await instance.sendTransaction({from:accounts[8],value:95});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("nKCMqc8ou6LApg3",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 22',async() => {
result = await instance.sweepCommission(246287);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("CUmz97OnJcfRaFHq",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:15});

});
it('test 23',async() => {
result = await instance.sweepCommission(213997);
await instance.sendTransaction({from:accounts[8],value:62});

result = await instance.claimThrone("eROwym31WC2fpqKQz",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[9],value:40});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("N2HV9EhXuqbd3DFl",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(295217);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[5],value:80});

result = await instance.claimThrone("WNMf4bSRteZupwG",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(945414);
});
it('test 26',async() => {
result = await instance.claimThrone("RbvrECDJIW7",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[4],value:78});

result = await instance.sweepCommission(901747);
result = await instance.transferOwnership(accounts[5]);
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[1],value:75});

result = await instance.claimThrone("zbWSFfOL4cIv3lCi",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(366818);
});
it('test 28',async() => {
result = await instance.claimThrone("ELS9BthM2a",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:44});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(502133);
});
it('test 29',async() => {
result = await instance.claimThrone("9UHLRcml2J8Y",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:27});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(325114);
});
});
