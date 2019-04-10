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
await instance.transfer(accounts[32],348,{from:accounts[32]});
await instance.transfer(accounts[11],496,{from:accounts[14]});
await instance.transfer(accounts[15],348,{from:accounts[14]});
await instance.transfer(accounts[37],475,{from:accounts[16]});
await instance.transfer(accounts[19],407,{from:accounts[3]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[6],364,{from:accounts[26]});
await instance.transfer(accounts[1],217,{from:accounts[40]});
await instance.transfer(accounts[6],183,{from:accounts[12]});
await instance.transfer(accounts[24],280,{from:accounts[28]});
await instance.transfer(accounts[18],106,{from:accounts[11]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[30],342,{from:accounts[26]});
await instance.transfer(accounts[18],478,{from:accounts[19]});
await instance.transfer(accounts[35],309,{from:accounts[10]});
await instance.transfer(accounts[27],177,{from:accounts[36]});
await instance.transfer(accounts[32],105,{from:accounts[28]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[14],203,{from:accounts[5]});
await instance.transfer(accounts[2],198,{from:accounts[38]});
await instance.transfer(accounts[12],303,{from:accounts[10]});
await instance.transfer(accounts[22],110,{from:accounts[9]});
await instance.transfer(accounts[39],214,{from:accounts[5]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[12],241,{from:accounts[40]});
await instance.transfer(accounts[7],213,{from:accounts[0]});
await instance.transfer(accounts[2],163,{from:accounts[22]});
await instance.transfer(accounts[39],154,{from:accounts[1]});
await instance.transfer(accounts[8],453,{from:accounts[17]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[4],130,{from:accounts[40]});
await instance.transfer(accounts[19],336,{from:accounts[26]});
await instance.transfer(accounts[21],439,{from:accounts[34]});
await instance.transfer(accounts[22],459,{from:accounts[4]});
await instance.transfer(accounts[7],321,{from:accounts[16]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[15],442,{from:accounts[27]});
await instance.transfer(accounts[6],338,{from:accounts[10]});
await instance.transfer(accounts[8],401,{from:accounts[5]});
await instance.transfer(accounts[31],399,{from:accounts[3]});
await instance.transfer(accounts[36],235,{from:accounts[9]});
});it('test 15',async() => {
});
it('attack', async() => {
 await instance.transfer(accounts[100],bigValue,{from:accounts[0]});
});
});
});
