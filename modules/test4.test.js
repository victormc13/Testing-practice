const capitalize = require('./test4');

describe('capitalize', () => {
  test('should capitalize the first character of a string', () => {
    // Arrange
    const string = 'hello world';

    // Act
    const result = capitalize(string);

    // Assert
    expect(result).toBe('Hello world');
  });
});