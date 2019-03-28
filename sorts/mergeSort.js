const merge=(arr,l,r,m)=>{
  let [i,j,k,helpArr]=[l,m+1,l,[]];
  while( i<=m && j<=r){
    if(arr[i]<=arr[j]){
      helpArr[k++]=arr[i++];
    }
    else{
      helpArr[k++]=arr[j++];
    }
  }
  while(i<=m){
    helpArr[k++]=arr[i++];
  }
  while(j<=r){
    helpArr[k++]=arr[j++];
  }
  for(let i=l;i<=r;i++){
    arr[i]=helpArr[i];
  }
  return arr;
}
const mergeSort=(arr,l,r)=>{
  let mid;
  if(l<r){
    mid=Math.floor((l+r)/2);
    mergeSort(arr,l,mid);
    mergeSort(arr,mid+1,r);
    merge(arr,l,r,mid);
  }
  return arr;
}
console.log(mergeSort([3,1,2,5,4,7,1,3,5],0,8));


