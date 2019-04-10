const Pool = artifacts.require("./Pool.sol")
const TimeMockedPool = artifacts.require("./TimeMockedPool.sol")
const FishToken = require('./helper/FishToken.json')

//const Web3 = require('web3')
//const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))

const BigNumber = web3.utils.BN;
const maxNumber = '115792089237316195423570985008687907853269984665640564039457584007913129639935'

const timePeriodInSeconds = 3600
const from = Math.floor(new Date() / 1000)
const to = from + timePeriodInSeconds

const name = 'test'

contract('Pool', async (accounts) => {
    const owner = accounts[0]
    const user1 = accounts[1]
    const user2 = accounts[2]

    describe("Basic tests", async () => {
        const rate = 100
        let instance
        let token
        beforeEach('setup contract for each test', async () => {
            instance = await Pool.new(name, rate, to)
            token = await instance.token()
        })

        it("Name should be test", async () => {
            const nameOnContract = await instance.name()
            assert.equal(nameOnContract, name)
        })

    })

})
