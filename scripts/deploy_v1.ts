import { ethers, upgrades } from "hardhat";

const KEY = 5;
async function main() {
  const UUPS_v1 = await ethers.getContractFactory("UUPS_v1");
  console.log("Deploying ......");

  const demo = await upgrades.deployProxy(UUPS_v1, [KEY], { initializer: "initialize" });
  await demo.deployed();
  console.log("UUPS_v1 deployed successfully,contract address is :", demo.address);
}

main();
