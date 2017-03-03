function primeFactory(n){
  for(var i=2 ; i*i <= n ; i++){
    while(parseInt(n%i,10)=== 0){
      console.log(i);
      n = parseInt(n /= i,10);
    }
  }
  
  if(n>1) console.log(n);
}

primeFactory(234);
