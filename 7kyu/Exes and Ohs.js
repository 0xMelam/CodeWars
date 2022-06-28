function XO(str) {
    let arr = str.split("");
    let xCount = 0;
    let oCount = 0;

    arr.forEach((character) => {
      if(character.toLowerCase() == 'x'){
        xCount +=1;
      }else if (character.toLowerCase() == 'o'){
        oCount +=1;
      }
    })

    return xCount == oCount ? true : false;
}