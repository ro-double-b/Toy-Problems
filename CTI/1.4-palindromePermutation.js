// was confused by problem.  Did not know that you are not taking spaces into account based on example output
const palindromePermutation = (string) => {
  let resultObj = {};
  let oneOdd = false;
  for(var i = 0; i < string.length; i++) {
    if(resultObj[string[i]] === undefined && string[i] !== ' ') {
      resultObj[string[i]] = 1;
    } else if (string[i] !== ' ') {
      resultObj[string[i]] = resultObj[string[i]] + 1;
    };
  };
  console.log(resultObj);
  for(var key in resultObj) {
    if(resultObj[key] % 2 !== 0 && oneOdd === false) {
      oneOdd = true;
    } else if (resultObj[key] % 2 !== 0 && oneOdd === true) {
      return false;
    };
  };
  return true;
};
