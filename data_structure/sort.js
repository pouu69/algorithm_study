
function Sort(){
	this._init.apply(this, arguments);
}

Sort.prototype = {
	_init : function(){
		this.data = arguments[0];
	},
	swap : function(a, b){
	    var temp = a;
	    temp = this.data[a];
	    this.data[a] = this.data[b];
	    this.data[b] = temp;
	},
	print : function(){
		console.log(this.data.join(", "));
	},
	bubleSort : function(){
		var len = this.data.length;
		var temp;
		this.print();
		for(var i=len-1 ; i>0 ; --i){
			for(var j=0 ; j<i ; j++){
				if(this.data[j] > this.data[j+1]){
					this.swap(j,j+1);
				}
			}
		}
		this.print();
	},
	selectionSort : function(){
		var minIndex, temp;
		var len = this.data.length;
		this.print();
		for(var i=0; i<len-1 ; i++){
			minIndex = i;
			for(var j=i+1 ; j<len ; j++){
				if(this.data[j] < this.data[minIndex]){
					minIndex = j;
				}
			}
			this.swap(i,minIndex);
		}
		this.print();
	},
	insertSort : function(){
		var len = this.data.length;
		for(var i=1 ; i<len ; i++){
			var temp = this.data[i];
			var aux = i;
			while( (aux > 0) && (this.data[aux-1] > temp) ){
				this.data[aux] = this.data[aux-1];
				aux--;
			}
			this.data[aux] = temp;
		}
      		this.print();

	}
}


var sort = new Sort([6,4,7,9,1]);
