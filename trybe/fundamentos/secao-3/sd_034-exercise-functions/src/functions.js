// Requisito 1 - Crie a função verifyPalindrome
function verifyPalindrome(word) {
  let reverse = word.split('').reverse().join('');

  return word === reverse;

}
// Requisito 2 - Crie a função getHighestIndex
function getHighestIndex(array) {
  let highest = Math.max(...array);

  return array.indexOf(highest);

}
// Requisito 3 - Crie a função getSmallestIndex
function getSmallestIndex(array) {
  let smallest = Math.min(...array);

  return array.indexOf(smallest);

}
// Requisito 4 - Crie a função getLongestWord
function getLongestWord(array) {
  return array.reduce((acc, cur) => {
    return acc.length > cur.length ? acc : cur;
  },);
}
// Requisito 5 - Crie a função countHighestNumberMaxOccurrences
function countHighestNumberMaxOccurrences(array) {
  let highest = array[getHighestIndex(array)];
  return array.reduce((acc, cur ) => {
      if (highest === cur) {
        acc++
      }

    return acc;
  },0);
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
