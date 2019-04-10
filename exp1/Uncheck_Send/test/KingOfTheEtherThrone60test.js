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
await instance.sendTransaction({from:accounts[8],value:75});

result = await instance.sweepCommission(971121);
result = await instance.claimThrone("0ifd6IwycARJ4Tlq1YUF",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[8],value:97});

result = await instance.sweepCommission(554687);
result = await instance.claimThrone("4yZm0qiEISKb2gBCYJQ",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(148690);
await instance.sendTransaction({from:accounts[7],value:36});

result = await instance.claimThrone("wXANcmSsxEO5QF2",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 3',async() => {
result = await instance.claimThrone("8jvV07ikqYt9DBU",{from:accounts[44],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[9],value:95});

result = await instance.sweepCommission(884723);
});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(443082);
await instance.sendTransaction({from:accounts[5],value:46});

result = await instance.claimThrone("90V8Npya6GoI",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 5',async() => {
result = await instance.claimThrone("k6dULSvG7rVb",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(493997);
await instance.sendTransaction({from:accounts[9],value:35});

});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(677361);
result = await instance.claimThrone("rq62h5aENb19mwAg",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:19});

});
it('test 7',async() => {
result = await instance.sweepCommission(529719);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[8],value:13});

result = await instance.claimThrone("ivGkWNyMJSZKQlXrU7wd",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("9iWeKXJQA6fVT7",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:82});

result = await instance.sweepCommission(156704);
});
it('test 9',async() => {
result = await instance.sweepCommission(172531);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("TEN1bYr2m9BCQwjpIKH",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[8],value:94});

});
it('test 10',async() => {
result = await instance.sweepCommission(816530);
result = await instance.claimThrone("1aJ8CLpNlDq4",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:57});

result = await instance.transferOwnership(accounts[5]);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[9],value:57});

result = await instance.claimThrone("QdrjOz651gef7HJ",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(765774);
});
it('test 12',async() => {
result = await instance.claimThrone("Wj4AKd2lmpb1zxI7Ms",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(45260);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[9],value:92});

});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(242285);
result = await instance.claimThrone("X7KyqMecRtlrNkS",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[8],value:18});

});
it('test 14',async() => {
result = await instance.sweepCommission(242718);
await instance.sendTransaction({from:accounts[1],value:95});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("VCy9ImB3SvDYO5sQ",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(42757);
await instance.sendTransaction({from:accounts[1],value:69});

result = await instance.claimThrone("iEepwh8xgIO5NB",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[1],value:25});

result = await instance.sweepCommission(265122);
result = await instance.claimThrone("u3mSnQLaqO5xTDVy",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[1],value:77});

result = await instance.sweepCommission(1032346);
result = await instance.claimThrone("iAouxMWey10UT",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(878045);
result = await instance.claimThrone("VAmMF3Jl4UI8fxEH",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[2],value:58});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[1],value:40});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("irkJ7qB1Dw",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(598636);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 20',async() => {
result = await instance.claimThrone("2fERD8CK1swioUvOmx7",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(717997);
await instance.sendTransaction({from:accounts[4],value:98});

result = await instance.transferOwnership(accounts[2]);
});
it('test 21',async() => {
result = await instance.sweepCommission(230187);
result = await instance.claimThrone("tWJBgh6uE7LOxFi9p4y",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[2],value:38});

result = await instance.transferOwnership(accounts[0]);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[5],value:64});

result = await instance.claimThrone("jBi0Zc4zxYMhg",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(872312);
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[4],value:36});

result = await instance.claimThrone("NxHrhzR7nilV",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(285042);
});
it('test 24',async() => {
result = await instance.sweepCommission(150453);
await instance.sendTransaction({from:accounts[4],value:45});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("1Na2GqChK63n",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 25',async() => {
result = await instance.sweepCommission(639659);
await instance.sendTransaction({from:accounts[9],value:4});

result = await instance.claimThrone("4RGNgkd2XqOmytHwe",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[5],value:17});

result = await instance.sweepCommission(757039);
result = await instance.claimThrone("afO0zyw4oBk65pPY",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 27',async() => {
result = await instance.sweepCommission(156053);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("LWSsMuo0p5acnhfVF4w",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[8],value:73});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[6],value:28});

result = await instance.sweepCommission(772980);
result = await instance.claimThrone("qubQN8yFUKjfiWT9mC",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[1],value:87});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("upZGJk8WzE4yVchI9Q",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(61585);
});
});
