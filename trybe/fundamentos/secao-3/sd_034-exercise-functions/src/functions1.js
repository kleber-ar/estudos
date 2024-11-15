// Requisito 1 - Crie a função verifyPalindrome

function verifyPalindrome(word) {
  let reverse = word.split('').reverse().join('');

  return word === reverse;
}
// Requisito 2 - Crie a função getHighestIndex

function getHighestIndex(array) {
  let maior = Math.max(...array)

  return array.indexOf(maior);
}

// Requisito 3 - Crie a função getSmallestIndex

function getSmallestIndex(array) {
  let menor = Math.min(...array)

  return array.indexOf(menor);
}

// Requisito 4 - Crie a função getLongestWord

function getLongestWord(array) {

  return array.reduce((longest, current) => {
    return longest.length > current.length ? longest : current;
  });

};

// Requisito 5 - Crie a função countHighestNumberMaxOccurrences

function countHighestNumberMaxOccurrences(array) {
  const highest = array[getHighestIndex(array)];
  return array.reduce((acc, num) => {
    if (num === highest) {
      acc += 1;
    }
    return acc;
  }, 0);
}

// Não modifique as linhas abaixo
module.exports = {
  verifyPalindrome: typeof verifyPalindrome === 'function' ? verifyPalindrome : (() => {}),
  getHighestIndex: typeof getHighestIndex === 'function' ? getHighestIndex : (() => {}),
  getSmallestIndex: typeof getSmallestIndex === 'function' ? getSmallestIndex : (() => {}),
  getLongestWord: typeof getLongestWord === 'function' ? getLongestWord : (() => {}),
  countHighestNumberMaxOccurrences: typeof countHighestNumberMaxOccurrences === 'function'
    ? countHighestNumberMaxOccurrences
    : (() => {}),
};
