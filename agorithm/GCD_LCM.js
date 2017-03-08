// 최대 공약수
function gcd(a, b){
  if(b === 0){
    return a;
  }
  else{
    return gcd(b, a%b);
  }
}

function gcd1(a, b){
  while(b != 0){
    var r = a%b;
    a = b;
    b = r;
  }
  return a;
}

// 최소 공배수
function lcm(a,b){
 return a*b/gcd1(a,b); 
}
var a = gcd(6, 15);
console.log(a);
var b = lcm (6,15);
console.log(b);
