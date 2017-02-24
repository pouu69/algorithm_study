function countAlpha(data){
  var cnt = new Array(26);

  for(var i=0 ; i<data.length ; i++){
    var index = +(data.charCodeAt(i) - 'a'.charCodeAt(0));
    if(!cnt[index]) cnt[index] = 0;
    cnt[index] += 1;
  }
  //console.log(cnt.join(''));
  for(var j=0 ; j<cnt.length ; j++){
    if(cnt[j]) console.log(cnt[j]);    	
  }
}

countAlpha('adddbaadccds');
