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
await instance.transfer(accounts[32],194,{from:accounts[8]});
await instance.transfer(accounts[29],164,{from:accounts[27]});
await instance.transfer(accounts[5],204,{from:accounts[12]});
await instance.transfer(accounts[25],353,{from:accounts[39]});
await instance.transfer(accounts[9],219,{from:accounts[38]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[15],329,{from:accounts[19]});
await instance.transfer(accounts[6],105,{from:accounts[38]});
await instance.transfer(accounts[29],237,{from:accounts[18]});
await instance.transfer(accounts[18],415,{from:accounts[21]});
await instance.transfer(accounts[17],433,{from:accounts[40]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[32],106,{from:accounts[15]});
await instance.transfer(accounts[27],448,{from:accounts[33]});
await instance.transfer(accounts[37],318,{from:accounts[9]});
await instance.transfer(accounts[19],409,{from:accounts[25]});
await instance.transfer(accounts[8],285,{from:accounts[33]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[1],337,{from:accounts[7]});
await instance.transfer(accounts[6],459,{from:accounts[28]});
await instance.transfer(accounts[3],347,{from:accounts[12]});
await instance.transfer(accounts[11],460,{from:accounts[26]});
await instance.transfer(accounts[8],396,{from:accounts[11]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[15],138,{from:accounts[24]});
await instance.transfer(accounts[5],273,{from:accounts[8]});
await instance.transfer(accounts[7],229,{from:accounts[26]});
await instance.transfer(accounts[25],440,{from:accounts[30]});
await instance.transfer(accounts[24],182,{from:accounts[18]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[0],496,{from:accounts[37]});
await instance.transfer(accounts[18],152,{from:accounts[2]});
await instance.transfer(accounts[8],366,{from:accounts[34]});
await instance.transfer(accounts[32],125,{from:accounts[14]});
await instance.transfer(accounts[3],158,{from:accounts[25]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[13],463,{from:accounts[24]});
await instance.transfer(accounts[35],287,{from:accounts[23]});
await instance.transfer(accounts[32],468,{from:accounts[18]});
await instance.transfer(accounts[19],407,{from:accounts[26]});
await instance.transfer(accounts[19],241,{from:accounts[9]});
});it('test 15',async() => {
});
it('acctack', async() => {
 await instance.addToParticipants(accounts[88]);
});
});
});
