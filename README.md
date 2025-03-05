# String Utils
A powerful and lightweight npm library for string manipulation. This library provides utility functions for truncating, capitalizing, reversing strings, converting cases, removing whitespace, counting words, checking palindromes, and more.

# truncate(str, maxLength, ellipsis = '...')
Truncates a string to a specified length and appends an ellipsis (... by default) if the string is longer than the maximum length.

Parameters:
-str (string): The input string.
-maxLength (number): The maximum length of the truncated string.
-ellipsis (string, optional): The ellipsis to append (default: '...').

Example: console.log(truncate('Hello world!', 5)); // "Hello..."



# capitalize(str)
Capitalizes the first letter of a string.

Parameters:
str (string): The input string.

Example: console.log(capitalize('hello world!')); // "Hello world!"



# capitalizeAll(str)
Capitalizes the first letter of every word in a string.

Parameters:
str (string): The input string.
Example: console.log(capitalizeAll('hello world!')); // "Hello World!"



# reverseString(str)
Reverses a string.

Parameters:
str (string): The input string.

Example: console.log(reverseString('hello')); // "olleh"



# toCamelCase(str)
Converts a string to camel case (e.g., hello world → helloWorld).

Parameters:
str (string): The input string.

Example: console.log(toCamelCase('hello world')); // "helloWorld"



# toSnakeCase(str)
Converts a string to snake case (e.g., Hello World → hello_world).

Parameters:
str (string): The input string.

Example: console.log(toSnakeCase('Hello World')); // "hello_world"


# toKebabCase(str)
Converts a string to kebab case (e.g., Hello World → hello-world).

Parameters:
str (string): The input string.

Example: console.log(toKebabCase('Hello World')); // "hello-world"


# removeWhitespace(str)
Removes all whitespace from a string.

Parameters:
str (string): The input string.

Example: console.log(removeWhitespace(' hello world ')); // "helloworld"



9. countWords(str)
Counts the number of words in a string.

Parameters:
str (string): The input string.

Example: console.log(countWords('Hello world!')); // 2



# isPalindrome(str)
Checks if a string is a palindrome (reads the same backward as forward).

Parameters:
str (string): The input string.

Example:
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('hello')); // false