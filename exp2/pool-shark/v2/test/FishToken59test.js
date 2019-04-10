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
await instance.transfer(accounts[39],130,{from:accounts[29]});
await instance.transfer(accounts[24],311,{from:accounts[19]});
await instance.transfer(accounts[19],329,{from:accounts[30]});
await instance.transfer(accounts[38],230,{from:accounts[15]});
await instance.transfer(accounts[36],215,{from:accounts[21]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[4],194,{from:accounts[35]});
await instance.transfer(accounts[7],339,{from:accounts[30]});
await instance.transfer(accounts[5],393,{from:accounts[24]});
await instance.transfer(accounts[9],141,{from:accounts[32]});
await instance.transfer(accounts[38],366,{from:accounts[3]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[6],196,{from:accounts[15]});
await instance.transfer(accounts[13],221,{from:accounts[19]});
await instance.transfer(accounts[16],203,{from:accounts[8]});
await instance.transfer(accounts[2],500,{from:accounts[37]});
await instance.transfer(accounts[28],467,{from:accounts[25]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[14],120,{from:accounts[0]});
await instance.transfer(accounts[32],379,{from:accounts[4]});
await instance.transfer(accounts[17],498,{from:accounts[0]});
await instance.transfer(accounts[13],259,{from:accounts[6]});
await instance.transfer(accounts[6],325,{from:accounts[39]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[22],314,{from:accounts[28]});
await instance.transfer(accounts[5],170,{from:accounts[22]});
await instance.transfer(accounts[22],430,{from:accounts[0]});
await instance.transfer(accounts[19],169,{from:accounts[0]});
await instance.transfer(accounts[4],417,{from:accounts[15]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[34],325,{from:accounts[34]});
await instance.transfer(accounts[19],479,{from:accounts[24]});
await instance.transfer(accounts[6],414,{from:accounts[39]});
await instance.transfer(accounts[37],216,{from:accounts[30]});
await instance.transfer(accounts[9],435,{from:accounts[4]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[25],345,{from:accounts[34]});
await instance.transfer(accounts[28],398,{from:accounts[33]});
await instance.transfer(accounts[21],163,{from:accounts[26]});
await instance.transfer(accounts[29],263,{from:accounts[37]});
await instance.transfer(accounts[7],373,{from:accounts[33]});
});it('test 15',async() => {
});
it('acctack', async() => {
 await instance.addToParticipants(accounts[88]);
});
});
});
