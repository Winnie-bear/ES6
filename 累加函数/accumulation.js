const plus_one=(...arguments)=>{//对arguments使用扩展运算符不能少
  let sum=[...arguments].reduce((sum,cur)=>{ return sum+=cur},0);

  return function addRest(...arguments){
    if(arguments.length===0){
      return sum;
    }else{
      sum=[...arguments].reduce((sum,cur)=>{return sum+=cur},sum);
      return addRest;
    }
  }
}

const plus_two=(...arguments)=>{//对arguments使用扩展运算符不能少
  let cache=[...arguments],sum;
  return function addRest(...arguments){
    cache=cache.concat(...arguments);
    sum=cache.reduce((sum,cur)=>{ return sum+=cur},0);
    if(arguments.length===0){
      return sum;
    }else{
      return addRest;
    }
  }
}
console.log(plus_one(1,2)(3,4)(5)());
console.log(plus_two(1,2)(3,4)(5)());
