function removeAttr(arr){
  arr.forEach((item)=>{
    for(key in item){
      if(key==="parentId"){
        delete item.parentId;
      }
      else if(key === 'children'){
       removeAttr(item.children);
     }
    }
  })
}

function covert(source){
  let cloneData = JSON.parse(JSON.stringify(source));// 对源数据深度克隆
  let cloneArr=[];
  for(key in cloneData){
    cloneArr.push({
      "value":key,
      "parentId":cloneData[key][1],
      "label": {
        "type": "i18n",
        "en_US": cloneData[key][2] ,
        "zh_CN": cloneData[key][0]
      },
    })
  }
  let tree = cloneArr.filter(father=>{        //循环所有项
    let branchArr = cloneArr.filter(child=>{
        return father.value == child.parentId  //返回每一项的子级数组
    });
    if(branchArr.length>0){
        father.children = branchArr;//如果存在子级，则给父级添加一个children属性，并赋值
    }
    return father.parentId==1;//返回第一层
  });
  removeAttr(tree);
  return tree;
}

console.log(covert({
  "110000": [
    "北京",
    "1",
    "bei jing"
  ],
  "110100": [
    "北京市",
    "110000",
    "bei jing shi"
  ],
  "110101": [
    "东城区",
    "110100",
    "dong cheng qu"
  ],
  "110102": [
    "西城区",
    "110100",
    "xi cheng qu"
  ],
  "310000": [
    "上海",
    "1",
    "shang hai"
  ],
  "310100": [
    "上海市",
    "310000",
    "shang hai shi"
  ],
  "310101": [
    "黄浦区",
    "310100",
    "huang pu qu"
  ],
  "310103": [
    "卢湾区",
    "310100",
    "lu wan qu"
  ],
  "330000": [
    "浙江省",
    "1",
    "zhe jiang sheng"
  ],
  "330100": [
    "杭州市",
    "330000",
    "hang zhou shi"
  ],
  "330102": [
    "上城区",
    "330100",
    "shang cheng qu"
  ],
  "330103": [
    "下城区",
    "330100",
    "xia cheng qu"
  ]
}))