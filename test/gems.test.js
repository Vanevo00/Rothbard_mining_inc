const Gems = artifacts.require('Gems');

contract('Gems contract', async ([owner]) => {
    it('should set contract owner as minter', async () => {
        const gemsContract = await Gems.deployed()
        const minterAddress = await gemsContract.minter()
        assert.equal(owner, minterAddress)
    })
})