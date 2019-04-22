class LNode{//链表结点
  constructor(elem,next){
    this.elem=elem;//数据域
    this.next=next;//指针域
  }
}

class LinkedList{//链表
  constructor(){
    this.size=0;//链表长度
    this.dummyHead=new LNode(null,null);//头结点
  }
  //检查下标
  checkIndex(index){
    if(index < 0 || index > this.size) throw Error('Index Error');
  }
  //查找元素节点
  find(head,curIndex,searchIndex){
    if(searchIndex===curIndex)  return head;
    return this.find(head.next,curIndex+1,searchIndex);
  }
  //添加元素
  addNode(ele,index){
    this.checkIndex(index);
    //s->next=p->next p->next=s
    let prev=this.find(this.dummyHead,0,index);
    prev.next=new LNode(ele,prev.next);
    this.size++;
    return prev.next;//返回添加的元素
  }
  //任意插入元素
  insertNode(ele,index){
    return this.addNode(ele,index); 
  }
  //删除元素
  removeNode(index,isLast){
    this.checkIndex(index);
    let prev=this.find(this.dummyHead,0,index-1);
    let removeNode=prev.next;//要删除的元素
    prev.next=removeNode.next;
    removeNode.next=isLast?removeNode.next:null;
    this.size--;
    return removeNode;
  }
  //获取元素
  getNode(index){
    this.checkIndex(index);
    if(this.isEmpty()) return;
    return this.find(this.dummyHead,0,index);
  }
  isEmpty(){
    return this.size===0;
  }
  getSize(){
    return this.size;
  }
}

let list=new LinkedList(0);
list.addNode(1,0);
list.addNode(2,1);
list.addNode(3,2);
console.log(list.removeNode(3,true));
console.log(list.getNode(1));