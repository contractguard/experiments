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
await instance.transfer(accounts[38],335,{from:accounts[17]});
await instance.transfer(accounts[12],240,{from:accounts[20]});
await instance.transfer(accounts[40],168,{from:accounts[0]});
await instance.transfer(accounts[21],249,{from:accounts[7]});
await instance.transfer(accounts[27],418,{from:accounts[27]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[32],127,{from:accounts[25]});
await instance.transfer(accounts[18],449,{from:accounts[9]});
await instance.transfer(accounts[39],366,{from:accounts[38]});
await instance.transfer(accounts[10],259,{from:accounts[22]});
await instance.transfer(accounts[4],451,{from:accounts[21]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[21],399,{from:accounts[29]});
await instance.transfer(accounts[31],142,{from:accounts[16]});
await instance.transfer(accounts[25],280,{from:accounts[15]});
await instance.transfer(accounts[26],197,{from:accounts[11]});
await instance.transfer(accounts[33],156,{from:accounts[26]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[16],233,{from:accounts[3]});
await instance.transfer(accounts[16],328,{from:accounts[37]});
await instance.transfer(accounts[27],489,{from:accounts[35]});
await instance.transfer(accounts[21],426,{from:accounts[40]});
await instance.transfer(accounts[17],455,{from:accounts[21]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[5],340,{from:accounts[40]});
await instance.transfer(accounts[35],254,{from:accounts[25]});
await instance.transfer(accounts[26],204,{from:accounts[25]});
await instance.transfer(accounts[13],249,{from:accounts[37]});
await instance.transfer(accounts[17],321,{from:accounts[39]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[38],126,{from:accounts[29]});
await instance.transfer(accounts[36],161,{from:accounts[6]});
await instance.transfer(accounts[2],256,{from:accounts[10]});
await instance.transfer(accounts[40],372,{from:accounts[1]});
await instance.transfer(accounts[24],195,{from:accounts[37]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[24],329,{from:accounts[3]});
await instance.transfer(accounts[6],196,{from:accounts[26]});
await instance.transfer(accounts[31],252,{from:accounts[19]});
await instance.transfer(accounts[24],259,{from:accounts[3]});
await instance.transfer(accounts[15],144,{from:accounts[40]});
});it('test 15',async() => {
});
it('attack', async() => {
 await instance.transfer(accounts[100],bigValue,{from:accounts[0]});
});
});
});
