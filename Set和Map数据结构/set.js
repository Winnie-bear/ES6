/* 
  1.Set的性质
*/
//Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”
let set1 = new Set();
let [a,b]=[NaN,NaN];
set1.add(a);
set1.add(b);
console.log(set1);//Set{NaN},在 Set 内部，两个NaN是相等。而精确相等运算符认为NaN不等于自身。

//两个对象总是不相等的
let set2=new Set();
set2.add({});
set2.add({});
console.log(set2.size);//2

/*
  2.Set 实例的属性和方法
  操作方法：add(value)：添加某个值，返回 Set 结构本身。
          delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
          has(value)：返回一个布尔值，表示该值是否为Set的成员。
          clear()：清除所有成员，没有返回值
  遍历方法：
          keys()：返回键名的遍历器
          values()：返回键值的遍历器
          entries()：返回键值对的遍历器
          forEach()：使用回调函数遍历每个成员
*/
console.log(set2.has({}));//false,每个对象都是不相等的
console.log(set1.has(NaN));//true
console.log(set2.delete({}));//false
console.log(set2.add({}));//Set { {}, {}, {} }

//数组去重
function dedupe(array){
  return Array.from(new Set(array));
}
console.log(dedupe([1,1,1,3,4,5]));//Array.from方法可以将 Set 结构转为数组

//遍历，Set的遍历顺序就是插入顺序。用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。
let set3=new Set(['red','orange','yellow']);
for(let item of set3.entries()){
  console.log(item);
}
console.log(set3.entries());//返回的都是遍历器对象

//遍历的应用
let set4=new Set([1,2,3]);
let set5=new Set([2,3,4]);

//并集
let union=new Set([...set4,...set5]);
console.log(union);

//交集
let intersect=new Set([...set4].filter(x=>set5.has(x)));
console.log(intersect);

//差集
let difference=new Set([...set4].filter(x => !set5.has(x)));
console.log(difference);

set4.forEach( x => x*2);
console.log(set4);

let proto = new Proxy({}, {
  get(target, propertyKey, receiver) {
    console.log('GET ' + propertyKey);
    return target[propertyKey];
  }
});

let obj = Object.create(proto);
obj.foo