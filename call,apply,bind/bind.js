Function.prototype.myBind=function(obj){
  if(typeof this !== 'function'){
    throw new Error('error');
  }
  const exeFn=this;
  const args1=[...arguments].slice(1);
  return function F(...arguments){
    if(this instanceof F){//使用了new 操作符
      return new exeFn(...args1,...arguments);
    }
    return exeFn.apply(obj,args1.concat(...arguments));
  }
}

//Test
const foo={
  value:1,
}

function Bar(name,age){
  console.log(this.value);
  console.log(name);
  console.log(age)
}
const myBar=Bar.myBind(foo,'winnie');//对绑定函数的使用new 操作符时，传入的this忽略，但其他参数仍可用
const bar1=new myBar(18);
const bar2=Bar.myBind(foo,'lm',18)();