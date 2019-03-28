//去除字符串中重复的字符
let removeRepeat=(str)=>{
  let setStr=new Set(str);
  return [...setStr].join('');
}
console.log(removeRepeat('aaaabbbbbcccccddedss'));