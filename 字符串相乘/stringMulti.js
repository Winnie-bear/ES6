const strMul=(str1,str2)=>{
  let res;
  if((+str1)===0 || (+str2)===0){
    return res=0; 
  }
  else if ((+str1)===NaN || (+str2)===NaN){
    return res=NaN;
  }
  else{
    return res=(+str1) * (+str2);
  }
}

console.log(strMul('0','1'));
console.log(strMul('aa','bbb'));
console.log(strMul('3','20'));