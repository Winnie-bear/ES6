//实例：消除魔术字符串，魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。
// function getArea(shape,options){
//   let area=0;

//   switch(shape){
//     case 'Triangle'://魔术字符串
//      area=.5*options.width*options.height;
//      break;
//      /* more codes */
//   }
//   return area;
// }
// console.log(getArea('Triangle',{ width:100,height:100}));

//修改后的代码
const shapeType = {
  triangle: Symbol(),
  rectangle:Symbol()
};
function getArea(shape, options) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height;
      break;
    case shapeType.rectangle:
      area = options.width * options.height;
      break;
     /* more codes */
  }
  return area;
}
console.log(getArea(shapeType.rectangle,{ width:100,height:100}));
