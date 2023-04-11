import { ethers, upgrades } from "hardhat";
const PROXY = "0xe00956a84e01333b2b678959f7be90c63928718c";

async function main() {
  const UUPS_v2 = await ethers.getContractFactory("UUPS_v2");
  console.log("Deploying UUPS_v2 ......");

  await upgrades.upgradeProxy(PROXY, UUPS_v2);

  console.log("UUPS_v2 upgraded successfully");
}

main();
