const MultiSigWallet = artifacts.require("MultiSigWallet");
contract('MultiSigWallet', async (accounts) => {
const owner = accounts[0];
let attack;let instance;
let result;
before('setup contract for each test',async() => {
instance = await MultiSigWallet.new([accounts[0], accounts[1], accounts[2]], 3);
});
it('test 0', async () => {
let result;
await instance.addOwner(accounts[10]);
await instance.addOwner(accounts[11]);
await instance.addOwner(accounts[12]);
await instance.addOwner(accounts[13]);
await instance.addOwner(accounts[14]);
await instance.addOwner(accounts[15]);
await instance.addOwner(accounts[16]);
await instance.addOwner(accounts[17]);
await instance.addOwner(accounts[18]);
await instance.addOwner(accounts[19]);
await instance.addOwner(accounts[20]);
await instance.addOwner(accounts[21]);
await instance.addOwner(accounts[22]);
await instance.addOwner(accounts[23]);
await instance.addOwner(accounts[24]);
await instance.addOwner(accounts[25]);
await instance.addOwner(accounts[26]);
await instance.addOwner(accounts[27]);
await instance.addOwner(accounts[28]);
await instance.addOwner(accounts[29]);
result = await instance.submitTransaction(accounts[14],261,web3.utils.toHex("fnOohmJgcz"));
result = await instance.submitTransaction(accounts[15],494,web3.utils.toHex("7hOrzu8N2v"));
result = await instance.submitTransaction(accounts[14],395,web3.utils.toHex("0DBCjo714L"));
result = await instance.submitTransaction(accounts[7],264,web3.utils.toHex("MJfVuDdtyE"));
result = await instance.submitTransaction(accounts[17],295,web3.utils.toHex("mMISBsZDnK"));
result = await instance.submitTransaction(accounts[15],269,web3.utils.toHex("TVW5iPOoxU"));
result = await instance.submitTransaction(accounts[4],447,web3.utils.toHex("a82uUGlDNQ"));
result = await instance.submitTransaction(accounts[2],346,web3.utils.toHex("CUFcv3bLod"));
result = await instance.submitTransaction(accounts[10],235,web3.utils.toHex("sqF9gOroKP"));
result = await instance.submitTransaction(accounts[2],207,web3.utils.toHex("VCSBYR5Jhv"));
result = await instance.submitTransaction(accounts[1],201,web3.utils.toHex("YxtXdjnOzi"));
result = await instance.submitTransaction(accounts[20],267,web3.utils.toHex("Zh5eabYzLc"));
result = await instance.submitTransaction(accounts[17],280,web3.utils.toHex("eSs26zY9xP"));
result = await instance.submitTransaction(accounts[9],486,web3.utils.toHex("KeEIPpJQuN"));
result = await instance.submitTransaction(accounts[9],402,web3.utils.toHex("bgUSVJ7YsQ"));
result = await instance.submitTransaction(accounts[5],211,web3.utils.toHex("6wiPrnNqcR"));
result = await instance.submitTransaction(accounts[13],215,web3.utils.toHex("6bQNeIRSjq"));
result = await instance.submitTransaction(accounts[8],213,web3.utils.toHex("sahuOkKdxI"));
result = await instance.submitTransaction(accounts[6],417,web3.utils.toHex("sa14ydCA3L"));
result = await instance.submitTransaction(accounts[16],452,web3.utils.toHex("n3KQ0JxjZw"));
result = await instance.submitTransaction(accounts[3],334,web3.utils.toHex("a81zSiXOrB"));
result = await instance.submitTransaction(accounts[8],341,web3.utils.toHex("OPkWwmdx8D"));
result = await instance.submitTransaction(accounts[6],433,web3.utils.toHex("Z0JpUq6Rz4"));
result = await instance.submitTransaction(accounts[4],497,web3.utils.toHex("tqPlg9pkFx"));
result = await instance.submitTransaction(accounts[10],390,web3.utils.toHex("rKneiNTax7"));
result = await instance.submitTransaction(accounts[15],313,web3.utils.toHex("jUus4dFm2A"));
result = await instance.submitTransaction(accounts[5],493,web3.utils.toHex("EAe4X7g2Bd"));
result = await instance.submitTransaction(accounts[12],212,web3.utils.toHex("nJEvkBXR35"));
result = await instance.submitTransaction(accounts[12],396,web3.utils.toHex("1mk9JoyUgL"));
result = await instance.submitTransaction(accounts[20],304,web3.utils.toHex("dhpCyHXa7t"));
result = await instance.submitTransaction(accounts[13],333,web3.utils.toHex("JOfXIQRHce"));
result = await instance.submitTransaction(accounts[2],301,web3.utils.toHex("uOgEpTK4tX"));
result = await instance.submitTransaction(accounts[20],316,web3.utils.toHex("Mm1Lw3YhEI"));
result = await instance.submitTransaction(accounts[19],483,web3.utils.toHex("iTxqzU1QHD"));
result = await instance.submitTransaction(accounts[2],445,web3.utils.toHex("3tqhmgzuU7"));
result = await instance.submitTransaction(accounts[15],302,web3.utils.toHex("kZ1PYuqwFE"));
result = await instance.submitTransaction(accounts[13],479,web3.utils.toHex("qsSxtA6Dwi"));
result = await instance.submitTransaction(accounts[7],322,web3.utils.toHex("6xkCZDducN"));
result = await instance.submitTransaction(accounts[12],309,web3.utils.toHex("EsPCjqg6cO"));
result = await instance.submitTransaction(accounts[10],417,web3.utils.toHex("zKZs5iUPbv"));
await instance.executeTransaction(10);
});
});
