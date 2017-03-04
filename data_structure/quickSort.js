var QuickSort = function(){
  this._$init.apply(this, arguments);
}

QuickSort.prototype = {
  _$init : function(){
    this.arr = arguments[0];
  },
  swap : function(a, b){
    var temp = a;
    temp = this.arr[a];
    this.arr[a] = this.arr[b];
    this.arr[b] = temp;
  },
  choosePivot : function(low, high){
    return parseInt(low + (high - low) / 2,10);
  },
  partition : function(low, high){
    var pivotIndex = this.choosePivot(low, high);
    var pivotValue = this.arr[pivotIndex];
    
    this.swap(pivotIndex, high);
    var storeIndex = low;
    
    for(var i=low ; i<high; i++){
      if(this.arr[i] < pivotValue){
        this.swap(i, storeIndex);
        storeIndex += 1;
      }
    }
    
    this.swap(storeIndex, high);
    return storeIndex;
  },
  sort : function(low, high){
    if(low < high){
      var pivot = this.partition(low, high);
      this.sort(low, pivot-1);
      this.sort(pivot+1, high);
    }
  },
  print : function(){
    console.log(this.arr);
  }
}
var arr = [2,3,1,7,6,9,8];
var q = new QuickSort(arr);
q.sort(0,arr.length-1 );
q.print();
