const FishToken = artifacts.require("./FishToken.sol");

const BigNumber = web3.utils.toBN;
const bigValue = web3.utils.toBN('57896044618658097711785492504343953926634992332820282019728792003956564819968');

const timePeriodInSeconds = 3600;
const from = Math.floor(new Date() / 1000);
const to = from + timePeriodInSeconds;
contract('FishToken', async (accounts) => {
    const owner = accounts[0];
    const user1 = accounts[1];
    const user2 = accounts[2];

    describe("call direct", async () => {
        let instance;
        before('setup contract for each test', async () => {
            instance = await FishToken.new(to, {from: owner, gas: 1500000});
        });

it('test 0',async() => {
await instance.issueTokens(accounts[0],100000,{from:owner});
await instance.issueTokens(accounts[1],100000,{from:owner});
await instance.issueTokens(accounts[2],100000,{from:owner});
await instance.issueTokens(accounts[3],100000,{from:owner});
await instance.issueTokens(accounts[4],100000,{from:owner});
await instance.issueTokens(accounts[5],100000,{from:owner});
await instance.issueTokens(accounts[6],100000,{from:owner});
await instance.issueTokens(accounts[7],100000,{from:owner});
await instance.issueTokens(accounts[8],100000,{from:owner});
await instance.issueTokens(accounts[9],100000,{from:owner});
await instance.issueTokens(accounts[10],100000,{from:owner});
await instance.issueTokens(accounts[11],100000,{from:owner});
await instance.issueTokens(accounts[12],100000,{from:owner});
await instance.issueTokens(accounts[13],100000,{from:owner});
await instance.issueTokens(accounts[14],100000,{from:owner});
await instance.issueTokens(accounts[15],100000,{from:owner});
await instance.issueTokens(accounts[16],100000,{from:owner});
await instance.issueTokens(accounts[17],100000,{from:owner});
await instance.issueTokens(accounts[18],100000,{from:owner});
await instance.issueTokens(accounts[19],100000,{from:owner});
await instance.issueTokens(accounts[20],100000,{from:owner});
await instance.issueTokens(accounts[21],100000,{from:owner});
await instance.issueTokens(accounts[22],100000,{from:owner});
await instance.issueTokens(accounts[23],100000,{from:owner});
await instance.issueTokens(accounts[24],100000,{from:owner});
await instance.issueTokens(accounts[25],100000,{from:owner});
await instance.issueTokens(accounts[26],100000,{from:owner});
await instance.issueTokens(accounts[27],100000,{from:owner});
await instance.issueTokens(accounts[28],100000,{from:owner});
await instance.issueTokens(accounts[29],100000,{from:owner});
await instance.issueTokens(accounts[30],100000,{from:owner});
await instance.issueTokens(accounts[31],100000,{from:owner});
await instance.issueTokens(accounts[32],100000,{from:owner});
await instance.issueTokens(accounts[33],100000,{from:owner});
await instance.issueTokens(accounts[34],100000,{from:owner});
await instance.issueTokens(accounts[35],100000,{from:owner});
await instance.issueTokens(accounts[36],100000,{from:owner});
await instance.issueTokens(accounts[37],100000,{from:owner});
await instance.issueTokens(accounts[38],100000,{from:owner});
await instance.issueTokens(accounts[39],100000,{from:owner});
});
it('test 1',async() => {
});
it('test 2',async() => {
await instance.transfer(accounts[26],465,{from:accounts[6]});
await instance.transfer(accounts[34],381,{from:accounts[2]});
await instance.transfer(accounts[27],266,{from:accounts[0]});
await instance.transfer(accounts[18],256,{from:accounts[35]});
await instance.transfer(accounts[37],279,{from:accounts[39]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[5],411,{from:accounts[32]});
await instance.transfer(accounts[14],498,{from:accounts[33]});
await instance.transfer(accounts[37],321,{from:accounts[23]});
await instance.transfer(accounts[22],420,{from:accounts[39]});
await instance.transfer(accounts[18],344,{from:accounts[2]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[39],223,{from:accounts[9]});
await instance.transfer(accounts[17],432,{from:accounts[2]});
await instance.transfer(accounts[23],147,{from:accounts[25]});
await instance.transfer(accounts[28],385,{from:accounts[16]});
await instance.transfer(accounts[12],151,{from:accounts[11]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[29],214,{from:accounts[30]});
await instance.transfer(accounts[20],137,{from:accounts[13]});
await instance.transfer(accounts[0],328,{from:accounts[3]});
await instance.transfer(accounts[11],421,{from:accounts[11]});
await instance.transfer(accounts[14],268,{from:accounts[16]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[26],176,{from:accounts[14]});
await instance.transfer(accounts[23],392,{from:accounts[18]});
await instance.transfer(accounts[6],139,{from:accounts[17]});
await instance.transfer(accounts[18],423,{from:accounts[8]});
await instance.transfer(accounts[8],478,{from:accounts[3]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[8],393,{from:accounts[8]});
await instance.transfer(accounts[33],266,{from:accounts[35]});
await instance.transfer(accounts[7],126,{from:accounts[22]});
await instance.transfer(accounts[23],332,{from:accounts[28]});
await instance.transfer(accounts[20],162,{from:accounts[22]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[26],444,{from:accounts[20]});
await instance.transfer(accounts[0],487,{from:accounts[2]});
await instance.transfer(accounts[0],361,{from:accounts[15]});
await instance.transfer(accounts[17],404,{from:accounts[3]});
await instance.transfer(accounts[7],382,{from:accounts[17]});
});it('test 15',async() => {
});
it('attack', async() => {
 await instance.transfer(accounts[100],bigValue,{from:accounts[0]});
});
});
});
