{
  let person={
    time:'1998-08-13',
    name:'winnie',
    _h:163
  }

  let monitor=new Proxy(person,{
    //拦截对象属性的读取,target指目标对象person
    get(target,key){
      if(key==='time'){
        return target[key].replace('1998','2019');
      }else{
        return target[key];
      }
    },
    //拦截对象设置属性
    set(target,key,value){
      if(key==='name'){
        return target[key]=value;
      }else{
        return target[key];
      }
    },
    // 拦截key in object操作
    has(target,key){
      if(key==='name'){
        return target[key];
      }else{
        return false;
      }
    },
    //拦截 delete 
    deleteProperty(target,key){
      if(key.indexOf('_')>-1){
        delete target[key];
        return true;
      }else{
        return target[key];
      }
    },
    // 拦截 Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target){
      return Object.keys(target).filter(item=>item!='time');
    }
  });

  //检验 get
  console.log('get',monitor.time);
  //检验 set
  monitor.time='1998';
  monitor.name='winniebear'
  console.log('set',monitor.time,monitor.name);
  //检验 has
  console.log('has','name' in monitor);
  //检验 delete
  delete monitor.name;
  console.log('delete',monitor.name);
  delete monitor._h;
  console.log('delete',monitor._h);
  //检验 ownKeys
  console.log('ownKeys',Object.keys(monitor));
}

{
  function validate(target,validator){
    return new Proxy(target,{
      _validator:validator,
      set(target,key,value,proxy){//返回一个布尔值
        if(target.hasOwnProperty(key)){
          let vali=this._validator[key];//获取当前key的验证函数
          //判断输入的值是否符合验证条件
          if(vali(value)){
            return Reflect.set(target,key,value,proxy);
          }else{
            throw Error(`不能设置 ${value} 到 ${key}`);
          }
        }else{
          throw Error(`${key} 不存在`);
        }
      }
    })
  }

  //个人信息验证集
  const personValidators={
    name(val){
      return typeof val==='string';
    },
    age(val){
      return typeof val==='number' && val>18;
    },
    mobile(value){
      //todo
    }
  }

  class Person{
    constructor(name,age){
      this.name=name;
      this.age=age;
      this.moblie='1234567';
      return validate(this,personValidators);
    }
  }
  
  const person=new Person('winnie',20);
  //合法修改
  person.name='winniebear';
  console.info(person);
  //不合法修改
  // person.name=30
  //不存在的信息
  // person.height=163
}