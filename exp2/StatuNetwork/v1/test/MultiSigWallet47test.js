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
result = await instance.submitTransaction(accounts[15],497,web3.utils.toHex("96cMhdZ7q1"));
result = await instance.submitTransaction(accounts[8],251,web3.utils.toHex("qayIo6kJ49"));
result = await instance.submitTransaction(accounts[17],234,web3.utils.toHex("gWaRS5nPxm"));
result = await instance.submitTransaction(accounts[12],322,web3.utils.toHex("XhsZNk4Fxv"));
result = await instance.submitTransaction(accounts[3],469,web3.utils.toHex("iG6BHsCp5u"));
result = await instance.submitTransaction(accounts[10],245,web3.utils.toHex("BLbN13Fr0O"));
result = await instance.submitTransaction(accounts[1],403,web3.utils.toHex("ebuLpTkGjf"));
result = await instance.submitTransaction(accounts[6],262,web3.utils.toHex("skpt8jcHF6"));
result = await instance.submitTransaction(accounts[11],462,web3.utils.toHex("tDJ1RbgxmO"));
result = await instance.submitTransaction(accounts[9],342,web3.utils.toHex("vp637V4DMF"));
result = await instance.submitTransaction(accounts[20],287,web3.utils.toHex("fj4Q3wSiTe"));
result = await instance.submitTransaction(accounts[10],469,web3.utils.toHex("wLMTiNFb17"));
result = await instance.submitTransaction(accounts[10],378,web3.utils.toHex("nyfiYlVhSg"));
result = await instance.submitTransaction(accounts[3],450,web3.utils.toHex("Wzjx8o75Mr"));
result = await instance.submitTransaction(accounts[17],262,web3.utils.toHex("TEUq38VPeW"));
result = await instance.submitTransaction(accounts[19],205,web3.utils.toHex("YksjwfaLnZ"));
result = await instance.submitTransaction(accounts[11],253,web3.utils.toHex("cIf4TyzF3h"));
result = await instance.submitTransaction(accounts[20],402,web3.utils.toHex("wEznFldtK3"));
result = await instance.submitTransaction(accounts[16],466,web3.utils.toHex("r32BIYjpKe"));
result = await instance.submitTransaction(accounts[1],287,web3.utils.toHex("Af7WedG1CI"));
result = await instance.submitTransaction(accounts[12],249,web3.utils.toHex("D098qRHPiZ"));
result = await instance.submitTransaction(accounts[13],250,web3.utils.toHex("ItuP6ZcAqR"));
result = await instance.submitTransaction(accounts[15],427,web3.utils.toHex("32z9JgRIq8"));
result = await instance.submitTransaction(accounts[16],235,web3.utils.toHex("b6BYFGRg5u"));
result = await instance.submitTransaction(accounts[16],324,web3.utils.toHex("vcnseRk95x"));
result = await instance.submitTransaction(accounts[11],312,web3.utils.toHex("bNPz9UfyTt"));
result = await instance.submitTransaction(accounts[6],357,web3.utils.toHex("tWG8UaBQzn"));
result = await instance.submitTransaction(accounts[19],354,web3.utils.toHex("3aZOL9d1J5"));
result = await instance.submitTransaction(accounts[1],220,web3.utils.toHex("DzM7gce695"));
result = await instance.submitTransaction(accounts[20],224,web3.utils.toHex("9fB03irIMW"));
result = await instance.submitTransaction(accounts[17],354,web3.utils.toHex("5IKTgHy0rx"));
result = await instance.submitTransaction(accounts[17],310,web3.utils.toHex("GA37SnpXHc"));
result = await instance.submitTransaction(accounts[17],211,web3.utils.toHex("K1CLcuFvIk"));
result = await instance.submitTransaction(accounts[5],205,web3.utils.toHex("eUqwb5aK4A"));
result = await instance.submitTransaction(accounts[18],394,web3.utils.toHex("SKM79CuJBs"));
result = await instance.submitTransaction(accounts[16],214,web3.utils.toHex("SdbYDtJH3K"));
result = await instance.submitTransaction(accounts[4],331,web3.utils.toHex("20zvqQCjPA"));
result = await instance.submitTransaction(accounts[17],293,web3.utils.toHex("qv80xt65ib"));
result = await instance.submitTransaction(accounts[17],203,web3.utils.toHex("RJ1zO9vspe"));
result = await instance.submitTransaction(accounts[4],332,web3.utils.toHex("gm3X1yxMCR"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
