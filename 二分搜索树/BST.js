class Node{
  constructor(val){
    this.value=val;
    this.left=null;
    this.right=null;
  }
}
class BST{
  constructor(){
    this.root=null;
    this.size=0;
  }
  getSize(){
    return this.size;
  }
  isEmpty(){
    return this.size===0;
  }
  addNode(val){
    this.root=this._addChild(this.root,val);
  } 
  _addChild(node,val){
    if(!node){
      this.size++;
      return new Node(val);
    }
    if(node.value>val){
      node.left=this._addChild(node.left,val);
    }else if(node.value<val){
      node.right=this._addChild(node.right,val);
    }
    return node;
  }
}

let bsTree=new BST();
bsTree.addNode(5);
bsTree.addNode(2);
bsTree.addNode(6);
console.log(bsTree);