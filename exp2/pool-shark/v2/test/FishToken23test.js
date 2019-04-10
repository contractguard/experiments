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
await instance.transfer(accounts[36],216,{from:accounts[38]});
await instance.transfer(accounts[23],178,{from:accounts[12]});
await instance.transfer(accounts[29],347,{from:accounts[30]});
await instance.transfer(accounts[31],267,{from:accounts[2]});
await instance.transfer(accounts[0],458,{from:accounts[9]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[32],408,{from:accounts[28]});
await instance.transfer(accounts[28],177,{from:accounts[29]});
await instance.transfer(accounts[17],233,{from:accounts[39]});
await instance.transfer(accounts[21],176,{from:accounts[20]});
await instance.transfer(accounts[19],244,{from:accounts[39]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[10],192,{from:accounts[23]});
await instance.transfer(accounts[5],102,{from:accounts[21]});
await instance.transfer(accounts[21],428,{from:accounts[21]});
await instance.transfer(accounts[16],184,{from:accounts[6]});
await instance.transfer(accounts[23],362,{from:accounts[0]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[0],129,{from:accounts[12]});
await instance.transfer(accounts[37],370,{from:accounts[21]});
await instance.transfer(accounts[27],232,{from:accounts[4]});
await instance.transfer(accounts[7],123,{from:accounts[17]});
await instance.transfer(accounts[24],278,{from:accounts[12]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[16],319,{from:accounts[17]});
await instance.transfer(accounts[37],155,{from:accounts[22]});
await instance.transfer(accounts[11],210,{from:accounts[12]});
await instance.transfer(accounts[1],314,{from:accounts[27]});
await instance.transfer(accounts[25],264,{from:accounts[8]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[4],490,{from:accounts[20]});
await instance.transfer(accounts[35],332,{from:accounts[16]});
await instance.transfer(accounts[39],399,{from:accounts[28]});
await instance.transfer(accounts[26],303,{from:accounts[21]});
await instance.transfer(accounts[25],302,{from:accounts[12]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[6],189,{from:accounts[16]});
await instance.transfer(accounts[5],140,{from:accounts[26]});
await instance.transfer(accounts[37],275,{from:accounts[22]});
await instance.transfer(accounts[30],419,{from:accounts[10]});
await instance.transfer(accounts[21],409,{from:accounts[22]});
});it('test 15',async() => {
});
it('acctack', async() => {
 await instance.addToParticipants(accounts[88]);
});
});
});
