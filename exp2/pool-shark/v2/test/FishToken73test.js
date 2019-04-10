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
await instance.transfer(accounts[39],457,{from:accounts[1]});
await instance.transfer(accounts[27],253,{from:accounts[33]});
await instance.transfer(accounts[33],483,{from:accounts[6]});
await instance.transfer(accounts[4],358,{from:accounts[8]});
await instance.transfer(accounts[38],378,{from:accounts[28]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[14],460,{from:accounts[17]});
await instance.transfer(accounts[32],466,{from:accounts[27]});
await instance.transfer(accounts[10],413,{from:accounts[16]});
await instance.transfer(accounts[2],370,{from:accounts[4]});
await instance.transfer(accounts[37],434,{from:accounts[9]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[14],126,{from:accounts[33]});
await instance.transfer(accounts[0],209,{from:accounts[0]});
await instance.transfer(accounts[0],303,{from:accounts[24]});
await instance.transfer(accounts[33],436,{from:accounts[17]});
await instance.transfer(accounts[29],148,{from:accounts[33]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[22],276,{from:accounts[12]});
await instance.transfer(accounts[2],225,{from:accounts[1]});
await instance.transfer(accounts[33],367,{from:accounts[10]});
await instance.transfer(accounts[9],166,{from:accounts[4]});
await instance.transfer(accounts[35],364,{from:accounts[27]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[37],197,{from:accounts[36]});
await instance.transfer(accounts[7],373,{from:accounts[18]});
await instance.transfer(accounts[15],363,{from:accounts[26]});
await instance.transfer(accounts[8],499,{from:accounts[33]});
await instance.transfer(accounts[21],445,{from:accounts[23]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[25],466,{from:accounts[7]});
await instance.transfer(accounts[29],144,{from:accounts[33]});
await instance.transfer(accounts[32],470,{from:accounts[23]});
await instance.transfer(accounts[25],146,{from:accounts[22]});
await instance.transfer(accounts[15],418,{from:accounts[30]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[11],311,{from:accounts[25]});
await instance.transfer(accounts[37],269,{from:accounts[40]});
await instance.transfer(accounts[36],292,{from:accounts[21]});
await instance.transfer(accounts[17],212,{from:accounts[39]});
await instance.transfer(accounts[5],282,{from:accounts[12]});
});it('test 15',async() => {
});
it('acctack', async() => {
 await instance.addToParticipants(accounts[88]);
});
});
});
