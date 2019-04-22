class Stack{
  constructor(){
    this.stack=[];
  }
  push(item){//入栈
    this.stack.push(item);
  }
  pop(){//出栈
    this.stack.pop();
  }
  peek(){//获取栈顶元素
    return this.stack[this.getLength()-1];
  }
  getLength(){//获取长度
    return this.stack.length;
  }
  isEmpty(){//判断是否为空
    return this.getLength()===0;
  }
}