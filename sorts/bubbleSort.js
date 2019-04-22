const bubbleSort=(arr)=>{
  let [temp,n]=[0,arr.length];
  for(let i=0;i<n-1;i++){
    for(let j=0;j<n-1-i;j++){
      if(arr[j]>arr[j+1]){
        temp=arr[j+1];
        arr[j+1]=arr[j];
        arr[j]=temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([2,5,6,1,3,0,4]))