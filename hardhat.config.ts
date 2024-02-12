import { HardhatUserConfig, vars } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "hardhat-gas-reporter"

const config: HardhatUserConfig = {
  solidity: { compilers: [{ version: "0.8.20" }, { version: "0.4.18" }] },
  gasReporter: {
    currency: "USD",
    gasPrice: 21,
    enabled: true,
  },
  etherscan: {
    apiKey: {
      polygonMumbai: vars.get("POLYGONSCAN_API_KEY"),
      sepolia: vars.get("ETHERSCAN_API_KEY"),
    },
  },
  networks: {
    polygonMumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${vars.get("ALCHEMY_API_KEY")}`,
      accounts: [vars.get("ARNF_TEST_PRIVATE_KEY")],
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${vars.get("ALCHEMY_API_KEY")}`,
      accounts: [vars.get("ARNF_TEST_PRIVATE_KEY")],
    },
  },
}

export default config
