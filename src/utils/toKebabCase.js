const toKebabCase = (string) => {
  const words = string.toLowerCase().split(' ');
  return words.join('-');
};

export default toKebabCase;
