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
await instance.transfer(accounts[36],313,{from:accounts[23]});
await instance.transfer(accounts[31],465,{from:accounts[14]});
await instance.transfer(accounts[0],122,{from:accounts[0]});
await instance.transfer(accounts[9],421,{from:accounts[37]});
await instance.transfer(accounts[28],201,{from:accounts[28]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[32],387,{from:accounts[15]});
await instance.transfer(accounts[9],330,{from:accounts[7]});
await instance.transfer(accounts[20],105,{from:accounts[32]});
await instance.transfer(accounts[39],170,{from:accounts[16]});
await instance.transfer(accounts[32],479,{from:accounts[0]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[2],199,{from:accounts[32]});
await instance.transfer(accounts[30],248,{from:accounts[39]});
await instance.transfer(accounts[9],107,{from:accounts[32]});
await instance.transfer(accounts[36],449,{from:accounts[13]});
await instance.transfer(accounts[4],128,{from:accounts[40]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[36],332,{from:accounts[37]});
await instance.transfer(accounts[20],106,{from:accounts[28]});
await instance.transfer(accounts[27],358,{from:accounts[10]});
await instance.transfer(accounts[1],395,{from:accounts[10]});
await instance.transfer(accounts[24],190,{from:accounts[39]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[7],117,{from:accounts[11]});
await instance.transfer(accounts[23],389,{from:accounts[20]});
await instance.transfer(accounts[35],347,{from:accounts[18]});
await instance.transfer(accounts[2],355,{from:accounts[8]});
await instance.transfer(accounts[28],120,{from:accounts[34]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[34],273,{from:accounts[23]});
await instance.transfer(accounts[0],286,{from:accounts[32]});
await instance.transfer(accounts[4],158,{from:accounts[18]});
await instance.transfer(accounts[13],315,{from:accounts[22]});
await instance.transfer(accounts[19],192,{from:accounts[2]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[11],349,{from:accounts[10]});
await instance.transfer(accounts[35],293,{from:accounts[24]});
await instance.transfer(accounts[27],291,{from:accounts[33]});
await instance.transfer(accounts[40],269,{from:accounts[5]});
await instance.transfer(accounts[1],401,{from:accounts[24]});
});it('test 15',async() => {
});
it('attack', async() => {
 await instance.transfer(accounts[100],bigValue,{from:accounts[0]});
});
});
});
