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
result = await instance.submitTransaction(accounts[5],348,web3.utils.toHex("ScubGmHl90"));
result = await instance.submitTransaction(accounts[4],229,web3.utils.toHex("SvGEDhcUbf"));
result = await instance.submitTransaction(accounts[6],358,web3.utils.toHex("dbSc9MuqHG"));
result = await instance.submitTransaction(accounts[3],267,web3.utils.toHex("HUCTFGaWRd"));
result = await instance.submitTransaction(accounts[1],381,web3.utils.toHex("RD0e9OHtoY"));
result = await instance.submitTransaction(accounts[10],427,web3.utils.toHex("fM18AdQIlc"));
result = await instance.submitTransaction(accounts[4],451,web3.utils.toHex("YB5I6yAdo4"));
result = await instance.submitTransaction(accounts[5],312,web3.utils.toHex("V7dJPGZnQB"));
result = await instance.submitTransaction(accounts[12],447,web3.utils.toHex("0kKsBNzlgF"));
result = await instance.submitTransaction(accounts[11],468,web3.utils.toHex("SgzGmv03kc"));
result = await instance.submitTransaction(accounts[10],460,web3.utils.toHex("XfDuSKrn8w"));
result = await instance.submitTransaction(accounts[19],451,web3.utils.toHex("MQ2fyR1O3b"));
result = await instance.submitTransaction(accounts[3],489,web3.utils.toHex("EDaYSN3Up6"));
result = await instance.submitTransaction(accounts[7],491,web3.utils.toHex("kXGdN1ms7n"));
result = await instance.submitTransaction(accounts[3],242,web3.utils.toHex("Xrb5lQgGPU"));
result = await instance.submitTransaction(accounts[14],213,web3.utils.toHex("VmJsPXrO4x"));
result = await instance.submitTransaction(accounts[18],297,web3.utils.toHex("GgiO9XKrRY"));
result = await instance.submitTransaction(accounts[11],314,web3.utils.toHex("jRvhIC19nP"));
result = await instance.submitTransaction(accounts[15],427,web3.utils.toHex("JEboXWwH31"));
result = await instance.submitTransaction(accounts[8],365,web3.utils.toHex("0GzEbK4INM"));
result = await instance.submitTransaction(accounts[19],241,web3.utils.toHex("OH0ehW2Vws"));
result = await instance.submitTransaction(accounts[15],450,web3.utils.toHex("JKLmMBypHA"));
result = await instance.submitTransaction(accounts[17],238,web3.utils.toHex("mSBOQn409K"));
result = await instance.submitTransaction(accounts[7],472,web3.utils.toHex("oiAPsDmFua"));
result = await instance.submitTransaction(accounts[17],444,web3.utils.toHex("4iNaO3veAP"));
result = await instance.submitTransaction(accounts[17],369,web3.utils.toHex("u2ersA9f6V"));
result = await instance.submitTransaction(accounts[3],370,web3.utils.toHex("4UYE0zCcVm"));
result = await instance.submitTransaction(accounts[8],389,web3.utils.toHex("6bvd9jXLVA"));
result = await instance.submitTransaction(accounts[9],264,web3.utils.toHex("fzPWT83lop"));
result = await instance.submitTransaction(accounts[10],464,web3.utils.toHex("nZYLXHIPB6"));
result = await instance.submitTransaction(accounts[12],201,web3.utils.toHex("w09jSTXlq4"));
result = await instance.submitTransaction(accounts[9],361,web3.utils.toHex("UBi12dAFpY"));
result = await instance.submitTransaction(accounts[17],338,web3.utils.toHex("SRrdCmphok"));
result = await instance.submitTransaction(accounts[14],370,web3.utils.toHex("xvtUQ7zRsK"));
result = await instance.submitTransaction(accounts[16],230,web3.utils.toHex("oLwmQMAp1Z"));
result = await instance.submitTransaction(accounts[7],433,web3.utils.toHex("PUneEsvNla"));
result = await instance.submitTransaction(accounts[19],211,web3.utils.toHex("TGoU70Lfet"));
result = await instance.submitTransaction(accounts[17],239,web3.utils.toHex("aRH5AEzcKb"));
result = await instance.submitTransaction(accounts[20],326,web3.utils.toHex("GQsXDPLRdj"));
result = await instance.submitTransaction(accounts[2],347,web3.utils.toHex("ZCgaEq6vTz"));
await instance.executeTransaction(10);
});
});
