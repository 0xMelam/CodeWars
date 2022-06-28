const reverseSeq = n => {
    let arr = []
    if(n !=0){
      for (let i = 1; i<=n; i++){
        arr.push(i);
      }
    }
    let arrReversed = arr.reverse();
    return arrReversed;
  };