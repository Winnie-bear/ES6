{
  //修饰属性
  let readonly=function(target,name,descriptor){
    descriptor.writable=false;
    return descriptor
  }

  class Test{
    @readonly
    time(){
      return '2019-01-27'
    }
  }

  let test=new Test();
  // test.time=function(){
  //   console.log('reset time');
  // }
  console.log(test.time());
}

{
  //修饰类,而非类实例
  let typename=function(target){
    target.myname='winnie';
  }

  @typename
  class Test{

  }
  console.log('类修饰符',Test.myname);
}

{
  //埋点
  log=(type)=>{
    return function(target,name,descriptor){
      let src_method=descriptor.value;
      descriptor.value=(...arg)=>{
        src_method.apply(target,arg);
        console.log(`log ${type}`);
      }
    }
  }

  class AD{
    @log('show')
    show(){
      console.info('ad is show');
    }
    @log('click')
    click(){
      console.info('ad is click');
    }
  };

  let ad = new AD();
  ad.show();
  ad.click();
}