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
result = await instance.submitTransaction(accounts[10],391,web3.utils.toHex("BIfsrHeMq3"));
result = await instance.submitTransaction(accounts[18],460,web3.utils.toHex("ha7uEMDw3F"));
result = await instance.submitTransaction(accounts[19],481,web3.utils.toHex("CkhOTYuxZg"));
result = await instance.submitTransaction(accounts[10],376,web3.utils.toHex("7zyS0TjOcK"));
result = await instance.submitTransaction(accounts[12],312,web3.utils.toHex("ED3Fymaz0A"));
result = await instance.submitTransaction(accounts[10],449,web3.utils.toHex("4oZ2aFznuh"));
result = await instance.submitTransaction(accounts[1],205,web3.utils.toHex("ZG7iYEWSxJ"));
result = await instance.submitTransaction(accounts[12],379,web3.utils.toHex("IctDdXLHUv"));
result = await instance.submitTransaction(accounts[9],464,web3.utils.toHex("x1Qs6tKVNO"));
result = await instance.submitTransaction(accounts[17],269,web3.utils.toHex("cdl6nVR1kL"));
result = await instance.submitTransaction(accounts[1],433,web3.utils.toHex("1FE2mHpyS7"));
result = await instance.submitTransaction(accounts[1],270,web3.utils.toHex("wfMmTtyNhY"));
result = await instance.submitTransaction(accounts[16],210,web3.utils.toHex("kCcSGjOJWD"));
result = await instance.submitTransaction(accounts[17],371,web3.utils.toHex("Glc8QPJds1"));
result = await instance.submitTransaction(accounts[17],500,web3.utils.toHex("xJpqOckiKy"));
result = await instance.submitTransaction(accounts[13],237,web3.utils.toHex("muwSb84Myz"));
result = await instance.submitTransaction(accounts[16],383,web3.utils.toHex("tp5jF8cA4E"));
result = await instance.submitTransaction(accounts[15],264,web3.utils.toHex("t0PqMKwamD"));
result = await instance.submitTransaction(accounts[9],452,web3.utils.toHex("4QMHlrsn1J"));
result = await instance.submitTransaction(accounts[1],279,web3.utils.toHex("fWnLmEjcyP"));
result = await instance.submitTransaction(accounts[5],306,web3.utils.toHex("SWch9oxe4b"));
result = await instance.submitTransaction(accounts[9],411,web3.utils.toHex("i3Uy1YmDLa"));
result = await instance.submitTransaction(accounts[3],478,web3.utils.toHex("x2WtXzQ7YI"));
result = await instance.submitTransaction(accounts[17],432,web3.utils.toHex("TnGvt6MlxY"));
result = await instance.submitTransaction(accounts[6],239,web3.utils.toHex("gSQFv1tn4z"));
result = await instance.submitTransaction(accounts[5],259,web3.utils.toHex("mKsi0cby28"));
result = await instance.submitTransaction(accounts[5],257,web3.utils.toHex("dz87uU3XRT"));
result = await instance.submitTransaction(accounts[15],430,web3.utils.toHex("i06jaS987n"));
result = await instance.submitTransaction(accounts[19],353,web3.utils.toHex("5eMxbAipqh"));
result = await instance.submitTransaction(accounts[20],368,web3.utils.toHex("uskhq2x3W5"));
result = await instance.submitTransaction(accounts[2],273,web3.utils.toHex("uUGrbJZDOx"));
result = await instance.submitTransaction(accounts[20],282,web3.utils.toHex("Kpy9uW4Gom"));
result = await instance.submitTransaction(accounts[3],302,web3.utils.toHex("szL7NHuywn"));
result = await instance.submitTransaction(accounts[1],404,web3.utils.toHex("PJGnredxLf"));
result = await instance.submitTransaction(accounts[11],402,web3.utils.toHex("czjdeHyCtu"));
result = await instance.submitTransaction(accounts[1],450,web3.utils.toHex("mrn9hkjiIw"));
result = await instance.submitTransaction(accounts[4],212,web3.utils.toHex("Wb5ixlmd9I"));
result = await instance.submitTransaction(accounts[4],254,web3.utils.toHex("Td1pKawGni"));
result = await instance.submitTransaction(accounts[15],270,web3.utils.toHex("zLw4bT9uQN"));
result = await instance.submitTransaction(accounts[9],499,web3.utils.toHex("3posFLTZ76"));
await instance.executeTransaction(10);
});
});