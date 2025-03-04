export function truncate(str: string, length: number): string {
	if (str.length <= length) return str;
	return str.substring(0, length) + "...";
  }
  
  export function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  
  export function reverseString(str: string): string {
	return str.split("").reverse().join("");
  }
  