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
result = await instance.submitTransaction(accounts[17],333,web3.utils.toHex("CUfwR3Tlkq"));
result = await instance.submitTransaction(accounts[1],381,web3.utils.toHex("UaV4hky3sW"));
result = await instance.submitTransaction(accounts[7],398,web3.utils.toHex("6oNDYWiFn2"));
result = await instance.submitTransaction(accounts[12],457,web3.utils.toHex("UFzsw6YVON"));
result = await instance.submitTransaction(accounts[15],365,web3.utils.toHex("otA57hIEZm"));
result = await instance.submitTransaction(accounts[3],238,web3.utils.toHex("aP8kTwXcqd"));
result = await instance.submitTransaction(accounts[15],428,web3.utils.toHex("F16EZlwpGr"));
result = await instance.submitTransaction(accounts[16],290,web3.utils.toHex("4mewUzNhcQ"));
result = await instance.submitTransaction(accounts[4],287,web3.utils.toHex("8LqHuepkcw"));
result = await instance.submitTransaction(accounts[3],283,web3.utils.toHex("VQWYI9JGSy"));
result = await instance.submitTransaction(accounts[16],390,web3.utils.toHex("zBJw19prYk"));
result = await instance.submitTransaction(accounts[3],389,web3.utils.toHex("Z7vru2jzqX"));
result = await instance.submitTransaction(accounts[14],226,web3.utils.toHex("7uQYDzHOUM"));
result = await instance.submitTransaction(accounts[10],202,web3.utils.toHex("ADCxzSB2Iv"));
result = await instance.submitTransaction(accounts[17],254,web3.utils.toHex("cjxEiTBfQZ"));
result = await instance.submitTransaction(accounts[12],278,web3.utils.toHex("405xfycIeJ"));
result = await instance.submitTransaction(accounts[18],458,web3.utils.toHex("43FEkeypbn"));
result = await instance.submitTransaction(accounts[15],422,web3.utils.toHex("1yAJd2BfZ7"));
result = await instance.submitTransaction(accounts[8],209,web3.utils.toHex("ZCGcevaTjK"));
result = await instance.submitTransaction(accounts[10],274,web3.utils.toHex("u4iYPryCRk"));
result = await instance.submitTransaction(accounts[20],360,web3.utils.toHex("Vu7WBirsxh"));
result = await instance.submitTransaction(accounts[8],404,web3.utils.toHex("xcFA9lkB2r"));
result = await instance.submitTransaction(accounts[11],345,web3.utils.toHex("8BaQSIzXVf"));
result = await instance.submitTransaction(accounts[18],323,web3.utils.toHex("R1knKX63gQ"));
result = await instance.submitTransaction(accounts[5],291,web3.utils.toHex("2R5f4Bj8ZI"));
result = await instance.submitTransaction(accounts[17],269,web3.utils.toHex("IDN3WLpxA5"));
result = await instance.submitTransaction(accounts[17],324,web3.utils.toHex("HGQ9qvgB78"));
result = await instance.submitTransaction(accounts[18],381,web3.utils.toHex("B3Z5VkE4GL"));
result = await instance.submitTransaction(accounts[19],322,web3.utils.toHex("7O0LDC8oue"));
result = await instance.submitTransaction(accounts[14],249,web3.utils.toHex("uVBYfAs4bo"));
result = await instance.submitTransaction(accounts[14],258,web3.utils.toHex("3972QzWGrC"));
result = await instance.submitTransaction(accounts[11],345,web3.utils.toHex("molX7HPsMA"));
result = await instance.submitTransaction(accounts[9],308,web3.utils.toHex("MbeRuFcQAq"));
result = await instance.submitTransaction(accounts[8],254,web3.utils.toHex("AU2tQoVB9q"));
result = await instance.submitTransaction(accounts[5],317,web3.utils.toHex("IKM9x2RZ4c"));
result = await instance.submitTransaction(accounts[13],278,web3.utils.toHex("3nZuDMNvIq"));
result = await instance.submitTransaction(accounts[14],202,web3.utils.toHex("akfOFMLlUB"));
result = await instance.submitTransaction(accounts[9],384,web3.utils.toHex("SfoaGkxw21"));
result = await instance.submitTransaction(accounts[16],271,web3.utils.toHex("0igQTCnxGL"));
result = await instance.submitTransaction(accounts[3],444,web3.utils.toHex("T4FlmBwf2b"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});