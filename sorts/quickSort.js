const swap=(arr,i,j)=>{
  let temp=arr[i];
  arr[i]=arr[j];
  arr[j]=temp;
  return arr;
}
const partition=(arr,l,r)=>{
  let pivot=arr[l],//选取基准元素
      left=l,
      right=r;
  while(left!=right){
    while(left<right&&arr[right]>pivot){
      right--;
    }
    while(left<right&&arr[left]<=pivot){
      left++;
    }
    if(left<right){
      swap(arr,left,right);
    }
  }
  swap(arr,l,left);
  return left;
}
const quickSort=(arr,l,r)=>{
  if(r>=arr.length){
    throw new Error('Incorrect input!');
  }
  if(l<r){
    s=partition(arr,l,r);
    quickSort(arr,l,s-1);
    quickSort(arr,s+1,r);
  }
  return arr;
}
console.log(quickSort([4,3,7,9,0,2,3,1,5],0,8));


