function descendingOrder(n){
    let arr = String(n).split("").sort().reverse().join("");
    return Number(arr);
  }