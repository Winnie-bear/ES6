import $ from 'jquery';

class  Interface{
  /**
   * 
   * [getOmit 获取遗漏数据]
   * @param {string} issue [当前期号]
   * @memberof Interface
  */
  getOmit(issue){
   let self=this;
   return new Promise((resolve,reject)=>{
     $.ajax({
       url:'/get/omit',
       data:{
         issue:issue
       },
       dataType:'json',
       success:function(res){
         self.setOmit(res.data);
         resolve.call(self,res);
       },
       error:function(err){
         reject(err);
       }
     });
   });
  }

  /**
   * 
   * [getOpenCode 获取开奖号码]
   * @param {string} issue [当前期号] 
   * @memberof Interface
  */
  getOpenCode(issue){
    let self=this;
    return new Promise((resolve,reject)=>{
      $.ajax({
        url:'/get/opencode',
        data:{
          issue:issue
        },
        dataType:'json',
        success:function(res){
          self.setOpenCode(res.data);
          resolve.call(self,res);
        },
        error:function(err){
          reject.call(err);
        }
      });
    });
  }

  /**
   * 
   * [getState 获取当前状态]
   * @param {string} issue [当前期号]
   * @memberof Interface
  */
  getState(issue){
    //this指向
    let self=this;
    return new Promise((resolve,reject)=>{
      $.ajax({
        url:'/get/state',
        data:{
          issue:issue
        },
        dataType:'json',
        success:function(res){
          resolve.call(self,res);
        },
        error:function(err){
          reject(err);
        }


      })
    })
  }
}

export default Interface