export function formatLocation(location: string) {
  return location.toUpperCase();
}

export function truncate(
  text: string,
  length = 150
) {
  if (text.length <= length) return text;

  return text.slice(0, length) + "...";
}