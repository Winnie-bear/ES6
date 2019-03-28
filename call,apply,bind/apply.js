Function.prototype.myApply=function (obj){
  if(typeof this !== 'function'){
    throw new Error('Error');
  }
  obj=obj || window;
  obj.fn=this;
  let res;
  if(arguments[1]){
    res=obj.fn(...arguments[1]);
  }else{
    res=obj.fn();
  }
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
bar.myApply(foo,['winnie']);