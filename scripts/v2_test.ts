import { ethers, upgrades } from "hardhat";

async function main() {
  const UUPS_v2 = await ethers.getContractFactory("UUPS_v2");
  await UUPS_v2.attach("0xe00956a84e01333b2b678959f7be90c63928718c").increaseKey();
}

main();
