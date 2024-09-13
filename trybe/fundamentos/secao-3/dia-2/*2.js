const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digita ai: ", (input) => {
  let n = Math.floor(parseInt(input));
  let symbol = "*";

  for (let index = 0; index <= n; index++) {
    let line = "";

    for (let space = 0; space < n - index; space++) {
      line += " ";
    }

    for (let symb = 0; symb < 2 * index - 1; symb++) {
      line += symbol;
    }

    console.log(line);
    line = "";
  }

  rl.close();
});
