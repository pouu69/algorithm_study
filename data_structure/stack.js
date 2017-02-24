var Stack = (function(){

  function _Stack(){
    this._init.apply(this, arguments);
  }

  _Stack.prototype = {
    _init : function(){
      this.stack = [];
      this.size = 0;
    },
    push : function(data){
      this.stack[this.size++] = data;
    },
    pop : function(){
      if(this.isEmpty()) return -1;
        return this.stack[this.size--];
    },
    isEmpty : function(){
      if(this.size === 0) return true;
      return false;
    },
    top : function(){
      if(this.isEmpty()) return -1;
      return this.stack[this.size-1];
    },
    println : function(){
      console.log(this.stack.join(''));    
    }
  }
  return _Stack;
})();


var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(1);
stack.pop();
stack.println();
