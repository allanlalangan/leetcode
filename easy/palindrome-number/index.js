/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const split = x.toString().split('');
  const reverseSplit = [];

  for (let i = split.length - 1; i >= 0; i--) {
    reverseSplit.push(split[i]);
  }

  const string = split.join('');
  const reverseString = reverseSplit.join('');
  return string === reverseString;
};

isPalindrome();
// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));
