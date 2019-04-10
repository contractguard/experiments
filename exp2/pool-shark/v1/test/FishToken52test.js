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
await instance.transfer(accounts[19],311,{from:accounts[14]});
await instance.transfer(accounts[38],321,{from:accounts[33]});
await instance.transfer(accounts[14],426,{from:accounts[8]});
await instance.transfer(accounts[30],419,{from:accounts[7]});
await instance.transfer(accounts[18],199,{from:accounts[1]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[10],314,{from:accounts[2]});
await instance.transfer(accounts[16],457,{from:accounts[35]});
await instance.transfer(accounts[35],366,{from:accounts[12]});
await instance.transfer(accounts[18],344,{from:accounts[37]});
await instance.transfer(accounts[16],375,{from:accounts[37]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[39],190,{from:accounts[12]});
await instance.transfer(accounts[39],309,{from:accounts[18]});
await instance.transfer(accounts[4],177,{from:accounts[13]});
await instance.transfer(accounts[23],496,{from:accounts[28]});
await instance.transfer(accounts[11],120,{from:accounts[40]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[8],388,{from:accounts[0]});
await instance.transfer(accounts[36],140,{from:accounts[34]});
await instance.transfer(accounts[22],251,{from:accounts[4]});
await instance.transfer(accounts[34],321,{from:accounts[19]});
await instance.transfer(accounts[39],293,{from:accounts[6]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[36],310,{from:accounts[14]});
await instance.transfer(accounts[1],129,{from:accounts[16]});
await instance.transfer(accounts[11],313,{from:accounts[1]});
await instance.transfer(accounts[36],218,{from:accounts[18]});
await instance.transfer(accounts[11],145,{from:accounts[5]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[2],194,{from:accounts[20]});
await instance.transfer(accounts[15],498,{from:accounts[37]});
await instance.transfer(accounts[15],230,{from:accounts[1]});
await instance.transfer(accounts[5],220,{from:accounts[14]});
await instance.transfer(accounts[9],336,{from:accounts[7]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[17],167,{from:accounts[4]});
await instance.transfer(accounts[2],322,{from:accounts[8]});
await instance.transfer(accounts[1],454,{from:accounts[0]});
await instance.transfer(accounts[32],108,{from:accounts[26]});
await instance.transfer(accounts[19],207,{from:accounts[26]});
});it('test 15',async() => {
});
it('attack', async() => {
 await instance.transfer(accounts[100],bigValue,{from:accounts[0]});
});
});
});
