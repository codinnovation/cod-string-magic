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



# toTitleCase(str)
Capitalizes the first letter of each word in a string (e.g., hello world -> Hello World).

Parameters:
str (string): The input string.

Example: console.log(toTitleCase('hello world')); // "Hello World"



# slugify(str)
Converts a string into a URL-friendly slug (e.g., Hello World! -> hello-world).

Parameters:
str (string): The input string.

Example: console.log(slugify('Hello World!')); // "hello-world"



# randomString(length)
Generates a random alphanumeric string of the specified length.

Parameters:
length (number): The length of the string (default: 10).

Example: console.log(randomString(10)); // "aBcD123456"



# maskString(str, visibleStart, visibleEnd, maskChar)
Masks part of a string, useful for sensitive data (e.g., "1234567890" -> "1234**7890").

Parameters:
- str (string): The input string.
- visibleStart (number): Number of characters visible at the start (default: 4).
- visibleEnd (number): Number of characters visible at the end (default: 4).
- maskChar (string): Character to use for masking (default: '*').

Example: console.log(maskString('1234567890')); // "1234**7890"



# countOccurrences(str, substring)
Counts how many times a substring appears in the string.

Parameters:
- str (string): The input string.
- substring (string): The substring to count.

Example: console.log(countOccurrences('hello world hello', 'hello')); // 2



# isEmpty(str)
Checks if a string is null, undefined, empty, or contains only whitespace.

Parameters:
str (string): The input string.

Example: console.log(isEmpty('  ')); // true