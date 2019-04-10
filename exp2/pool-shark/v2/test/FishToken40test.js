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
await instance.transfer(accounts[10],272,{from:accounts[2]});
await instance.transfer(accounts[19],196,{from:accounts[13]});
await instance.transfer(accounts[1],137,{from:accounts[31]});
await instance.transfer(accounts[7],253,{from:accounts[18]});
await instance.transfer(accounts[37],245,{from:accounts[17]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[12],396,{from:accounts[0]});
await instance.transfer(accounts[33],336,{from:accounts[14]});
await instance.transfer(accounts[30],402,{from:accounts[22]});
await instance.transfer(accounts[4],490,{from:accounts[20]});
await instance.transfer(accounts[10],208,{from:accounts[2]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[22],442,{from:accounts[40]});
await instance.transfer(accounts[20],306,{from:accounts[21]});
await instance.transfer(accounts[17],117,{from:accounts[9]});
await instance.transfer(accounts[33],237,{from:accounts[5]});
await instance.transfer(accounts[19],145,{from:accounts[0]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[8],215,{from:accounts[3]});
await instance.transfer(accounts[33],339,{from:accounts[3]});
await instance.transfer(accounts[9],211,{from:accounts[1]});
await instance.transfer(accounts[15],119,{from:accounts[19]});
await instance.transfer(accounts[7],458,{from:accounts[39]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[40],127,{from:accounts[1]});
await instance.transfer(accounts[23],307,{from:accounts[11]});
await instance.transfer(accounts[9],486,{from:accounts[37]});
await instance.transfer(accounts[15],398,{from:accounts[27]});
await instance.transfer(accounts[30],438,{from:accounts[5]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[14],463,{from:accounts[2]});
await instance.transfer(accounts[37],335,{from:accounts[6]});
await instance.transfer(accounts[14],461,{from:accounts[13]});
await instance.transfer(accounts[38],205,{from:accounts[28]});
await instance.transfer(accounts[5],376,{from:accounts[29]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[17],372,{from:accounts[20]});
await instance.transfer(accounts[23],100,{from:accounts[21]});
await instance.transfer(accounts[4],115,{from:accounts[32]});
await instance.transfer(accounts[30],172,{from:accounts[22]});
await instance.transfer(accounts[21],273,{from:accounts[25]});
});it('test 15',async() => {
});
it('acctack', async() => {
 await instance.addToParticipants(accounts[88]);
});
});
});
