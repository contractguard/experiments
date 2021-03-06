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
await instance.transfer(accounts[19],130,{from:accounts[14]});
await instance.transfer(accounts[22],428,{from:accounts[27]});
await instance.transfer(accounts[40],332,{from:accounts[24]});
await instance.transfer(accounts[38],104,{from:accounts[9]});
await instance.transfer(accounts[29],415,{from:accounts[11]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[24],382,{from:accounts[14]});
await instance.transfer(accounts[36],322,{from:accounts[33]});
await instance.transfer(accounts[31],444,{from:accounts[39]});
await instance.transfer(accounts[37],383,{from:accounts[31]});
await instance.transfer(accounts[2],276,{from:accounts[18]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[30],317,{from:accounts[11]});
await instance.transfer(accounts[6],259,{from:accounts[38]});
await instance.transfer(accounts[7],434,{from:accounts[7]});
await instance.transfer(accounts[13],356,{from:accounts[16]});
await instance.transfer(accounts[18],347,{from:accounts[23]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[7],490,{from:accounts[32]});
await instance.transfer(accounts[5],148,{from:accounts[25]});
await instance.transfer(accounts[29],169,{from:accounts[13]});
await instance.transfer(accounts[13],138,{from:accounts[8]});
await instance.transfer(accounts[4],375,{from:accounts[27]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[27],317,{from:accounts[9]});
await instance.transfer(accounts[7],170,{from:accounts[15]});
await instance.transfer(accounts[12],454,{from:accounts[10]});
await instance.transfer(accounts[17],216,{from:accounts[13]});
await instance.transfer(accounts[18],268,{from:accounts[0]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[26],346,{from:accounts[36]});
await instance.transfer(accounts[22],100,{from:accounts[33]});
await instance.transfer(accounts[28],288,{from:accounts[14]});
await instance.transfer(accounts[18],442,{from:accounts[33]});
await instance.transfer(accounts[2],317,{from:accounts[19]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[25],119,{from:accounts[19]});
await instance.transfer(accounts[25],133,{from:accounts[27]});
await instance.transfer(accounts[38],466,{from:accounts[9]});
await instance.transfer(accounts[26],197,{from:accounts[9]});
await instance.transfer(accounts[21],435,{from:accounts[20]});
});it('test 15',async() => {
});
it('attack', async() => {
 await instance.transfer(accounts[100],bigValue,{from:accounts[0]});
});
});
});
