function valid(str){
  var len = str.length;
  var cnt = 0;
  
  for(var i=0; i<len ; i++){
    if(str[i] === '('){
      cnt += 1;
    }else{ // ')'
      cnt -= 1;
    }
    if(cnt < 0){
      return 'NO';
    }
  }
  
  if(cnt === 0){
    return 'YES';
  }else{
    return 'NO';
  }
}

var aa = '(())';
console.log(valid(aa));
