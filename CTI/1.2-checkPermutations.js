const checkPermutation = (stringOne, stringTwo) => {
  let resultObj = {};
  if(stringOne.length !== stringTwo.length) {
    return false;
  } else {
    for(var i = 0; i < stringOne.length; i++) {
      if(resultObj[stringOne[i]] === undefined) {
        resultObj[stringOne[i]] = 1;
      } else {
        resultObj[stringOne[i]] = resultObj[stringOne[i]] + 1;
      };
    };
    for(var i = 0; i < stringTwo.length; i++) {
      if(resultObj[stringTwo[i]] === undefined) {
        resultObj[stringTwo[i]] = -1;
      } else {
        resultObj[stringTwo[i]] = resultObj[stringTwo[i]] - 1;
      };
    };
    for(var key in resultObj) {
      if(resultObj[key] !== 0) {
        return false;
      };
    };
    return true;
  };
};