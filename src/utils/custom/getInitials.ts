/**
 * Get initials from a name
 * @param {string} name - Name to get initials from
 * @returns {string} - Initials from the name
 * @example
 * getInitials("John Doe") // JD
 */
export const getInitials = (name: string): string => {
  if (!name) return "";
  const names = name.split(" ");
  const initials = names.map((name) => name[0]);
  return initials.join("");
};
