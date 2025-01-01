const calcTotal = (...numbers) => {
  let total = 0;

  numbers.forEach((number) => {
    total += number;
  });

  return total;
};

console.log(calcTotal(10, 20, 30));
