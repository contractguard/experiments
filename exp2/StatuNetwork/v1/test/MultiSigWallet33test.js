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
result = await instance.submitTransaction(accounts[6],489,web3.utils.toHex("1r0NOMUGHJ"));
result = await instance.submitTransaction(accounts[15],224,web3.utils.toHex("TpZa3tKYyP"));
result = await instance.submitTransaction(accounts[20],218,web3.utils.toHex("biC6I1JXfS"));
result = await instance.submitTransaction(accounts[2],235,web3.utils.toHex("rSb1z7Ud5x"));
result = await instance.submitTransaction(accounts[9],218,web3.utils.toHex("p9IuSqOgxs"));
result = await instance.submitTransaction(accounts[7],371,web3.utils.toHex("q2EXR5fUHW"));
result = await instance.submitTransaction(accounts[10],360,web3.utils.toHex("QFJ9uN6rGZ"));
result = await instance.submitTransaction(accounts[20],440,web3.utils.toHex("VgiOPcMoRJ"));
result = await instance.submitTransaction(accounts[17],335,web3.utils.toHex("tKhVpouwRY"));
result = await instance.submitTransaction(accounts[9],368,web3.utils.toHex("0ko7h6ulc3"));
result = await instance.submitTransaction(accounts[20],204,web3.utils.toHex("t2Z7lVqBiI"));
result = await instance.submitTransaction(accounts[18],374,web3.utils.toHex("PbSy1KrEZ2"));
result = await instance.submitTransaction(accounts[20],496,web3.utils.toHex("3hvsUO8jaG"));
result = await instance.submitTransaction(accounts[6],500,web3.utils.toHex("gJkSvMmFrd"));
result = await instance.submitTransaction(accounts[15],369,web3.utils.toHex("KHLOyIr7wd"));
result = await instance.submitTransaction(accounts[13],468,web3.utils.toHex("5FuMir6bcU"));
result = await instance.submitTransaction(accounts[5],451,web3.utils.toHex("5LldKOCkRN"));
result = await instance.submitTransaction(accounts[2],337,web3.utils.toHex("OxwEq27346"));
result = await instance.submitTransaction(accounts[18],445,web3.utils.toHex("cSJ4x7zkhb"));
result = await instance.submitTransaction(accounts[17],301,web3.utils.toHex("DZ52g1Btkc"));
result = await instance.submitTransaction(accounts[13],492,web3.utils.toHex("gmLxRB1HGQ"));
result = await instance.submitTransaction(accounts[16],319,web3.utils.toHex("xwROSmj0aA"));
result = await instance.submitTransaction(accounts[11],232,web3.utils.toHex("JZWtFIH4Sd"));
result = await instance.submitTransaction(accounts[2],475,web3.utils.toHex("vxUM1eAPfX"));
result = await instance.submitTransaction(accounts[18],302,web3.utils.toHex("APsl6N7Vuk"));
result = await instance.submitTransaction(accounts[18],387,web3.utils.toHex("mp8r1sL97v"));
result = await instance.submitTransaction(accounts[6],253,web3.utils.toHex("Po72nCJ65t"));
result = await instance.submitTransaction(accounts[16],403,web3.utils.toHex("2eNAhWIaFc"));
result = await instance.submitTransaction(accounts[19],439,web3.utils.toHex("GifVJjqhPS"));
result = await instance.submitTransaction(accounts[7],203,web3.utils.toHex("PfgWmedGJj"));
result = await instance.submitTransaction(accounts[11],320,web3.utils.toHex("2QO3ynL4vb"));
result = await instance.submitTransaction(accounts[14],274,web3.utils.toHex("nKfbxz42GM"));
result = await instance.submitTransaction(accounts[16],370,web3.utils.toHex("WxBIt0sGk2"));
result = await instance.submitTransaction(accounts[15],400,web3.utils.toHex("yPK07vA2TF"));
result = await instance.submitTransaction(accounts[14],249,web3.utils.toHex("BAN4aVGmLl"));
result = await instance.submitTransaction(accounts[10],201,web3.utils.toHex("SiZ65ewQ3f"));
result = await instance.submitTransaction(accounts[19],223,web3.utils.toHex("MlQ0DEqh9R"));
result = await instance.submitTransaction(accounts[14],286,web3.utils.toHex("bgdSIE91Po"));
result = await instance.submitTransaction(accounts[20],469,web3.utils.toHex("hK05mT87rV"));
result = await instance.submitTransaction(accounts[20],377,web3.utils.toHex("mbSn1rFQV9"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
