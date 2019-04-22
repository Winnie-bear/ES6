function ajax(url,fnSucc,fnFail){
  //创建oAjax对象（拥有一个手机）
  if(window.XMLHttpRequest){
      var oAjax=new XMLHttpRequest();//非IE6
  }else{
      var oAjax=new ActiveXObject('MicroSoft.XMLHTTP');//IE6
  }
  
  //连接到服务器（拨号)
  oAjax.open("GET",url,true);
  //发送请求（说）
  oAjax.send();
  //接收返回值（听）
  oAjax.onreadystatechange=function (){
      if(oAjax.readyState==4){
          if(oAjax.status==200){
              fnSucc(oAjax.responseText);
          }else{
              if(fnFail){
                  fnFail(oAjax.status);
              }
          }
      }
  }
}

function request(){
  return new Promise((resolve,reject)=>{
      ajax('https://www.cnblogs.com/shytong/p/5681568.html',resolve,reject);
  })
}

function timeout(){
  return new Promise((resolve,reject)=>{
    setTimeout(function(){
      reject('网络请求超时');
    },5000);
  })
}
let [requestPromise,timeoutPromise]=[request(),timeout()];
let finalPromise=Promise.race([
  requestPromise,timeoutPromise
]);
finalPromise.then(function(value){
   console.log(value);
}).catch(function(err){
  console.log(err);
})