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
result = await instance.submitTransaction(accounts[6],332,web3.utils.toHex("9RMSra5he0"));
result = await instance.submitTransaction(accounts[4],211,web3.utils.toHex("kL8SuQEWsV"));
result = await instance.submitTransaction(accounts[6],353,web3.utils.toHex("DmKIAwZEit"));
result = await instance.submitTransaction(accounts[2],393,web3.utils.toHex("T0IWQ3Aeo2"));
result = await instance.submitTransaction(accounts[17],229,web3.utils.toHex("4gDbGqoOFx"));
result = await instance.submitTransaction(accounts[11],361,web3.utils.toHex("htimYD9C4N"));
result = await instance.submitTransaction(accounts[18],371,web3.utils.toHex("FrnUACLJi8"));
result = await instance.submitTransaction(accounts[11],441,web3.utils.toHex("ksUE5I8M2y"));
result = await instance.submitTransaction(accounts[2],438,web3.utils.toHex("x4ulf2XoeP"));
result = await instance.submitTransaction(accounts[14],280,web3.utils.toHex("d5X4FGj9po"));
result = await instance.submitTransaction(accounts[10],350,web3.utils.toHex("U389Qterzb"));
result = await instance.submitTransaction(accounts[15],226,web3.utils.toHex("3w4tmMdvFj"));
result = await instance.submitTransaction(accounts[15],353,web3.utils.toHex("PBhed1MGgq"));
result = await instance.submitTransaction(accounts[11],490,web3.utils.toHex("BDaY8Oh3cN"));
result = await instance.submitTransaction(accounts[20],276,web3.utils.toHex("8YQXaUZdKv"));
result = await instance.submitTransaction(accounts[2],431,web3.utils.toHex("AUa9pYzgHi"));
result = await instance.submitTransaction(accounts[19],367,web3.utils.toHex("KYUrngImAT"));
result = await instance.submitTransaction(accounts[3],327,web3.utils.toHex("WcqzVMEaip"));
result = await instance.submitTransaction(accounts[10],204,web3.utils.toHex("hLxK0PykRn"));
result = await instance.submitTransaction(accounts[2],436,web3.utils.toHex("3Yk7f4mgS8"));
result = await instance.submitTransaction(accounts[8],487,web3.utils.toHex("SbRueZEdw1"));
result = await instance.submitTransaction(accounts[7],359,web3.utils.toHex("74xKHeP0JG"));
result = await instance.submitTransaction(accounts[20],253,web3.utils.toHex("9P15NcutnB"));
result = await instance.submitTransaction(accounts[9],303,web3.utils.toHex("oS4jIUKG2u"));
result = await instance.submitTransaction(accounts[8],211,web3.utils.toHex("pCmNutwKkj"));
result = await instance.submitTransaction(accounts[9],274,web3.utils.toHex("boNLqr2Q7W"));
result = await instance.submitTransaction(accounts[15],266,web3.utils.toHex("8hg6CFYTlo"));
result = await instance.submitTransaction(accounts[1],367,web3.utils.toHex("35vAqTntgQ"));
result = await instance.submitTransaction(accounts[9],464,web3.utils.toHex("dFoLuvXNzV"));
result = await instance.submitTransaction(accounts[6],269,web3.utils.toHex("kgExILQetu"));
result = await instance.submitTransaction(accounts[1],419,web3.utils.toHex("AkIFi73HT1"));
result = await instance.submitTransaction(accounts[6],328,web3.utils.toHex("3UElthWp57"));
result = await instance.submitTransaction(accounts[19],484,web3.utils.toHex("RKq2toMP1J"));
result = await instance.submitTransaction(accounts[4],398,web3.utils.toHex("uUdJf71OYq"));
result = await instance.submitTransaction(accounts[11],443,web3.utils.toHex("ycnuI0dmLZ"));
result = await instance.submitTransaction(accounts[17],241,web3.utils.toHex("4bDkMH9tKj"));
result = await instance.submitTransaction(accounts[10],243,web3.utils.toHex("fwJ2ovc1z6"));
result = await instance.submitTransaction(accounts[10],355,web3.utils.toHex("HV03ZjEszF"));
result = await instance.submitTransaction(accounts[20],243,web3.utils.toHex("0ueIrZX8mE"));
result = await instance.submitTransaction(accounts[19],336,web3.utils.toHex("3q1neodytQ"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
