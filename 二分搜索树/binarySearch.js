//递归版
function recursionBS(arr,l,r,k){//arr是排好序的数组
  if(r-l<0){
    return -1;//没有元素
  }
  let mid=Math.floor((l+r)/2);
  if(k===arr[mid]) return mid;
  else if(k<arr[mid])  return BS(arr,l,mid-1,k);
  else  return BS(arr,mid+1,r,k);
}
console.log(recursionBS([1,2,3,4,5,6],0,5,3));
//迭代版
function iterationBS(arr,l,r,k){
  if(r-l<0){
    return -1;//没有元素
  }
  let mid;
  while(l<=r){
    mid=Math.floor((l+r)/2);
    if(k===arr[mid]) return mid;
    else if(k<arr[mid])  r=mid-1;
    else l=mid+1;
  }
}
console.log(iterationBS([1,2,3,4,5,6],0,5,6));