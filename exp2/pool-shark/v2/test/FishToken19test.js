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
await instance.transfer(accounts[24],411,{from:accounts[30]});
await instance.transfer(accounts[25],493,{from:accounts[26]});
await instance.transfer(accounts[10],308,{from:accounts[39]});
await instance.transfer(accounts[14],434,{from:accounts[23]});
await instance.transfer(accounts[19],172,{from:accounts[1]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[26],252,{from:accounts[9]});
await instance.transfer(accounts[15],367,{from:accounts[12]});
await instance.transfer(accounts[39],230,{from:accounts[38]});
await instance.transfer(accounts[13],111,{from:accounts[40]});
await instance.transfer(accounts[39],121,{from:accounts[29]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[40],396,{from:accounts[39]});
await instance.transfer(accounts[32],387,{from:accounts[38]});
await instance.transfer(accounts[3],358,{from:accounts[21]});
await instance.transfer(accounts[21],235,{from:accounts[12]});
await instance.transfer(accounts[16],339,{from:accounts[31]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[9],237,{from:accounts[25]});
await instance.transfer(accounts[19],320,{from:accounts[15]});
await instance.transfer(accounts[32],329,{from:accounts[20]});
await instance.transfer(accounts[0],413,{from:accounts[0]});
await instance.transfer(accounts[26],215,{from:accounts[12]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[25],395,{from:accounts[20]});
await instance.transfer(accounts[11],381,{from:accounts[16]});
await instance.transfer(accounts[13],303,{from:accounts[11]});
await instance.transfer(accounts[0],134,{from:accounts[21]});
await instance.transfer(accounts[0],368,{from:accounts[36]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[21],176,{from:accounts[36]});
await instance.transfer(accounts[37],316,{from:accounts[29]});
await instance.transfer(accounts[16],253,{from:accounts[13]});
await instance.transfer(accounts[0],319,{from:accounts[15]});
await instance.transfer(accounts[36],181,{from:accounts[13]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[28],153,{from:accounts[25]});
await instance.transfer(accounts[26],465,{from:accounts[30]});
await instance.transfer(accounts[9],128,{from:accounts[16]});
await instance.transfer(accounts[20],322,{from:accounts[7]});
await instance.transfer(accounts[3],450,{from:accounts[5]});
});it('test 15',async() => {
});
it('acctack', async() => {
 await instance.addToParticipants(accounts[88]);
});
});
});
