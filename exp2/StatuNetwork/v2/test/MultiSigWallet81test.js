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
result = await instance.submitTransaction(accounts[1],279,web3.utils.toHex("yKXodJ9CFx"));
result = await instance.submitTransaction(accounts[15],485,web3.utils.toHex("Y9dwJI6nSp"));
result = await instance.submitTransaction(accounts[6],452,web3.utils.toHex("ySrxnJzGDk"));
result = await instance.submitTransaction(accounts[16],495,web3.utils.toHex("TFeEzONdKB"));
result = await instance.submitTransaction(accounts[12],428,web3.utils.toHex("GLF5xtmulr"));
result = await instance.submitTransaction(accounts[6],399,web3.utils.toHex("sJfEiY35ew"));
result = await instance.submitTransaction(accounts[6],221,web3.utils.toHex("94tCY8qTxV"));
result = await instance.submitTransaction(accounts[20],469,web3.utils.toHex("L9q7bKn8IZ"));
result = await instance.submitTransaction(accounts[10],264,web3.utils.toHex("BH6rMTyqp9"));
result = await instance.submitTransaction(accounts[6],289,web3.utils.toHex("OECzBV7a0X"));
result = await instance.submitTransaction(accounts[1],363,web3.utils.toHex("uSHdCYi289"));
result = await instance.submitTransaction(accounts[5],201,web3.utils.toHex("DPRdOIfSis"));
result = await instance.submitTransaction(accounts[8],346,web3.utils.toHex("8CtvcRna5L"));
result = await instance.submitTransaction(accounts[20],455,web3.utils.toHex("0IPyGOLf5b"));
result = await instance.submitTransaction(accounts[10],498,web3.utils.toHex("Zpwociuxzl"));
result = await instance.submitTransaction(accounts[7],465,web3.utils.toHex("Haz915eCKw"));
result = await instance.submitTransaction(accounts[8],469,web3.utils.toHex("eO6EPIqRoY"));
result = await instance.submitTransaction(accounts[20],379,web3.utils.toHex("SLZs0i6vGE"));
result = await instance.submitTransaction(accounts[8],489,web3.utils.toHex("12gEvu69qi"));
result = await instance.submitTransaction(accounts[14],318,web3.utils.toHex("0aj5pziScX"));
result = await instance.submitTransaction(accounts[1],476,web3.utils.toHex("5LMhnNqxjT"));
result = await instance.submitTransaction(accounts[13],348,web3.utils.toHex("5ykzOYRKGh"));
result = await instance.submitTransaction(accounts[4],461,web3.utils.toHex("qPzEXxlD19"));
result = await instance.submitTransaction(accounts[14],303,web3.utils.toHex("thm2AfSR1g"));
result = await instance.submitTransaction(accounts[13],319,web3.utils.toHex("7G5mStKYhP"));
result = await instance.submitTransaction(accounts[17],429,web3.utils.toHex("kaQYMX03xj"));
result = await instance.submitTransaction(accounts[9],488,web3.utils.toHex("LMaI4h6Fef"));
result = await instance.submitTransaction(accounts[6],414,web3.utils.toHex("UTtQcAFkKN"));
result = await instance.submitTransaction(accounts[5],395,web3.utils.toHex("JZvmc8luiU"));
result = await instance.submitTransaction(accounts[1],365,web3.utils.toHex("PFmk6ALHU9"));
result = await instance.submitTransaction(accounts[17],460,web3.utils.toHex("jOndo3Jix0"));
result = await instance.submitTransaction(accounts[4],384,web3.utils.toHex("19IidZQHbF"));
result = await instance.submitTransaction(accounts[11],313,web3.utils.toHex("CHxDjkXcYt"));
result = await instance.submitTransaction(accounts[9],420,web3.utils.toHex("2KNwmEPQVS"));
result = await instance.submitTransaction(accounts[17],319,web3.utils.toHex("09tI2G7Vqu"));
result = await instance.submitTransaction(accounts[10],375,web3.utils.toHex("GSWnk8MbDC"));
result = await instance.submitTransaction(accounts[16],332,web3.utils.toHex("Bk9goltjL1"));
result = await instance.submitTransaction(accounts[20],406,web3.utils.toHex("Xm6h0EdH3f"));
result = await instance.submitTransaction(accounts[10],249,web3.utils.toHex("tK5ZNHsOC6"));
result = await instance.submitTransaction(accounts[20],459,web3.utils.toHex("Lky4ulDVos"));
await instance.executeTransaction(10);
});
});
