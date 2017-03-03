function prime(n){
  if(n < 2) return false;
 for(var i=2 ; i*i <= n ; ++i){
   if(n % 2 === 0) return false;
   return true;
 } 
}

function eratos(n,m){
  var check = new Array((+m)+1);
  check[0] = true;
  check[1] = true;

  for(var i=2; i*i <= m ; i++){
    if(check[i] === true) continue;
    for(var j=i+i ; j<=m ; j+=i){
      check[j] = true;
    }
  }
  
  for(var a = n ; a<=m ;a++){
    if(check[a] === undefined){
      console.log(a);
    }
  }
}

eratos(1,100);
