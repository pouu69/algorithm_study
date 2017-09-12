function change(a, idx){
  for(var i=idx-1 ; i<idx+1 ; i++){
    if(0 <= i && i < a.length){
      a[i] = 1-a[i];
    }
  }
}

function go(a, goal){
  var n = a.length;
  var ans = 0;

  for(var i=0 ; i<n-1 ; i++){
    if(a[i] != goal[i]){
      change(a, i+1);
      ans += 1;
    }
  }
  var result = true;
  
  for(var i=0 ; i<a.length ; i++){
    if(a[i] !== goal[i]) result = false;
  }
  
  return [result, ans];
}

function main(){
  var n=0;
  var a = [];
  var goal = [];
  
  var p1 = go(a, goal);
  change(a, 0);
  var p2 = go(a, goal);
  if(p2[0]){
    p2[1] += 1;
  }
  if(p1[0] && p2[0]){
    var result = p1[0] > p2[0] ? p2[1] : p1[1];
    console.log(result);
  }else if(p1[0]){
    console.log(p1[1]);
  }else if(p2[0]){
    console.log(p2[1]);
  }else{
    console.log(-1);
  }

  return 0;
}
main();


