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
result = await instance.submitTransaction(accounts[14],234,web3.utils.toHex("Oj078Zo6wC"));
result = await instance.submitTransaction(accounts[13],378,web3.utils.toHex("mGJwdnHBLQ"));
result = await instance.submitTransaction(accounts[14],467,web3.utils.toHex("G37QAsxnVJ"));
result = await instance.submitTransaction(accounts[14],294,web3.utils.toHex("scyAIOStgJ"));
result = await instance.submitTransaction(accounts[2],437,web3.utils.toHex("o9McEOwVxR"));
result = await instance.submitTransaction(accounts[12],449,web3.utils.toHex("oHFrNWCbT3"));
result = await instance.submitTransaction(accounts[8],203,web3.utils.toHex("F36ktnBEvJ"));
result = await instance.submitTransaction(accounts[10],369,web3.utils.toHex("DVMYcFERgd"));
result = await instance.submitTransaction(accounts[19],334,web3.utils.toHex("YQ5opbmcHX"));
result = await instance.submitTransaction(accounts[4],267,web3.utils.toHex("e3nfUGy2qm"));
result = await instance.submitTransaction(accounts[18],299,web3.utils.toHex("gRewLUImqQ"));
result = await instance.submitTransaction(accounts[9],217,web3.utils.toHex("U6Cnqjp0Kt"));
result = await instance.submitTransaction(accounts[19],305,web3.utils.toHex("ygikwVpt7A"));
result = await instance.submitTransaction(accounts[17],421,web3.utils.toHex("WrLqeAB4kx"));
result = await instance.submitTransaction(accounts[11],326,web3.utils.toHex("Q1XENMhbW0"));
result = await instance.submitTransaction(accounts[17],242,web3.utils.toHex("X2dUB7uolJ"));
result = await instance.submitTransaction(accounts[9],294,web3.utils.toHex("CpiOLsaKbr"));
result = await instance.submitTransaction(accounts[18],438,web3.utils.toHex("qrUFBCPAIo"));
result = await instance.submitTransaction(accounts[4],278,web3.utils.toHex("Wapb5miUjC"));
result = await instance.submitTransaction(accounts[15],301,web3.utils.toHex("EfHqrSXje6"));
result = await instance.submitTransaction(accounts[2],330,web3.utils.toHex("StwGRbZWcz"));
result = await instance.submitTransaction(accounts[10],297,web3.utils.toHex("361KmUBXR0"));
result = await instance.submitTransaction(accounts[11],217,web3.utils.toHex("wQg96RsMcH"));
result = await instance.submitTransaction(accounts[19],228,web3.utils.toHex("MDFc2Um3eH"));
result = await instance.submitTransaction(accounts[4],422,web3.utils.toHex("MjymAtro6T"));
result = await instance.submitTransaction(accounts[8],483,web3.utils.toHex("eHzT3AasQZ"));
result = await instance.submitTransaction(accounts[12],327,web3.utils.toHex("Ra0gPWdvwj"));
result = await instance.submitTransaction(accounts[12],297,web3.utils.toHex("NJvOsFtKGh"));
result = await instance.submitTransaction(accounts[2],421,web3.utils.toHex("fKMZuWVmFo"));
result = await instance.submitTransaction(accounts[1],425,web3.utils.toHex("N6ZQhrDGce"));
result = await instance.submitTransaction(accounts[11],345,web3.utils.toHex("XyqkDHtwnI"));
result = await instance.submitTransaction(accounts[18],273,web3.utils.toHex("rjlRKJbYG1"));
result = await instance.submitTransaction(accounts[14],297,web3.utils.toHex("nHSyJ0iexb"));
result = await instance.submitTransaction(accounts[15],266,web3.utils.toHex("n1PsUeGcx3"));
result = await instance.submitTransaction(accounts[12],410,web3.utils.toHex("8gO4xaDBEe"));
result = await instance.submitTransaction(accounts[7],218,web3.utils.toHex("3rZhlxsftw"));
result = await instance.submitTransaction(accounts[19],489,web3.utils.toHex("q7NPZDv2iX"));
result = await instance.submitTransaction(accounts[20],262,web3.utils.toHex("vf0M4yWmdz"));
result = await instance.submitTransaction(accounts[9],487,web3.utils.toHex("opV3m4f98U"));
result = await instance.submitTransaction(accounts[20],302,web3.utils.toHex("xR6l20ubS9"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
