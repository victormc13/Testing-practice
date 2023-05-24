const reverseString = require('./test2');

describe('reverseString', () => {
  test('should reverse string correctly', () => {
    //Arrange
    const input = 'Hello, world!';

    //Act
    const result = reverseString(input);

    //Assert
    expect(result).toBe('!dlrow ,olleH');
  });
});