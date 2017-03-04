var MergeSort = function(){
  this._$init.apply(this, arguments);
}

MergeSort.prototype = {
  _$init : function(){
    this.arr = arguments[0];
    this.temp = [];
    this.initTemp();
  },
  initTemp : function(){
    for(var i=0;i<100 ; i++){
      this.temp[i] = 0;
    }
  },
  swap : function(a, b){
    var temp = a;
    temp = this.arr[a];
    this.arr[a] = this.arr[b];
    this.arr[b] = temp;
  },
  merge : function(start, end){
    var mid = parseInt((start + end)/2,10);
    var i = start;
    var j = mid+1;
    var k = 0;
    while(i<=mid && j<=end){
      if(this.arr[i] <= this.arr[j]){
        this.temp[k++] = this.arr[i++];
      }else{
        this.temp[k++] = this.arr[j++];
      }
    }
    while(i<=mid){
      this.temp[k++] = this.arr[i++];
    }
    while(j<=end){
      this.temp[k++] = this.arr[j++];
    }
    
    for(var a=start; a<=end ; a++){
      this.arr[a] = this.temp[a-start];
    }
  },
  sort : function(start, end){
    if(start === end){
      return;
    }
    var mid = parseInt((start + end)/2,10);
    this.sort(start, mid);
    this.sort(mid+1, end);
    this.merge(start, end);
  },
  print : function(){
    console.log(this.arr);
  }
}
var arr = [2,3,1,7,6,9,8];
var q = new MergeSort(arr);
q.sort(0,arr.length-1 );
q.print();
