import { HardhatUserConfig } from "hardhat/config";
import "@openzeppelin/hardhat-upgrades";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "ethers";
import env from "dotenv";
env.config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
  networks: {
    BSC_TESTNET: {
      url: process.env.URL,
      accounts: [process.env.PVKEY!],
    },
  },
};

export default config;
