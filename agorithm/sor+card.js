
(function(arr){
    function swap(a,b){
      var temp;
      temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp; 
    }

    function insertSort(){
      for(var i=1 ; i<arr.length ; i++){
        var key = arr[i];
        var j = i-1;
        while(j>=0 && key < arr[j]){
          swap(j, j+1);
          --j;
        }
        arr[j+1] = key;
      }
    }
  
    function card(){
      var ans;
      var ans_cnt = 1;
      var cnt = 1;
      for(var i=1; i<arr.length ; i++){
        if(arr[i-1] === arr[i]){
          cnt += 1;
        }else{
          cnt = 1;
        }
        
        if(ans_cnt < cnt){
          ans_cnt = cnt;
          ans = arr[i];
        }
      }
      console.log(ans+" 가 "+ans_cnt+"번 많이 나옴");
    }
  
   insertSort();
  card();
    console.log(arr);
})([3,4,2,7,5,1,1,3,3,4,4,4,4,5]);
