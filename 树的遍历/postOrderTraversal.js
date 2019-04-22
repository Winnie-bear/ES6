// 左 右 根
const postOrderTraversal=(root) => {
  let [nodeList, stack] = [[],[]];
  let p=root;
  stack.push(p);
  stack.push(p);
  while(stack.length!==0){//第一次弹出，将node的孩子压入栈中，第二次弹出，访问node
    node=stack.pop();
    if(stack.length!==0 && node===stack[stack.length-1]){
      if(node.right){
        stack.push(node.right);
        stack.push(node.right);
      }
      if(node.left){
        stack.push(node.left);
        stack.push(node.left);
      }
    }else{
      nodeList.push(node.val);
    }
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

console.log(postOrderTraversal(root));
