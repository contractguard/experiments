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
await instance.transfer(accounts[32],108,{from:accounts[4]});
await instance.transfer(accounts[18],306,{from:accounts[17]});
await instance.transfer(accounts[8],393,{from:accounts[25]});
await instance.transfer(accounts[6],297,{from:accounts[28]});
await instance.transfer(accounts[5],280,{from:accounts[32]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[26],300,{from:accounts[39]});
await instance.transfer(accounts[39],333,{from:accounts[39]});
await instance.transfer(accounts[12],416,{from:accounts[20]});
await instance.transfer(accounts[23],254,{from:accounts[37]});
await instance.transfer(accounts[15],424,{from:accounts[6]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[28],356,{from:accounts[15]});
await instance.transfer(accounts[17],316,{from:accounts[0]});
await instance.transfer(accounts[9],372,{from:accounts[39]});
await instance.transfer(accounts[8],278,{from:accounts[20]});
await instance.transfer(accounts[22],473,{from:accounts[4]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[22],205,{from:accounts[8]});
await instance.transfer(accounts[26],213,{from:accounts[19]});
await instance.transfer(accounts[33],474,{from:accounts[21]});
await instance.transfer(accounts[32],496,{from:accounts[20]});
await instance.transfer(accounts[3],156,{from:accounts[0]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[38],285,{from:accounts[14]});
await instance.transfer(accounts[33],478,{from:accounts[3]});
await instance.transfer(accounts[27],184,{from:accounts[28]});
await instance.transfer(accounts[16],236,{from:accounts[5]});
await instance.transfer(accounts[1],183,{from:accounts[12]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[14],275,{from:accounts[31]});
await instance.transfer(accounts[9],213,{from:accounts[2]});
await instance.transfer(accounts[15],227,{from:accounts[25]});
await instance.transfer(accounts[40],291,{from:accounts[0]});
await instance.transfer(accounts[25],471,{from:accounts[17]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[38],472,{from:accounts[17]});
await instance.transfer(accounts[0],496,{from:accounts[40]});
await instance.transfer(accounts[35],277,{from:accounts[13]});
await instance.transfer(accounts[31],495,{from:accounts[26]});
await instance.transfer(accounts[4],108,{from:accounts[34]});
});it('test 15',async() => {
});
it('attack', async() => {
 await instance.transfer(accounts[100],bigValue,{from:accounts[0]});
});
});
});
