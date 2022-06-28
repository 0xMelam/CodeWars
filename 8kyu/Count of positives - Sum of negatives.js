function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1){
        return [];
      }
    let countPositives = 0;
    let sumNegatives = 0;
    input.forEach( (x) => {
      if(x > 0){
        countPositives +=1;
      }else if(x<0){
        sumNegatives += x;
      }
    })
    return [countPositives, sumNegatives];
  }