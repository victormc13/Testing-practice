function capitalize(string) {
  const firstChar = string.charAt(0).toUpperCase();

  const restOfChars = string.slice(1);

  return firstChar + restOfChars;
}

module.exports = capitalize;