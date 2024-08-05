// Implemented to compelte the Ethernaut challenge #8.

const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.api.onfinality.io/public");

const main = async () => {
  // Get the storage at position 1 of the contract
  const storage = await provider.getStorageAt("0x4A60270479548487103c8D942755acccf4e20F7D", 1);
  console.log(storage);
};

main();
