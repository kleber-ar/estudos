const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número: ", (input) => {
  let n = parseInt(input);
  let symbol = "*";
  let output = "";

  for (let line = 0; line < n; line++) {
    for (let column = 0; column < n; column++) {
      output += symbol;
    }

    console.log(output);
    output = "";
  }

  rl.close();
});
