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
await instance.transfer(accounts[19],453,{from:accounts[20]});
await instance.transfer(accounts[8],442,{from:accounts[40]});
await instance.transfer(accounts[11],230,{from:accounts[1]});
await instance.transfer(accounts[22],459,{from:accounts[17]});
await instance.transfer(accounts[27],440,{from:accounts[18]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[19],293,{from:accounts[23]});
await instance.transfer(accounts[35],252,{from:accounts[1]});
await instance.transfer(accounts[34],377,{from:accounts[40]});
await instance.transfer(accounts[6],355,{from:accounts[16]});
await instance.transfer(accounts[21],340,{from:accounts[29]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[24],314,{from:accounts[3]});
await instance.transfer(accounts[9],307,{from:accounts[18]});
await instance.transfer(accounts[0],134,{from:accounts[2]});
await instance.transfer(accounts[12],251,{from:accounts[14]});
await instance.transfer(accounts[17],488,{from:accounts[17]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[10],171,{from:accounts[13]});
await instance.transfer(accounts[40],150,{from:accounts[16]});
await instance.transfer(accounts[40],175,{from:accounts[39]});
await instance.transfer(accounts[1],218,{from:accounts[2]});
await instance.transfer(accounts[7],237,{from:accounts[19]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[25],166,{from:accounts[3]});
await instance.transfer(accounts[16],467,{from:accounts[35]});
await instance.transfer(accounts[6],111,{from:accounts[10]});
await instance.transfer(accounts[27],266,{from:accounts[24]});
await instance.transfer(accounts[31],450,{from:accounts[36]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[19],411,{from:accounts[39]});
await instance.transfer(accounts[15],156,{from:accounts[18]});
await instance.transfer(accounts[35],365,{from:accounts[26]});
await instance.transfer(accounts[4],298,{from:accounts[26]});
await instance.transfer(accounts[10],190,{from:accounts[26]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[27],243,{from:accounts[2]});
await instance.transfer(accounts[4],338,{from:accounts[36]});
await instance.transfer(accounts[6],247,{from:accounts[11]});
await instance.transfer(accounts[28],150,{from:accounts[15]});
await instance.transfer(accounts[23],381,{from:accounts[32]});
});it('test 15',async() => {
});
it('acctack', async() => {
 await instance.addToParticipants(accounts[88]);
});
});
});
