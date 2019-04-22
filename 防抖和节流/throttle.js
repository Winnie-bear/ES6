function throttle(fn,delay){
  let timer=null,context,args;
  return function(){
    context=this;
    args=[...arguments];
    if(!timer){
      setTimeout(function(){
        timer=null;
        fn.apply(context,args);
      },delay);
    }
  }
}