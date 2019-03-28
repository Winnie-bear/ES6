const recursionFib=(n)=>{
  if(n===0){
    return 0;
  }
  else if(n===1){
    return 1;
  }
  return recursionFib(n-1)+recursionFib(n-2);
}
console.log(recursionFib(8));