const FishToken = artifacts.require("./FishToken.sol");
const FishTokenTimed = artifacts.require("./TimeMockedFishToken.sol");

const BigNumber = web3.utils.BN;
const maxNumber = '115792089237316195423570985008687907853269984665640564039457584007913129639935'

const timePeriodInSeconds = 3600
const from = Math.floor(new Date() / 1000)
const to = from + timePeriodInSeconds

contract('FishToken', async (accounts) => {
  const owner = accounts[0]
  const user1 = accounts[1]
  const user2 = accounts[2]

  describe("Time altered tests", async () => {
    let instance
    beforeEach('setup contract for each test', async () => {
      instance = await FishTokenTimed.new(to)
    })

    it("Should change time of the instance", async () => {
      const deadline = await instance.deadline()
      assert.equal(deadline.toString(), to.toString())
      await instance.leapForwardInTime(timePeriodInSeconds)
      const newDeadline = await instance.deadline()
      assert.equal(newDeadline.toString(), from.toString())
    })
  })
})

async function assertTransfer(from, to, amount, instance) {
  const fromBalanceBefore = await instance.balanceOf(from)
  const toBalanceBefore = await instance.balanceOf(to)
  await instance.transfer(to, amount, {from: from})
  const fromBalanceAfter = await instance.balanceOf(from)
  const toBalanceAfter = await instance.balanceOf(to)

  let fromShouldBe = new BigNumber(fromBalanceBefore)
  fromShouldBe = fromShouldBe.sub(new BigNumber(amount))
  let toShouldBe = new BigNumber(toBalanceBefore)
  toShouldBe =  toShouldBe.add(new BigNumber(amount))

  assert.equal(fromBalanceAfter.toString(), fromShouldBe.toString())
  assert.equal(toBalanceAfter.toString(), toShouldBe.toString())
}

async function assertIssueTokens(to, amount, owner, instance) {
  const balanceToBefore = await instance.balanceOf(to)
  const totalSupplyBefore = await instance.totalSupply()
  await instance.issueTokens(to, amount, {from: owner})

  const balanceToAfter = await instance.balanceOf(to)
  const totalSupplyAfter = await instance.totalSupply()

  let balanceToShouldBe = new BigNumber(balanceToBefore)
  balanceToShouldBe = balanceToShouldBe.add(new BigNumber(amount))
  let totalSupplyShouldBe = new BigNumber(totalSupplyBefore)
  totalSupplyShouldBe = totalSupplyShouldBe.add(new BigNumber(amount))

  assert.equal(balanceToAfter, balanceToShouldBe.toString())
  assert.equal(totalSupplyAfter, totalSupplyShouldBe.toString())
}

async function assertBalanceEqual(user, balanceShouldBe, instance) {
  const actualBalance = await instance.balanceOf.call(user, {from: user})
  assert.equal(actualBalance, balanceShouldBe.toString())
}

async function assertSharkEqual(user, instance) {
  assert.equal(await instance.currentShark(), user)
}

async function assertOwnerEqual(owner, instance) {
  assert.equal(await instance.owner(), owner)
}

async function assertDeadlineEqual(deadline, instance) {
  const actual = await instance.deadline()
  assert.equal(actual.toString(), deadline.toString())
}

async function assertTotalSupplyEqual(totalSupply, instance) {
  const actual = await instance.totalSupply()
  assert.equal(actual.toString(), totalSupply.toString())
}
