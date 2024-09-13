
let word = "Socorram-me, Subi No Ônibus Em Marrocos.";
let reverse = "";

for (let index = 0; index < word.length; index++) {
  reverse += word[word.length - 1 - index]
}

console.log("Primeira forma:", reverse)

reverse = word.split("").reverse().join("");

console.log("Segunda forma:", reverse)


let array = ["java", "javascript", "python", "html", "css"];
let maior = array[0];
let menor = array[0];

for (let index = 0; index < array.length; index++) {
  if (array[index].length > maior.length) {
    maior = array[index]
  } else {
    menor = array[index]
  }
}

console.log("Maior palavra:", maior, "\nMenor palavra:", menor)

array.sort();

console.log("Em ordem alfabetica:", array)



