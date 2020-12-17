const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      networkCheckTimeout: 1000000000000000000
      
    },
  },
  compilers: {
    solc: {
      version: "0.6.2" // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
}
}
