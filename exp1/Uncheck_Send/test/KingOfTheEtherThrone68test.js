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
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("HgRe3KNUsGI8QE5VumZb",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:63});

result = await instance.sweepCommission(862402);
});
it('test 1',async() => {
result = await instance.claimThrone("2Nctfo76xaPnlM3mp",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(572462);
await instance.sendTransaction({from:accounts[6],value:41});

});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(355428);
await instance.sendTransaction({from:accounts[4],value:14});

result = await instance.claimThrone("rzK07T8Xfk",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 3',async() => {
result = await instance.sweepCommission(850991);
await instance.sendTransaction({from:accounts[6],value:71});

result = await instance.claimThrone("579m2dbaKZ",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:80});

result = await instance.claimThrone("SwhlD62KbZoyj8s0gn1",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(464741);
});
it('test 5',async() => {
result = await instance.claimThrone("BGg71RK4fcL",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(496839);
await instance.sendTransaction({from:accounts[3],value:33});

result = await instance.transferOwnership(accounts[1]);
});
it('test 6',async() => {
result = await instance.claimThrone("cFprX4l73imNVJtqDKd",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(828560);
await instance.sendTransaction({from:accounts[2],value:18});

});
it('test 7',async() => {
result = await instance.sweepCommission(565528);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[4],value:73});

result = await instance.claimThrone("mMG2ulnREpOdcsKwvoP",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 8',async() => {
result = await instance.claimThrone("LBIWQzb9xv0pefw",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[3],value:80});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(812504);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(369497);
await instance.sendTransaction({from:accounts[6],value:94});

result = await instance.claimThrone("fLP901InR8sJzFAqCX",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 10',async() => {
result = await instance.sweepCommission(527423);
result = await instance.claimThrone("fW4Qh7yREjmn",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:78});

});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("1J9M0vNzdm",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(730056);
await instance.sendTransaction({from:accounts[5],value:90});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[5],value:21});

result = await instance.sweepCommission(429638);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("xB1X2GIL8i",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[3],value:51});

result = await instance.sweepCommission(898471);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("23uDtgEMAFyU9",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("YqQGtjg8yO1Fsk7fBl",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:24});

result = await instance.sweepCommission(768863);
});
it('test 15',async() => {
result = await instance.claimThrone("aIvzZ6OgY18lu",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(9342);
await instance.sendTransaction({from:accounts[2],value:10});

result = await instance.transferOwnership(accounts[4]);
});
it('test 16',async() => {
result = await instance.sweepCommission(873137);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("WcA2NidO1Mf4p",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:58});

});
it('test 17',async() => {
result = await instance.claimThrone("GOBEVso8LqIzQgPf",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(132357);
await instance.sendTransaction({from:accounts[2],value:8});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[3],value:43});

result = await instance.claimThrone("F78xU2oyYtEJrbWX",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(824800);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[2],value:68});

result = await instance.claimThrone("Q08HTzunYEdvK",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(918635);
});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[7],value:32});

result = await instance.claimThrone("sjU1MAL2tWY",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(724163);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[9],value:49});

result = await instance.claimThrone("y7poQuFYixD6IJcO5",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(570);
result = await instance.transferOwnership(accounts[0]);
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(765570);
await instance.sendTransaction({from:accounts[6],value:78});

result = await instance.claimThrone("7f2XUpcQAy",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 23',async() => {
result = await instance.claimThrone("M7m25dDG0C",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[7],value:82});

result = await instance.sweepCommission(277964);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
result = await instance.sweepCommission(659514);
result = await instance.claimThrone("3WPt0EHmqOjbS",{from:accounts[44],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[9],value:80});

});
it('test 25',async() => {
result = await instance.sweepCommission(164419);
await instance.sendTransaction({from:accounts[4],value:40});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("roCaBUSL3TAe6IdkW",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[6],value:59});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(819841);
result = await instance.claimThrone("QiHbgNCD0TSMoYxdthzm",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(161708);
result = await instance.claimThrone("pDchjC7x23A9ezUYnI",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[8],value:55});

});
it('test 28',async() => {
result = await instance.claimThrone("OwE4k8pPn0",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(683204);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[3],value:25});

});
it('test 29',async() => {
result = await instance.claimThrone("pMfYNJzamKW",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(1040863);
await instance.sendTransaction({from:accounts[7],value:8});

});
});
