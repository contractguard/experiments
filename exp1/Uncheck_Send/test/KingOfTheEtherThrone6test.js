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
await instance.sendTransaction({from:accounts[8],value:11});

result = await instance.claimThrone("OTnyG6LHx9f",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(98887);
result = await instance.transferOwnership(accounts[1]);
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(136086);
result = await instance.claimThrone("TS2NPqnLMhG0Q",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:28});

});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("a1I8D6Qnyk",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(240741);
await instance.sendTransaction({from:accounts[5],value:30});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[9],value:43});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("Qm6nG8fxoSbVgLj",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(760662);
});
it('test 4',async() => {
result = await instance.sweepCommission(269772);
await instance.sendTransaction({from:accounts[5],value:75});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("SUz9maKVkRul",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(588799);
result = await instance.claimThrone("hHmfgptalrN7KGez",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[8],value:63});

});
it('test 6',async() => {
result = await instance.sweepCommission(287290);
await instance.sendTransaction({from:accounts[1],value:25});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("Ra41feIQAJ7gKNO",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[1],value:92});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(255013);
result = await instance.claimThrone("c24wH5YGkEtFQCshboJM",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 8',async() => {
result = await instance.sweepCommission(158251);
await instance.sendTransaction({from:accounts[9],value:45});

result = await instance.claimThrone("gCSYhTenDvbKsmP",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("u9zQpFL4fA",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[3],value:86});

result = await instance.sweepCommission(474861);
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[4],value:56});

result = await instance.claimThrone("H4r7SEeGCVP3T",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(481491);
});
it('test 11',async() => {
result = await instance.sweepCommission(451058);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("iZpdoBeAXRGI5LP",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:24});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[6],value:44});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(152993);
result = await instance.claimThrone("LZ3lYgi5oU",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 13',async() => {
result = await instance.claimThrone("eJPMEoIbCn7j",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(361525);
await instance.sendTransaction({from:accounts[7],value:2});

result = await instance.transferOwnership(accounts[2]);
});
it('test 14',async() => {
result = await instance.claimThrone("XKjEkYHGuxvaeJqdILN",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[1],value:88});

result = await instance.sweepCommission(329133);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[8],value:72});

result = await instance.claimThrone("trH9WSPvbO",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(549518);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[2],value:81});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(661599);
result = await instance.claimThrone("3yuAxfTg4F0WEZKtnsS",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("ZxQJhfjK5ilLF",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(418714);
await instance.sendTransaction({from:accounts[5],value:51});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[9],value:20});

result = await instance.sweepCommission(191415);
result = await instance.claimThrone("UFusTak1zdtKnYZ",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[5],value:61});

result = await instance.sweepCommission(230506);
result = await instance.claimThrone("A12BP9JFwarbvEfpxdo",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(158007);
result = await instance.claimThrone("IxqfSgeCpDBhVtlZaPYz",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[4],value:4});

});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[6],value:12});

result = await instance.sweepCommission(469662);
result = await instance.claimThrone("3OBIUA8CVD1dEiZ",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 22',async() => {
result = await instance.sweepCommission(385710);
await instance.sendTransaction({from:accounts[2],value:82});

result = await instance.claimThrone("9Ojl14NL87SAu",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 23',async() => {
result = await instance.claimThrone("rbDgOKFQnR",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(588349);
await instance.sendTransaction({from:accounts[4],value:29});

});
it('test 24',async() => {
result = await instance.sweepCommission(505935);
await instance.sendTransaction({from:accounts[3],value:60});

result = await instance.claimThrone("qvme0jCR5y6w1bt",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 25',async() => {
result = await instance.sweepCommission(1027280);
await instance.sendTransaction({from:accounts[2],value:39});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("NKHdZ8Pa2VSA4oite",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[8],value:53});

result = await instance.sweepCommission(857000);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("vgC1ZGe0K3rhsa5litb",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("YXnuc2khCBZ",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(372494);
await instance.sendTransaction({from:accounts[5],value:18});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[7],value:90});

result = await instance.sweepCommission(563017);
result = await instance.claimThrone("eZQqrInjlFyYzH5g",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("qXzLfdNnHeulxF",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:98});

result = await instance.sweepCommission(955894);
});
});
