const { ethers } = require("ethers");
const {
  rpcUrl,
  privateKey,
  uniswapRouter,
  chainId,
} = require("../config/config");
const abi = require("../abi/UniswapV2Router.json");

async function buy(tokenAddress, amountInEth) {
  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const router = new ethers.Contract(uniswapRouter, abi, wallet);

  const path = [chainId, tokenAddress];
  const deadline = Math.floor(Date.now() / 1000) + 60 * 2;

  const tx = await router.swapExactETHForTokens(
    0,
    path,
    wallet.address,
    deadline,
    {
      value: ethers.parseEther(amountInEth),
      gasLimit: 300000,
    }
  );

  console.log("✅ Buy TX Sent:", tx.hash);
  await tx.wait();
  console.log("✅ Buy TX Confirmed!");
}

module.exports = buy;
