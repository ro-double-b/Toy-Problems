const isUnique = (string) => {
  let result = true;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (i !== j && string[i] === string[j]) {
        result = false;
      }
    }
  }
  return result;
};
