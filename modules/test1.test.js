const stringLength = require('./test1');

describe('stringLength', () => {
  test('should return the length of a string correctly', () => {
    // Arrange
    const input = 'Hello!';

    // Act
    const result = stringLength(input);

    // Assert
    expect(result).toBe(6);
  });

  
});
