
//EXERCICIO-1

const { array } = require("yargs");

// removeItem.js

function removeItem(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
  
console.log(removeItem([1, 2, 3, 4], 2));


//EXERCICIO-2
  
// myFizzBuzz.js
  
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;

}

console.log(myFizzBuzz(15));

//EXERCICIO-3

// encodeDecode.js

const mapString = (objectMap, string) => {
  const splitString = string.split('');
  const mappedArray = [];

  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index];
    const mappedValue = objectMap[character];
    
    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }

  return mappedArray.join('');
}

const encode = (string) => {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}

const decode = (string) => {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(map, string);
}

console.log(encode('boa 02'), decode('b41 02'));


//EXERCICIO-4

// techList.js

const techList = (arraytech, name) => {
  if (!arraytech.length) return ('Vazio!');

  const sortTech = arraytech.sort();
  const techList = [];

  for (let index = 0; index < sortTech.length; index++) {
    techList.push({
      tech: sortTech[index],
      name: name,
    });
    
  }

  return techList;

}

console.log(techList(['css', 'java'], 'lucas'));

//EXERCICIO-5

// hidrate.js

const hydrate = (string) => {
  const splitString = string.split(' ');
  let glassesOfWater = 0;

  for (let index = 0; index < splitString.length; index++) {
    const parsedCharacter = parseInt(splitString[index]);

    if (parsedCharacter) {
      glassesOfWater += parsedCharacter;
    }
    
  }

  let glass = 'copo';

  if (glassesOfWater > 1) {
    glass = 'copos';

  }

  return `${glassesOfWater} ${glass} de água`;
}

console.log(hydrate('12 cervejas, 3 caipirinha'));

module.exports = {
  removeItem, 
  myFizzBuzz,
  encode, decode,
  techList,
  hydrate

};