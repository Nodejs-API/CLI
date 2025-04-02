require("dotenv").config();

module.exports = {
  privateKey: process.env.PRIVATE_KEY,
  rpcUrl: process.env.ETH_RPC_URL,
  uniswapRouter: process.env.UNISWAP_ETH_V2, // UniswapV2 Router on ETH
  chainId: process.env.CHAIN_WETH, // WETH
};
