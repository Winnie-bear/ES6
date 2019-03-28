function Person(name){
  let _age;

  function getAge(){
    return _age;
  }

  function setAge(newAge){
    _age=newAge;
  }

  return {
    name:name,
    getAge:getAge,
    setAge:setAge
  }
}

let p=new Person('winnie');
p.setAge(21);
console.log(p.getAge());
