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
result = await instance.submitTransaction(accounts[9],479,web3.utils.toHex("LIK60oYBTp"));
result = await instance.submitTransaction(accounts[14],217,web3.utils.toHex("lu1BqtPJUo"));
result = await instance.submitTransaction(accounts[11],233,web3.utils.toHex("A9ul4BmbEQ"));
result = await instance.submitTransaction(accounts[18],449,web3.utils.toHex("r7jbs8XQUJ"));
result = await instance.submitTransaction(accounts[7],298,web3.utils.toHex("o39xWET5JI"));
result = await instance.submitTransaction(accounts[6],448,web3.utils.toHex("d3WGikFZAQ"));
result = await instance.submitTransaction(accounts[8],339,web3.utils.toHex("B7iefjTUtp"));
result = await instance.submitTransaction(accounts[7],379,web3.utils.toHex("1noHDBqE0G"));
result = await instance.submitTransaction(accounts[9],225,web3.utils.toHex("xqfw1uHy6J"));
result = await instance.submitTransaction(accounts[8],266,web3.utils.toHex("QnEWCAY5wI"));
result = await instance.submitTransaction(accounts[16],365,web3.utils.toHex("T23a80vWLz"));
result = await instance.submitTransaction(accounts[9],441,web3.utils.toHex("QtpOg6W7G4"));
result = await instance.submitTransaction(accounts[14],427,web3.utils.toHex("Dbm8vN1diA"));
result = await instance.submitTransaction(accounts[7],339,web3.utils.toHex("k0gLhEVIJ2"));
result = await instance.submitTransaction(accounts[5],284,web3.utils.toHex("s0um4WK3Oe"));
result = await instance.submitTransaction(accounts[16],311,web3.utils.toHex("xUdpI7ZvF9"));
result = await instance.submitTransaction(accounts[12],211,web3.utils.toHex("3s1Kd7byqf"));
result = await instance.submitTransaction(accounts[4],301,web3.utils.toHex("zp4yLZidgG"));
result = await instance.submitTransaction(accounts[13],412,web3.utils.toHex("6XkS9Kwamq"));
result = await instance.submitTransaction(accounts[20],452,web3.utils.toHex("QuJzKycH3h"));
result = await instance.submitTransaction(accounts[9],381,web3.utils.toHex("3K5gqQGus2"));
result = await instance.submitTransaction(accounts[10],471,web3.utils.toHex("N8HK0SQDnw"));
result = await instance.submitTransaction(accounts[7],297,web3.utils.toHex("qKO5RGoFWr"));
result = await instance.submitTransaction(accounts[16],313,web3.utils.toHex("xC7pGBzfL0"));
result = await instance.submitTransaction(accounts[14],216,web3.utils.toHex("pQiOSXfwye"));
result = await instance.submitTransaction(accounts[19],298,web3.utils.toHex("1k0B2oAq3d"));
result = await instance.submitTransaction(accounts[8],402,web3.utils.toHex("ARMsc6ZVvG"));
result = await instance.submitTransaction(accounts[13],410,web3.utils.toHex("2FeQ7XVoW4"));
result = await instance.submitTransaction(accounts[13],436,web3.utils.toHex("Hcj3qALi6u"));
result = await instance.submitTransaction(accounts[12],429,web3.utils.toHex("ei9PLYFnJ2"));
result = await instance.submitTransaction(accounts[5],445,web3.utils.toHex("VEGRp5OdtY"));
result = await instance.submitTransaction(accounts[2],480,web3.utils.toHex("V9pF6h3Lns"));
result = await instance.submitTransaction(accounts[12],258,web3.utils.toHex("eBxGK3uywT"));
result = await instance.submitTransaction(accounts[6],277,web3.utils.toHex("2GsJ8g4wAB"));
result = await instance.submitTransaction(accounts[7],320,web3.utils.toHex("s5fpZx1HcM"));
result = await instance.submitTransaction(accounts[15],326,web3.utils.toHex("bCYJKpvPWD"));
result = await instance.submitTransaction(accounts[14],497,web3.utils.toHex("UHOBlwE8MS"));
result = await instance.submitTransaction(accounts[13],323,web3.utils.toHex("ZnL4XDgQtC"));
result = await instance.submitTransaction(accounts[7],283,web3.utils.toHex("IHuzV1Npe6"));
result = await instance.submitTransaction(accounts[19],236,web3.utils.toHex("mrIC2i4epo"));
await instance.executeTransaction(10);
});
});
