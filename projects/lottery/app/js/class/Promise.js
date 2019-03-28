{
  let ajax=function(num){
    console.log('执行');
    return new Promise(function(resolve,reject){
      if(num>5){
        resolve();
      }else{
        throw new Error('出错了')
      }
    })
  }

  ajax(6).then(function(){
    console.log('log',6);
  }).catch(function(err){
    console.log('catch',err);
  });

  // ajax(3).then(function(){
  //   console.log('log',3);
  // }).catch(function(err){
  //   console.log('catch',err);
  // });
}

{
  //所有图片都加载完再添加到页面
  //加载过程
  function loadImg(src){
    return new Promise((resolve,reject)=>{
      let img=document.createElement('img');
      img.src=src;
      img.onload=function(){
        resolve(img);
      };
      img.onerror=function(){
        reject();
      }
    })
  }
  //展示
  function showImgs(imgs){
    console.info(imgs);
    imgs.forEach(function(img){
      document.body.appendChild(img);
    })
  }

  Promise.all([
    loadImg('https://i.loli.net/2019/01/25/5c4b30cbd56ec.jpg'),
    loadImg('https://i.loli.net/2019/01/25/5c4b30cbe101e.jpg'),
    loadImg('https://i.loli.net/2019/01/25/5c4b30cc8a741.jpg')
  ]).then(showImgs);
}

{
  //有一张图片加载完就添加到页面，先到先得
  //加载过程
  function loadImg(src){
    return new Promise((resolve,reject)=>{
      let img=document.createElement('img');
      img.src=src;
      img.onload=function(){
        resolve(img);
      }
      img.onerror=function(){
        reject();
      }
    })
  }
  //展示
  function showImgs(img){
      document.body.appendChild(img);
  }

  Promise.race([
    loadImg('https://i.loli.net/2019/01/25/5c4b30cbd56ec.jpg'),
    loadImg('https://i.loli.net/2019/01/25/5c4b30cbe101e.jpg'),
    loadImg('https://i.loli.net/2019/01/25/5c4b30cc8a741.jpg')
  ]).then(showImgs);
}