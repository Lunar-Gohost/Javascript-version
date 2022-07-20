const readline = require("readline");
const ac = new AbortController();
const signal = ac.signal;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// console.log("Put in your number choice. ")
rl.question("Put in your choice", { signal }, (answer) => {
  console.log("thankyou for your choice of", (answer));
  process.exit();
});

signal.addEventListener(
  "abort",
  () => {
    console.log("thankyou for your answer");
  },
  { once: true }
);

setTimeout(() => {
  ac.abort();
  process.exit();
}, 5000); // 5 seconds
