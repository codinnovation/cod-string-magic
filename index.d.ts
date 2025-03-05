declare module "cod-string-magic" {
	export function truncate(str: string, maxLength: number, ellipsis?: string): string;
	export function capitalize(str: string): string;
	export function capitalizeAll(str: string): string;
	export function reverseString(str: string): string;
	export function toCamelCase(str: string): string;
	export function toSnakeCase(str: string): string;
	export function toKebabCase(str: string): string;
	export function removeWhitespace(str: string): string;
	export function countWords(str: string): number;
	export function isPalindrome(str: string): boolean;
  }
  