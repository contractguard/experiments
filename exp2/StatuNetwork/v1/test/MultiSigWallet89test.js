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
result = await instance.submitTransaction(accounts[1],324,web3.utils.toHex("Yp0NETzMB8"));
result = await instance.submitTransaction(accounts[4],373,web3.utils.toHex("WquR6OXr5s"));
result = await instance.submitTransaction(accounts[1],460,web3.utils.toHex("wnHkYhJVEy"));
result = await instance.submitTransaction(accounts[12],466,web3.utils.toHex("LSGPFbvjfk"));
result = await instance.submitTransaction(accounts[10],470,web3.utils.toHex("M85XDBgpSz"));
result = await instance.submitTransaction(accounts[19],230,web3.utils.toHex("BYAS3bdVHo"));
result = await instance.submitTransaction(accounts[15],378,web3.utils.toHex("fdSqJBuRjQ"));
result = await instance.submitTransaction(accounts[2],250,web3.utils.toHex("xz1KsHiwa9"));
result = await instance.submitTransaction(accounts[13],368,web3.utils.toHex("MDQd9cFCwe"));
result = await instance.submitTransaction(accounts[15],296,web3.utils.toHex("Q5YUO3mXtS"));
result = await instance.submitTransaction(accounts[5],353,web3.utils.toHex("YXPrN0tnBq"));
result = await instance.submitTransaction(accounts[1],200,web3.utils.toHex("4qoGPbJLTA"));
result = await instance.submitTransaction(accounts[4],396,web3.utils.toHex("lCOJxLvheq"));
result = await instance.submitTransaction(accounts[4],495,web3.utils.toHex("fl52MbQgsI"));
result = await instance.submitTransaction(accounts[4],342,web3.utils.toHex("92xvUnLBa3"));
result = await instance.submitTransaction(accounts[17],320,web3.utils.toHex("rkOl1UEedY"));
result = await instance.submitTransaction(accounts[20],413,web3.utils.toHex("ucH5edkiM0"));
result = await instance.submitTransaction(accounts[15],317,web3.utils.toHex("IVlArgiZ8S"));
result = await instance.submitTransaction(accounts[10],342,web3.utils.toHex("J4NUputvOc"));
result = await instance.submitTransaction(accounts[20],233,web3.utils.toHex("cxLwAZRiIz"));
result = await instance.submitTransaction(accounts[8],276,web3.utils.toHex("wZDv891liE"));
result = await instance.submitTransaction(accounts[1],448,web3.utils.toHex("710uJBvMaL"));
result = await instance.submitTransaction(accounts[18],302,web3.utils.toHex("IBEH7aFp0P"));
result = await instance.submitTransaction(accounts[12],319,web3.utils.toHex("4jxbY3gCzt"));
result = await instance.submitTransaction(accounts[19],381,web3.utils.toHex("MzdDYyBFZ0"));
result = await instance.submitTransaction(accounts[4],361,web3.utils.toHex("TFjLAXQ1t8"));
result = await instance.submitTransaction(accounts[19],334,web3.utils.toHex("oe0uqspDQL"));
result = await instance.submitTransaction(accounts[3],413,web3.utils.toHex("X48cjFUxdv"));
result = await instance.submitTransaction(accounts[13],213,web3.utils.toHex("rBhHvmbQGF"));
result = await instance.submitTransaction(accounts[9],218,web3.utils.toHex("YRtMF74KBQ"));
result = await instance.submitTransaction(accounts[17],451,web3.utils.toHex("54I97QRp0u"));
result = await instance.submitTransaction(accounts[8],397,web3.utils.toHex("e6HVYlW29C"));
result = await instance.submitTransaction(accounts[3],485,web3.utils.toHex("2pj3i6Zbwh"));
result = await instance.submitTransaction(accounts[6],475,web3.utils.toHex("zjHLsrqcom"));
result = await instance.submitTransaction(accounts[20],337,web3.utils.toHex("czW3IHaPqK"));
result = await instance.submitTransaction(accounts[14],222,web3.utils.toHex("TPQfewbciU"));
result = await instance.submitTransaction(accounts[17],422,web3.utils.toHex("DNhE2HLCe7"));
result = await instance.submitTransaction(accounts[19],460,web3.utils.toHex("eC6boBG1py"));
result = await instance.submitTransaction(accounts[8],433,web3.utils.toHex("YxeTJ1GIrO"));
result = await instance.submitTransaction(accounts[17],392,web3.utils.toHex("SUgNy3r2Zn"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
