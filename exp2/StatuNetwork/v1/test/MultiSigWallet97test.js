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
result = await instance.submitTransaction(accounts[17],245,web3.utils.toHex("wCk05mgQrU"));
result = await instance.submitTransaction(accounts[6],453,web3.utils.toHex("f7Hn1Y5yEc"));
result = await instance.submitTransaction(accounts[15],388,web3.utils.toHex("J9wknoN5ua"));
result = await instance.submitTransaction(accounts[12],266,web3.utils.toHex("LBCfU8OXjp"));
result = await instance.submitTransaction(accounts[5],485,web3.utils.toHex("9gkm0hq6Su"));
result = await instance.submitTransaction(accounts[10],490,web3.utils.toHex("D8LW2ug93f"));
result = await instance.submitTransaction(accounts[12],225,web3.utils.toHex("RP0VwlJ1Br"));
result = await instance.submitTransaction(accounts[18],313,web3.utils.toHex("d7kZPntH9x"));
result = await instance.submitTransaction(accounts[4],269,web3.utils.toHex("kREPpIjfQh"));
result = await instance.submitTransaction(accounts[13],324,web3.utils.toHex("wyGxnOf0m5"));
result = await instance.submitTransaction(accounts[2],476,web3.utils.toHex("ejwVACsdav"));
result = await instance.submitTransaction(accounts[20],406,web3.utils.toHex("r5n03YAXJl"));
result = await instance.submitTransaction(accounts[15],230,web3.utils.toHex("2M6FICuv4b"));
result = await instance.submitTransaction(accounts[17],291,web3.utils.toHex("UqRMfO04vG"));
result = await instance.submitTransaction(accounts[7],474,web3.utils.toHex("O9JpDfbWk0"));
result = await instance.submitTransaction(accounts[19],306,web3.utils.toHex("0b9zOH21E4"));
result = await instance.submitTransaction(accounts[2],295,web3.utils.toHex("2mMeFyGsqR"));
result = await instance.submitTransaction(accounts[6],307,web3.utils.toHex("erhB53z6aw"));
result = await instance.submitTransaction(accounts[2],416,web3.utils.toHex("Wg2JDLHEP5"));
result = await instance.submitTransaction(accounts[17],430,web3.utils.toHex("oi0dNPIrvO"));
result = await instance.submitTransaction(accounts[11],252,web3.utils.toHex("Vz3XwW2Mqp"));
result = await instance.submitTransaction(accounts[2],217,web3.utils.toHex("nb1CUPu5hD"));
result = await instance.submitTransaction(accounts[17],348,web3.utils.toHex("m3hYUSaBgn"));
result = await instance.submitTransaction(accounts[15],434,web3.utils.toHex("DZzPGd4InM"));
result = await instance.submitTransaction(accounts[18],352,web3.utils.toHex("mLoGHzxYpb"));
result = await instance.submitTransaction(accounts[18],403,web3.utils.toHex("bevcItj4r0"));
result = await instance.submitTransaction(accounts[9],380,web3.utils.toHex("q0uTIyM4F5"));
result = await instance.submitTransaction(accounts[12],415,web3.utils.toHex("EAzoDFZsmV"));
result = await instance.submitTransaction(accounts[18],398,web3.utils.toHex("V2oMhW1vr8"));
result = await instance.submitTransaction(accounts[16],362,web3.utils.toHex("Ixywjn5lgt"));
result = await instance.submitTransaction(accounts[6],299,web3.utils.toHex("9c4GrIjHxe"));
result = await instance.submitTransaction(accounts[19],431,web3.utils.toHex("FgZG26EdsA"));
result = await instance.submitTransaction(accounts[17],346,web3.utils.toHex("TqWQXJgYvV"));
result = await instance.submitTransaction(accounts[10],328,web3.utils.toHex("Cm2Y6jaz8h"));
result = await instance.submitTransaction(accounts[10],474,web3.utils.toHex("ZaBsJ7FOW6"));
result = await instance.submitTransaction(accounts[14],359,web3.utils.toHex("sBNH0leoQ9"));
result = await instance.submitTransaction(accounts[2],323,web3.utils.toHex("tIaTJSFuZ5"));
result = await instance.submitTransaction(accounts[18],440,web3.utils.toHex("huFAx9rRIm"));
result = await instance.submitTransaction(accounts[9],345,web3.utils.toHex("ydZKHvulgG"));
result = await instance.submitTransaction(accounts[6],433,web3.utils.toHex("piC1vuUDbd"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
