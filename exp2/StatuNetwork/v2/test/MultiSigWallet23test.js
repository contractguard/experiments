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
result = await instance.submitTransaction(accounts[16],388,web3.utils.toHex("eNivYcsECq"));
result = await instance.submitTransaction(accounts[2],251,web3.utils.toHex("lKs5gHZN4C"));
result = await instance.submitTransaction(accounts[2],482,web3.utils.toHex("swuaOnRb7f"));
result = await instance.submitTransaction(accounts[14],249,web3.utils.toHex("pClAEQKNIy"));
result = await instance.submitTransaction(accounts[9],470,web3.utils.toHex("z1ZkrDEijc"));
result = await instance.submitTransaction(accounts[10],377,web3.utils.toHex("PFkBJEroA4"));
result = await instance.submitTransaction(accounts[9],381,web3.utils.toHex("ksjrB4mJfO"));
result = await instance.submitTransaction(accounts[2],421,web3.utils.toHex("WJ4rTX3fbw"));
result = await instance.submitTransaction(accounts[18],360,web3.utils.toHex("OKbyHZML8n"));
result = await instance.submitTransaction(accounts[5],405,web3.utils.toHex("QvWJrNZEjR"));
result = await instance.submitTransaction(accounts[3],321,web3.utils.toHex("P6wpclhzBu"));
result = await instance.submitTransaction(accounts[9],410,web3.utils.toHex("PVvzbwOE7y"));
result = await instance.submitTransaction(accounts[2],418,web3.utils.toHex("VZ4CPI6nRa"));
result = await instance.submitTransaction(accounts[20],379,web3.utils.toHex("6oZmcPjrJE"));
result = await instance.submitTransaction(accounts[7],350,web3.utils.toHex("RCZndiau3c"));
result = await instance.submitTransaction(accounts[18],294,web3.utils.toHex("YMlXbUWwSm"));
result = await instance.submitTransaction(accounts[2],465,web3.utils.toHex("UWcQzwCtA9"));
result = await instance.submitTransaction(accounts[7],306,web3.utils.toHex("UmOfX6Zryg"));
result = await instance.submitTransaction(accounts[5],428,web3.utils.toHex("YxoTR2tOUS"));
result = await instance.submitTransaction(accounts[3],238,web3.utils.toHex("CDaO9WjgMb"));
result = await instance.submitTransaction(accounts[12],458,web3.utils.toHex("0VLk61nNIf"));
result = await instance.submitTransaction(accounts[2],397,web3.utils.toHex("ydB2hQ539r"));
result = await instance.submitTransaction(accounts[5],498,web3.utils.toHex("nWxD02mL7p"));
result = await instance.submitTransaction(accounts[4],331,web3.utils.toHex("JpuYd8KMaW"));
result = await instance.submitTransaction(accounts[1],484,web3.utils.toHex("VqIB3CLbDx"));
result = await instance.submitTransaction(accounts[6],281,web3.utils.toHex("UQ6N3xkEOr"));
result = await instance.submitTransaction(accounts[6],225,web3.utils.toHex("YfqEQy6N7P"));
result = await instance.submitTransaction(accounts[6],367,web3.utils.toHex("KqS9nkoTBG"));
result = await instance.submitTransaction(accounts[13],455,web3.utils.toHex("wcfz6SGYs4"));
result = await instance.submitTransaction(accounts[19],366,web3.utils.toHex("Uh6IJsZDlq"));
result = await instance.submitTransaction(accounts[15],241,web3.utils.toHex("2nwFWS1RCx"));
result = await instance.submitTransaction(accounts[14],470,web3.utils.toHex("6p5owLlHQU"));
result = await instance.submitTransaction(accounts[10],361,web3.utils.toHex("USKqpEZzPN"));
result = await instance.submitTransaction(accounts[7],342,web3.utils.toHex("ND2RI0Hpye"));
result = await instance.submitTransaction(accounts[14],453,web3.utils.toHex("oKDwm7rtUA"));
result = await instance.submitTransaction(accounts[12],227,web3.utils.toHex("LiyjvpeR5G"));
result = await instance.submitTransaction(accounts[6],226,web3.utils.toHex("2ILNi5xnjF"));
result = await instance.submitTransaction(accounts[8],329,web3.utils.toHex("WOFrzTm9KH"));
result = await instance.submitTransaction(accounts[3],232,web3.utils.toHex("2x7hHWtOkC"));
result = await instance.submitTransaction(accounts[2],286,web3.utils.toHex("Tkh8c74dsD"));
await instance.executeTransaction(10);
});
});
