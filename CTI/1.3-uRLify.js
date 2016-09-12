const uRLify = (string, char) => {
  var result = [];
  for(var i = 0; i < string.length; i++) {
    if(string[i] === ' ' && !(string[i + 1] === ' ' || string[i + 1] === undefined)) {
      result.push('%20');
    } else if (string[i] !== ' '){
      result.push(string[i]);
    };
  };
  return result.join('');
};
