const stringLength = require('./test1.js');

describe('stringLength', () => {
  test('should return the length of a string correctly', () => {
    // Arrange
    const string = 'Hello!';

    // Act
    const result = stringLength(string);

    // Assert
    expect(result).toBe(6);
  });

  test('should throw an error if the string is empty', () => {
    // Arrange
    const emptyString = '';
    // Act and Assert
    expect(()=> {
      stringLength(emptyString);
    }).toThrow('String must contain at least 1 character.');
  });

  test('should throw an error if the string exceeds 10 characters', () => {
    // Arrange
    const longString = 'This is a long string.';
    // Act and Assert
    expect(()=> {
      stringLength(longString);
    }).toThrow('String cannot exceed 10 characters.');
  });
});
