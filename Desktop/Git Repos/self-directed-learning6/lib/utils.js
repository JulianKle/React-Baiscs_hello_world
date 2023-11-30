export function formatDate(date) {
  // The function should return a formatted string based on the 'date' argument
  return new Date(date).toLocaleDateString("de-DE");
}
