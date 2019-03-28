function deepClone(obj){
  function isObject(o){
      return (typeof o ==='object'|| typeof o ==='function')&& o!==null;
  }
  if(!isObject(obj)){
      throw new Error('非对象')
  }
  
  let isArray=Array.isArray(obj);
  let newObj=isArray?[...obj]:{...obj};
   //遍历属性，若属性值是引用类型，则需要深拷贝
   Reflect.ownKeys(newObj).forEach(key=>{
     newObj[key]=isObject(obj[key])?deepClone(obj[key]):obj[key];  
   })
   return newObj;
};

let obj={
   a:[1,2,3],
   b:{
       c:4,
       d:5
   }
}
let newObj=deepClone(obj);
obj.b.c=2;
console.log(newObj.b.c);//4