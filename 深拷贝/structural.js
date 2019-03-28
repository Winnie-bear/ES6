function structuralClone(obj){
  return new Promise((resolve,rejcct) =>{
     let { port1,port2 }=new MessageChannel();//解构赋值
     port2.onmessage=(ev)=>{ resolve(ev.data)};
     port1.postMessage(obj);
  })
}
var obj={
  a:1,
  b:{
    c:2
  },
  d:undefined
}
obj.b.e=obj.b;
const test=async ()=>{
  const clone=await structuralClone(obj);//await等待resolve中的参数值
  console.log(clone);
}
test();