const Gems = artifacts.require('Gems');

contract('Gems contract', async ([owner]) => {
    let gemsContract

    before(async () => {
        gemsContract = await Gems.deployed()
    })

    describe('deployment', async () => {
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

    describe('minting', async () => {
        before(async () => {
            await gemsContract.mint('0.37', 'brilliant', 'diamond', 'VS1')
        })

        it('should increment tokenIds', async () => {
            const tokenIds = await gemsContract.tokenIds()
            assert.equal(tokenIds, '1')
        })

        it('should increment balanceOf contract owner', async () => {
            const ownerBalance = await gemsContract.balanceOf(owner)
            assert.equal(ownerBalance, '1')
        })

        it('should assign contract owner as the owner of the minted gem', async () => {
            const mintedGemOwnerAddress = await gemsContract.ownerOf('1')
            assert.equal(mintedGemOwnerAddress, owner)
        })

        it('should save attributes of the gem', async () => {
            const mintedGemAttributes = await gemsContract.gemAttributes('1')
            assert.equal(mintedGemAttributes.weight, '0.37')
            assert.equal(mintedGemAttributes.cut, 'brilliant')
            assert.equal(mintedGemAttributes.gemType, 'diamond')
            assert.equal(mintedGemAttributes.clarity, 'VS1')
        })
    })
})