const insertSort=(arr)=>{
  let [index,item,n]=[0,0,arr.length];
  for(let i=1;i<n;i++){
    index=i-1;
    item=arr[i];
    while(index>=0 && arr[index]>item){
      arr[index+1]=arr[index];
      index--;
    }
    arr[index+1]=item;
  }
  return arr;
}
console.log(insertSort([3,1,2,5,4,7,1,3,5]));