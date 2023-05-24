function reverseString(string) {
  // Split the string into an array of characters, reverse the array, and join the characters back into a string
  const reversedString = string.split('').reverse().join('');

  return reversedString;
}

module.exports = reverseString;