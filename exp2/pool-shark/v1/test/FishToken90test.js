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
await instance.transfer(accounts[39],446,{from:accounts[29]});
await instance.transfer(accounts[36],249,{from:accounts[6]});
await instance.transfer(accounts[23],430,{from:accounts[0]});
await instance.transfer(accounts[13],263,{from:accounts[1]});
await instance.transfer(accounts[38],418,{from:accounts[10]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[5],135,{from:accounts[14]});
await instance.transfer(accounts[29],367,{from:accounts[5]});
await instance.transfer(accounts[7],309,{from:accounts[8]});
await instance.transfer(accounts[10],331,{from:accounts[9]});
await instance.transfer(accounts[35],341,{from:accounts[0]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[24],304,{from:accounts[29]});
await instance.transfer(accounts[27],248,{from:accounts[23]});
await instance.transfer(accounts[23],145,{from:accounts[31]});
await instance.transfer(accounts[33],339,{from:accounts[30]});
await instance.transfer(accounts[2],352,{from:accounts[26]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[0],312,{from:accounts[33]});
await instance.transfer(accounts[14],363,{from:accounts[27]});
await instance.transfer(accounts[17],261,{from:accounts[7]});
await instance.transfer(accounts[15],416,{from:accounts[35]});
await instance.transfer(accounts[36],197,{from:accounts[34]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[13],195,{from:accounts[25]});
await instance.transfer(accounts[8],346,{from:accounts[24]});
await instance.transfer(accounts[38],375,{from:accounts[2]});
await instance.transfer(accounts[8],355,{from:accounts[8]});
await instance.transfer(accounts[27],399,{from:accounts[14]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[39],208,{from:accounts[25]});
await instance.transfer(accounts[3],172,{from:accounts[33]});
await instance.transfer(accounts[36],349,{from:accounts[9]});
await instance.transfer(accounts[7],319,{from:accounts[15]});
await instance.transfer(accounts[18],307,{from:accounts[26]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[39],329,{from:accounts[31]});
await instance.transfer(accounts[39],390,{from:accounts[19]});
await instance.transfer(accounts[7],409,{from:accounts[35]});
await instance.transfer(accounts[3],482,{from:accounts[30]});
await instance.transfer(accounts[35],344,{from:accounts[10]});
});it('test 15',async() => {
});
it('attack', async() => {
 await instance.transfer(accounts[100],bigValue,{from:accounts[0]});
});
});
});
