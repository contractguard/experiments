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
result = await instance.submitTransaction(accounts[15],468,web3.utils.toHex("mBiy47jlIO"));
result = await instance.submitTransaction(accounts[10],489,web3.utils.toHex("Gg5JTxwe3C"));
result = await instance.submitTransaction(accounts[13],201,web3.utils.toHex("IkHBxT7zpu"));
result = await instance.submitTransaction(accounts[9],387,web3.utils.toHex("uaMKyJVg42"));
result = await instance.submitTransaction(accounts[20],206,web3.utils.toHex("uWUbwj984g"));
result = await instance.submitTransaction(accounts[11],281,web3.utils.toHex("ThZw4OpybI"));
result = await instance.submitTransaction(accounts[4],276,web3.utils.toHex("DVfzTS8vwL"));
result = await instance.submitTransaction(accounts[1],465,web3.utils.toHex("0pLoQ9cwx3"));
result = await instance.submitTransaction(accounts[14],445,web3.utils.toHex("krcANlR6yv"));
result = await instance.submitTransaction(accounts[5],275,web3.utils.toHex("b5wMG9ugEF"));
result = await instance.submitTransaction(accounts[4],222,web3.utils.toHex("CmBiO5vPNh"));
result = await instance.submitTransaction(accounts[14],325,web3.utils.toHex("sr8qRDfTIa"));
result = await instance.submitTransaction(accounts[5],406,web3.utils.toHex("S8TWDbVuwA"));
result = await instance.submitTransaction(accounts[5],209,web3.utils.toHex("tpdKgEYiNu"));
result = await instance.submitTransaction(accounts[13],258,web3.utils.toHex("JPhUf67MgK"));
result = await instance.submitTransaction(accounts[13],314,web3.utils.toHex("2eFpywksqD"));
result = await instance.submitTransaction(accounts[2],401,web3.utils.toHex("U13JEX4H8o"));
result = await instance.submitTransaction(accounts[20],369,web3.utils.toHex("m4Una8bJ1H"));
result = await instance.submitTransaction(accounts[8],270,web3.utils.toHex("SOa4TD3nlX"));
result = await instance.submitTransaction(accounts[13],427,web3.utils.toHex("FpvgiXPo5B"));
result = await instance.submitTransaction(accounts[17],447,web3.utils.toHex("iUVJynFODK"));
result = await instance.submitTransaction(accounts[18],436,web3.utils.toHex("UAIqteC1mr"));
result = await instance.submitTransaction(accounts[17],484,web3.utils.toHex("XIFO0zr6Hl"));
result = await instance.submitTransaction(accounts[20],372,web3.utils.toHex("TCpSxua4y3"));
result = await instance.submitTransaction(accounts[19],338,web3.utils.toHex("MkOwqEam27"));
result = await instance.submitTransaction(accounts[4],252,web3.utils.toHex("zFJ8weMEVY"));
result = await instance.submitTransaction(accounts[1],241,web3.utils.toHex("y1iCp7WFnD"));
result = await instance.submitTransaction(accounts[14],406,web3.utils.toHex("2b0u73SYx5"));
result = await instance.submitTransaction(accounts[10],242,web3.utils.toHex("HbQwxpRC0c"));
result = await instance.submitTransaction(accounts[17],223,web3.utils.toHex("6IJWEAu9n4"));
result = await instance.submitTransaction(accounts[12],349,web3.utils.toHex("bKDzuxjnsv"));
result = await instance.submitTransaction(accounts[16],299,web3.utils.toHex("KyIVG3ikHt"));
result = await instance.submitTransaction(accounts[15],371,web3.utils.toHex("J0PtOMD3uw"));
result = await instance.submitTransaction(accounts[12],473,web3.utils.toHex("10jfzcNBbt"));
result = await instance.submitTransaction(accounts[6],459,web3.utils.toHex("6T5qGKvEiF"));
result = await instance.submitTransaction(accounts[11],453,web3.utils.toHex("MIbw3xfK4U"));
result = await instance.submitTransaction(accounts[8],289,web3.utils.toHex("69IB2WA1xj"));
result = await instance.submitTransaction(accounts[16],473,web3.utils.toHex("FcIKxXiy5P"));
result = await instance.submitTransaction(accounts[11],427,web3.utils.toHex("rqmlJCLVOY"));
result = await instance.submitTransaction(accounts[8],457,web3.utils.toHex("eIOSkKYqtN"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});