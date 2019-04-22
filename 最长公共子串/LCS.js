const LCS=(str1,str2)=>{
  let [arr,maxLen,subStr,index]=[[],0,"",0]; 

  for(let i=0;i<=str1.length;i++){
    arr[i]=[];
    for(let j=0;j<=str2.length;j++){
        arr[i][j]=0;
    }
  }

  for(let i=1;i<=str1.length;i++){
    for(let j=1;j<=str2.length;j++){
        if(str1[i-1]===str2[j-1]){
          arr[i][j]=arr[i-1][j-1]+1;
        }else{
          arr[i][j]=0;
        }
      if(arr[i][j]>maxLen){
        maxLen=arr[i][j];
        index=i;
      }
    }
  }
  console.log(index,maxLen);
  if(maxLen===0){
    return "";
  }else{
    for(var k = index - maxLen; k < index; k++){
      subStr += str1[k];
    }
    return subStr;
  }
}

const LCS1=(str1,str2)=>{
    let [subStr,L1,L2]=["",str1.length,str2.length];
    if (L1>L2){//取两个字符串中最短的
      let temp=str1;
      str1=str2;
      str2=temp;
    }
    let [newL1,newL2]=[str1.length,str2.length];
    for (let j=newL1; j > 0; j--) {//在最短的子串中找最长公共子串
        for (let i= 0; i <= newL1-j ; i++){
            subStr= str1.substr(i,j);
            if (str2.indexOf(subStr) >= 0) {//在较长子串中查询
               return subStr;
            }
        }
    }
   return "";
}
var str1="abcdefg";
var str2="xyzabcd";
console.log(LCS(str1, str2));     // abcd
console.log(LCS1("aaaX3333--", "baa333ccX3333333x"));