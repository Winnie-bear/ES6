function Person(name){
  this.name=name;
}
Person.prototype.getName=function(){
  return this.name;
}

function New(){
  //创建一个新对象
  const obj={};
  const constructor=[...arguments].shift();//构造函数
  //链接到原型
  obj.__proto__=constructor.prototype;
  //绑定this
  constructor.apply(obj,[...arguments].slice(1));
  //返回新对象
  return obj;
}

let p=new Person('winnie');
let p1=New(Person,'winnie');
console.log(p.getName()===p1.getName());
console.log(p);