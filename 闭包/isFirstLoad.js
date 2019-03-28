function isFirstLoad(){//封装变量，收敛权限
  let _list=[];//
  return function(variable){//定义_list的操作，外界只能使用这个函数，改变传参，但是无法操作_list
    if(_list.indexOf(variable)>-1){
      return false;
    }else{
      _list.push(variable);
      return true;
    }
  }
}

let firstLoad=isFirstLoad();
console.log(firstLoad(10));
console.log(firstLoad(10));