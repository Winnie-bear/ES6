class Queue{
  constructor(){
    this.queue=[];
  }
  enQueue(item){//入队
    this.queue.push(item);
  }
  deQueue(){//出队
    return this.queue.shift();//shift()  移除数组的第一项，返回移除项
  }
  getHeader(){//获取队首元素
    return this.queue[0];
  }
  getLength(){//获取长度
    return this.queue.length;
  }
  isEmpty(){//判断是否为空
    return this.getLength()===0;
  }
}