const stringLength = (string) => {
  const length = string.length;

  if (length < 1) {
    throw new Error('String must contain at least 1 character.');
  } else if (length > 10) {
    throw new Error('String cannot exceed 10 characters.');
  }

  return length;
};

module.exports = stringLength;