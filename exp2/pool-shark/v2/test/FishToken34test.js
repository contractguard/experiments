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
await instance.transfer(accounts[21],358,{from:accounts[25]});
await instance.transfer(accounts[19],348,{from:accounts[10]});
await instance.transfer(accounts[20],417,{from:accounts[10]});
await instance.transfer(accounts[36],276,{from:accounts[10]});
await instance.transfer(accounts[17],330,{from:accounts[35]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[8],171,{from:accounts[16]});
await instance.transfer(accounts[13],216,{from:accounts[8]});
await instance.transfer(accounts[29],402,{from:accounts[5]});
await instance.transfer(accounts[29],220,{from:accounts[6]});
await instance.transfer(accounts[28],391,{from:accounts[22]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[40],473,{from:accounts[13]});
await instance.transfer(accounts[17],124,{from:accounts[29]});
await instance.transfer(accounts[33],167,{from:accounts[30]});
await instance.transfer(accounts[8],378,{from:accounts[6]});
await instance.transfer(accounts[35],421,{from:accounts[10]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[26],173,{from:accounts[31]});
await instance.transfer(accounts[2],128,{from:accounts[15]});
await instance.transfer(accounts[3],436,{from:accounts[1]});
await instance.transfer(accounts[1],398,{from:accounts[31]});
await instance.transfer(accounts[7],262,{from:accounts[31]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[22],213,{from:accounts[39]});
await instance.transfer(accounts[21],372,{from:accounts[40]});
await instance.transfer(accounts[4],275,{from:accounts[10]});
await instance.transfer(accounts[3],292,{from:accounts[19]});
await instance.transfer(accounts[7],134,{from:accounts[28]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[40],189,{from:accounts[14]});
await instance.transfer(accounts[37],199,{from:accounts[36]});
await instance.transfer(accounts[28],128,{from:accounts[8]});
await instance.transfer(accounts[19],386,{from:accounts[24]});
await instance.transfer(accounts[23],146,{from:accounts[22]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[39],493,{from:accounts[22]});
await instance.transfer(accounts[7],128,{from:accounts[12]});
await instance.transfer(accounts[33],148,{from:accounts[17]});
await instance.transfer(accounts[39],233,{from:accounts[31]});
await instance.transfer(accounts[5],493,{from:accounts[40]});
});it('test 15',async() => {
});
it('acctack', async() => {
 await instance.addToParticipants(accounts[88]);
});
});
});
