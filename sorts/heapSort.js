const maxHeapify=(H,i,n)=>{
  let largest=i;//用于标记最大的元素
  if(2*i<=n && H[i]<H[2*i]){
    largest=2*i;
  }
  if(2*i+1<=n && H[largest]<H[2*i+1]){//这里是largest不是i
    largest=2*i+1;
  }
  if(largest!=i){
    let temp=H[i];
    H[i]=H[largest];
    H[largest]=temp;
    maxHeapify(H,largest,n);//交换以后，可能下面的元素不满足父母优势了
  }
}
//自底向上构造堆,传入一个数组和数组的大小
const heapBottomUp=(H,n)=>{
  H.unshift(null);//占位数组的第一个元素
  for(let i=Math.floor(n/2);i>=1;i--){//从最后一个父母节点开始构造
    maxHeapify(H,i,n);//最大堆化
  }
  H.shift();
  return H;
}

const heapSort=(H)=>{
  let len=H.length;
  heapBottomUp(H,len);//构造堆
  for(let i=len-1;i>0;i--){
    //交换最大键和最后一个键
    let temp=H[i];
    H[i]=H[0];
    H[0]=temp;
    //构造堆(除去最后一个元素后的堆化)
    heapBottomUp(H,i);
  }
  return H;
}
console.log(heapSort([9,0,1,6,7,3,4,5,6,3,2]));