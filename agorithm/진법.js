//  진법
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

// 역진법
function reProp(n,b){
  var ans = "";
  for(var i=0 ; i<n.length ; i++){
    var c = n[i];
    if(0 <= (+c) && (+c) <= 9){
      ans = +ans * b + (+c);
     // console.log(ans);
    }else{
      ans = +ans * b + ( (+c)+10 - (+('A'.charCodeAt(0))) );
     //  console.log(ans);
    }
  }
  
  console.log(ans);
}

reProp("102",3);
