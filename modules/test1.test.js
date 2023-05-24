const stringLength = require('./test1');

describe('stringLength', () => {
  test('should return the length of a string correctly', () => {
    // Arrange
    const input = 'Hello!';

    // Act
    const result = stringLength(input);

    // Assert
    expect(result).toBe(16);
  });

  test('should throw an error if the string is empty', () => {
    // Arrange
    const input = '';

    // Act and Assert
    expect(() => {
      stringLength(input);
    }).toThrow('String must contain at least 1 character.');
  });

  test('should throw an error if the string exceeds 10 characters', () => {
    // Arrange
    const input = 'This is a long string.';

    // Act and Assert
    expect(() => {
      stringLength(input);
    }).toThrow('String cannot exceed 10 characters.');
  });
});
