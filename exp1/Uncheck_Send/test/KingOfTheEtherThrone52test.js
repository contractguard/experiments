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
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[4],value:82});

result = await instance.claimThrone("TwzMCKeuvE642acQRqik",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(282021);
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[6],value:79});

result = await instance.sweepCommission(730377);
result = await instance.claimThrone("YNIPQvAXEpak9yF",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 2',async() => {
result = await instance.claimThrone("U0s9GVfdFq6W",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[6],value:15});

result = await instance.sweepCommission(704975);
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[6],value:94});

result = await instance.sweepCommission(450967);
result = await instance.claimThrone("DHzXnjTr2Uu3b",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 4',async() => {
result = await instance.claimThrone("UiY3Q9lRymsdH",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(812708);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[9],value:25});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[4],value:67});

result = await instance.sweepCommission(504412);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("y0jqKdUMvXzY3eITSV6",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 6',async() => {
result = await instance.sweepCommission(581884);
result = await instance.claimThrone("1Hu8ZDFNvymLK",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:20});

});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("tNV6nzgjCs2LR",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[3],value:19});

result = await instance.sweepCommission(185144);
});
it('test 8',async() => {
result = await instance.claimThrone("KPB8YOoibg",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(870066);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:57});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[4],value:41});

result = await instance.sweepCommission(843415);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("6iPy49DYvb2HrGs0wCEl",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(388656);
result = await instance.claimThrone("T30R6rP1F4o5fOWZ7j",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[9],value:75});

});
it('test 11',async() => {
result = await instance.claimThrone("DIwJYA9Kqm",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(56435);
await instance.sendTransaction({from:accounts[7],value:47});

result = await instance.transferOwnership(accounts[3]);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[1],value:69});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(422628);
result = await instance.claimThrone("St3fNLGDkTcO",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[6],value:87});

result = await instance.sweepCommission(34596);
result = await instance.claimThrone("idwYDkjlTv2J",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(238610);
result = await instance.claimThrone("BVbmyosA0dwQtZ",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[2],value:39});

});
it('test 15',async() => {
result = await instance.claimThrone("tFq4WgQxm8KLDi7dV1EA",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(843134);
await instance.sendTransaction({from:accounts[8],value:53});

});
it('test 16',async() => {
result = await instance.sweepCommission(840211);
result = await instance.claimThrone("vlzFgijXcyT",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:36});

result = await instance.transferOwnership(accounts[3]);
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(228066);
await instance.sendTransaction({from:accounts[8],value:9});

result = await instance.claimThrone("o3fwLJsFC9",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 18',async() => {
result = await instance.sweepCommission(250991);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[5],value:10});

result = await instance.claimThrone("onhrHXg594IPjGD",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[4],value:17});

result = await instance.sweepCommission(1024396);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("1OMWV3tbLPoi4",{from:accounts[44],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[6],value:47});

result = await instance.claimThrone("KIeTX9HCpy",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(588928);
});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("vTe5yxqD9WXjBNur",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(58621);
await instance.sendTransaction({from:accounts[2],value:5});

});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
result = await instance.claimThrone("plx3r7ZJni8Pz1",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(962077);
await instance.sendTransaction({from:accounts[7],value:26});

});
it('test 23',async() => {
result = await instance.sweepCommission(632494);
await instance.sendTransaction({from:accounts[9],value:45});

result = await instance.claimThrone("cnPpKDIw2krZbuqgMoi",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[6],value:10});

result = await instance.sweepCommission(332774);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("LrYi4XvNho0bdnSlmy",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[7],value:71});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(795658);
result = await instance.claimThrone("TPgNFHWKJpyS",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[5],value:24});

result = await instance.claimThrone("PmhXZUjM3A",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(564894);
result = await instance.transferOwnership(accounts[3]);
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(554387);
result = await instance.claimThrone("2aXqOLNlERUdW0gImK6",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:30});

});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("NnKw0yGLsXr1",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:22});

result = await instance.sweepCommission(200989);
});
it('test 29',async() => {
result = await instance.sweepCommission(483031);
await instance.sendTransaction({from:accounts[2],value:61});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("SmuZGaP57wY",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(5))});
});
});
