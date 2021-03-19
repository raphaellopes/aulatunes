export const kebabCase = (string) => string.replace(/\s+/g, '-').toLowerCase();

export const searchFilter = (value) => ({ searchKey }) => searchKey.includes(kebabCase(value));
