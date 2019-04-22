/*2.请实现find函数，使下列的代码调用正确。

约定：

title数据类型为String
userId为主键，数据类型为Number
考核点：

链式调用
简单的SQL
闭包*/

var data = [
	{userId: 8, title: 'title1'},
	{userId: 11, title: 'other'},
	{userId: 15, title: null},
	{userId: 19, title: 'title2'}
];

var find = function(origin) {
  return {
    where:function(obj){
      let newOrigin=origin.filter((item)=>{//返回一个新数组
        return item["title"] && item["title"].search(obj["title"])>-1;
      });
       return {
        orderBy:function(condition,type){
          if(condition==='userId' && type==='desc'){
            newOrigin.sort((a,b)=>{
              return b[condition]-a[condition];
            })
          }
          return newOrigin;
        }
      }
    }
   
  }
}

//查找data中，符合条件的数据，并进行排序
var result = find(data).where({
	"title": /\d$/
}).orderBy('userId', 'desc');

console.log(result); // [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }]