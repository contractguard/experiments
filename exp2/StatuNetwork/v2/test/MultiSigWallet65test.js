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
result = await instance.submitTransaction(accounts[19],366,web3.utils.toHex("bPTwrEOaD4"));
result = await instance.submitTransaction(accounts[4],287,web3.utils.toHex("HIDRzNlJOA"));
result = await instance.submitTransaction(accounts[16],489,web3.utils.toHex("tZm3cTe1XA"));
result = await instance.submitTransaction(accounts[8],438,web3.utils.toHex("tLRN6mdnXj"));
result = await instance.submitTransaction(accounts[13],391,web3.utils.toHex("JiQ0Mpfql9"));
result = await instance.submitTransaction(accounts[4],482,web3.utils.toHex("8VwLApJnYG"));
result = await instance.submitTransaction(accounts[5],454,web3.utils.toHex("1HvNIKCXLB"));
result = await instance.submitTransaction(accounts[9],292,web3.utils.toHex("M4noJ9FuDI"));
result = await instance.submitTransaction(accounts[2],464,web3.utils.toHex("o6wyDSXYnU"));
result = await instance.submitTransaction(accounts[19],295,web3.utils.toHex("z2P8hRY41i"));
result = await instance.submitTransaction(accounts[13],433,web3.utils.toHex("VvDfgFR8io"));
result = await instance.submitTransaction(accounts[12],314,web3.utils.toHex("a8OMEFjQVt"));
result = await instance.submitTransaction(accounts[8],314,web3.utils.toHex("NvyoB6PipL"));
result = await instance.submitTransaction(accounts[14],400,web3.utils.toHex("m18OCnPEfH"));
result = await instance.submitTransaction(accounts[3],433,web3.utils.toHex("8FV9CkldAR"));
result = await instance.submitTransaction(accounts[2],353,web3.utils.toHex("KiFU1pN6Co"));
result = await instance.submitTransaction(accounts[10],396,web3.utils.toHex("OPR2MkYbNU"));
result = await instance.submitTransaction(accounts[17],485,web3.utils.toHex("yTzNS9jxIX"));
result = await instance.submitTransaction(accounts[9],427,web3.utils.toHex("GmaEurteDB"));
result = await instance.submitTransaction(accounts[3],256,web3.utils.toHex("LmceUFQA7K"));
result = await instance.submitTransaction(accounts[17],265,web3.utils.toHex("PJfLIZOlTS"));
result = await instance.submitTransaction(accounts[6],474,web3.utils.toHex("JPtjr5mKeb"));
result = await instance.submitTransaction(accounts[12],357,web3.utils.toHex("Lf1mRCU30a"));
result = await instance.submitTransaction(accounts[7],339,web3.utils.toHex("EHRX57DJb1"));
result = await instance.submitTransaction(accounts[6],211,web3.utils.toHex("hjdG4fgxuK"));
result = await instance.submitTransaction(accounts[4],309,web3.utils.toHex("WEY47lvBJs"));
result = await instance.submitTransaction(accounts[4],390,web3.utils.toHex("p1hjrnEZ3Y"));
result = await instance.submitTransaction(accounts[3],458,web3.utils.toHex("dXlPKJDe3h"));
result = await instance.submitTransaction(accounts[1],370,web3.utils.toHex("pTtFbsBUVn"));
result = await instance.submitTransaction(accounts[11],346,web3.utils.toHex("zXIA9nR6VW"));
result = await instance.submitTransaction(accounts[3],293,web3.utils.toHex("QfkeK2d849"));
result = await instance.submitTransaction(accounts[18],479,web3.utils.toHex("OxRVzWLs0y"));
result = await instance.submitTransaction(accounts[4],341,web3.utils.toHex("hWt0N7EKyf"));
result = await instance.submitTransaction(accounts[13],453,web3.utils.toHex("sHrJuCiqwz"));
result = await instance.submitTransaction(accounts[1],240,web3.utils.toHex("dp9Go32kxw"));
result = await instance.submitTransaction(accounts[10],224,web3.utils.toHex("V8uDFIkYpd"));
result = await instance.submitTransaction(accounts[10],232,web3.utils.toHex("87FX9Gx1wj"));
result = await instance.submitTransaction(accounts[8],371,web3.utils.toHex("L8M0n2zTSj"));
result = await instance.submitTransaction(accounts[11],362,web3.utils.toHex("H7OGwk4mAi"));
result = await instance.submitTransaction(accounts[10],438,web3.utils.toHex("DjIEWK7rqC"));
await instance.executeTransaction(10);
});
});