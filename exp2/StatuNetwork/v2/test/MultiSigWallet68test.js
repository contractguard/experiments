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
result = await instance.submitTransaction(accounts[11],389,web3.utils.toHex("r3s9Bn62Ua"));
result = await instance.submitTransaction(accounts[10],337,web3.utils.toHex("xl9p5FeJwj"));
result = await instance.submitTransaction(accounts[5],380,web3.utils.toHex("D8byFwUsTC"));
result = await instance.submitTransaction(accounts[12],259,web3.utils.toHex("Q0DLugqHca"));
result = await instance.submitTransaction(accounts[17],374,web3.utils.toHex("PwlG3a7b02"));
result = await instance.submitTransaction(accounts[6],333,web3.utils.toHex("VnmqK8agrM"));
result = await instance.submitTransaction(accounts[11],438,web3.utils.toHex("jCc0EikdSD"));
result = await instance.submitTransaction(accounts[11],205,web3.utils.toHex("5IsnaHevwM"));
result = await instance.submitTransaction(accounts[13],381,web3.utils.toHex("9Yw3aCWzIp"));
result = await instance.submitTransaction(accounts[14],208,web3.utils.toHex("xwKblOynIi"));
result = await instance.submitTransaction(accounts[19],282,web3.utils.toHex("csPwIlzZ8q"));
result = await instance.submitTransaction(accounts[5],233,web3.utils.toHex("oLCmUuiD5F"));
result = await instance.submitTransaction(accounts[13],264,web3.utils.toHex("rjRtGokxCV"));
result = await instance.submitTransaction(accounts[5],261,web3.utils.toHex("XraxD01shN"));
result = await instance.submitTransaction(accounts[11],376,web3.utils.toHex("zZXYKSMTVj"));
result = await instance.submitTransaction(accounts[19],315,web3.utils.toHex("QIyXJcBdY7"));
result = await instance.submitTransaction(accounts[5],438,web3.utils.toHex("BsGYmjKcea"));
result = await instance.submitTransaction(accounts[18],298,web3.utils.toHex("6mlE5soYBQ"));
result = await instance.submitTransaction(accounts[4],292,web3.utils.toHex("rNdHzJC8oa"));
result = await instance.submitTransaction(accounts[14],294,web3.utils.toHex("fyqFSDTu5G"));
result = await instance.submitTransaction(accounts[20],370,web3.utils.toHex("tIwgZ2yNWu"));
result = await instance.submitTransaction(accounts[18],376,web3.utils.toHex("0ex1qcKVkP"));
result = await instance.submitTransaction(accounts[9],207,web3.utils.toHex("nXdQDZu4vx"));
result = await instance.submitTransaction(accounts[20],251,web3.utils.toHex("O8sSUTu7nR"));
result = await instance.submitTransaction(accounts[5],384,web3.utils.toHex("biYUy21z5C"));
result = await instance.submitTransaction(accounts[5],474,web3.utils.toHex("CQj3fL5usc"));
result = await instance.submitTransaction(accounts[2],467,web3.utils.toHex("zufOgn4AqH"));
result = await instance.submitTransaction(accounts[4],409,web3.utils.toHex("t5kNMwqBcb"));
result = await instance.submitTransaction(accounts[3],258,web3.utils.toHex("LKhmdTR938"));
result = await instance.submitTransaction(accounts[16],326,web3.utils.toHex("EzJfvx9lSO"));
result = await instance.submitTransaction(accounts[1],332,web3.utils.toHex("LDG7NzhbMF"));
result = await instance.submitTransaction(accounts[8],211,web3.utils.toHex("qArvpaLETi"));
result = await instance.submitTransaction(accounts[7],240,web3.utils.toHex("dnb3VNzga1"));
result = await instance.submitTransaction(accounts[15],333,web3.utils.toHex("CVuLr8ZNH2"));
result = await instance.submitTransaction(accounts[19],319,web3.utils.toHex("2oZIAyDCeM"));
result = await instance.submitTransaction(accounts[15],290,web3.utils.toHex("WmVcGpTDP0"));
result = await instance.submitTransaction(accounts[18],316,web3.utils.toHex("ShsUmPLHop"));
result = await instance.submitTransaction(accounts[10],221,web3.utils.toHex("rcSTAx1Bvk"));
result = await instance.submitTransaction(accounts[1],438,web3.utils.toHex("VkRH6BUQgX"));
result = await instance.submitTransaction(accounts[19],375,web3.utils.toHex("EA8GHjPXso"));
await instance.executeTransaction(10);
});
});
