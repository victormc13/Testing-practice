const Calculator = require("./test3");

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add", () => {
    test("should add two positive numbers correctly", () => {
      //Act
      const result = calculator.add(5, 3);

      //Assert
      expect(result).toBe(8);
    });

    test("should add a positive and a negative number correctly", () => {
      //Act
      const result = calculator.add(-5, 3);

      //Assert
      expect(result).toBe(-2);
    });

    test("should add two negative numbers correctly", () => {
      //Act
      const result = calculator.add(-5, -3);

      //Assert
      expect(result).toBe(-8);
    });
  });

  describe("subtract", () => {
    test("should subtract two positive numbers correctly", () => {
      //Act
      const result = calculator.subtract(10, 4);

      //Assert
      expect(result).toBe(6);
    });

    test("should subtract a positive and a negative number correctly", () => {
      //Act
      const result = calculator.subtract(10, -4);

      //Assert
      expect(result).toBe(14);
    });

    test("should add two negative numbers correctly", () => {
      //Act
      const result = calculator.subtract(-10, -4);

      //Assert
      expect(result).toBe(-6);
    });
  });

  describe("divide", () => {
    test("should divide two positive numbers correctly", () => {
      //Act
      const result = calculator.divide(15, 5);

      //Assert
      expect(result).toBe(3);
    });

    test("should throw an error when dividing by zero", () => {
      //Act and Assert
      expect(() => {
        calculator.divide(10, 0);
      }).toThrow('Division by zero is not allowed.');
    });

    test("should divide a positive number by a negative number correctly", () => {
      //Act
      const result = calculator.divide(15, -5);

      //Assert
      expect(result).toBe(-3);
    });
  });

  describe("multiply", () => {
    test("should multiply two positive numbers correctly", () => {
      //Act
      const result = calculator.multiply(2, 6);

      //Assert
      expect(result).toBe(12);
    });

    test("should multiply a positive and a negative number correctly", () => {
      //Act
      const result = calculator.multiply(2, -6);

      //Assert
      expect(result).toBe(-12);
    });

    test("should multiply two negative numbers correctly", () => {
      //Act
      const result = calculator.multiply(-3, -6);

      //Assert
      expect(result).toBe(18);
    });
  });
});
