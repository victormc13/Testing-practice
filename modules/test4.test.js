const capitalize = require('./test4');

describe('capitalize', () => {
  test('should capitalize the first character of a string',() => {
    //Arrange
    const input = 'hello, world!'

    //Act
    const result = capitalize(input);

    //Assert
    expect(result(input)).toBe('Hello, world!');
  })
})