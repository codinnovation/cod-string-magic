export function truncate(str: string, maxLength: number, ellipsis: string = '...'): string {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + ellipsis;
}

export function capitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeAll(str: string): string {
    if (!str) return str;
    return str.toUpperCase();
}

export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// New functions
export function toCamelCase(str: string): string {
    return str
        .replace(/\s(.)/g, (match) => match.toUpperCase())
        .replace(/\s+/g, '')
        .replace(/^(.)/, (match) => match.toLowerCase());
}

export function toSnakeCase(str: string): string {
    return str
        .replace(/\s+/g, '_')
        .toLowerCase();
}

export function toKebabCase(str: string): string {
    return str
        .replace(/\s+/g, '-')
        .toLowerCase();
}

export function removeWhitespace(str: string): string {
    return str.replace(/\s+/g, '');
}

export function countWords(str: string): number {
    return str.split(/\s+/).filter(Boolean).length;
}

export function isPalindrome(str: string): boolean {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === reverseString(cleanedStr);
}

export function toTitleCase(str: string): string {
    return str.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}

export function slugify(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

export function randomString(length: number = 10): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function maskString(str: string, visibleStart: number = 4, visibleEnd: number = 4, maskChar: string = '*'): string {
    if (!str || str.length <= visibleStart + visibleEnd) return str;
    const start = str.slice(0, visibleStart);
    const end = str.slice(-visibleEnd);
    const mask = maskChar.repeat(str.length - visibleStart - visibleEnd);
    return start + mask + end;
}

export function countOccurrences(str: string, substring: string): number {
    if (!substring) return 0;
    return str.split(substring).length - 1;
}

export function isEmpty(str: string): boolean {
    return !str || str.trim().length === 0;
}
