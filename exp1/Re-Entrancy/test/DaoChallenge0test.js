const Attack = artifacts.require("Attack");
const DaoChallenge = artifacts.require("DaoChallenge");
contract('DaoChallenge', async (accounts) => {
    const owner = accounts[0];
    let attack;
    let instance;
    let result;
    before('setup contract for each test', async () => {
        instance = await DaoChallenge.new({from: accounts[0]});
        attack = await Attack.new(instance.address, {from: accounts[400]});
    });
    it('test 0', async () => {
        await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(1))});
        await instance.sendTransaction({from: accounts[1], value: web3.utils.toWei(web3.utils.toBN(1))});
        await instance.sendTransaction({from: accounts[2], value: web3.utils.toWei(web3.utils.toBN(1))});
        await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(1))});
        await instance.sendTransaction({from: accounts[4], value: web3.utils.toWei(web3.utils.toBN(1))});
        await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(1))});
        await instance.sendTransaction({from: accounts[44], value: web3.utils.toWei(web3.utils.toBN(1))});
        await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[5], 934, {from: accounts[3]});
    });
    it('test 1', async () => {
        await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[1], 284, {from: accounts[2]});
    });
    it('test 2', async () => {
        await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(1))});

        result = await instance.transfer(accounts[0], 212, {from: accounts[5]});
    });
    it('test 3', async () => {
        await instance.sendTransaction({from: accounts[1], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[4], 711, {from: accounts[5]});
    });
    it('test 4', async () => {
        await instance.sendTransaction({from: accounts[2], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[5], 455, {from: accounts[5]});
    });
    it('test 5', async () => {
        await instance.sendTransaction({from: accounts[2], value: web3.utils.toWei(web3.utils.toBN(1))});

        result = await instance.transfer(accounts[2], 596, {from: accounts[1]});
    });
    it('test 6', async () => {
        result = await instance.transfer(accounts[1], 357, {from: accounts[5]});
        await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(1))});

    });
    it('test 7', async () => {
        await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(1))});

        result = await instance.transfer(accounts[3], 546, {from: accounts[1]});
    });
    it('test 8', async () => {
        await instance.sendTransaction({from: accounts[4], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[2], 629, {from: accounts[0]});
    });
    it('test 9', async () => {
        result = await instance.transfer(accounts[3], 276, {from: accounts[0]});
        await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(1))});

    });
    it('test 10', async () => {
        result = await instance.transfer(accounts[0], 563, {from: accounts[3]});
        await instance.sendTransaction({from: accounts[2], value: web3.utils.toWei(web3.utils.toBN(1))});

    });
    it('test 11', async () => {
        await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(1))});

        result = await instance.transfer(accounts[0], 708, {from: accounts[5]});
    });
    it('test 12', async () => {
        await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(1))});

        result = await instance.transfer(accounts[1], 652, {from: accounts[2]});
    });
    it('test 13', async () => {
        await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(1))});

        result = await instance.transfer(accounts[5], 215, {from: accounts[1]});
    });
    it('test 14', async () => {
        await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[3], 329, {from: accounts[2]});
    });
    it('test 15', async () => {
        await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(1))});

        result = await instance.transfer(accounts[3], 300, {from: accounts[2]});
    });
    it('test 16', async () => {
        await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(1))});

        result = await instance.transfer(accounts[2], 326, {from: accounts[1]});
    });
    it('test 17', async () => {
        result = await instance.transfer(accounts[1], 820, {from: accounts[2]});
        await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(2))});

    });
    it('test 18', async () => {
        result = await instance.transfer(accounts[1], 548, {from: accounts[2]});
        await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(1))});

    });
    it('test 19', async () => {
        await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[1], 868, {from: accounts[4]});
    });
    it('test 20', async () => {
        await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[2], 392, {from: accounts[1]});
    });
    it('test 21', async () => {
        await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[0], 537, {from: accounts[3]});
    });
    it('test 22', async () => {
        result = await instance.transfer(accounts[5], 337, {from: accounts[1]});
        await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(2))});

    });
    it('test 23', async () => {
        result = await instance.transfer(accounts[1], 477, {from: accounts[3]});
        await instance.sendTransaction({from: accounts[1], value: web3.utils.toWei(web3.utils.toBN(1))});

    });
    it('test 24', async () => {
        result = await instance.transfer(accounts[0], 754, {from: accounts[1]});
        await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(1))});

    });
    it('test 25', async () => {
        await instance.sendTransaction({from: accounts[4], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[2], 643, {from: accounts[5]});
    });
    it('test 26', async () => {
        await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[1], 491, {from: accounts[4]});
    });
    it('test 27', async () => {
        await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(1))});

        result = await instance.transfer(accounts[2], 913, {from: accounts[1]});
    });
    it('test 28', async () => {
        await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(1))});

        result = await instance.transfer(accounts[5], 410, {from: accounts[1]});
    });
    it('test 29', async () => {
        result = await instance.transfer(accounts[0], 477, {from: accounts[3]});
        await instance.sendTransaction({from: accounts[2], value: web3.utils.toWei(web3.utils.toBN(1))});

    });
    it('test 30', async () => {
        await instance.sendTransaction({from: accounts[4], value: web3.utils.toWei(web3.utils.toBN(1))});

        result = await instance.transfer(accounts[4], 850, {from: accounts[5]});
    });
    it('test 31', async () => {
        await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[1], 509, {from: accounts[4]});
    });
    it('test 32', async () => {
        await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[1], 594, {from: accounts[1]});
    });
    it('test 33', async () => {
        result = await instance.transfer(accounts[1], 916, {from: accounts[1]});
        await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(2))});

    });
    it('test 34', async () => {
        result = await instance.transfer(accounts[1], 621, {from: accounts[5]});
        await instance.sendTransaction({from: accounts[2], value: web3.utils.toWei(web3.utils.toBN(1))});

    });
    it('test 35', async () => {
        await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(1))});

        result = await instance.transfer(accounts[0], 409, {from: accounts[5]});
    });
    it('test 36', async () => {
        await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[1], 825, {from: accounts[2]});
    });
    it('test 37', async () => {
        result = await instance.transfer(accounts[3], 987, {from: accounts[5]});
        await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(2))});

    });
    it('test 38', async () => {
        result = await instance.transfer(accounts[5], 639, {from: accounts[2]});
        await instance.sendTransaction({from: accounts[2], value: web3.utils.toWei(web3.utils.toBN(2))});

    });
    it('test 39', async () => {
        await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(1))});

        result = await instance.transfer(accounts[2], 204, {from: accounts[1]});
    });
    it('test 40', async () => {
        await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[0], 649, {from: accounts[0]});
    });
    it('test 41', async () => {
        await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[3], 250, {from: accounts[2]});
    });
    it('test 42', async () => {
        await instance.sendTransaction({from: accounts[4], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[0], 568, {from: accounts[4]});
    });
    it('test 43', async () => {
        result = await instance.transfer(accounts[4], 974, {from: accounts[2]});
        await instance.sendTransaction({from: accounts[1], value: web3.utils.toWei(web3.utils.toBN(1))});

    });
    it('acctack', async () => {
        await attack.pwnEtherStore({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(50))});
    });
    it('test 44', async () => {
        await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(2))});

        result = await instance.transfer(accounts[0], 623, {from: accounts[2]});
    });
    it('test 45', async () => {
        result = await instance.transfer(accounts[4], 270, {from: accounts[5]});
        await instance.sendTransaction({from: accounts[2], value: web3.utils.toWei(web3.utils.toBN(2))});

    });
    it('test 46', async () => {
        await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(1))});

        result = await instance.transfer(accounts[5], 576, {from: accounts[4]});
    });
    it('test 47', async () => {
        await instance.sendTransaction({from: accounts[2], value: web3.utils.toWei(web3.utils.toBN(1))});

        result = await instance.transfer(accounts[4], 856, {from: accounts[1]});
        await instance.sendTransaction({from: accounts[88], value: web3.utils.toWei(web3.utils.toBN(4))});
        result = await instance.refund({from: accounts[88]});
    });
    it('test 48', async () => {
        await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(1))});

        result = await instance.transfer(accounts[5], 634, {from: accounts[2]});
    });
    it('test 49', async () => {
        result = await instance.transfer(accounts[3], 286, {from: accounts[0]});
        await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(2))});

        await instance.terminate({from: accounts[0]});
    });
});
