export const kebabCase = (string) => string.replace(/\s+/g, '-').toLowerCase();

export const searchFilter = (value) => ({ searchKey }) => searchKey.includes(kebabCase(value));

export const chunk = (array, chunkSize) => {
  const chunkArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunkArray.push(array.slice(i, i + chunkSize));
  }
  return chunkArray;
};
