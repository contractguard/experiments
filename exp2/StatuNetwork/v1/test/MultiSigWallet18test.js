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
result = await instance.submitTransaction(accounts[2],201,web3.utils.toHex("fEdu1tqgAB"));
result = await instance.submitTransaction(accounts[18],359,web3.utils.toHex("3E0f7CDXLb"));
result = await instance.submitTransaction(accounts[18],371,web3.utils.toHex("32dE68gkwJ"));
result = await instance.submitTransaction(accounts[13],291,web3.utils.toHex("Pab0Kw32XU"));
result = await instance.submitTransaction(accounts[9],426,web3.utils.toHex("SDmvYXx1pq"));
result = await instance.submitTransaction(accounts[1],211,web3.utils.toHex("4ZBOJkI3lj"));
result = await instance.submitTransaction(accounts[14],352,web3.utils.toHex("E3xbfpWZLO"));
result = await instance.submitTransaction(accounts[7],261,web3.utils.toHex("ACxDZ0BjPE"));
result = await instance.submitTransaction(accounts[13],281,web3.utils.toHex("nL0U8ziWhY"));
result = await instance.submitTransaction(accounts[10],378,web3.utils.toHex("i0y8bEz1tS"));
result = await instance.submitTransaction(accounts[20],385,web3.utils.toHex("lxTvQb4tj3"));
result = await instance.submitTransaction(accounts[5],417,web3.utils.toHex("1hR34Qsfmu"));
result = await instance.submitTransaction(accounts[12],341,web3.utils.toHex("yC0lVjOf5Y"));
result = await instance.submitTransaction(accounts[15],426,web3.utils.toHex("BcXGzgFYT2"));
result = await instance.submitTransaction(accounts[11],304,web3.utils.toHex("QOHgt2px5m"));
result = await instance.submitTransaction(accounts[10],410,web3.utils.toHex("HAC5ezE6w3"));
result = await instance.submitTransaction(accounts[15],333,web3.utils.toHex("AYzebVnumI"));
result = await instance.submitTransaction(accounts[19],275,web3.utils.toHex("DJTySgA1dU"));
result = await instance.submitTransaction(accounts[12],298,web3.utils.toHex("lA1hvoSJKG"));
result = await instance.submitTransaction(accounts[5],499,web3.utils.toHex("Nvf8cbuBTS"));
result = await instance.submitTransaction(accounts[1],281,web3.utils.toHex("WIsX64v0t5"));
result = await instance.submitTransaction(accounts[4],432,web3.utils.toHex("Ooj947gGwC"));
result = await instance.submitTransaction(accounts[13],391,web3.utils.toHex("bvJY6sWwMk"));
result = await instance.submitTransaction(accounts[4],384,web3.utils.toHex("eVR5Prz0EG"));
result = await instance.submitTransaction(accounts[8],315,web3.utils.toHex("XJ3Qtum1BR"));
result = await instance.submitTransaction(accounts[1],214,web3.utils.toHex("c4UuZfVHrt"));
result = await instance.submitTransaction(accounts[4],472,web3.utils.toHex("2rDuVpPRxs"));
result = await instance.submitTransaction(accounts[9],331,web3.utils.toHex("rZ7FHYezSg"));
result = await instance.submitTransaction(accounts[18],269,web3.utils.toHex("O48vlyaBQX"));
result = await instance.submitTransaction(accounts[20],210,web3.utils.toHex("sVJMEFG3wa"));
result = await instance.submitTransaction(accounts[1],337,web3.utils.toHex("mAzIr0E9Jp"));
result = await instance.submitTransaction(accounts[3],232,web3.utils.toHex("KlpuhRJ8Ua"));
result = await instance.submitTransaction(accounts[18],396,web3.utils.toHex("arlDbe3vH5"));
result = await instance.submitTransaction(accounts[19],248,web3.utils.toHex("Vwk1Yv9asj"));
result = await instance.submitTransaction(accounts[10],446,web3.utils.toHex("kF6ULQtOHq"));
result = await instance.submitTransaction(accounts[1],243,web3.utils.toHex("YQF9zsyJWo"));
result = await instance.submitTransaction(accounts[19],278,web3.utils.toHex("F4n5EyiOWe"));
result = await instance.submitTransaction(accounts[6],460,web3.utils.toHex("KDnmROdPcL"));
result = await instance.submitTransaction(accounts[14],355,web3.utils.toHex("WrjkeyhJRB"));
result = await instance.submitTransaction(accounts[6],316,web3.utils.toHex("mIQY3DoN46"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
