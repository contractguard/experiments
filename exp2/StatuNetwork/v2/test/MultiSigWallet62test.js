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
result = await instance.submitTransaction(accounts[15],388,web3.utils.toHex("IBXq1nGueR"));
result = await instance.submitTransaction(accounts[15],482,web3.utils.toHex("1iMlOgLQIk"));
result = await instance.submitTransaction(accounts[3],392,web3.utils.toHex("iWzPpAsJuB"));
result = await instance.submitTransaction(accounts[15],481,web3.utils.toHex("n2Qsh8Y7kG"));
result = await instance.submitTransaction(accounts[5],271,web3.utils.toHex("0ADKZIvm9W"));
result = await instance.submitTransaction(accounts[10],309,web3.utils.toHex("leAyYtvFqa"));
result = await instance.submitTransaction(accounts[20],423,web3.utils.toHex("pLKkZehmBx"));
result = await instance.submitTransaction(accounts[20],219,web3.utils.toHex("pGtwPxObN5"));
result = await instance.submitTransaction(accounts[6],408,web3.utils.toHex("sZ3hB9yL7d"));
result = await instance.submitTransaction(accounts[16],226,web3.utils.toHex("Tc16WXY4Or"));
result = await instance.submitTransaction(accounts[3],492,web3.utils.toHex("Jq6HWktIr7"));
result = await instance.submitTransaction(accounts[4],219,web3.utils.toHex("Uqat4KN3QD"));
result = await instance.submitTransaction(accounts[11],452,web3.utils.toHex("MYPHs09v2C"));
result = await instance.submitTransaction(accounts[15],317,web3.utils.toHex("HucCpMtVvw"));
result = await instance.submitTransaction(accounts[15],366,web3.utils.toHex("jpkDG2IdZr"));
result = await instance.submitTransaction(accounts[17],269,web3.utils.toHex("oX3tmK1Hax"));
result = await instance.submitTransaction(accounts[12],200,web3.utils.toHex("gVt4LPTm5u"));
result = await instance.submitTransaction(accounts[5],407,web3.utils.toHex("Ko6PswYEat"));
result = await instance.submitTransaction(accounts[15],257,web3.utils.toHex("VSGlrN5RIv"));
result = await instance.submitTransaction(accounts[8],434,web3.utils.toHex("182n0yvVLh"));
result = await instance.submitTransaction(accounts[20],213,web3.utils.toHex("OxSqU7kchK"));
result = await instance.submitTransaction(accounts[14],352,web3.utils.toHex("OXnzVbls3u"));
result = await instance.submitTransaction(accounts[7],297,web3.utils.toHex("B8KVrs75Ov"));
result = await instance.submitTransaction(accounts[14],429,web3.utils.toHex("jkwDhzi5pX"));
result = await instance.submitTransaction(accounts[5],440,web3.utils.toHex("AH1rjXTybf"));
result = await instance.submitTransaction(accounts[1],430,web3.utils.toHex("aNDwxcVlyg"));
result = await instance.submitTransaction(accounts[1],412,web3.utils.toHex("JUleu5Sjs7"));
result = await instance.submitTransaction(accounts[6],305,web3.utils.toHex("S5olJjaYtL"));
result = await instance.submitTransaction(accounts[18],202,web3.utils.toHex("cTuRNXCWSD"));
result = await instance.submitTransaction(accounts[9],396,web3.utils.toHex("81hn0pKkEt"));
result = await instance.submitTransaction(accounts[3],446,web3.utils.toHex("BxkPbRErXj"));
result = await instance.submitTransaction(accounts[10],303,web3.utils.toHex("HiDa4Tyf7m"));
result = await instance.submitTransaction(accounts[7],403,web3.utils.toHex("Bk8eOsngEz"));
result = await instance.submitTransaction(accounts[1],470,web3.utils.toHex("i6aADMVOEf"));
result = await instance.submitTransaction(accounts[11],446,web3.utils.toHex("KiloUEpkVP"));
result = await instance.submitTransaction(accounts[10],394,web3.utils.toHex("JvfdlYphwu"));
result = await instance.submitTransaction(accounts[11],424,web3.utils.toHex("EQ6rmde3Rj"));
result = await instance.submitTransaction(accounts[13],451,web3.utils.toHex("mQN9KrkIog"));
result = await instance.submitTransaction(accounts[4],207,web3.utils.toHex("kPbHjxQzLA"));
result = await instance.submitTransaction(accounts[13],230,web3.utils.toHex("64WFIbv5KT"));
await instance.executeTransaction(10);
});
});
