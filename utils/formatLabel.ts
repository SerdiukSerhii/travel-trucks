export const formatLabel = (value: string) => {
  return value
    .toLowerCase()
    .replaceAll('_', ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
};
