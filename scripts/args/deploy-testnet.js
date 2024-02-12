const { vars } = require("hardhat/config")

const owner = vars.get("ARNF_TEST_WALLET_ADDRESS")

module.exports = [
  "404",
  "TANF",
  "https://bafybeiefrqmoh2dbtrsw53w2htycajq4aeg5xc72paoxlefqgq6zk23cna.ipfs.nftstorage.link/",
  18,
  404,
  owner,
  owner,
]
