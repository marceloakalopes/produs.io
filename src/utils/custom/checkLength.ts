/**
 * Check the length of a string and return a string with a maximum length
 * @param {string} value - The string to be checked
 * @param {number} min - The minimum length of the string
 * @param {number} max - The maximum length of the string
 * @returns {string} - The string with a maximum length
 */
export const checkLength = (value: string, min: number, max: number) : string => {
    if (value.length < min || value.length > max) {
        return value.slice(0, max).concat("...");
    }
    return value;
}