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
result = await instance.sweepCommission(602234);
result = await instance.claimThrone("JoW9SED8MG7nh",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[8],value:31});

});
it('test 1',async() => {
result = await instance.sweepCommission(488216);
result = await instance.claimThrone("zuM2taQFrCgIP",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[8],value:26});

result = await instance.transferOwnership(accounts[0]);
});
it('test 2',async() => {
result = await instance.sweepCommission(938295);
await instance.sendTransaction({from:accounts[6],value:26});

result = await instance.claimThrone("pa6Eig4ODJ",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 3',async() => {
result = await instance.claimThrone("obtE9eKU0xcrvu",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[5],value:17});

result = await instance.sweepCommission(217288);
});
it('test 4',async() => {
result = await instance.sweepCommission(59968);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("0Aaym9G6KMgt7o",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:33});

});
it('test 5',async() => {
result = await instance.claimThrone("piAPKvZYSEzFnGdfVX",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:50});

result = await instance.sweepCommission(615824);
result = await instance.transferOwnership(accounts[1]);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[6],value:9});

result = await instance.claimThrone("jHy7OrfEBUTaem3",{from:accounts[44],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(121034);
result = await instance.transferOwnership(accounts[4]);
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("hAyb4JKIEpYkSt7a19s",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(893987);
await instance.sendTransaction({from:accounts[6],value:55});

});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(227816);
await instance.sendTransaction({from:accounts[8],value:82});

result = await instance.claimThrone("kAMW2gG1OlTqo",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 9',async() => {
result = await instance.claimThrone("c63rVMga8XwlRK",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[3],value:90});

result = await instance.sweepCommission(40378);
});
it('test 10',async() => {
result = await instance.claimThrone("MzWApknhvQScoq0i",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:59});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(302217);
});
it('test 11',async() => {
result = await instance.claimThrone("54Fg2Z9spLRhXAMQP",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(813160);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[4],value:63});

});
it('test 12',async() => {
result = await instance.claimThrone("b9vA5qwQiTDanOd8K",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[1],value:48});

result = await instance.sweepCommission(561075);
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(780242);
await instance.sendTransaction({from:accounts[3],value:67});

result = await instance.claimThrone("6lBJ21KYES98Pbd5jau",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[7],value:72});

result = await instance.claimThrone("60mUP2dO9SltujrFYC",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(324996);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[6],value:93});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("Y9UaCGn2Dfi1AudT",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(615505);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[8],value:3});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(542479);
result = await instance.claimThrone("lR6yNoC3Ub7q1d",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 17',async() => {
result = await instance.claimThrone("mLesRTUdKYzD",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[8],value:95});

result = await instance.sweepCommission(1034672);
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("9K8iTV3dxa4Zg1r",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(839682);
await instance.sendTransaction({from:accounts[7],value:85});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[6],value:28});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(13374);
result = await instance.claimThrone("UomYZBcWLnsRkTQS",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 20',async() => {
result = await instance.claimThrone("Oiw5D0QAgfSy8NE",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:99});

result = await instance.sweepCommission(763582);
});
it('test 21',async() => {
result = await instance.claimThrone("fctO5F04xuNL",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[1],value:56});

result = await instance.sweepCommission(173206);
result = await instance.transferOwnership(accounts[2]);
});
it('test 22',async() => {
result = await instance.claimThrone("kGHIBZE9hpydac",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:76});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(288074);
});
it('test 23',async() => {
result = await instance.claimThrone("4qCIYJmGLlhXrxiPtZSB",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[9],value:99});

result = await instance.sweepCommission(790905);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("4J5Uo3ugrf7yvPW0VGF",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[5],value:83});

result = await instance.sweepCommission(905784);
});
it('test 25',async() => {
result = await instance.sweepCommission(577782);
await instance.sendTransaction({from:accounts[8],value:44});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("ihBlE6tYfb379jCRdXHK",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 26',async() => {
result = await instance.claimThrone("SKNWPtUL3x1kAiO8I7",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:98});

result = await instance.sweepCommission(149667);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[2],value:70});

result = await instance.sweepCommission(701824);
result = await instance.claimThrone("QDB6G1laeH2",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 28',async() => {
result = await instance.claimThrone("NPq1xfODyaLmkZGjFTE7",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(482538);
await instance.sendTransaction({from:accounts[5],value:43});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[6],value:78});

result = await instance.sweepCommission(9880);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("56hMvq97CZkGu",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(3))});
});
});
