function count(str){
	var cnt = 0;
  var len = str.length;
  var stack = new Stack();
  
  for(var i=0; i<len ; i++){
  	var c = str[i];
    if(c === '('){
    	stack.push(i);
    }else{
    	if(stack.top()+1 === i){
      	stack.pop();
        cnt += stack.size();
      }else{
      	stack.pop();
        cnt += 1;
      }
    }
  }
  
  return cnt;
}

alert(count('(())()((()))'));
