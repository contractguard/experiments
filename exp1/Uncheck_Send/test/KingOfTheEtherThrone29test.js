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
await instance.sendTransaction({from:accounts[9],value:1});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("PlQToVGvUfnBsk",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(722296);
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[1],value:33});

result = await instance.claimThrone("e4a295WFZQ",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(159959);
});
it('test 2',async() => {
result = await instance.sweepCommission(393290);
result = await instance.claimThrone("m1YzWcVUwnodTesB",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[3],value:35});

result = await instance.transferOwnership(accounts[1]);
});
it('test 3',async() => {
result = await instance.sweepCommission(400877);
await instance.sendTransaction({from:accounts[4],value:76});

result = await instance.claimThrone("wB1OKlkcYPrMg",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[9],value:37});

result = await instance.sweepCommission(160705);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("GFj2JD6lUk7hQpNXg",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 5',async() => {
result = await instance.claimThrone("b4hQR3dJXAPu",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:30});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(297479);
});
it('test 6',async() => {
result = await instance.claimThrone("eV9WuIvBlbx3ZMsm",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(341144);
await instance.sendTransaction({from:accounts[6],value:2});

result = await instance.transferOwnership(accounts[0]);
});
it('test 7',async() => {
result = await instance.sweepCommission(316283);
result = await instance.claimThrone("CO49If2Q5WiV",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[8],value:3});

result = await instance.transferOwnership(accounts[2]);
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("cJTmNo3y9rDn4dH",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[8],value:25});

result = await instance.sweepCommission(301571);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(409011);
await instance.sendTransaction({from:accounts[8],value:97});

result = await instance.claimThrone("ALtqx2VGOnvhwo7TfYEy",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[1],value:93});

result = await instance.sweepCommission(572302);
result = await instance.claimThrone("XQUy5YPfSaWx3lbm",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[5],value:53});

result = await instance.sweepCommission(218406);
result = await instance.claimThrone("Lxtz5cn0HlKWCF3",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 12',async() => {
result = await instance.claimThrone("SiWmGEMvqrK9XydV8",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:39});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(490794);
});
it('test 13',async() => {
result = await instance.claimThrone("FjAtulQMK4Rvdoa",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:45});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(637693);
});
it('test 14',async() => {
result = await instance.sweepCommission(384163);
await instance.sendTransaction({from:accounts[8],value:54});

result = await instance.claimThrone("Tn0l26VPboUGEh5",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[8],value:14});

result = await instance.sweepCommission(746570);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("pMYLv7VZUeKOGgB5X",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 16',async() => {
result = await instance.sweepCommission(476268);
result = await instance.claimThrone("dOVaAjM29khFpDie",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[4],value:57});

result = await instance.transferOwnership(accounts[5]);
});
it('test 17',async() => {
result = await instance.sweepCommission(495997);
result = await instance.claimThrone("dxjicGWS7Yk1ypTJV",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[7],value:45});

result = await instance.transferOwnership(accounts[5]);
});
it('test 18',async() => {
result = await instance.sweepCommission(56757);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[5],value:54});

result = await instance.claimThrone("pzM8ey0WnS5tYKPEC",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(562628);
result = await instance.claimThrone("kRMOhXxLsbKnEQHIW8i",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[8],value:50});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[1],value:87});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("bVlrw3Bgkqv6GL",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(819943);
});
it('test 21',async() => {
result = await instance.claimThrone("HQTEXUJu7cm",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:14});

result = await instance.sweepCommission(180018);
result = await instance.transferOwnership(accounts[2]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
result = await instance.claimThrone("RZa4ixDWLN9",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:63});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(718205);
});
it('test 23',async() => {
result = await instance.sweepCommission(432049);
await instance.sendTransaction({from:accounts[4],value:93});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("ugU3X47K1RSqHEipItkW",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[5],value:98});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("OvcnPmHAu4xLk",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(546409);
});
it('test 25',async() => {
result = await instance.claimThrone("Wlc0n9quSyNUGgbIPkJ",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(202470);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[6],value:9});

});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("CJe94AzwTH",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(315006);
await instance.sendTransaction({from:accounts[1],value:8});

});
it('test 27',async() => {
result = await instance.claimThrone("RKEIGLl1CVaJ9Hm2ghZ",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(602629);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[4],value:79});

});
it('test 28',async() => {
result = await instance.sweepCommission(827031);
await instance.sendTransaction({from:accounts[9],value:4});

result = await instance.claimThrone("5PGkCoYKuI9FyJLNX2q",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[2],value:90});

result = await instance.claimThrone("obvmd7KkP3YIOj",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(117922);
});
});
