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
result = await instance.submitTransaction(accounts[6],459,web3.utils.toHex("rYF2sftCWT"));
result = await instance.submitTransaction(accounts[14],429,web3.utils.toHex("Xke5EtoJya"));
result = await instance.submitTransaction(accounts[10],228,web3.utils.toHex("MDXUWRarpP"));
result = await instance.submitTransaction(accounts[12],454,web3.utils.toHex("qzTbluiEsj"));
result = await instance.submitTransaction(accounts[13],365,web3.utils.toHex("DfFjCv9xMp"));
result = await instance.submitTransaction(accounts[7],260,web3.utils.toHex("FYRXG4aoWu"));
result = await instance.submitTransaction(accounts[10],341,web3.utils.toHex("lEVHqNL58S"));
result = await instance.submitTransaction(accounts[6],339,web3.utils.toHex("WlfxmvBu1C"));
result = await instance.submitTransaction(accounts[13],346,web3.utils.toHex("DHFleZ4sXW"));
result = await instance.submitTransaction(accounts[9],267,web3.utils.toHex("mtosVNF2iD"));
result = await instance.submitTransaction(accounts[17],428,web3.utils.toHex("MTDcilBjkG"));
result = await instance.submitTransaction(accounts[8],406,web3.utils.toHex("obv4T10Edg"));
result = await instance.submitTransaction(accounts[9],362,web3.utils.toHex("6UjFmtekb3"));
result = await instance.submitTransaction(accounts[14],284,web3.utils.toHex("ryz2hpvsnT"));
result = await instance.submitTransaction(accounts[1],404,web3.utils.toHex("haL8R6Guk3"));
result = await instance.submitTransaction(accounts[20],300,web3.utils.toHex("ELkGQMncKD"));
result = await instance.submitTransaction(accounts[14],395,web3.utils.toHex("IlmwX6Tod0"));
result = await instance.submitTransaction(accounts[7],347,web3.utils.toHex("0NkuUC7pBj"));
result = await instance.submitTransaction(accounts[7],350,web3.utils.toHex("zXRcrYIO2x"));
result = await instance.submitTransaction(accounts[8],435,web3.utils.toHex("uIfKFWwzl9"));
result = await instance.submitTransaction(accounts[11],285,web3.utils.toHex("Ha3hd0Cz7e"));
result = await instance.submitTransaction(accounts[9],336,web3.utils.toHex("woZIHOe4MY"));
result = await instance.submitTransaction(accounts[3],394,web3.utils.toHex("HN1aBM78OC"));
result = await instance.submitTransaction(accounts[6],340,web3.utils.toHex("ZfGDFCiy7J"));
result = await instance.submitTransaction(accounts[7],474,web3.utils.toHex("VrQRunlT9x"));
result = await instance.submitTransaction(accounts[14],420,web3.utils.toHex("JdZ3QYy6lo"));
result = await instance.submitTransaction(accounts[15],285,web3.utils.toHex("g1qLIwREap"));
result = await instance.submitTransaction(accounts[20],217,web3.utils.toHex("1fQSpuCj4r"));
result = await instance.submitTransaction(accounts[2],242,web3.utils.toHex("usPl6f5ceI"));
result = await instance.submitTransaction(accounts[17],314,web3.utils.toHex("wWFn9PkTfG"));
result = await instance.submitTransaction(accounts[9],386,web3.utils.toHex("mrAsXjS8HD"));
result = await instance.submitTransaction(accounts[12],243,web3.utils.toHex("acPBvV6GYp"));
result = await instance.submitTransaction(accounts[11],339,web3.utils.toHex("w1LdaTnqec"));
result = await instance.submitTransaction(accounts[10],449,web3.utils.toHex("RKhN6TaPiF"));
result = await instance.submitTransaction(accounts[17],455,web3.utils.toHex("Cvcxl7mpaB"));
result = await instance.submitTransaction(accounts[7],457,web3.utils.toHex("AyFUcPzwJe"));
result = await instance.submitTransaction(accounts[15],302,web3.utils.toHex("ZWFGvS6I1b"));
result = await instance.submitTransaction(accounts[9],264,web3.utils.toHex("ZBdHFqbEuo"));
result = await instance.submitTransaction(accounts[8],475,web3.utils.toHex("s3uNqUBxSZ"));
result = await instance.submitTransaction(accounts[11],396,web3.utils.toHex("W3gcqLNKT0"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
