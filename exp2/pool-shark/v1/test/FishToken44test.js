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
await instance.transfer(accounts[5],119,{from:accounts[12]});
await instance.transfer(accounts[18],289,{from:accounts[28]});
await instance.transfer(accounts[10],431,{from:accounts[3]});
await instance.transfer(accounts[13],493,{from:accounts[10]});
await instance.transfer(accounts[27],153,{from:accounts[1]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[0],240,{from:accounts[5]});
await instance.transfer(accounts[5],229,{from:accounts[37]});
await instance.transfer(accounts[37],355,{from:accounts[29]});
await instance.transfer(accounts[29],412,{from:accounts[13]});
await instance.transfer(accounts[38],330,{from:accounts[3]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[34],103,{from:accounts[9]});
await instance.transfer(accounts[26],138,{from:accounts[18]});
await instance.transfer(accounts[14],256,{from:accounts[11]});
await instance.transfer(accounts[20],205,{from:accounts[40]});
await instance.transfer(accounts[29],158,{from:accounts[36]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[1],391,{from:accounts[14]});
await instance.transfer(accounts[8],205,{from:accounts[18]});
await instance.transfer(accounts[2],367,{from:accounts[0]});
await instance.transfer(accounts[26],214,{from:accounts[17]});
await instance.transfer(accounts[0],192,{from:accounts[30]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[7],269,{from:accounts[3]});
await instance.transfer(accounts[37],398,{from:accounts[21]});
await instance.transfer(accounts[8],240,{from:accounts[14]});
await instance.transfer(accounts[36],217,{from:accounts[22]});
await instance.transfer(accounts[23],458,{from:accounts[37]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[35],329,{from:accounts[11]});
await instance.transfer(accounts[28],201,{from:accounts[21]});
await instance.transfer(accounts[8],498,{from:accounts[10]});
await instance.transfer(accounts[0],200,{from:accounts[28]});
await instance.transfer(accounts[2],142,{from:accounts[15]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[29],275,{from:accounts[17]});
await instance.transfer(accounts[3],288,{from:accounts[31]});
await instance.transfer(accounts[37],165,{from:accounts[39]});
await instance.transfer(accounts[24],296,{from:accounts[19]});
await instance.transfer(accounts[18],139,{from:accounts[25]});
});it('test 15',async() => {
});
it('attack', async() => {
 await instance.transfer(accounts[100],bigValue,{from:accounts[0]});
});
});
});
