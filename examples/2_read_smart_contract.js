const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  "https://eth.llamarpc.com"
);

// Ethers lets you store ABI's as an array, which lets you pull in specific pieces at a time.
const ERC20_ABI = [
  "function name() view returns (string)", // You can grab the function and how it appears in the solidity source code, then wrap it in a string
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
];

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();

  console.log(`\nReading from ${address}\n`);
  console.log(`Name: ${name}`);
  console.log(`Symbol: ${symbol}`);
  console.log(`Total Supply: ${totalSupply}\n`);

  const balance = await contract.balanceOf(
    "0x6c6Bc977E13Df9b0de53b251522280BB72383700"
  ); // Returns an 18 digit decimal result, so format in the response.

  console.log(`Balance Returned: ${balance}`);
  console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`);
};

main();
