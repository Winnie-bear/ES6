//求集合(a,b)和(c,d)的并集
let union=(a,b,c,d)=>{
  let [set1,set2]=[new Set(),new Set()];
  for(let i=Math.min(a,b)+1;i<Math.max(a,b);i++){
    set1.add(i);
  }
  for(let j=Math.min(c,d)+1;j<Math.max(c,d);j++){
    set2.add(j);
  }
  return new Set([...set1,...set2]);
}
console.log(union(1,9,6,9));
