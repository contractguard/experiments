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
result = await instance.submitTransaction(accounts[15],251,web3.utils.toHex("TvHmuy8M2E"));
result = await instance.submitTransaction(accounts[16],253,web3.utils.toHex("j3gIHhMp8K"));
result = await instance.submitTransaction(accounts[4],392,web3.utils.toHex("FZPR3cI0qa"));
result = await instance.submitTransaction(accounts[5],442,web3.utils.toHex("iAI9pgRndK"));
result = await instance.submitTransaction(accounts[16],330,web3.utils.toHex("iBheM4fCcW"));
result = await instance.submitTransaction(accounts[6],230,web3.utils.toHex("CPs3x0KncT"));
result = await instance.submitTransaction(accounts[4],383,web3.utils.toHex("hAK0wMpjLl"));
result = await instance.submitTransaction(accounts[3],499,web3.utils.toHex("Fy1K2IhxoA"));
result = await instance.submitTransaction(accounts[8],239,web3.utils.toHex("MUDRrJeIEP"));
result = await instance.submitTransaction(accounts[4],271,web3.utils.toHex("qfNAlvQeO3"));
result = await instance.submitTransaction(accounts[14],283,web3.utils.toHex("E4BqkASmhK"));
result = await instance.submitTransaction(accounts[9],329,web3.utils.toHex("K8SBFRqZ0J"));
result = await instance.submitTransaction(accounts[8],383,web3.utils.toHex("vQoyGDBXA8"));
result = await instance.submitTransaction(accounts[1],412,web3.utils.toHex("mxRkZENqP0"));
result = await instance.submitTransaction(accounts[1],447,web3.utils.toHex("BM0rLkoy4I"));
result = await instance.submitTransaction(accounts[4],235,web3.utils.toHex("kH4MEJvhCp"));
result = await instance.submitTransaction(accounts[17],324,web3.utils.toHex("prsTywRe3x"));
result = await instance.submitTransaction(accounts[9],319,web3.utils.toHex("xVtTruoIcP"));
result = await instance.submitTransaction(accounts[9],377,web3.utils.toHex("40Qv5Ualc9"));
result = await instance.submitTransaction(accounts[6],347,web3.utils.toHex("4m0X2bgRvo"));
result = await instance.submitTransaction(accounts[4],242,web3.utils.toHex("YnfhxXMTSU"));
result = await instance.submitTransaction(accounts[1],426,web3.utils.toHex("VK0XHBdN9L"));
result = await instance.submitTransaction(accounts[19],335,web3.utils.toHex("A7j8hSGd5T"));
result = await instance.submitTransaction(accounts[10],488,web3.utils.toHex("1bgROmJ3cx"));
result = await instance.submitTransaction(accounts[5],457,web3.utils.toHex("YkaTeow8fW"));
result = await instance.submitTransaction(accounts[3],397,web3.utils.toHex("qYhZPp4bOE"));
result = await instance.submitTransaction(accounts[16],297,web3.utils.toHex("hMNeK8dHan"));
result = await instance.submitTransaction(accounts[18],466,web3.utils.toHex("woj5zPiWVm"));
result = await instance.submitTransaction(accounts[15],241,web3.utils.toHex("93Hp12INmn"));
result = await instance.submitTransaction(accounts[12],331,web3.utils.toHex("wA3rdULOWX"));
result = await instance.submitTransaction(accounts[18],279,web3.utils.toHex("Sgzf3Xl1c9"));
result = await instance.submitTransaction(accounts[3],424,web3.utils.toHex("t3jelH6Usz"));
result = await instance.submitTransaction(accounts[15],448,web3.utils.toHex("rUYAmpildX"));
result = await instance.submitTransaction(accounts[14],360,web3.utils.toHex("mFWXL8Zeul"));
result = await instance.submitTransaction(accounts[20],472,web3.utils.toHex("LNPzIQ5qDr"));
result = await instance.submitTransaction(accounts[4],233,web3.utils.toHex("Va0dIy8oz2"));
result = await instance.submitTransaction(accounts[11],407,web3.utils.toHex("YxIzLunE1R"));
result = await instance.submitTransaction(accounts[14],301,web3.utils.toHex("Mq0sQcp9nl"));
result = await instance.submitTransaction(accounts[11],355,web3.utils.toHex("lQL25u8FnU"));
result = await instance.submitTransaction(accounts[20],432,web3.utils.toHex("DoZXHqN3YG"));
await instance.executeTransaction(10);
});
});
