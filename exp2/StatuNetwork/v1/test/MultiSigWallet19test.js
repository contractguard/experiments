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
result = await instance.submitTransaction(accounts[8],214,web3.utils.toHex("5PMIWjAcf3"));
result = await instance.submitTransaction(accounts[9],320,web3.utils.toHex("7EtcaC5DXh"));
result = await instance.submitTransaction(accounts[16],349,web3.utils.toHex("VKtkT3hWus"));
result = await instance.submitTransaction(accounts[3],452,web3.utils.toHex("Bv9yhJFWDX"));
result = await instance.submitTransaction(accounts[7],287,web3.utils.toHex("Kw4CBIchWi"));
result = await instance.submitTransaction(accounts[19],348,web3.utils.toHex("cTv230jIgx"));
result = await instance.submitTransaction(accounts[8],469,web3.utils.toHex("sxR6zWXrMn"));
result = await instance.submitTransaction(accounts[14],451,web3.utils.toHex("u0PtxKT7Le"));
result = await instance.submitTransaction(accounts[4],498,web3.utils.toHex("qIzCs1W69M"));
result = await instance.submitTransaction(accounts[10],401,web3.utils.toHex("esj6x8lEfS"));
result = await instance.submitTransaction(accounts[18],404,web3.utils.toHex("ecXBIRVxZ1"));
result = await instance.submitTransaction(accounts[13],264,web3.utils.toHex("8frdEcvxB9"));
result = await instance.submitTransaction(accounts[11],310,web3.utils.toHex("53CRukq0eA"));
result = await instance.submitTransaction(accounts[4],437,web3.utils.toHex("H0AaF9d6Mi"));
result = await instance.submitTransaction(accounts[18],235,web3.utils.toHex("bgJAqLdiPD"));
result = await instance.submitTransaction(accounts[11],368,web3.utils.toHex("ZgUFXfbyHM"));
result = await instance.submitTransaction(accounts[12],225,web3.utils.toHex("aqcoeICVN2"));
result = await instance.submitTransaction(accounts[20],302,web3.utils.toHex("sY0gNFEHo3"));
result = await instance.submitTransaction(accounts[19],352,web3.utils.toHex("PxIOeKG9yc"));
result = await instance.submitTransaction(accounts[7],497,web3.utils.toHex("mP8IMoyJUT"));
result = await instance.submitTransaction(accounts[8],252,web3.utils.toHex("61LjxtybiZ"));
result = await instance.submitTransaction(accounts[8],253,web3.utils.toHex("APfEDF6XcR"));
result = await instance.submitTransaction(accounts[4],467,web3.utils.toHex("LwJMfImOkD"));
result = await instance.submitTransaction(accounts[1],362,web3.utils.toHex("5tWrOqH6ln"));
result = await instance.submitTransaction(accounts[19],306,web3.utils.toHex("oASb08vVIC"));
result = await instance.submitTransaction(accounts[2],391,web3.utils.toHex("R4lgDHJO9y"));
result = await instance.submitTransaction(accounts[18],458,web3.utils.toHex("0XFmUkO2Po"));
result = await instance.submitTransaction(accounts[19],446,web3.utils.toHex("3Lo2QXOcV6"));
result = await instance.submitTransaction(accounts[19],304,web3.utils.toHex("3URjh8SCfn"));
result = await instance.submitTransaction(accounts[13],491,web3.utils.toHex("Yz8lbFkgaw"));
result = await instance.submitTransaction(accounts[15],344,web3.utils.toHex("FpufJYHbIP"));
result = await instance.submitTransaction(accounts[8],266,web3.utils.toHex("UxhpmgcKla"));
result = await instance.submitTransaction(accounts[20],399,web3.utils.toHex("qtdiK1oImJ"));
result = await instance.submitTransaction(accounts[2],344,web3.utils.toHex("HmxLajR5Ss"));
result = await instance.submitTransaction(accounts[11],334,web3.utils.toHex("svicCN2xe8"));
result = await instance.submitTransaction(accounts[20],302,web3.utils.toHex("m1y4rBUDhp"));
result = await instance.submitTransaction(accounts[20],236,web3.utils.toHex("yF64HGQwuA"));
result = await instance.submitTransaction(accounts[20],255,web3.utils.toHex("obx4Iy8t52"));
result = await instance.submitTransaction(accounts[1],350,web3.utils.toHex("ArNQYcSukG"));
result = await instance.submitTransaction(accounts[8],432,web3.utils.toHex("qH2o3kgwLm"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});