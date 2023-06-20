function duplicates(arrOfNumbers) {
  
  let result = [];
  let helpArr = [];
  
  for(let i=0;i<arrOfNumbers.length;i++){
    if(helpArr.includes(arrOfNumbers[i])){
      if(!result.includes(arrOfNumbers[i])){
        result.push(arrOfNumbers[i]);
      }
    } else {
      helpArr.push(arrOfNumbers[i]);
    }
  }
  return result;

}

module.exports = duplicates;
