// https://eth-ropsten.alchemyapi.io/v2/6a0PSVr4MZDE2Fax3M9c2DiMofmQWlYp

require ('@nomiclabs/hardhat-ethers');
require ('@nomiclabs/hardhat-waffle');

module.exports= {
  solidity:  '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/6a0PSVr4MZDE2Fax3M9c2DiMofmQWlYp',
      accounts: ['4ade36c90e32870781b74aed6c6d09c8ec9184474219b97ac2c12fa43a31baac']
    }
  }
}