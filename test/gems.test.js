const Gems = artifacts.require('Gems');

contract('Gems contract', async ([owner]) => {
    let gemsContract

    before(async () => {
        gemsContract = await Gems.deployed()
    })

    it('should have an address', async () => {
        const address = gemsContract.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })

    it('should have a name and a symbol', async () => {
        const name = await gemsContract.name()
        const symbol = await gemsContract.symbol()
        assert.equal(name, 'Gems')
        assert.equal(symbol, 'GEM')
    })

    it('should set contract owner as minter', async () => {
        const minterAddress = await gemsContract.minter()
        assert.equal(owner, minterAddress)
    })
})