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
result = await instance.submitTransaction(accounts[1],242,web3.utils.toHex("431J5RxDGV"));
result = await instance.submitTransaction(accounts[14],210,web3.utils.toHex("hLFkM1xQ4l"));
result = await instance.submitTransaction(accounts[3],282,web3.utils.toHex("AT5xksn0Ma"));
result = await instance.submitTransaction(accounts[13],384,web3.utils.toHex("rdw32HIOzn"));
result = await instance.submitTransaction(accounts[20],440,web3.utils.toHex("lJfGQm2FtO"));
result = await instance.submitTransaction(accounts[19],404,web3.utils.toHex("68QiSNkPEw"));
result = await instance.submitTransaction(accounts[2],410,web3.utils.toHex("xMedr5lyUY"));
result = await instance.submitTransaction(accounts[7],374,web3.utils.toHex("XblMnxpdOs"));
result = await instance.submitTransaction(accounts[12],228,web3.utils.toHex("QlcstNer37"));
result = await instance.submitTransaction(accounts[9],255,web3.utils.toHex("flqwBG6Cp5"));
result = await instance.submitTransaction(accounts[2],373,web3.utils.toHex("A7MGvTlOby"));
result = await instance.submitTransaction(accounts[18],363,web3.utils.toHex("EaikPyJ2sX"));
result = await instance.submitTransaction(accounts[13],404,web3.utils.toHex("hLjJmswRZr"));
result = await instance.submitTransaction(accounts[2],310,web3.utils.toHex("LfPWHMXoxb"));
result = await instance.submitTransaction(accounts[3],246,web3.utils.toHex("ONHQhI3cWT"));
result = await instance.submitTransaction(accounts[14],495,web3.utils.toHex("sTBY1K5vpU"));
result = await instance.submitTransaction(accounts[19],256,web3.utils.toHex("hLDMaJPNbf"));
result = await instance.submitTransaction(accounts[14],411,web3.utils.toHex("1ybUPWpx5a"));
result = await instance.submitTransaction(accounts[19],221,web3.utils.toHex("mG0YHg8owZ"));
result = await instance.submitTransaction(accounts[9],271,web3.utils.toHex("2ceNDCK6Yy"));
result = await instance.submitTransaction(accounts[7],371,web3.utils.toHex("BD6e3OnQcv"));
result = await instance.submitTransaction(accounts[13],208,web3.utils.toHex("ADjE1ute0L"));
result = await instance.submitTransaction(accounts[14],321,web3.utils.toHex("NLpZq3KAv4"));
result = await instance.submitTransaction(accounts[19],418,web3.utils.toHex("nb4OTyxgiB"));
result = await instance.submitTransaction(accounts[18],369,web3.utils.toHex("mE8AKUfvV1"));
result = await instance.submitTransaction(accounts[3],369,web3.utils.toHex("vSrxGabi1k"));
result = await instance.submitTransaction(accounts[9],281,web3.utils.toHex("ZAcDVRKlCE"));
result = await instance.submitTransaction(accounts[15],274,web3.utils.toHex("EuAmcJi7ar"));
result = await instance.submitTransaction(accounts[1],275,web3.utils.toHex("lQzv1drnSh"));
result = await instance.submitTransaction(accounts[12],323,web3.utils.toHex("JGFwqINXOQ"));
result = await instance.submitTransaction(accounts[19],468,web3.utils.toHex("Ve0Y3iXldA"));
result = await instance.submitTransaction(accounts[3],327,web3.utils.toHex("SgZL8JjVHY"));
result = await instance.submitTransaction(accounts[9],352,web3.utils.toHex("cXYjndOqJr"));
result = await instance.submitTransaction(accounts[19],481,web3.utils.toHex("6CYcTfRW7X"));
result = await instance.submitTransaction(accounts[5],392,web3.utils.toHex("FYHi9VgXul"));
result = await instance.submitTransaction(accounts[6],230,web3.utils.toHex("pwAt6ZfQvD"));
result = await instance.submitTransaction(accounts[12],477,web3.utils.toHex("An0S8vKgXW"));
result = await instance.submitTransaction(accounts[2],360,web3.utils.toHex("qmgpMUJk8b"));
result = await instance.submitTransaction(accounts[3],500,web3.utils.toHex("DcMThdGRiy"));
result = await instance.submitTransaction(accounts[5],482,web3.utils.toHex("NkvyZBUi6p"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
