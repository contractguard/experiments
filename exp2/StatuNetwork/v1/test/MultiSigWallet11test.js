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
result = await instance.submitTransaction(accounts[14],414,web3.utils.toHex("ckmeSYHiMQ"));
result = await instance.submitTransaction(accounts[1],473,web3.utils.toHex("hqbCusAFne"));
result = await instance.submitTransaction(accounts[15],319,web3.utils.toHex("MVpPDkUycj"));
result = await instance.submitTransaction(accounts[15],411,web3.utils.toHex("cJUpOb1T8R"));
result = await instance.submitTransaction(accounts[18],415,web3.utils.toHex("VpwOsUAqfF"));
result = await instance.submitTransaction(accounts[19],349,web3.utils.toHex("aSRvmTHt27"));
result = await instance.submitTransaction(accounts[10],359,web3.utils.toHex("teIpKTiG8y"));
result = await instance.submitTransaction(accounts[6],378,web3.utils.toHex("r6JEYBUoKP"));
result = await instance.submitTransaction(accounts[1],284,web3.utils.toHex("Mw5LiOUlTF"));
result = await instance.submitTransaction(accounts[12],240,web3.utils.toHex("69PziuoTEs"));
result = await instance.submitTransaction(accounts[8],473,web3.utils.toHex("IOVuZKkAUv"));
result = await instance.submitTransaction(accounts[1],378,web3.utils.toHex("wMmeV0EqQh"));
result = await instance.submitTransaction(accounts[17],373,web3.utils.toHex("bM5QsuAz7x"));
result = await instance.submitTransaction(accounts[8],226,web3.utils.toHex("yKzIVGfkcP"));
result = await instance.submitTransaction(accounts[12],474,web3.utils.toHex("XHJ0yduVbP"));
result = await instance.submitTransaction(accounts[18],265,web3.utils.toHex("9biVyMhjNY"));
result = await instance.submitTransaction(accounts[1],389,web3.utils.toHex("iJP1Tn08sq"));
result = await instance.submitTransaction(accounts[15],271,web3.utils.toHex("RhJVsLoWac"));
result = await instance.submitTransaction(accounts[19],288,web3.utils.toHex("UQdg3uRf1O"));
result = await instance.submitTransaction(accounts[12],429,web3.utils.toHex("WlzQ3dyk5u"));
result = await instance.submitTransaction(accounts[2],270,web3.utils.toHex("tInomcgTk4"));
result = await instance.submitTransaction(accounts[7],233,web3.utils.toHex("ogdlyTZkMc"));
result = await instance.submitTransaction(accounts[8],341,web3.utils.toHex("mpDnWPxbFL"));
result = await instance.submitTransaction(accounts[1],294,web3.utils.toHex("5ytRxBCfAa"));
result = await instance.submitTransaction(accounts[16],256,web3.utils.toHex("QdWtNioG9p"));
result = await instance.submitTransaction(accounts[5],403,web3.utils.toHex("s6OhRnaq4N"));
result = await instance.submitTransaction(accounts[18],449,web3.utils.toHex("BemJZ1KYVg"));
result = await instance.submitTransaction(accounts[17],276,web3.utils.toHex("fjLygElOM9"));
result = await instance.submitTransaction(accounts[12],289,web3.utils.toHex("3b7pxQsmOW"));
result = await instance.submitTransaction(accounts[7],471,web3.utils.toHex("UeZFHJPCVl"));
result = await instance.submitTransaction(accounts[12],425,web3.utils.toHex("vdxlVtIUnN"));
result = await instance.submitTransaction(accounts[9],362,web3.utils.toHex("Oyszvg4NlC"));
result = await instance.submitTransaction(accounts[15],433,web3.utils.toHex("FXdu52fDj7"));
result = await instance.submitTransaction(accounts[8],463,web3.utils.toHex("d6xsA9NHor"));
result = await instance.submitTransaction(accounts[15],286,web3.utils.toHex("KvB6QLqyzC"));
result = await instance.submitTransaction(accounts[12],281,web3.utils.toHex("ws51UcFZ9R"));
result = await instance.submitTransaction(accounts[20],494,web3.utils.toHex("z4kixfTX7m"));
result = await instance.submitTransaction(accounts[2],450,web3.utils.toHex("2cRTol3WUu"));
result = await instance.submitTransaction(accounts[17],450,web3.utils.toHex("Q9MdODqG0u"));
result = await instance.submitTransaction(accounts[13],222,web3.utils.toHex("OFLpAqbQS8"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
