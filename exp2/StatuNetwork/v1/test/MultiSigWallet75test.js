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
result = await instance.submitTransaction(accounts[18],245,web3.utils.toHex("cJyIF0US5W"));
result = await instance.submitTransaction(accounts[18],456,web3.utils.toHex("9FTs2EuRI8"));
result = await instance.submitTransaction(accounts[20],212,web3.utils.toHex("0Hv6NPAsUu"));
result = await instance.submitTransaction(accounts[11],215,web3.utils.toHex("9cXwbjU7F2"));
result = await instance.submitTransaction(accounts[1],227,web3.utils.toHex("sYgzGoeBrl"));
result = await instance.submitTransaction(accounts[15],494,web3.utils.toHex("w21TMg57Zs"));
result = await instance.submitTransaction(accounts[19],351,web3.utils.toHex("wXFvZkaAJo"));
result = await instance.submitTransaction(accounts[15],250,web3.utils.toHex("FMQAWlxJRN"));
result = await instance.submitTransaction(accounts[20],369,web3.utils.toHex("l5ZzgGqCrb"));
result = await instance.submitTransaction(accounts[12],362,web3.utils.toHex("Sh2RVYnX34"));
result = await instance.submitTransaction(accounts[1],262,web3.utils.toHex("nlKR1qLOcH"));
result = await instance.submitTransaction(accounts[20],242,web3.utils.toHex("womqIfaBls"));
result = await instance.submitTransaction(accounts[11],395,web3.utils.toHex("a6NbqfZPW9"));
result = await instance.submitTransaction(accounts[13],491,web3.utils.toHex("VOHBkGT82L"));
result = await instance.submitTransaction(accounts[20],272,web3.utils.toHex("NUG7OcqX4t"));
result = await instance.submitTransaction(accounts[13],244,web3.utils.toHex("zORBiYnDw7"));
result = await instance.submitTransaction(accounts[3],253,web3.utils.toHex("lv5ILDyV41"));
result = await instance.submitTransaction(accounts[15],222,web3.utils.toHex("V0tqpOvAQN"));
result = await instance.submitTransaction(accounts[20],251,web3.utils.toHex("SUIvNHTPAD"));
result = await instance.submitTransaction(accounts[20],387,web3.utils.toHex("lwp7UXKPOn"));
result = await instance.submitTransaction(accounts[4],305,web3.utils.toHex("twGneI59uW"));
result = await instance.submitTransaction(accounts[12],274,web3.utils.toHex("0jwFROP9kf"));
result = await instance.submitTransaction(accounts[4],388,web3.utils.toHex("KnJ3WLrkxp"));
result = await instance.submitTransaction(accounts[13],449,web3.utils.toHex("JFleGoXSHj"));
result = await instance.submitTransaction(accounts[18],282,web3.utils.toHex("ZrCmVNMzSB"));
result = await instance.submitTransaction(accounts[1],274,web3.utils.toHex("aIRqQdxWuL"));
result = await instance.submitTransaction(accounts[4],456,web3.utils.toHex("eG6ZdQ8CWb"));
result = await instance.submitTransaction(accounts[8],467,web3.utils.toHex("LXrC9ngd8j"));
result = await instance.submitTransaction(accounts[13],390,web3.utils.toHex("NwmCehQacW"));
result = await instance.submitTransaction(accounts[13],411,web3.utils.toHex("B36XHsAtEM"));
result = await instance.submitTransaction(accounts[5],240,web3.utils.toHex("NA3P56ujpG"));
result = await instance.submitTransaction(accounts[3],302,web3.utils.toHex("O1YDckbsaM"));
result = await instance.submitTransaction(accounts[2],298,web3.utils.toHex("7z9Pepqftb"));
result = await instance.submitTransaction(accounts[2],390,web3.utils.toHex("Cg86npJs0r"));
result = await instance.submitTransaction(accounts[18],368,web3.utils.toHex("6S1gEI7frY"));
result = await instance.submitTransaction(accounts[3],312,web3.utils.toHex("6CRscpySD4"));
result = await instance.submitTransaction(accounts[6],446,web3.utils.toHex("5kr80Kc6fo"));
result = await instance.submitTransaction(accounts[7],237,web3.utils.toHex("RnFg07INdi"));
result = await instance.submitTransaction(accounts[18],317,web3.utils.toHex("2LVDFuic5j"));
result = await instance.submitTransaction(accounts[19],426,web3.utils.toHex("sHRqgXr0Ma"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
