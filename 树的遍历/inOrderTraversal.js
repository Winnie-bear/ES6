// 左 根 右
const inOrderTraversal=(root) => {
  let [nodeList, stack] = [[],[]];
  let p=root;
  while(p || stack.length>0){
    while(p){//圧栈，直至左节点为空
      stack.push(p);
      p=p.left;
    }
    p=stack.pop();
    nodeList.push(p.val);
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

console.log(inOrderTraversal(root));
