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
await instance.transfer(accounts[10],487,{from:accounts[39]});
await instance.transfer(accounts[35],282,{from:accounts[16]});
await instance.transfer(accounts[8],165,{from:accounts[1]});
await instance.transfer(accounts[21],168,{from:accounts[29]});
await instance.transfer(accounts[2],164,{from:accounts[17]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[33],178,{from:accounts[20]});
await instance.transfer(accounts[6],237,{from:accounts[5]});
await instance.transfer(accounts[18],365,{from:accounts[34]});
await instance.transfer(accounts[23],482,{from:accounts[32]});
await instance.transfer(accounts[34],208,{from:accounts[11]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[15],110,{from:accounts[3]});
await instance.transfer(accounts[14],148,{from:accounts[4]});
await instance.transfer(accounts[30],432,{from:accounts[5]});
await instance.transfer(accounts[12],449,{from:accounts[21]});
await instance.transfer(accounts[23],315,{from:accounts[35]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[24],203,{from:accounts[15]});
await instance.transfer(accounts[5],389,{from:accounts[15]});
await instance.transfer(accounts[0],349,{from:accounts[37]});
await instance.transfer(accounts[9],114,{from:accounts[29]});
await instance.transfer(accounts[3],152,{from:accounts[25]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[28],124,{from:accounts[23]});
await instance.transfer(accounts[11],190,{from:accounts[20]});
await instance.transfer(accounts[28],244,{from:accounts[18]});
await instance.transfer(accounts[8],424,{from:accounts[9]});
await instance.transfer(accounts[35],248,{from:accounts[36]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[2],469,{from:accounts[3]});
await instance.transfer(accounts[31],246,{from:accounts[8]});
await instance.transfer(accounts[38],174,{from:accounts[17]});
await instance.transfer(accounts[26],438,{from:accounts[12]});
await instance.transfer(accounts[26],106,{from:accounts[16]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[14],311,{from:accounts[39]});
await instance.transfer(accounts[15],368,{from:accounts[11]});
await instance.transfer(accounts[33],101,{from:accounts[12]});
await instance.transfer(accounts[14],436,{from:accounts[13]});
await instance.transfer(accounts[10],209,{from:accounts[19]});
});it('test 15',async() => {
});
it('acctack', async() => {
 await instance.addToParticipants(accounts[88]);
});
});
});
