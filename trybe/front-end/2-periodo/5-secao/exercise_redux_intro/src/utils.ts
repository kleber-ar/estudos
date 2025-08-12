const randomNumber = (maxNumber: number) => Math.floor(Math.random() * maxNumber);

export function getRandomColor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[randomNumber(oneChar.length)];
  }
  return cor;
}
