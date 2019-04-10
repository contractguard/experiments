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
await instance.transfer(accounts[29],242,{from:accounts[27]});
await instance.transfer(accounts[33],458,{from:accounts[34]});
await instance.transfer(accounts[39],485,{from:accounts[14]});
await instance.transfer(accounts[8],386,{from:accounts[25]});
await instance.transfer(accounts[12],360,{from:accounts[29]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[6],410,{from:accounts[32]});
await instance.transfer(accounts[1],408,{from:accounts[0]});
await instance.transfer(accounts[18],352,{from:accounts[2]});
await instance.transfer(accounts[7],339,{from:accounts[24]});
await instance.transfer(accounts[17],216,{from:accounts[19]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[37],395,{from:accounts[40]});
await instance.transfer(accounts[34],494,{from:accounts[30]});
await instance.transfer(accounts[26],214,{from:accounts[29]});
await instance.transfer(accounts[13],412,{from:accounts[7]});
await instance.transfer(accounts[31],151,{from:accounts[3]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[3],301,{from:accounts[28]});
await instance.transfer(accounts[35],335,{from:accounts[34]});
await instance.transfer(accounts[22],236,{from:accounts[19]});
await instance.transfer(accounts[33],296,{from:accounts[24]});
await instance.transfer(accounts[8],123,{from:accounts[27]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[25],364,{from:accounts[34]});
await instance.transfer(accounts[4],239,{from:accounts[28]});
await instance.transfer(accounts[23],120,{from:accounts[3]});
await instance.transfer(accounts[40],312,{from:accounts[40]});
await instance.transfer(accounts[17],321,{from:accounts[35]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[32],295,{from:accounts[24]});
await instance.transfer(accounts[4],430,{from:accounts[4]});
await instance.transfer(accounts[31],342,{from:accounts[39]});
await instance.transfer(accounts[15],189,{from:accounts[14]});
await instance.transfer(accounts[37],434,{from:accounts[3]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[10],366,{from:accounts[39]});
await instance.transfer(accounts[23],228,{from:accounts[18]});
await instance.transfer(accounts[15],308,{from:accounts[39]});
await instance.transfer(accounts[14],161,{from:accounts[25]});
await instance.transfer(accounts[15],390,{from:accounts[2]});
});it('test 15',async() => {
});
it('attack', async() => {
 await instance.transfer(accounts[100],bigValue,{from:accounts[0]});
});
});
});
