//判断JS变量类型，值类型、引用类型、null单独判断
const type=(target)=>{
  let type=typeof target;//typeof可以判断除了null以外的值类型
  const template={
    "[object Array]":"array",
    "[object Object]":"object",
    "[object Number]":"Number-object",
    "[object Boolean]":"Boolean-object",
    "[object String]":"String-object"
  }
  if(target===null){
    return "null";
  }
  else if(type == 'object'){
    let res=Object.prototype.toString.call(target);
    return template[res];
  }
  else{
    return type;
  }
}
console.log(type(null));
console.log(type(true));
console.log(type(new String('winnie')));