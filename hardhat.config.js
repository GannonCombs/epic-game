require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

const privateKey = process.env.CHROME_PRIVATE_KEY;
const alchemyGoerliUrl = process.env.ALCHEMY_GOERLI_URL;

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: alchemyGoerliUrl,
      accounts: [privateKey],
    },
  },
};