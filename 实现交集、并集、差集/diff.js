//求集合(a,b)和(c,d)的差集
let diff=(a,b,c,d) => {
  let [set1,set2]=[new Set(),new Set()];
  for(let i=Math.min(a,b)+1;i<Math.max(a,b);i++){
    set1.add(i);
  }
  for(let j=Math.min(c,d)+1;j<Math.max(c,d);j++){
    set2.add(j);
  }
  return new Set([...set1].filter((item)=>{
    return !set2.has(item);
  }));
}
console.log(diff(0,4,1,5));