function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}
function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');