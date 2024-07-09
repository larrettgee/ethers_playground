const { ethers } = require("ethers");

// Set Up RPC
const RPC = "https://eth.llamarpc.com";
const provider = new ethers.providers.JsonRpcProvider(RPC);

const main = async () => {
  const balance = await provider.getBalance("vitalik.eth");

  console.log(
    `Vitalik has this much ETH: ${ethers.utils.formatEther(balance)}`
  );
};

main();
