const flatAndSort=(arr)=>{
  let flatSet=new Set(arr.flat(Infinity));
  let sortArr=[...flatSet].sort((a,b)=>{
    return a-b;
  })
  return sortArr;
}

console.log(flatAndSort([ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]));