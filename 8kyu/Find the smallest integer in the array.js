class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallestInt = args[0];
    args.forEach( (value) =>{
      if (smallestInt > Number(value)){
        smallestInt = Number(value);
      }
    })
    return Number(smallestInt);
  }
}