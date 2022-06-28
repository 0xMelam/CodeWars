function fakeBin(x){
    let arrayNumbers = Array.from(x);
    let newArray = [];
    
    arrayNumbers.forEach( (element) => {
      if(element < 5){
        newArray.push(0)
      }else if (element >= 5){
        newArray.push(1)
      }
    })
    
    let newString = newArray.toString();
    let stringWithoutCommas = newString.replace(/,/g,'');
    
    return stringWithoutCommas;
  }