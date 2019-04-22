const LPS=(str)=>{
  let reverseStr=str.split("").reverse().join(""),
      strLen=str.length,
      palindromeStr="";
  for(let i=strLen;i>0;i--){
    for(let j=0;j<=strLen-i;j++){
      palindromeStr=str.substr(j,i);
      if(reverseStr.indexOf(palindromeStr)>=0){
        return palindromeStr;
      }
    }
  }
  return "";
}
console.log(LPS("cbbd"));