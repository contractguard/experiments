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
result = await instance.submitTransaction(accounts[9],208,web3.utils.toHex("CMyzpaZ4Pr"));
result = await instance.submitTransaction(accounts[6],275,web3.utils.toHex("HEOnrSpxXw"));
result = await instance.submitTransaction(accounts[16],335,web3.utils.toHex("pb1rOJkju6"));
result = await instance.submitTransaction(accounts[1],224,web3.utils.toHex("iasYFCeIqz"));
result = await instance.submitTransaction(accounts[5],382,web3.utils.toHex("JP1nzqsa7b"));
result = await instance.submitTransaction(accounts[16],428,web3.utils.toHex("z4fQjxYRer"));
result = await instance.submitTransaction(accounts[9],469,web3.utils.toHex("xFYw8CknW0"));
result = await instance.submitTransaction(accounts[6],286,web3.utils.toHex("y4NoU78IMV"));
result = await instance.submitTransaction(accounts[11],432,web3.utils.toHex("Jhq0gtduzH"));
result = await instance.submitTransaction(accounts[6],324,web3.utils.toHex("b1MlwscSpO"));
result = await instance.submitTransaction(accounts[16],238,web3.utils.toHex("TImGztr47V"));
result = await instance.submitTransaction(accounts[14],345,web3.utils.toHex("h5Z0uGB9pP"));
result = await instance.submitTransaction(accounts[16],389,web3.utils.toHex("XPjxi1yS8c"));
result = await instance.submitTransaction(accounts[4],431,web3.utils.toHex("zhpa16xwK5"));
result = await instance.submitTransaction(accounts[18],460,web3.utils.toHex("gju76Rkftz"));
result = await instance.submitTransaction(accounts[3],267,web3.utils.toHex("AuED4KLVsY"));
result = await instance.submitTransaction(accounts[2],395,web3.utils.toHex("6BzI9wRfks"));
result = await instance.submitTransaction(accounts[19],372,web3.utils.toHex("PzKOJyfL7l"));
result = await instance.submitTransaction(accounts[9],333,web3.utils.toHex("rMQSAWYZaU"));
result = await instance.submitTransaction(accounts[17],335,web3.utils.toHex("FuePSJ14La"));
result = await instance.submitTransaction(accounts[19],263,web3.utils.toHex("ka4rZzIKu3"));
result = await instance.submitTransaction(accounts[17],245,web3.utils.toHex("FyAoC3Busw"));
result = await instance.submitTransaction(accounts[4],406,web3.utils.toHex("X4wSnPQhey"));
result = await instance.submitTransaction(accounts[20],295,web3.utils.toHex("mrUwFyRkEZ"));
result = await instance.submitTransaction(accounts[14],340,web3.utils.toHex("vf0d6LaJmF"));
result = await instance.submitTransaction(accounts[6],322,web3.utils.toHex("Nv9cBQMZx0"));
result = await instance.submitTransaction(accounts[8],433,web3.utils.toHex("93JKsRxmQw"));
result = await instance.submitTransaction(accounts[9],230,web3.utils.toHex("NBACIJwzml"));
result = await instance.submitTransaction(accounts[5],478,web3.utils.toHex("xhe5qBSZQK"));
result = await instance.submitTransaction(accounts[20],373,web3.utils.toHex("Cr43SsyvWK"));
result = await instance.submitTransaction(accounts[3],238,web3.utils.toHex("w2VUEvpAPD"));
result = await instance.submitTransaction(accounts[18],461,web3.utils.toHex("gSlmsT6pEB"));
result = await instance.submitTransaction(accounts[7],225,web3.utils.toHex("nySHGUbta9"));
result = await instance.submitTransaction(accounts[5],447,web3.utils.toHex("uYPwHX8QDK"));
result = await instance.submitTransaction(accounts[15],451,web3.utils.toHex("vIhxqV3cEw"));
result = await instance.submitTransaction(accounts[10],499,web3.utils.toHex("XERkz8tJ2I"));
result = await instance.submitTransaction(accounts[14],267,web3.utils.toHex("bnVaqhRNkL"));
result = await instance.submitTransaction(accounts[2],264,web3.utils.toHex("KGPEAWxHOs"));
result = await instance.submitTransaction(accounts[11],489,web3.utils.toHex("4UoTrbmvAQ"));
result = await instance.submitTransaction(accounts[9],331,web3.utils.toHex("Fc7TrpvzfU"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
