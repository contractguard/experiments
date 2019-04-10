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
await instance.transfer(accounts[17],130,{from:accounts[22]});
await instance.transfer(accounts[35],275,{from:accounts[19]});
await instance.transfer(accounts[0],437,{from:accounts[5]});
await instance.transfer(accounts[38],489,{from:accounts[39]});
await instance.transfer(accounts[8],224,{from:accounts[16]});
});it('test 3',async() => {
});
it('test 4',async() => {
await instance.transfer(accounts[23],438,{from:accounts[27]});
await instance.transfer(accounts[38],271,{from:accounts[32]});
await instance.transfer(accounts[35],285,{from:accounts[4]});
await instance.transfer(accounts[28],279,{from:accounts[14]});
await instance.transfer(accounts[40],189,{from:accounts[6]});
});it('test 5',async() => {
});
it('test 6',async() => {
await instance.transfer(accounts[20],440,{from:accounts[35]});
await instance.transfer(accounts[25],136,{from:accounts[2]});
await instance.transfer(accounts[38],381,{from:accounts[31]});
await instance.transfer(accounts[28],210,{from:accounts[25]});
await instance.transfer(accounts[21],442,{from:accounts[29]});
});it('test 7',async() => {
});
it('test 8',async() => {
await instance.transfer(accounts[40],280,{from:accounts[2]});
await instance.transfer(accounts[32],471,{from:accounts[17]});
await instance.transfer(accounts[36],271,{from:accounts[27]});
await instance.transfer(accounts[19],126,{from:accounts[33]});
await instance.transfer(accounts[33],189,{from:accounts[37]});
});it('test 9',async() => {
});
it('test 10',async() => {
await instance.transfer(accounts[3],416,{from:accounts[16]});
await instance.transfer(accounts[24],362,{from:accounts[25]});
await instance.transfer(accounts[6],127,{from:accounts[19]});
await instance.transfer(accounts[6],390,{from:accounts[14]});
await instance.transfer(accounts[29],462,{from:accounts[21]});
});it('test 11',async() => {
});
it('test 12',async() => {
await instance.transfer(accounts[9],278,{from:accounts[36]});
await instance.transfer(accounts[0],372,{from:accounts[37]});
await instance.transfer(accounts[15],477,{from:accounts[20]});
await instance.transfer(accounts[6],388,{from:accounts[35]});
await instance.transfer(accounts[6],235,{from:accounts[35]});
});it('test 13',async() => {
});
it('test 14',async() => {
await instance.transfer(accounts[32],168,{from:accounts[39]});
await instance.transfer(accounts[11],362,{from:accounts[19]});
await instance.transfer(accounts[6],350,{from:accounts[28]});
await instance.transfer(accounts[2],236,{from:accounts[37]});
await instance.transfer(accounts[0],476,{from:accounts[17]});
});it('test 15',async() => {
});
it('attack', async() => {
 await instance.transfer(accounts[100],bigValue,{from:accounts[0]});
});
});
});
