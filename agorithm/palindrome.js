function palindrome(str){
  str = str.replace("/\W/g","").toLowerCase();
  return str === str.split("").reverse().join("");
}

console.log(palindrome("level"));
console.log(palindrome("a level a"));
console.log(palindrome("a level "));
