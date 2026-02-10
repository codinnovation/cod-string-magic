"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate = truncate;
exports.capitalize = capitalize;
exports.capitalizeAll = capitalizeAll;
exports.reverseString = reverseString;
exports.toCamelCase = toCamelCase;
exports.toSnakeCase = toSnakeCase;
exports.toKebabCase = toKebabCase;
exports.removeWhitespace = removeWhitespace;
exports.countWords = countWords;
exports.isPalindrome = isPalindrome;
exports.toTitleCase = toTitleCase;
exports.slugify = slugify;
exports.randomString = randomString;
exports.maskString = maskString;
exports.countOccurrences = countOccurrences;
exports.isEmpty = isEmpty;
function truncate(str, maxLength, ellipsis = '...') {
    if (str.length <= maxLength)
        return str;
    return str.slice(0, maxLength) + ellipsis;
}
function capitalize(str) {
    if (!str)
        return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function capitalizeAll(str) {
    if (!str)
        return str;
    return str.toUpperCase();
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
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
function slugify(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
function randomString(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function maskString(str, visibleStart = 4, visibleEnd = 4, maskChar = '*') {
    if (!str || str.length <= visibleStart + visibleEnd)
        return str;
    const start = str.slice(0, visibleStart);
    const end = str.slice(-visibleEnd);
    const mask = maskChar.repeat(str.length - visibleStart - visibleEnd);
    return start + mask + end;
}
function countOccurrences(str, substring) {
    if (!substring)
        return 0;
    return str.split(substring).length - 1;
}
function isEmpty(str) {
    return !str || str.trim().length === 0;
}
