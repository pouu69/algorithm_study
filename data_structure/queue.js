var Queue = (function(){
	function _Queue(){
  	this._init.apply(this, arguments);
  }
  
  _Queue.prototype = {
  	_init : function(){
    	this.data = [];
      this.begin = 0;
      this.end = 0;
    },
    push : function(data){
    	this.data[this.end++] = data;
    },
    empty : function(){
    	if(this.begin === this.end){
      	return true;
      }
      return false;
    },
    size : function(){
    	return this.end - this.begin;
    },
    front : function(){
    	return this.data[this.begin];
    },
    back : function(){
    	return this.data[this.end-1];
    },
    pop : function(){
    	if(this.empty()) return -1;
      return this.data[this.begin++];
    }
  }
  
  return _Queue;
})();

var q = new Queue();

