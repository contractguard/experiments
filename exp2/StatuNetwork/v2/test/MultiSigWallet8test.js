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
result = await instance.submitTransaction(accounts[14],409,web3.utils.toHex("dqgKZVSuyz"));
result = await instance.submitTransaction(accounts[6],358,web3.utils.toHex("rgf5KVNbU2"));
result = await instance.submitTransaction(accounts[16],301,web3.utils.toHex("YyXD0cquf7"));
result = await instance.submitTransaction(accounts[17],379,web3.utils.toHex("Dmq5vCpE6t"));
result = await instance.submitTransaction(accounts[10],486,web3.utils.toHex("wDg0VERLHJ"));
result = await instance.submitTransaction(accounts[10],277,web3.utils.toHex("OUzfqZThCu"));
result = await instance.submitTransaction(accounts[1],286,web3.utils.toHex("5aVBr1dGUp"));
result = await instance.submitTransaction(accounts[7],259,web3.utils.toHex("SZwb9CIqiu"));
result = await instance.submitTransaction(accounts[10],401,web3.utils.toHex("ZUufrRCFbL"));
result = await instance.submitTransaction(accounts[2],403,web3.utils.toHex("T8QCs1HXc2"));
result = await instance.submitTransaction(accounts[8],243,web3.utils.toHex("jUpEGbgMOW"));
result = await instance.submitTransaction(accounts[3],475,web3.utils.toHex("JjrRDxle9v"));
result = await instance.submitTransaction(accounts[7],481,web3.utils.toHex("SYCW2bOiR9"));
result = await instance.submitTransaction(accounts[4],434,web3.utils.toHex("pxVlKHGO8S"));
result = await instance.submitTransaction(accounts[4],294,web3.utils.toHex("jVFWHD74Rf"));
result = await instance.submitTransaction(accounts[12],294,web3.utils.toHex("wBWVPjtd4H"));
result = await instance.submitTransaction(accounts[1],287,web3.utils.toHex("xN74R2aFSq"));
result = await instance.submitTransaction(accounts[19],458,web3.utils.toHex("IS35mVnXvH"));
result = await instance.submitTransaction(accounts[6],365,web3.utils.toHex("uiZm0IjTpH"));
result = await instance.submitTransaction(accounts[17],212,web3.utils.toHex("0ZCy2AS1KO"));
result = await instance.submitTransaction(accounts[5],474,web3.utils.toHex("Nbl5Mno0ij"));
result = await instance.submitTransaction(accounts[9],307,web3.utils.toHex("aipdIb1AGc"));
result = await instance.submitTransaction(accounts[15],286,web3.utils.toHex("s8GUuJDBVR"));
result = await instance.submitTransaction(accounts[19],364,web3.utils.toHex("63ARwd71l2"));
result = await instance.submitTransaction(accounts[9],292,web3.utils.toHex("QLS2RaYgC1"));
result = await instance.submitTransaction(accounts[18],398,web3.utils.toHex("CipjOyWcUB"));
result = await instance.submitTransaction(accounts[1],381,web3.utils.toHex("CsLIit7eV1"));
result = await instance.submitTransaction(accounts[12],479,web3.utils.toHex("FczHCXR4oQ"));
result = await instance.submitTransaction(accounts[6],495,web3.utils.toHex("ojfMw0YrIp"));
result = await instance.submitTransaction(accounts[16],423,web3.utils.toHex("Ct0gT4xucb"));
result = await instance.submitTransaction(accounts[4],336,web3.utils.toHex("VUIhxrRTS9"));
result = await instance.submitTransaction(accounts[6],404,web3.utils.toHex("FTQOmfd9Iz"));
result = await instance.submitTransaction(accounts[16],261,web3.utils.toHex("baCBAhGUjo"));
result = await instance.submitTransaction(accounts[7],377,web3.utils.toHex("3VTsze07Q8"));
result = await instance.submitTransaction(accounts[9],219,web3.utils.toHex("Fl3ZV0mDUx"));
result = await instance.submitTransaction(accounts[19],212,web3.utils.toHex("gncGwKBmpZ"));
result = await instance.submitTransaction(accounts[1],496,web3.utils.toHex("42C7csRxtY"));
result = await instance.submitTransaction(accounts[18],334,web3.utils.toHex("qRA4vo7JDm"));
result = await instance.submitTransaction(accounts[14],398,web3.utils.toHex("cIRq1XlQ0E"));
result = await instance.submitTransaction(accounts[16],350,web3.utils.toHex("0uY8PRtsCe"));
await instance.executeTransaction(10);
});
});