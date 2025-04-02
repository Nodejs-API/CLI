const buy = require("./services/buy");

const args = process.argv.slice(2);
const [command, tokenAddress, amountInEth] = args;

(async () => {
  try {
    if (command === "buy") {
      await buy(tokenAddress, amountInEth);
    } else {
      console.log("❌ Unknown command. Use: buy <tokenAddress> <ethAmount>");
    }
  } catch (err) {
    console.error("❌ Error:", err.info.error.code, "\n", err.message);
  }
})();
