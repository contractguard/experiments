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
result = await instance.submitTransaction(accounts[6],326,web3.utils.toHex("g83HQrcCJi"));
result = await instance.submitTransaction(accounts[17],359,web3.utils.toHex("FslBUP2jV9"));
result = await instance.submitTransaction(accounts[9],220,web3.utils.toHex("WbpgPKNY7D"));
result = await instance.submitTransaction(accounts[17],353,web3.utils.toHex("z9MEuKD8lR"));
result = await instance.submitTransaction(accounts[5],452,web3.utils.toHex("lMGcRIXjDv"));
result = await instance.submitTransaction(accounts[11],274,web3.utils.toHex("7FNudqgf5G"));
result = await instance.submitTransaction(accounts[19],464,web3.utils.toHex("uK3RfSPDhO"));
result = await instance.submitTransaction(accounts[20],381,web3.utils.toHex("4aMCmi1U6k"));
result = await instance.submitTransaction(accounts[4],357,web3.utils.toHex("QI3RrEJGg2"));
result = await instance.submitTransaction(accounts[7],415,web3.utils.toHex("dzHLIiJPqn"));
result = await instance.submitTransaction(accounts[6],213,web3.utils.toHex("7kn8mBdfoC"));
result = await instance.submitTransaction(accounts[14],404,web3.utils.toHex("psvRE1Y3c9"));
result = await instance.submitTransaction(accounts[14],494,web3.utils.toHex("m9CDzS26sT"));
result = await instance.submitTransaction(accounts[20],421,web3.utils.toHex("m3bFkcrVxs"));
result = await instance.submitTransaction(accounts[12],417,web3.utils.toHex("dZVEaMrTeO"));
result = await instance.submitTransaction(accounts[7],386,web3.utils.toHex("Shtu9aAgno"));
result = await instance.submitTransaction(accounts[12],250,web3.utils.toHex("ZJqxdGDlrU"));
result = await instance.submitTransaction(accounts[16],269,web3.utils.toHex("HpTsYecPGf"));
result = await instance.submitTransaction(accounts[14],300,web3.utils.toHex("4YVyBQRqGb"));
result = await instance.submitTransaction(accounts[14],213,web3.utils.toHex("FKRlCygcQs"));
result = await instance.submitTransaction(accounts[13],341,web3.utils.toHex("fcVzKxhDSo"));
result = await instance.submitTransaction(accounts[5],339,web3.utils.toHex("5LtPVOB2Qq"));
result = await instance.submitTransaction(accounts[1],464,web3.utils.toHex("wOSHZIjcUv"));
result = await instance.submitTransaction(accounts[17],320,web3.utils.toHex("Mg8BGK1lyw"));
result = await instance.submitTransaction(accounts[17],332,web3.utils.toHex("8VYG4HQWFA"));
result = await instance.submitTransaction(accounts[4],421,web3.utils.toHex("6KSrDWkJU7"));
result = await instance.submitTransaction(accounts[12],418,web3.utils.toHex("5yrANLV0qt"));
result = await instance.submitTransaction(accounts[19],402,web3.utils.toHex("kVgwO8BKxa"));
result = await instance.submitTransaction(accounts[1],483,web3.utils.toHex("NoJ2krifKE"));
result = await instance.submitTransaction(accounts[14],340,web3.utils.toHex("eiNGscLjVt"));
result = await instance.submitTransaction(accounts[7],317,web3.utils.toHex("MC9hgk6YWA"));
result = await instance.submitTransaction(accounts[1],492,web3.utils.toHex("wKStEDACBI"));
result = await instance.submitTransaction(accounts[13],374,web3.utils.toHex("f68poWl3TU"));
result = await instance.submitTransaction(accounts[5],342,web3.utils.toHex("gRy1ilufb9"));
result = await instance.submitTransaction(accounts[20],228,web3.utils.toHex("uKhHpSoRf0"));
result = await instance.submitTransaction(accounts[9],436,web3.utils.toHex("sXc3DW5kAE"));
result = await instance.submitTransaction(accounts[5],475,web3.utils.toHex("8cUKISCpyA"));
result = await instance.submitTransaction(accounts[9],445,web3.utils.toHex("DHmXBsUeVj"));
result = await instance.submitTransaction(accounts[15],384,web3.utils.toHex("3Wmp7HCBZD"));
result = await instance.submitTransaction(accounts[6],234,web3.utils.toHex("IPWhykrNX4"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
