function prop(n,b){
  var ret = '';
  
  while(n > 0){
    var r = n % b;
    console.log(n);
    if(r < 10){
      ret += r;
    }else{
      ret += String.fromCharCode(parseInt((+a) + (+('A'.charCodeAt(0))),10));
    }
    n = parseInt(n /= b,10);
  }
  return ret.split("").reverse().join("");
}

console.log(prop(10,2));
