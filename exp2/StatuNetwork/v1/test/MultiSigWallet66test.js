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
result = await instance.submitTransaction(accounts[20],489,web3.utils.toHex("fC7q4XdTwK"));
result = await instance.submitTransaction(accounts[12],278,web3.utils.toHex("yr7IV0jBJo"));
result = await instance.submitTransaction(accounts[19],290,web3.utils.toHex("Bx3oGXR1LU"));
result = await instance.submitTransaction(accounts[20],260,web3.utils.toHex("yewxYpCdo6"));
result = await instance.submitTransaction(accounts[2],269,web3.utils.toHex("VoEMkOJsUL"));
result = await instance.submitTransaction(accounts[4],361,web3.utils.toHex("GZ9mgk37Xl"));
result = await instance.submitTransaction(accounts[16],289,web3.utils.toHex("JvEtBnGIw8"));
result = await instance.submitTransaction(accounts[17],275,web3.utils.toHex("9cvUIZCGls"));
result = await instance.submitTransaction(accounts[17],434,web3.utils.toHex("VhNz8JlTRt"));
result = await instance.submitTransaction(accounts[13],289,web3.utils.toHex("h9eMKW8qBP"));
result = await instance.submitTransaction(accounts[17],252,web3.utils.toHex("E1XUYe6HNA"));
result = await instance.submitTransaction(accounts[13],384,web3.utils.toHex("Hq3WKsMzUx"));
result = await instance.submitTransaction(accounts[15],423,web3.utils.toHex("BT384IwiRl"));
result = await instance.submitTransaction(accounts[18],492,web3.utils.toHex("XCyS6WAJj7"));
result = await instance.submitTransaction(accounts[4],452,web3.utils.toHex("tZs2lEaSFX"));
result = await instance.submitTransaction(accounts[11],205,web3.utils.toHex("U6oKRf3YDs"));
result = await instance.submitTransaction(accounts[2],362,web3.utils.toHex("db7CD5kaKf"));
result = await instance.submitTransaction(accounts[8],315,web3.utils.toHex("cvl4OkKdm5"));
result = await instance.submitTransaction(accounts[18],446,web3.utils.toHex("otDsxBbAEY"));
result = await instance.submitTransaction(accounts[7],464,web3.utils.toHex("jGtpxuW9lr"));
result = await instance.submitTransaction(accounts[20],433,web3.utils.toHex("WXa8RYnme3"));
result = await instance.submitTransaction(accounts[9],383,web3.utils.toHex("k6suWBn3tS"));
result = await instance.submitTransaction(accounts[6],299,web3.utils.toHex("I8m2KLHulC"));
result = await instance.submitTransaction(accounts[5],352,web3.utils.toHex("YrtkMdZbKz"));
result = await instance.submitTransaction(accounts[15],262,web3.utils.toHex("2zkMwpTovS"));
result = await instance.submitTransaction(accounts[3],415,web3.utils.toHex("gByGjVX67K"));
result = await instance.submitTransaction(accounts[9],319,web3.utils.toHex("a9T0OrRjsA"));
result = await instance.submitTransaction(accounts[4],411,web3.utils.toHex("qjhSskYdW2"));
result = await instance.submitTransaction(accounts[20],240,web3.utils.toHex("JTUeCNOHdg"));
result = await instance.submitTransaction(accounts[13],236,web3.utils.toHex("6R3kJvxcwn"));
result = await instance.submitTransaction(accounts[9],491,web3.utils.toHex("bD54t12nVW"));
result = await instance.submitTransaction(accounts[2],346,web3.utils.toHex("lO1BdY6NAG"));
result = await instance.submitTransaction(accounts[18],337,web3.utils.toHex("JfTb670hrM"));
result = await instance.submitTransaction(accounts[6],206,web3.utils.toHex("4KaOc2leJj"));
result = await instance.submitTransaction(accounts[15],370,web3.utils.toHex("7RhpZ3ecmt"));
result = await instance.submitTransaction(accounts[7],379,web3.utils.toHex("PoAykSjDcX"));
result = await instance.submitTransaction(accounts[15],223,web3.utils.toHex("CVSeyn3HRm"));
result = await instance.submitTransaction(accounts[1],357,web3.utils.toHex("HqB3lw4Eft"));
result = await instance.submitTransaction(accounts[11],365,web3.utils.toHex("L6ArdJiH3w"));
result = await instance.submitTransaction(accounts[14],201,web3.utils.toHex("iStlYqwVMG"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
