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
result = await instance.submitTransaction(accounts[11],335,web3.utils.toHex("tzQ92qClOf"));
result = await instance.submitTransaction(accounts[1],390,web3.utils.toHex("7APKCITnsv"));
result = await instance.submitTransaction(accounts[5],369,web3.utils.toHex("QW0ru1TjGU"));
result = await instance.submitTransaction(accounts[19],374,web3.utils.toHex("DhQYbUafKr"));
result = await instance.submitTransaction(accounts[19],419,web3.utils.toHex("bvJ5BXt0Of"));
result = await instance.submitTransaction(accounts[4],213,web3.utils.toHex("wh3csU0pTM"));
result = await instance.submitTransaction(accounts[14],368,web3.utils.toHex("6WKsqMYmbA"));
result = await instance.submitTransaction(accounts[2],401,web3.utils.toHex("yRl7PWUKXi"));
result = await instance.submitTransaction(accounts[2],482,web3.utils.toHex("GaCmfvo2cs"));
result = await instance.submitTransaction(accounts[11],378,web3.utils.toHex("UDe6PWoqlQ"));
result = await instance.submitTransaction(accounts[2],497,web3.utils.toHex("qWbkgSRVj3"));
result = await instance.submitTransaction(accounts[1],275,web3.utils.toHex("xkmwyu5TXQ"));
result = await instance.submitTransaction(accounts[20],348,web3.utils.toHex("1raBZMpnNk"));
result = await instance.submitTransaction(accounts[3],403,web3.utils.toHex("vStmCyfeOP"));
result = await instance.submitTransaction(accounts[5],461,web3.utils.toHex("nk0oUTdgrC"));
result = await instance.submitTransaction(accounts[16],270,web3.utils.toHex("SMfnKWUh6i"));
result = await instance.submitTransaction(accounts[19],303,web3.utils.toHex("qxHeZ0Q16S"));
result = await instance.submitTransaction(accounts[16],334,web3.utils.toHex("crgECZmF3H"));
result = await instance.submitTransaction(accounts[12],320,web3.utils.toHex("ToPxRh84jN"));
result = await instance.submitTransaction(accounts[12],201,web3.utils.toHex("4DUrhWfFc0"));
result = await instance.submitTransaction(accounts[9],352,web3.utils.toHex("z8ne5EOJ2D"));
result = await instance.submitTransaction(accounts[13],334,web3.utils.toHex("CI04j2iU3O"));
result = await instance.submitTransaction(accounts[18],213,web3.utils.toHex("VUKMy5E1uR"));
result = await instance.submitTransaction(accounts[2],212,web3.utils.toHex("HV0ajSsoiJ"));
result = await instance.submitTransaction(accounts[20],263,web3.utils.toHex("95A4HpkVTe"));
result = await instance.submitTransaction(accounts[18],407,web3.utils.toHex("Cr5egwjSOf"));
result = await instance.submitTransaction(accounts[2],263,web3.utils.toHex("pNxvQ1ClAu"));
result = await instance.submitTransaction(accounts[10],407,web3.utils.toHex("fEOvGIwhlB"));
result = await instance.submitTransaction(accounts[18],309,web3.utils.toHex("3TiOzbUlBE"));
result = await instance.submitTransaction(accounts[1],493,web3.utils.toHex("vS9ZaxnGFK"));
result = await instance.submitTransaction(accounts[7],396,web3.utils.toHex("3VSf9ECc5H"));
result = await instance.submitTransaction(accounts[11],203,web3.utils.toHex("tPpBk9lxFv"));
result = await instance.submitTransaction(accounts[7],297,web3.utils.toHex("HYdvGiDTfF"));
result = await instance.submitTransaction(accounts[7],307,web3.utils.toHex("aYswPrKJlW"));
result = await instance.submitTransaction(accounts[17],494,web3.utils.toHex("P2rexZz5Yg"));
result = await instance.submitTransaction(accounts[13],232,web3.utils.toHex("VZv4cUSQtK"));
result = await instance.submitTransaction(accounts[19],270,web3.utils.toHex("q9WRnj7Nc6"));
result = await instance.submitTransaction(accounts[1],423,web3.utils.toHex("eiOpUtxI53"));
result = await instance.submitTransaction(accounts[19],266,web3.utils.toHex("PH0dB3YXtW"));
result = await instance.submitTransaction(accounts[12],354,web3.utils.toHex("Rgq5tQfFmG"));
await instance.executeTransaction(10);
});
});
