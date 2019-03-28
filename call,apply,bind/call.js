Function.prototype.myCall=function (obj){
  console.log(this);
  if(typeof this !== 'function'){
    throw new Error('error');
  }
  obj=obj || window;
  const args=[...arguments].slice(1);//去掉第一个参数
  obj.fn=this;//将执行函数设为对象属性
  const res=obj.fn(...args);
  delete obj.fn;
  return res;
}

//Test
const foo={
  value:1,
}
function bar(name){
  console.log(this.value);//在全局作用域下执行，this指向 window
  console.log(name);
}
bar.myCall(foo);