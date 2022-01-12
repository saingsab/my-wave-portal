require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const Private_Key = process.env.PRIVATE_RINKEBY_ACCOUNT_KEY;

module.exports = {
  solidity: "0.8.0",
  networks: {
  	rinkeby: {
  		url: process.env.ALCHEMY_API_URL,
  		accounts: [`${Private_Key}`]
  	}
  },
  etherscan: {
    apiKey: process.env.APIKEY
  }
};