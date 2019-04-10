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
await instance.transfer(accounts[30],320,{from:accounts[39]});
await instance.transfer(accounts[0],260,{from:accounts[22]});
await instance.transfer(accounts[7],316,{from:accounts[21]});
await instance.transfer(accounts[1],419,{from:accounts[18]});
await instance.transfer(accounts[18],453,{from:accounts[2]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[27],155,{from:accounts[26]});
await instance.transfer(accounts[32],370,{from:accounts[26]});
await instance.transfer(accounts[10],435,{from:accounts[32]});
await instance.transfer(accounts[7],115,{from:accounts[23]});
await instance.transfer(accounts[23],441,{from:accounts[36]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[32],346,{from:accounts[40]});
await instance.transfer(accounts[34],120,{from:accounts[16]});
await instance.transfer(accounts[23],445,{from:accounts[22]});
await instance.transfer(accounts[19],126,{from:accounts[3]});
await instance.transfer(accounts[27],345,{from:accounts[31]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[31],457,{from:accounts[28]});
await instance.transfer(accounts[4],284,{from:accounts[40]});
await instance.transfer(accounts[0],404,{from:accounts[38]});
await instance.transfer(accounts[12],461,{from:accounts[28]});
await instance.transfer(accounts[21],472,{from:accounts[18]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[34],295,{from:accounts[1]});
await instance.transfer(accounts[28],152,{from:accounts[23]});
await instance.transfer(accounts[10],126,{from:accounts[12]});
await instance.transfer(accounts[10],100,{from:accounts[33]});
await instance.transfer(accounts[26],399,{from:accounts[22]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[30],205,{from:accounts[21]});
await instance.transfer(accounts[19],430,{from:accounts[18]});
await instance.transfer(accounts[6],447,{from:accounts[19]});
await instance.transfer(accounts[30],447,{from:accounts[35]});
await instance.transfer(accounts[6],118,{from:accounts[9]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[30],413,{from:accounts[28]});
await instance.transfer(accounts[9],440,{from:accounts[17]});
await instance.transfer(accounts[14],323,{from:accounts[20]});
await instance.transfer(accounts[14],215,{from:accounts[24]});
await instance.transfer(accounts[37],413,{from:accounts[2]});
});it('test 15',async() => {
});
it('attack', async() => {
 await instance.transfer(accounts[100],bigValue,{from:accounts[0]});
});
});
});
