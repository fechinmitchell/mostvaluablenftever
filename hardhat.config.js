require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
// const projectId = "646007f81b6e46b9a746194ee77ac1e8"
 
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      // url: `https://polygon-mumbai.infura.io/v3/${projectId}`

      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: [privateKey]
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      // url: `https://polygon-mainnet.infura.io/v3/${projectId}`

      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
  
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};