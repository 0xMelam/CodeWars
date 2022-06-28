function firstNonConsecutive (arr) {
    let nonConsecutiveElement;
    let sum = 0;
    
    for (let i= 1 ; i< arr.length; i++){
      if (arr[i]-arr[i-1] > 1){
        nonConsecutiveElement = arr[i];
        break;
        }
      else if (arr[i]-arr[i-1] == 1){
        sum +=1;
      }
    }
    if (sum == arr.length-1){
      nonConsecutiveElement = null;
    }
    return nonConsecutiveElement;
  }