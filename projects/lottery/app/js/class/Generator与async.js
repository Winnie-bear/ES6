{
  //Generator函数与iterator遍历器的关系
  let obj={};
  //调用 Generator 函数后，返回的是一个指向内部状态的指针对象，也就是遍历器对象iterator
  obj[Symbol.iterator]=function* (){
    yield 1;
    yield 2;
    yield 3;
  }

  console.log(obj[Symbol.iterator]().next());
  for(let value of obj){
    console.log('value',value);
  }
}

{
  let draw = function(count){
    //具体的抽奖逻辑
    console.info(`剩余${count}次抽奖`);
  }

  let residue=function* (count){
    while(count>0){
      count--;
      yield draw(count);
    }
  }

  let start=residue(5);
  let btn=document.createElement('button');
  btn.textContent='抽奖';
  btn.id='start';
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click',function(){
    start.next();
  });
}

{
  //长轮询
  let ajax=function* (){
    yield new Promise((resolve,reject)=>{
      setTimeout(function(){
        resolve({code:0})
      },200);
    })
  }

  let pull=function(){
    let generator=ajax();
    let step=generator.next();
    step.value.then(function(info){
      if(info.code!=0){
        setTimeout(function(){
          console.log('wait');
          pull();
        },1000)
      }else{
        console.info(info);
      }
    })
  }
  pull();
}