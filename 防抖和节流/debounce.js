function debounce(fn,delay){
  let timer=null,context,args;
  return function(){
    context=this;
    args=[...arguments];
    if(timer) clearTimeout(timer);
    timer=setTimeout(function(){
      fn.apply(context,args);
    },delay);
  }
}