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
result = await instance.submitTransaction(accounts[2],441,web3.utils.toHex("jLXCRfKV7S"));
result = await instance.submitTransaction(accounts[5],446,web3.utils.toHex("M1tbfT9VP6"));
result = await instance.submitTransaction(accounts[4],401,web3.utils.toHex("YuERzfQI9q"));
result = await instance.submitTransaction(accounts[12],339,web3.utils.toHex("5Q9CSwTqek"));
result = await instance.submitTransaction(accounts[3],419,web3.utils.toHex("i9fg51Jc4d"));
result = await instance.submitTransaction(accounts[15],282,web3.utils.toHex("AQyBOCU9Sd"));
result = await instance.submitTransaction(accounts[11],294,web3.utils.toHex("YOG0HCXuEP"));
result = await instance.submitTransaction(accounts[4],481,web3.utils.toHex("xMR4czvuVD"));
result = await instance.submitTransaction(accounts[14],249,web3.utils.toHex("qVCvgOULP5"));
result = await instance.submitTransaction(accounts[10],492,web3.utils.toHex("7duUAo0I4f"));
result = await instance.submitTransaction(accounts[6],350,web3.utils.toHex("SMn0v9twyZ"));
result = await instance.submitTransaction(accounts[16],326,web3.utils.toHex("oy3OisF2wx"));
result = await instance.submitTransaction(accounts[9],403,web3.utils.toHex("w0P7BnkaM1"));
result = await instance.submitTransaction(accounts[17],281,web3.utils.toHex("bMwpgKQGNX"));
result = await instance.submitTransaction(accounts[12],379,web3.utils.toHex("ZExinKtQVd"));
result = await instance.submitTransaction(accounts[3],384,web3.utils.toHex("vEaWcMPBtH"));
result = await instance.submitTransaction(accounts[20],273,web3.utils.toHex("32oknYQxIi"));
result = await instance.submitTransaction(accounts[17],229,web3.utils.toHex("7FObSkshA9"));
result = await instance.submitTransaction(accounts[5],439,web3.utils.toHex("MHwdsoXujA"));
result = await instance.submitTransaction(accounts[16],224,web3.utils.toHex("IRLbhEADMP"));
result = await instance.submitTransaction(accounts[8],437,web3.utils.toHex("eFgdV2cnRv"));
result = await instance.submitTransaction(accounts[11],356,web3.utils.toHex("QI9Sw43HLm"));
result = await instance.submitTransaction(accounts[19],207,web3.utils.toHex("AVh7enfYpZ"));
result = await instance.submitTransaction(accounts[17],242,web3.utils.toHex("Ne4d2BCVv9"));
result = await instance.submitTransaction(accounts[4],317,web3.utils.toHex("ZnxEFCgUbN"));
result = await instance.submitTransaction(accounts[5],469,web3.utils.toHex("7Lt3mnZlBo"));
result = await instance.submitTransaction(accounts[5],484,web3.utils.toHex("ZvVfX3ojrx"));
result = await instance.submitTransaction(accounts[20],239,web3.utils.toHex("SzPmuQt3gM"));
result = await instance.submitTransaction(accounts[14],357,web3.utils.toHex("kgwsQ429JC"));
result = await instance.submitTransaction(accounts[12],446,web3.utils.toHex("xufhVY6kqQ"));
result = await instance.submitTransaction(accounts[9],479,web3.utils.toHex("Y3gS50oFQK"));
result = await instance.submitTransaction(accounts[10],296,web3.utils.toHex("Kym4n2Sstu"));
result = await instance.submitTransaction(accounts[8],291,web3.utils.toHex("bOZPD9fcto"));
result = await instance.submitTransaction(accounts[1],485,web3.utils.toHex("fXlyWri4sw"));
result = await instance.submitTransaction(accounts[18],226,web3.utils.toHex("s9tckFR4bP"));
result = await instance.submitTransaction(accounts[5],433,web3.utils.toHex("iOsJABwx60"));
result = await instance.submitTransaction(accounts[1],276,web3.utils.toHex("QtZXCbVHFw"));
result = await instance.submitTransaction(accounts[13],401,web3.utils.toHex("Ws60GOgZQk"));
result = await instance.submitTransaction(accounts[9],496,web3.utils.toHex("j6PUFlSwGb"));
result = await instance.submitTransaction(accounts[5],395,web3.utils.toHex("sDKZtpn857"));
await instance.executeTransaction(10);
});
});
