const curry=(fn,...arguments)=>{
  let args=[...arguments];
  return function innerCurry(){
    if(arguments.length===0){
      return fn(...args);
    }else{
      args.push(...arguments);
      return innerCurry;
    }
  }
}
function add(){
  return [...arguments].reduce(function(a,b){return a+b},0);
}
console.log(curry(add,1,2,3)(1)(2)(3,4,5,5)(5,6,6,7,8,8)(1)(1)(1)());//69