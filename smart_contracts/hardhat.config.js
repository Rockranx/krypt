// https://eth-ropsten.alchemyapi.io/v2/6a0PSVr4MZDE2Fax3M9c2DiMofmQWlYp

require ('@nomiclabs/hardhat-ethers');
require ('@nomiclabs/hardhat-waffle');

module.exports= {
  solidity:  '0.8.0',
  networks: {
    
    sepolia: {
      url:"", // use alchemy api here
      accounts: [''] // use wallet private key
    }
  }
}
