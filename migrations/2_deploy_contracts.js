const Gems = artifacts.require('Gems')

module.exports = async function(deployer) {
    await deployer.deploy(Gems)
}
