const reverseString = require('./test2.js');

describe('reverseString', () => {
  test('should reverse a string correctly', () => {
    // Arrange
    const string = 'hello';
    // Act
    const result = reverseString(string);
    // Assert
    expect(result).toBe('olleh');
  })
});