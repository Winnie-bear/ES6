class Even{
  static [Symbol.hasInstance](num){
    return Number(num)%2===0;
  }
}

// const Even={
//   [Symbol.hasInstance](num){
//     return Number(num)%2===0;
//   }
// }
console.log(2 instanceof Even);