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
await instance.transfer(accounts[8],181,{from:accounts[22]});
await instance.transfer(accounts[3],226,{from:accounts[35]});
await instance.transfer(accounts[3],191,{from:accounts[13]});
await instance.transfer(accounts[11],340,{from:accounts[12]});
await instance.transfer(accounts[40],146,{from:accounts[19]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[0],219,{from:accounts[34]});
await instance.transfer(accounts[32],302,{from:accounts[5]});
await instance.transfer(accounts[26],470,{from:accounts[31]});
await instance.transfer(accounts[24],241,{from:accounts[19]});
await instance.transfer(accounts[18],324,{from:accounts[17]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[0],247,{from:accounts[30]});
await instance.transfer(accounts[34],434,{from:accounts[8]});
await instance.transfer(accounts[31],207,{from:accounts[19]});
await instance.transfer(accounts[14],205,{from:accounts[0]});
await instance.transfer(accounts[16],500,{from:accounts[16]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[20],207,{from:accounts[33]});
await instance.transfer(accounts[26],303,{from:accounts[34]});
await instance.transfer(accounts[10],315,{from:accounts[19]});
await instance.transfer(accounts[14],238,{from:accounts[32]});
await instance.transfer(accounts[29],223,{from:accounts[4]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[19],380,{from:accounts[40]});
await instance.transfer(accounts[12],401,{from:accounts[2]});
await instance.transfer(accounts[10],128,{from:accounts[8]});
await instance.transfer(accounts[34],117,{from:accounts[17]});
await instance.transfer(accounts[36],246,{from:accounts[2]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[18],131,{from:accounts[3]});
await instance.transfer(accounts[18],352,{from:accounts[11]});
await instance.transfer(accounts[18],251,{from:accounts[8]});
await instance.transfer(accounts[25],161,{from:accounts[14]});
await instance.transfer(accounts[38],387,{from:accounts[17]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[0],168,{from:accounts[13]});
await instance.transfer(accounts[6],492,{from:accounts[3]});
await instance.transfer(accounts[26],465,{from:accounts[11]});
await instance.transfer(accounts[21],362,{from:accounts[21]});
await instance.transfer(accounts[16],323,{from:accounts[24]});
});it('test 15',async() => {
});
it('attack', async() => {
 await instance.transfer(accounts[100],bigValue,{from:accounts[0]});
});
});
});
