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
await instance.transfer(accounts[38],407,{from:accounts[7]});
await instance.transfer(accounts[8],400,{from:accounts[18]});
await instance.transfer(accounts[14],108,{from:accounts[22]});
await instance.transfer(accounts[23],170,{from:accounts[16]});
await instance.transfer(accounts[2],418,{from:accounts[8]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[33],308,{from:accounts[39]});
await instance.transfer(accounts[17],322,{from:accounts[35]});
await instance.transfer(accounts[35],140,{from:accounts[32]});
await instance.transfer(accounts[24],421,{from:accounts[17]});
await instance.transfer(accounts[14],456,{from:accounts[29]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[24],157,{from:accounts[31]});
await instance.transfer(accounts[2],201,{from:accounts[30]});
await instance.transfer(accounts[10],159,{from:accounts[12]});
await instance.transfer(accounts[21],280,{from:accounts[40]});
await instance.transfer(accounts[9],205,{from:accounts[10]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[4],489,{from:accounts[18]});
await instance.transfer(accounts[32],231,{from:accounts[34]});
await instance.transfer(accounts[13],376,{from:accounts[38]});
await instance.transfer(accounts[6],212,{from:accounts[31]});
await instance.transfer(accounts[35],371,{from:accounts[2]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[34],348,{from:accounts[12]});
await instance.transfer(accounts[2],122,{from:accounts[37]});
await instance.transfer(accounts[5],448,{from:accounts[28]});
await instance.transfer(accounts[20],435,{from:accounts[27]});
await instance.transfer(accounts[19],397,{from:accounts[26]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[27],255,{from:accounts[14]});
await instance.transfer(accounts[14],369,{from:accounts[1]});
await instance.transfer(accounts[31],223,{from:accounts[16]});
await instance.transfer(accounts[21],312,{from:accounts[3]});
await instance.transfer(accounts[34],142,{from:accounts[31]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[24],347,{from:accounts[14]});
await instance.transfer(accounts[28],122,{from:accounts[14]});
await instance.transfer(accounts[24],354,{from:accounts[5]});
await instance.transfer(accounts[35],383,{from:accounts[11]});
await instance.transfer(accounts[27],451,{from:accounts[12]});
});it('test 15',async() => {
});
it('acctack', async() => {
 await instance.addToParticipants(accounts[88]);
});
});
});
