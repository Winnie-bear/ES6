const triangle=(n)=>{
  let arr=[];
  for(let i=0;i<n;i++){//i控制行数
    arr[i]=new Array(i+1);//对每行创建一个长度为i+1的数组，用于存储每行的数据
    arr[i][0]=1;
    arr[i][i]=1;
    for(let j=1;j<i;j++){
      arr[i][j]=arr[i-1][j-1]+arr[i-1][j];
    }
  }
  return arr;
}

const print=(arr)=>{
  let n=arr.length,
      nbsp='';
  for(let i=0;i<n;i++){
    for(let j=0;j<n-i-1;j++){
      nbsp+='';
    }
    console.log(nbsp+arr[i]);
  }
}
print(triangle(8));