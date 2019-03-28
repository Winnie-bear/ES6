const iterationFib=(n)=>{
  let [fib1,fib2,fib3]=[0,1,0];
  if(n===0){
    return fib1;
  }
  else if(n===1){
    return fib2;
  }
  while(n>1){
    fib3=fib1+fib2;
    fib1=fib2;
    fib2=fib3;
    n--;
  }
  return fib3;
}
console.log(iterationFib(9));