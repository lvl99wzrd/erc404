import { ethers } from "hardhat"
import { vars } from "hardhat/config"

async function main() {
  const owner = vars.get("ARNF_TEST_WALLET_ADDRESS")
  const factory = await ethers.getContractFactory("ArtNotFound")
  const contract = await factory.deploy(
    "Art Not Found",
    "ARNF",
    "ipfs://bafybeicl52gqhj7ksagces7yfmxodc7j34crip4umy2uavl7ojkrkfqiee/",
    404n,
    18n,
    owner,
    owner,
  )

  await contract.waitForDeployment()
  const contractAddress = await contract.getAddress()

  console.log("ArtNotFound deployed to:", contractAddress)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
