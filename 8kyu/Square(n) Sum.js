function squareSum(numbers){
  let result = 0;
  numbers.forEach( (value) =>{
    result += Number(value)**2;
  })
  return result;
}