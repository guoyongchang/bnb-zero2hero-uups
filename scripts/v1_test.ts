import { ethers, upgrades } from "hardhat";

async function main() {
  const UUPS_v1 = await ethers.getContractFactory("UUPS_v1");
  await UUPS_v1.attach("0xe00956a84e01333b2b678959f7be90c63928718c").decreaseKey();
}

main();
