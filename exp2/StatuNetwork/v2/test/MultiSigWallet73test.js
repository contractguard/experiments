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
result = await instance.submitTransaction(accounts[7],295,web3.utils.toHex("eD2KlZqHJj"));
result = await instance.submitTransaction(accounts[10],329,web3.utils.toHex("YeFSsQOo0G"));
result = await instance.submitTransaction(accounts[7],422,web3.utils.toHex("2Dd6NefSB1"));
result = await instance.submitTransaction(accounts[18],270,web3.utils.toHex("aJzlWkd73G"));
result = await instance.submitTransaction(accounts[16],231,web3.utils.toHex("FlcAhIujky"));
result = await instance.submitTransaction(accounts[19],394,web3.utils.toHex("N5FRYhoGzp"));
result = await instance.submitTransaction(accounts[12],355,web3.utils.toHex("v0tKpL7NW3"));
result = await instance.submitTransaction(accounts[1],299,web3.utils.toHex("c85KrjqMZV"));
result = await instance.submitTransaction(accounts[18],470,web3.utils.toHex("JVIRzrLYnA"));
result = await instance.submitTransaction(accounts[9],491,web3.utils.toHex("CmdUeh7qLR"));
result = await instance.submitTransaction(accounts[20],350,web3.utils.toHex("j6cmIpGDx4"));
result = await instance.submitTransaction(accounts[6],401,web3.utils.toHex("irzq405lZu"));
result = await instance.submitTransaction(accounts[3],487,web3.utils.toHex("h9pr24BoxG"));
result = await instance.submitTransaction(accounts[1],368,web3.utils.toHex("ScACB35yX4"));
result = await instance.submitTransaction(accounts[20],391,web3.utils.toHex("dJg2eCZ0bI"));
result = await instance.submitTransaction(accounts[2],447,web3.utils.toHex("7NiOK3GFDV"));
result = await instance.submitTransaction(accounts[16],212,web3.utils.toHex("yJqtvohLaY"));
result = await instance.submitTransaction(accounts[12],416,web3.utils.toHex("lEGqY6Dipm"));
result = await instance.submitTransaction(accounts[2],422,web3.utils.toHex("l5XRfLgyVP"));
result = await instance.submitTransaction(accounts[11],469,web3.utils.toHex("96Cv8XAgqu"));
result = await instance.submitTransaction(accounts[17],355,web3.utils.toHex("uawqLXYWgh"));
result = await instance.submitTransaction(accounts[9],372,web3.utils.toHex("b5sH8UraIA"));
result = await instance.submitTransaction(accounts[10],229,web3.utils.toHex("NsCKAguRQf"));
result = await instance.submitTransaction(accounts[4],334,web3.utils.toHex("52I8FsYcyG"));
result = await instance.submitTransaction(accounts[12],256,web3.utils.toHex("IGHf6dMO17"));
result = await instance.submitTransaction(accounts[18],318,web3.utils.toHex("pSB1Nts47A"));
result = await instance.submitTransaction(accounts[20],409,web3.utils.toHex("6YnKBs2orF"));
result = await instance.submitTransaction(accounts[8],212,web3.utils.toHex("2pzKa5GN3X"));
result = await instance.submitTransaction(accounts[3],364,web3.utils.toHex("lxB6MshTCY"));
result = await instance.submitTransaction(accounts[7],213,web3.utils.toHex("lGchbJvHLN"));
result = await instance.submitTransaction(accounts[14],354,web3.utils.toHex("OZMfmiun7h"));
result = await instance.submitTransaction(accounts[16],494,web3.utils.toHex("OcP9rjzdoX"));
result = await instance.submitTransaction(accounts[7],239,web3.utils.toHex("DMcQm3oNFx"));
result = await instance.submitTransaction(accounts[5],309,web3.utils.toHex("E3fAi7489r"));
result = await instance.submitTransaction(accounts[6],420,web3.utils.toHex("SU6eYfHQ8k"));
result = await instance.submitTransaction(accounts[3],355,web3.utils.toHex("wU4gFXMViD"));
result = await instance.submitTransaction(accounts[8],371,web3.utils.toHex("72Asqzpf0a"));
result = await instance.submitTransaction(accounts[1],329,web3.utils.toHex("pSt8h1CjN4"));
result = await instance.submitTransaction(accounts[14],233,web3.utils.toHex("4kOcBtCXfS"));
result = await instance.submitTransaction(accounts[8],418,web3.utils.toHex("dD8zWhexbg"));
await instance.executeTransaction(10);
});
});
