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
result = await instance.submitTransaction(accounts[7],476,web3.utils.toHex("bAaHJyEwPo"));
result = await instance.submitTransaction(accounts[1],439,web3.utils.toHex("PXvc9NSp8E"));
result = await instance.submitTransaction(accounts[4],405,web3.utils.toHex("fLy4R3FPdW"));
result = await instance.submitTransaction(accounts[4],247,web3.utils.toHex("v6PGFRofw8"));
result = await instance.submitTransaction(accounts[11],409,web3.utils.toHex("B1AFf05qTs"));
result = await instance.submitTransaction(accounts[13],292,web3.utils.toHex("zMlyUGONDA"));
result = await instance.submitTransaction(accounts[7],331,web3.utils.toHex("YqaT6b7PZk"));
result = await instance.submitTransaction(accounts[6],265,web3.utils.toHex("Mb7NsXe1iF"));
result = await instance.submitTransaction(accounts[18],439,web3.utils.toHex("1QRty3OJSF"));
result = await instance.submitTransaction(accounts[12],348,web3.utils.toHex("bhDJc58gUP"));
result = await instance.submitTransaction(accounts[20],483,web3.utils.toHex("jXNzFJyl3o"));
result = await instance.submitTransaction(accounts[4],396,web3.utils.toHex("aTnh0GzdLj"));
result = await instance.submitTransaction(accounts[1],437,web3.utils.toHex("VX08O9qeCf"));
result = await instance.submitTransaction(accounts[16],292,web3.utils.toHex("odnr6Ocpyx"));
result = await instance.submitTransaction(accounts[4],277,web3.utils.toHex("mepwltEUL0"));
result = await instance.submitTransaction(accounts[13],347,web3.utils.toHex("x1gwDzi4J8"));
result = await instance.submitTransaction(accounts[2],452,web3.utils.toHex("psZValzROP"));
result = await instance.submitTransaction(accounts[18],495,web3.utils.toHex("geRi1t9CLA"));
result = await instance.submitTransaction(accounts[15],469,web3.utils.toHex("zGoLIxv6WK"));
result = await instance.submitTransaction(accounts[1],309,web3.utils.toHex("Qkvjlyze8K"));
result = await instance.submitTransaction(accounts[15],448,web3.utils.toHex("Bnbjd1E4Mf"));
result = await instance.submitTransaction(accounts[9],215,web3.utils.toHex("GUidV0nBsa"));
result = await instance.submitTransaction(accounts[19],397,web3.utils.toHex("Iza1r24EJN"));
result = await instance.submitTransaction(accounts[1],500,web3.utils.toHex("WIKgztOiYm"));
result = await instance.submitTransaction(accounts[4],284,web3.utils.toHex("6VSo3QZlhJ"));
result = await instance.submitTransaction(accounts[11],262,web3.utils.toHex("4rCcHsmeUS"));
result = await instance.submitTransaction(accounts[6],350,web3.utils.toHex("QTOmd6CK3M"));
result = await instance.submitTransaction(accounts[7],463,web3.utils.toHex("V6l8MZT7gF"));
result = await instance.submitTransaction(accounts[1],486,web3.utils.toHex("1W9jyEfJZn"));
result = await instance.submitTransaction(accounts[17],341,web3.utils.toHex("wKRNuOr83D"));
result = await instance.submitTransaction(accounts[13],325,web3.utils.toHex("k9zRGKstwW"));
result = await instance.submitTransaction(accounts[12],485,web3.utils.toHex("LCD8zrOd52"));
result = await instance.submitTransaction(accounts[5],376,web3.utils.toHex("8XoFt7cqG9"));
result = await instance.submitTransaction(accounts[11],405,web3.utils.toHex("6Zs9vYS34R"));
result = await instance.submitTransaction(accounts[3],201,web3.utils.toHex("1B8Edw3UOR"));
result = await instance.submitTransaction(accounts[7],275,web3.utils.toHex("quhvIZy05M"));
result = await instance.submitTransaction(accounts[11],362,web3.utils.toHex("eVCpDBgbWY"));
result = await instance.submitTransaction(accounts[7],200,web3.utils.toHex("KySxTOk5Bg"));
result = await instance.submitTransaction(accounts[18],240,web3.utils.toHex("Nm7KkjyXU2"));
result = await instance.submitTransaction(accounts[7],420,web3.utils.toHex("fi5TEh9UbS"));
await instance.executeTransaction(10);
});
});
