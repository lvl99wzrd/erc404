import { ethers } from "hardhat"
import { vars } from "hardhat/config"

async function main() {
  const owner = vars.get("ARNF_TEST_WALLET_ADDRESS")
  const factory = await ethers.getContractFactory("ArtNotFound")
  const contract = await factory.deploy(
    "404",
    "TANF",
    "https://bafybeiefrqmoh2dbtrsw53w2htycajq4aeg5xc72paoxlefqgq6zk23cna.ipfs.nftstorage.link/",
    18,
    404,
    owner,
    owner,
  )

  await contract.waitForDeployment()
  const contractAddress = await contract.getAddress()

  console.log("Contract deployed to:", contractAddress)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
