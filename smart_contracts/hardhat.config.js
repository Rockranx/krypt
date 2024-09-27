// https://eth-ropsten.alchemyapi.io/v2/6a0PSVr4MZDE2Fax3M9c2DiMofmQWlYp

require ('@nomiclabs/hardhat-ethers');
require ('@nomiclabs/hardhat-waffle');

module.exports= {
  solidity:  '0.8.0',
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/GKzGEwRAy7n1RAqzho3yDC6KNGEr6b6l",
      accounts: ['bce634e0ae139a39e5f84190817e5ba63a90ef6e8b40f5415b3eb2bcb286cc5d']
    }
  }
}