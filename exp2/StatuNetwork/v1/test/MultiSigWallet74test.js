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
result = await instance.submitTransaction(accounts[17],441,web3.utils.toHex("hx1XFHjnIo"));
result = await instance.submitTransaction(accounts[12],229,web3.utils.toHex("rZNtm1Mnvg"));
result = await instance.submitTransaction(accounts[17],347,web3.utils.toHex("D5tM7AmZfy"));
result = await instance.submitTransaction(accounts[3],294,web3.utils.toHex("2d8zqxfvyg"));
result = await instance.submitTransaction(accounts[9],361,web3.utils.toHex("YbtAELgTdQ"));
result = await instance.submitTransaction(accounts[4],427,web3.utils.toHex("1cUV65g3bs"));
result = await instance.submitTransaction(accounts[13],258,web3.utils.toHex("S0xgELfjCa"));
result = await instance.submitTransaction(accounts[2],231,web3.utils.toHex("WfjKC1D8pV"));
result = await instance.submitTransaction(accounts[11],299,web3.utils.toHex("FWu2Y49H0K"));
result = await instance.submitTransaction(accounts[8],319,web3.utils.toHex("85AaHzFEGP"));
result = await instance.submitTransaction(accounts[2],280,web3.utils.toHex("E37ZJwBDPW"));
result = await instance.submitTransaction(accounts[16],479,web3.utils.toHex("ZEURIr39NP"));
result = await instance.submitTransaction(accounts[12],444,web3.utils.toHex("9dRSFy2Ma5"));
result = await instance.submitTransaction(accounts[18],399,web3.utils.toHex("BVt36inINW"));
result = await instance.submitTransaction(accounts[7],331,web3.utils.toHex("KrPuUxehRt"));
result = await instance.submitTransaction(accounts[7],269,web3.utils.toHex("e5G4UCFQwp"));
result = await instance.submitTransaction(accounts[13],464,web3.utils.toHex("crpgywDmuV"));
result = await instance.submitTransaction(accounts[17],253,web3.utils.toHex("02OEsGrfyW"));
result = await instance.submitTransaction(accounts[15],229,web3.utils.toHex("JgukTFbEmP"));
result = await instance.submitTransaction(accounts[6],317,web3.utils.toHex("W1Tki87GSV"));
result = await instance.submitTransaction(accounts[18],260,web3.utils.toHex("0T8fmHyDoV"));
result = await instance.submitTransaction(accounts[8],235,web3.utils.toHex("hGgc5EjvbN"));
result = await instance.submitTransaction(accounts[1],348,web3.utils.toHex("txqP6nfhDM"));
result = await instance.submitTransaction(accounts[5],272,web3.utils.toHex("qcPJTgiIZF"));
result = await instance.submitTransaction(accounts[5],461,web3.utils.toHex("xlurdR6hXI"));
result = await instance.submitTransaction(accounts[1],322,web3.utils.toHex("Y6bj2xTMK4"));
result = await instance.submitTransaction(accounts[6],473,web3.utils.toHex("sjKf14P5yU"));
result = await instance.submitTransaction(accounts[20],217,web3.utils.toHex("6boWRZsCFA"));
result = await instance.submitTransaction(accounts[17],202,web3.utils.toHex("pXEiDHqox3"));
result = await instance.submitTransaction(accounts[15],204,web3.utils.toHex("ZePSKy9mn6"));
result = await instance.submitTransaction(accounts[6],252,web3.utils.toHex("EmY7C0lOh3"));
result = await instance.submitTransaction(accounts[19],290,web3.utils.toHex("1LJTANovxh"));
result = await instance.submitTransaction(accounts[16],393,web3.utils.toHex("dm9Ts0JjQX"));
result = await instance.submitTransaction(accounts[17],230,web3.utils.toHex("WsKEBpP87T"));
result = await instance.submitTransaction(accounts[20],398,web3.utils.toHex("rVcH0ADbMy"));
result = await instance.submitTransaction(accounts[9],400,web3.utils.toHex("nFrM9eUHYo"));
result = await instance.submitTransaction(accounts[1],306,web3.utils.toHex("jPlHAs2n3X"));
result = await instance.submitTransaction(accounts[9],411,web3.utils.toHex("iRXq8SFPEx"));
result = await instance.submitTransaction(accounts[9],308,web3.utils.toHex("mAjw36pePr"));
result = await instance.submitTransaction(accounts[1],341,web3.utils.toHex("byaqN2o6jd"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
