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
result = await instance.submitTransaction(accounts[15],373,web3.utils.toHex("N5k2tFCugX"));
result = await instance.submitTransaction(accounts[5],244,web3.utils.toHex("VgTznyNb2x"));
result = await instance.submitTransaction(accounts[6],354,web3.utils.toHex("sJCWwGeZU8"));
result = await instance.submitTransaction(accounts[10],317,web3.utils.toHex("itqJYI4uWx"));
result = await instance.submitTransaction(accounts[18],412,web3.utils.toHex("Kh301b45xV"));
result = await instance.submitTransaction(accounts[12],371,web3.utils.toHex("jiDnI9ZtsL"));
result = await instance.submitTransaction(accounts[5],223,web3.utils.toHex("yq5l4Nh0d3"));
result = await instance.submitTransaction(accounts[15],403,web3.utils.toHex("LTAwMGYjBk"));
result = await instance.submitTransaction(accounts[10],457,web3.utils.toHex("9cTlXg5fro"));
result = await instance.submitTransaction(accounts[14],399,web3.utils.toHex("gnYE8Qtkqz"));
result = await instance.submitTransaction(accounts[7],309,web3.utils.toHex("fM80uKHa2n"));
result = await instance.submitTransaction(accounts[3],207,web3.utils.toHex("3RJrGU6epw"));
result = await instance.submitTransaction(accounts[9],392,web3.utils.toHex("f8rdsvyt05"));
result = await instance.submitTransaction(accounts[11],320,web3.utils.toHex("c68dqajYpL"));
result = await instance.submitTransaction(accounts[15],461,web3.utils.toHex("tILAmsJcwX"));
result = await instance.submitTransaction(accounts[14],296,web3.utils.toHex("L2tmPJbjRu"));
result = await instance.submitTransaction(accounts[11],388,web3.utils.toHex("sNX1mMWfGl"));
result = await instance.submitTransaction(accounts[19],231,web3.utils.toHex("kOhD9I5TJG"));
result = await instance.submitTransaction(accounts[1],272,web3.utils.toHex("Y2TrifesKU"));
result = await instance.submitTransaction(accounts[9],320,web3.utils.toHex("15ep6CiKSQ"));
result = await instance.submitTransaction(accounts[10],409,web3.utils.toHex("UCS7ufQKLE"));
result = await instance.submitTransaction(accounts[16],245,web3.utils.toHex("mnodfuq9pi"));
result = await instance.submitTransaction(accounts[17],427,web3.utils.toHex("XjlUkYwIc7"));
result = await instance.submitTransaction(accounts[4],301,web3.utils.toHex("HIDqgZrXCR"));
result = await instance.submitTransaction(accounts[8],357,web3.utils.toHex("BoZGOnDxdp"));
result = await instance.submitTransaction(accounts[18],275,web3.utils.toHex("rYxbP61gi5"));
result = await instance.submitTransaction(accounts[13],398,web3.utils.toHex("q3nyFwk1Sr"));
result = await instance.submitTransaction(accounts[19],281,web3.utils.toHex("CsZ5jYtWmE"));
result = await instance.submitTransaction(accounts[5],291,web3.utils.toHex("JeQ790L6zE"));
result = await instance.submitTransaction(accounts[5],311,web3.utils.toHex("OI4aVkioXE"));
result = await instance.submitTransaction(accounts[17],267,web3.utils.toHex("KLjWgOvGpH"));
result = await instance.submitTransaction(accounts[14],309,web3.utils.toHex("L2bCIdDEhz"));
result = await instance.submitTransaction(accounts[2],255,web3.utils.toHex("nWykH9KdGg"));
result = await instance.submitTransaction(accounts[6],238,web3.utils.toHex("sgAlMDmGR2"));
result = await instance.submitTransaction(accounts[5],267,web3.utils.toHex("vYi5CMf9Gz"));
result = await instance.submitTransaction(accounts[5],279,web3.utils.toHex("iFOnorKvAZ"));
result = await instance.submitTransaction(accounts[9],338,web3.utils.toHex("kK6T3DvpUr"));
result = await instance.submitTransaction(accounts[13],444,web3.utils.toHex("ywnA6gNlop"));
result = await instance.submitTransaction(accounts[20],244,web3.utils.toHex("92OmHhrD1e"));
result = await instance.submitTransaction(accounts[20],467,web3.utils.toHex("pqYxvZUgBb"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
