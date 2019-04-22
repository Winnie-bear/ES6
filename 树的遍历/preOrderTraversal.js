//根 左 右
const preOrderTraversal=(root) => {
  let [nodeList, stack] = [[],[]];
  let p=root;
  while(p || stack.length>0){
    while(p){//圧栈，直至左节点为空
      stack.push(p);
      nodeList.push(p.val);
      p=p.left;
    }
    p=stack.pop();
    p=p.right;
  }
  return nodeList;
}

const root={
  val:'A',
  left:{
    val:'B',
    left:{
      val:'D',
      left:{
        val:'H'
      },
      right:{
        val:'I'
      }
    },
    right:{
      val:'E',
      left:{
        val:'J'
      }
    }
  },
  right:{
    val:'C',
    left:{
      val:'F'
    },
    right:{
      val:'G'
    }
  }
}

console.log(preOrderTraversal(root));