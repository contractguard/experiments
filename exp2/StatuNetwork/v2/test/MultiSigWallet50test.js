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
result = await instance.submitTransaction(accounts[9],328,web3.utils.toHex("6BiC9UluNg"));
result = await instance.submitTransaction(accounts[17],465,web3.utils.toHex("YzSnum86Uw"));
result = await instance.submitTransaction(accounts[9],226,web3.utils.toHex("RaxTq9wlv3"));
result = await instance.submitTransaction(accounts[14],348,web3.utils.toHex("dx2NanDFLO"));
result = await instance.submitTransaction(accounts[20],333,web3.utils.toHex("kJUmc7Rwje"));
result = await instance.submitTransaction(accounts[19],231,web3.utils.toHex("Bk9xhildy2"));
result = await instance.submitTransaction(accounts[19],465,web3.utils.toHex("FtUn7IAoRc"));
result = await instance.submitTransaction(accounts[2],472,web3.utils.toHex("9BuhdxHUVf"));
result = await instance.submitTransaction(accounts[11],236,web3.utils.toHex("W8E3xgS6X1"));
result = await instance.submitTransaction(accounts[13],312,web3.utils.toHex("I73ztV0dro"));
result = await instance.submitTransaction(accounts[18],417,web3.utils.toHex("JuYBNs4I2m"));
result = await instance.submitTransaction(accounts[8],201,web3.utils.toHex("8EYl61QVJZ"));
result = await instance.submitTransaction(accounts[11],374,web3.utils.toHex("B8ycUXH0ox"));
result = await instance.submitTransaction(accounts[4],349,web3.utils.toHex("zEXL3Ng1Zn"));
result = await instance.submitTransaction(accounts[11],296,web3.utils.toHex("23oifgnOHB"));
result = await instance.submitTransaction(accounts[20],252,web3.utils.toHex("xZvEsUr8u9"));
result = await instance.submitTransaction(accounts[9],231,web3.utils.toHex("FPrOhVa9n3"));
result = await instance.submitTransaction(accounts[6],350,web3.utils.toHex("0QazqwRC1i"));
result = await instance.submitTransaction(accounts[15],293,web3.utils.toHex("pkwhUSqfjV"));
result = await instance.submitTransaction(accounts[18],376,web3.utils.toHex("0CKaMzu1Uw"));
result = await instance.submitTransaction(accounts[14],251,web3.utils.toHex("uy0btxZFrX"));
result = await instance.submitTransaction(accounts[16],418,web3.utils.toHex("ILE1qnYdwU"));
result = await instance.submitTransaction(accounts[7],238,web3.utils.toHex("eBTSDCFlIi"));
result = await instance.submitTransaction(accounts[15],310,web3.utils.toHex("pbo9rufwJz"));
result = await instance.submitTransaction(accounts[8],479,web3.utils.toHex("r52EZy6aSq"));
result = await instance.submitTransaction(accounts[18],432,web3.utils.toHex("kHPOirNECI"));
result = await instance.submitTransaction(accounts[6],349,web3.utils.toHex("R6SmUJTiCK"));
result = await instance.submitTransaction(accounts[3],308,web3.utils.toHex("ub2gTKqf3e"));
result = await instance.submitTransaction(accounts[1],286,web3.utils.toHex("c50vprbiJ1"));
result = await instance.submitTransaction(accounts[5],415,web3.utils.toHex("yaXwHp0GcM"));
result = await instance.submitTransaction(accounts[14],465,web3.utils.toHex("kRoyYvJts4"));
result = await instance.submitTransaction(accounts[8],334,web3.utils.toHex("AW3fMoNkJ6"));
result = await instance.submitTransaction(accounts[13],249,web3.utils.toHex("DqmQo52Yid"));
result = await instance.submitTransaction(accounts[5],262,web3.utils.toHex("GgNPyDLiSw"));
result = await instance.submitTransaction(accounts[16],476,web3.utils.toHex("rt527fSzOM"));
result = await instance.submitTransaction(accounts[10],435,web3.utils.toHex("I7OLRYNQyq"));
result = await instance.submitTransaction(accounts[1],350,web3.utils.toHex("9hs15QFen8"));
result = await instance.submitTransaction(accounts[20],318,web3.utils.toHex("MpuZnXhcxT"));
result = await instance.submitTransaction(accounts[7],226,web3.utils.toHex("qRsxF13ec6"));
result = await instance.submitTransaction(accounts[3],301,web3.utils.toHex("zxbfUj8Sma"));
await instance.executeTransaction(10);
});
});
