class Calculator {
  // Sum
  add(a, b) {
    return a + b;
  }

  // Subtraction
  subtract(a, b) {
    return a - b;
  }

  // Division
  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  }

  // Multiplication
  multiply(a, b) {
    return a * b;
  }
}

module.exports = Calculator;
