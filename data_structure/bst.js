function Node(data, left, right){
  this.data = data;
  this.left = left;
  this.right = right;
}

Node.prototype.show = function(){
  console.log(this.data);
}

function BST(){
  this.root = null;
}

BST.prototype = {
  insert : function(data){
    var n = new Node(data, null, null);
    if(this.root === null){
      this.root = n;
    }else{
      var current = this.root;
      var parent;
      while(true){
        parent = current;
        if(data < current.data){
          current = current.left;
          if(current === null){
            parent.left = n;
            break;
          }
        }else{
          current = current.right;
          if(current === null){
            parent.right = n;
            break;
          }         
        }
      }
    }
  },
  inOrder : function(node){
    if(!(node === null)){
      this.inOrder(node.left);
      console.log(node.show());
      this.inOrder(node.right);
    }
  },
  preOrder : function(node){
    if(!(node === null)){
      console.log(node.show());
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  },
  postOrder : function(node){
    if(!(node === null)){
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show());
    }
  },
  getMin : function(){
    var current = this.root;
    while(!(current.left !== null)){
      current = current.left;
    }
    return current.data;
  },
  getMax : function(){
    var current = this.root;
    while(!(current.right !== null )){
      current = current.right;
    }
    return current.data;
  },
  find : function(data){
    var current = this.root;
    while(current.data !== data){
      if(data < current.data){
        current = current.left;
      }else{
        current = current.right;
      }
      if(current === null){
        return null;
      }
    }
    return current;
  },
  remove : function(data){
    var root = this.removeNode(this.root, data);
  },
  removeNode : function(node, data){
    if(node === null){
      return console.log('cannot find node');
    }
    if(data === node.data){
      // 자식이없는 노드
      if(node.left === null && node.right === null){
        return null;
      }
      // 왼쪽자식이 없는 노드
      if(node.left === null){
        node = node.right;
      }else if(node.right ===null){    // 오른쪽 자식이없는 노드
        node = node.left;
      }else{
        // 두자식이 없는 노드
        var tempNode = this.getMin(node.right);
        node.data = tempNode.data;
        node.right = this.removeNode(node.right, tempNode.data);
        tempNode = null;
        
      }
    }else if(data < node.data){
      node.left = this.removeNode(node.left, data);
    }else if(data > node.data){
      node.right = this.removeNode(node.right, data);
    }
    return node;
  },
  getNodeCnt : function(node){
    var count = 0;
    if(node !== null){     
      count = 1 + this.getNodeCnt(node.left) + this.getNodeCnt(node.right);
    }
    return count;
  }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.insert(53);

console.log('BST travel');
console.log(nums.remove(23));
console.log(nums.preOrder(nums.root));
