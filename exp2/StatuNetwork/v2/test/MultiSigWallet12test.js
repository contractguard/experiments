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
result = await instance.submitTransaction(accounts[3],417,web3.utils.toHex("5DAl4NZB3H"));
result = await instance.submitTransaction(accounts[8],428,web3.utils.toHex("hJ5f3WIYp9"));
result = await instance.submitTransaction(accounts[4],343,web3.utils.toHex("dvnsxLbetN"));
result = await instance.submitTransaction(accounts[1],424,web3.utils.toHex("4Dnmh9lNgy"));
result = await instance.submitTransaction(accounts[4],255,web3.utils.toHex("zb8jKAQO5S"));
result = await instance.submitTransaction(accounts[4],444,web3.utils.toHex("wKG9X4dnFp"));
result = await instance.submitTransaction(accounts[10],268,web3.utils.toHex("79cZWKCvJz"));
result = await instance.submitTransaction(accounts[16],327,web3.utils.toHex("DI23puSQq1"));
result = await instance.submitTransaction(accounts[7],380,web3.utils.toHex("WIwRv1hJHy"));
result = await instance.submitTransaction(accounts[9],453,web3.utils.toHex("fv9d8JwPRr"));
result = await instance.submitTransaction(accounts[14],398,web3.utils.toHex("jkPEp8ZvrD"));
result = await instance.submitTransaction(accounts[9],279,web3.utils.toHex("x0dfcjF5Kk"));
result = await instance.submitTransaction(accounts[18],371,web3.utils.toHex("3wJvb4VtQU"));
result = await instance.submitTransaction(accounts[3],354,web3.utils.toHex("jEn43mhaP1"));
result = await instance.submitTransaction(accounts[4],496,web3.utils.toHex("qfxot8ce1v"));
result = await instance.submitTransaction(accounts[16],405,web3.utils.toHex("MLWVz2he07"));
result = await instance.submitTransaction(accounts[8],228,web3.utils.toHex("URbIe0sDHd"));
result = await instance.submitTransaction(accounts[3],416,web3.utils.toHex("LWz5UxbkXS"));
result = await instance.submitTransaction(accounts[14],479,web3.utils.toHex("BNy0JDSzUY"));
result = await instance.submitTransaction(accounts[10],397,web3.utils.toHex("GUJh6aKSwX"));
result = await instance.submitTransaction(accounts[17],436,web3.utils.toHex("PblqJo0Fdi"));
result = await instance.submitTransaction(accounts[18],358,web3.utils.toHex("oZGsSQIUkL"));
result = await instance.submitTransaction(accounts[14],439,web3.utils.toHex("jD1EJmtcXO"));
result = await instance.submitTransaction(accounts[5],375,web3.utils.toHex("l8fQgtUwBh"));
result = await instance.submitTransaction(accounts[11],351,web3.utils.toHex("EKnSALOZD0"));
result = await instance.submitTransaction(accounts[2],317,web3.utils.toHex("tJIAoKMir3"));
result = await instance.submitTransaction(accounts[14],423,web3.utils.toHex("04CWcFa7Ev"));
result = await instance.submitTransaction(accounts[12],207,web3.utils.toHex("yOBXcKb5ut"));
result = await instance.submitTransaction(accounts[4],321,web3.utils.toHex("LqjH2DWmg8"));
result = await instance.submitTransaction(accounts[9],343,web3.utils.toHex("C9lWRiTcoU"));
result = await instance.submitTransaction(accounts[6],460,web3.utils.toHex("zrP5eU1Wad"));
result = await instance.submitTransaction(accounts[1],371,web3.utils.toHex("CJhwokIEOr"));
result = await instance.submitTransaction(accounts[7],281,web3.utils.toHex("4HMFhDsPoQ"));
result = await instance.submitTransaction(accounts[5],462,web3.utils.toHex("YGpfh4cnMt"));
result = await instance.submitTransaction(accounts[13],252,web3.utils.toHex("oAdSx0R3cm"));
result = await instance.submitTransaction(accounts[20],460,web3.utils.toHex("Ijy3d7vZ4x"));
result = await instance.submitTransaction(accounts[13],397,web3.utils.toHex("e6YtBDH4Xx"));
result = await instance.submitTransaction(accounts[13],392,web3.utils.toHex("XC6V50TDuK"));
result = await instance.submitTransaction(accounts[1],347,web3.utils.toHex("jXSYax45Z7"));
result = await instance.submitTransaction(accounts[15],414,web3.utils.toHex("zJdNsBT6jP"));
await instance.executeTransaction(10);
});
});
