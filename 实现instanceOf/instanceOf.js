function myInstanceOf(left,right){
  let proto=left.__proto__;
  let prototype=right.prototype;
  while(true){
    if(proto===null)  return false;
    if(proto===prototype)  return true;
    proto=proto.__proto__;
  }
}

const arr=[];
console.log(myInstanceOf(arr,Object));