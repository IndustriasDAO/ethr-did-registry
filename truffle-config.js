const HDWalletProvider = require('truffle-hdwallet-provider');
require('dotenv').config();
module.exports = {
  compilers: {
    solc: {
      version: "^0.7.0"
    }
  },
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions: {
      excludeContracts: [''],
      currency: 'USD'
    }
  },
  plugins: ["truffle-contract-size"],
  networks: {
    bsctestnet: {
      provider: () => new HDWalletProvider(process.env.BSC_MNEMONIC, process.env.BSC_TESTNET),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: false
    },
    bsc: {
      provider: () => new HDWalletProvider(process.env.BSC_MNEMONIC, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    localhost: {
      from: '0x95BBef5019Ecf57c2e6FE0609165cc34d961aF10',
      host: 'localhost',
      port: 8545,
      network_id: '10' // Match any network id
    },
    development: {
      from: '0x95BBef5019Ecf57c2e6FE0609165cc34d961aF10',
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(process.env.MNEMONIC, process.env.URL),
      network_id: 4,
      gas: 7000000,
      gasPrice: 30000000000
    },

    kovan: {
      provider: () =>
        new HDWalletProvider(process.env.MNEMONIC, process.env.URL),
      network_id: 42,
      gas: 7000000,
      gasPrice: 30000000000
    },

    ropsten: {
      provider: () =>
        new HDWalletProvider(process.env.MNEMONIC, process.env.URL),
      network_id: 3,
      gas: 5000000,
      // timeoutBlocks: 3,
      gasPrice: 65000000000
    }
  }
};
