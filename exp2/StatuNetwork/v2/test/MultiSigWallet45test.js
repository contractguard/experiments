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
result = await instance.submitTransaction(accounts[5],477,web3.utils.toHex("tqPL1oZVRG"));
result = await instance.submitTransaction(accounts[6],406,web3.utils.toHex("bHqgam5MFB"));
result = await instance.submitTransaction(accounts[3],369,web3.utils.toHex("o6EOjS2kQM"));
result = await instance.submitTransaction(accounts[5],206,web3.utils.toHex("dHZ8Xh4AjK"));
result = await instance.submitTransaction(accounts[13],248,web3.utils.toHex("GXJdl3CbQh"));
result = await instance.submitTransaction(accounts[17],493,web3.utils.toHex("21IyPoRt6G"));
result = await instance.submitTransaction(accounts[7],428,web3.utils.toHex("t9LUQouYK2"));
result = await instance.submitTransaction(accounts[12],478,web3.utils.toHex("fZ67PzKoRL"));
result = await instance.submitTransaction(accounts[11],212,web3.utils.toHex("ZKunewHN8L"));
result = await instance.submitTransaction(accounts[1],227,web3.utils.toHex("wNSJDHCriK"));
result = await instance.submitTransaction(accounts[5],464,web3.utils.toHex("vIoqNtVez8"));
result = await instance.submitTransaction(accounts[18],421,web3.utils.toHex("b8VRvcPeyL"));
result = await instance.submitTransaction(accounts[15],404,web3.utils.toHex("b2v4fepzsI"));
result = await instance.submitTransaction(accounts[7],313,web3.utils.toHex("Ke9d7G6Dax"));
result = await instance.submitTransaction(accounts[15],217,web3.utils.toHex("0qgFhQsAkS"));
result = await instance.submitTransaction(accounts[6],258,web3.utils.toHex("RGs5OMXL9q"));
result = await instance.submitTransaction(accounts[17],298,web3.utils.toHex("su5AnO7639"));
result = await instance.submitTransaction(accounts[17],343,web3.utils.toHex("r1xiRyYzeI"));
result = await instance.submitTransaction(accounts[12],230,web3.utils.toHex("25mL9qt0xe"));
result = await instance.submitTransaction(accounts[18],350,web3.utils.toHex("MzOSeBfprQ"));
result = await instance.submitTransaction(accounts[8],351,web3.utils.toHex("2asMCrE0WT"));
result = await instance.submitTransaction(accounts[15],326,web3.utils.toHex("yBmheKkRdF"));
result = await instance.submitTransaction(accounts[18],384,web3.utils.toHex("dH2F0fPz7q"));
result = await instance.submitTransaction(accounts[16],387,web3.utils.toHex("tfc5u2AMV9"));
result = await instance.submitTransaction(accounts[14],205,web3.utils.toHex("BemnHvQZot"));
result = await instance.submitTransaction(accounts[10],264,web3.utils.toHex("zjLV89cbvU"));
result = await instance.submitTransaction(accounts[9],286,web3.utils.toHex("Nu6hiCYREA"));
result = await instance.submitTransaction(accounts[14],362,web3.utils.toHex("0mdTcVnRkU"));
result = await instance.submitTransaction(accounts[1],232,web3.utils.toHex("CAVGzbnx1p"));
result = await instance.submitTransaction(accounts[5],264,web3.utils.toHex("rqyS9RT1Nx"));
result = await instance.submitTransaction(accounts[20],440,web3.utils.toHex("PWwGDpJoKC"));
result = await instance.submitTransaction(accounts[20],271,web3.utils.toHex("EvSCAL2a8B"));
result = await instance.submitTransaction(accounts[17],466,web3.utils.toHex("uoabewPC4M"));
result = await instance.submitTransaction(accounts[4],241,web3.utils.toHex("kc8rPUiYWV"));
result = await instance.submitTransaction(accounts[10],357,web3.utils.toHex("hduAno2BzH"));
result = await instance.submitTransaction(accounts[18],223,web3.utils.toHex("czEoiQXyL9"));
result = await instance.submitTransaction(accounts[11],432,web3.utils.toHex("8oDOB5US6e"));
result = await instance.submitTransaction(accounts[14],465,web3.utils.toHex("Vmu7ag6xsc"));
result = await instance.submitTransaction(accounts[4],313,web3.utils.toHex("eriNtTHLo0"));
result = await instance.submitTransaction(accounts[6],492,web3.utils.toHex("7KziAYywtc"));
await instance.executeTransaction(10);
});
});
