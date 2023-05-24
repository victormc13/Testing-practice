class Calculator {
  add(a, b) {
    return a + b;
  }

  substrac(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by 0 is not allowed');
    }
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

module.export = Calculator;