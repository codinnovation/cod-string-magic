// Capitalizes the first letter of a string
export function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Converts a string to camelCase
  export function toCamelCase(str: string): string {
	return str
	  .split(" ")
	  .map((word, index) =>
		index === 0 ? word.toLowerCase() : capitalize(word)
	  )
	  .join("");
  }
  
  // Truncates a string with "..."
  export function truncate(str: string, length: number): string {
	return str.length > length ? str.slice(0, length) + "..." : str;
  }
  