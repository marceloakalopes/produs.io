/**
 * Capitalize the first letter of a string
 * @param {string} string The string to be capitalized
 * @returns {string} The string with the first letter capitalized
 */
export default function capitalizeFirstLetter(string: string) : string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}