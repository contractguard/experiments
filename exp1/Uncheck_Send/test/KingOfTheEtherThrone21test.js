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
result = await instance.sweepCommission(225394);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:62});

result = await instance.claimThrone("6pSCBiMTZxOu93XQI",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[8],value:56});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("93m4EbN1Odpuv",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(724006);
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("CVmz4fErue38yB5",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:41});

result = await instance.sweepCommission(702206);
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("fBtg2ueLNnFvQqI89hxi",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(58970);
await instance.sendTransaction({from:accounts[8],value:67});

});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[1],value:41});

result = await instance.sweepCommission(77434);
result = await instance.claimThrone("5nHkjA3a1chC04sUR",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("Fs6Codue5RMm0aw8D1q7",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(890182);
await instance.sendTransaction({from:accounts[9],value:70});

});
it('test 6',async() => {
result = await instance.claimThrone("t6gv1jq497ibhEY",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[8],value:62});

result = await instance.sweepCommission(613124);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[2],value:61});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("WsVUpGn894Yv0OwZhc",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(1047365);
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(110618);
await instance.sendTransaction({from:accounts[8],value:43});

result = await instance.claimThrone("BC316z4DrpqXln8kRYZG",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 9',async() => {
result = await instance.claimThrone("FuYyj0cTzltJ9",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(226188);
await instance.sendTransaction({from:accounts[6],value:42});

result = await instance.transferOwnership(accounts[4]);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[6],value:13});

result = await instance.sweepCommission(236024);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("ErM3mf0CZPoL",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[8],value:31});

result = await instance.claimThrone("XZ3D4HgQdMIf7s",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(28060);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[2],value:95});

result = await instance.claimThrone("rj4iVyk9t2Ll7AeUQnP",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(628995);
result = await instance.transferOwnership(accounts[3]);
});
it('test 13',async() => {
result = await instance.claimThrone("mrj5iCbwcYMQu",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(986283);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[1],value:45});

});
it('test 14',async() => {
result = await instance.sweepCommission(21223);
await instance.sendTransaction({from:accounts[6],value:30});

result = await instance.claimThrone("u4UbEYDZz6gljSKeNH",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[6],value:9});

result = await instance.claimThrone("Yq4X6ZVQjKnxWe3TG",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(61798);
});
it('test 16',async() => {
result = await instance.sweepCommission(982174);
await instance.sendTransaction({from:accounts[5],value:6});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("IQefHkdnNhBObmAD5",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[3],value:21});

result = await instance.claimThrone("VGUP1iFbgjvhI0Mzk",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(271494);
});
it('test 18',async() => {
result = await instance.claimThrone("OkBZXT9iqDYW",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[8],value:8});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(664948);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[9],value:82});

result = await instance.sweepCommission(504423);
result = await instance.claimThrone("oFqgIcsLZtufR6E8MK",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 20',async() => {
result = await instance.sweepCommission(395998);
result = await instance.claimThrone("oy2huX1rQl9UV8Kg6",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[4],value:6});

});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(605230);
await instance.sendTransaction({from:accounts[4],value:71});

result = await instance.claimThrone("3IDdQvsqCWzu",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(497220);
result = await instance.claimThrone("93KrbSGzwqpfCuV27Y",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[5],value:58});

});
it('test 23',async() => {
result = await instance.claimThrone("7qZnbEH6cr",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[6],value:35});

result = await instance.sweepCommission(49628);
});
it('test 24',async() => {
result = await instance.sweepCommission(153993);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[2],value:22});

result = await instance.claimThrone("giLJdUmsX2q5",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("UXisNultWSydIKe6D3r",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(188672);
await instance.sendTransaction({from:accounts[5],value:29});

});
it('test 26',async() => {
result = await instance.claimThrone("TbsIkMSpczAa",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(631352);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[6],value:34});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[3],value:30});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("qvhsG45uaIHiEY",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(671046);
});
it('test 28',async() => {
result = await instance.claimThrone("N3e1kCcm8b6l2RUyh",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[4],value:90});

result = await instance.sweepCommission(817142);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[8],value:18});

result = await instance.claimThrone("RTU1CzLIucfapA0",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(782019);
result = await instance.transferOwnership(accounts[1]);
});
});
