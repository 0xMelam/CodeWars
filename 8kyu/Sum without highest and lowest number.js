function sumArray(array) {
    if (array == null || array.length <=1){
      return 0;
    }
    
    let sum =0;
    let lowestElement = Math.min(...array);
    let highestElement = Math.max(...array);
    
    array.forEach( (element) => {
        sum += Number(element);
    })
    return sum - lowestElement - highestElement;
  }