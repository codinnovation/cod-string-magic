function truncate(str, maxLength, ellipsis = '...') {
	if (str.length <= maxLength) return str;
	return str.slice(0, maxLength) + ellipsis;
  }
  
  function capitalize(str) {
	if (!str) return str;
	return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function capitalizeAll(str) {
	if (!str) return str;
	return str.toUpperCase()
  }
  
  function reverseString(str) {
	return str.split('').reverse().join('');
  }
  
  // New functions
  function toCamelCase(str) {
	return str
	  .replace(/\s(.)/g, (match) => match.toUpperCase())
	  .replace(/\s+/g, '')
	  .replace(/^(.)/, (match) => match.toLowerCase());
  }
  
  function toSnakeCase(str) {
	return str
	  .replace(/\s+/g, '_')
	  .toLowerCase();
  }
  
  function toKebabCase(str) {
	return str
	  .replace(/\s+/g, '-')
	  .toLowerCase();
  }
  
  function removeWhitespace(str) {
	return str.replace(/\s+/g, '');
  }
  
  function countWords(str) {
	return str.split(/\s+/).filter(Boolean).length;
  }
  
  function isPalindrome(str) {
	const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	return cleanedStr === reverseString(cleanedStr);
  }
  
  // Export all functions
  module.exports = {
	truncate,
	capitalize,
	capitalizeAll,
	reverseString,
	toCamelCase,
	toSnakeCase,
	toKebabCase,
	removeWhitespace,
	countWords,
	isPalindrome,
  };