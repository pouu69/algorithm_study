var d = [];

function go(n){
  if(n === 1) return 0;
  if(d[n] > 0) return d[n];
  d[n] = go(n-1) + 1;
  
  if(n%2 === 0){
    var temp = go(n/2) + 1;
    if(d[n] > temp) d[n] = temp;
  }
  if(n%3 === 0){
    var temp = go(n/3) + 1;
    if(d[n] > temp) d[n] = temp;
  } 
  return d[n];
}

console.log(go(10));

function go1(n){
  d[1] = 0;
  for(var i=2 ; i<=n ; i++){
      if(i%2 === 0 && d[i] > d[i/2] + 1){
        d[i] = d[i/2] + 1;
      }
      if(i%3 === 0 && d[i] > d[i/3] +1 ){
           d[i] = d[i/3] +1;
      }
  }
  return d[n];
}
         
console.log(go1(10));
