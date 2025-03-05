const { truncate, capitalizeAll, capitalize, reverseString, toCamelCase, toKebabCase, removeWhitespace, countWords, isPalindrome } = require('./index');

console.log(truncate("Hello world!", 5));
console.log(capitalizeAll("Hello world!"))
console.log(capitalize("Asumadu"))
console.log(reverseString("Asumadu"))
console.log(toCamelCase("Kwabena asumadu sakyi"))
console.log(toKebabCase("Asumadu sakyi"))
console.log(removeWhitespace("how are you doing"))
console.log(countWords("how many"))
console.log(isPalindrome("A man, a plan, a canal, Panama!"))