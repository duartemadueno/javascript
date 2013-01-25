var lit_object = (function(){
	var _p = {
		'init': function(){
			return self;
		},
		'litobject_length': function (){
			var count = 0;
			for (var prop in this) {
				if (typeof (this[prop]) != 'function') {
					count++;
				}
			}
			return count;
		},
		'litobject_get': function (index) {
			var count = 0;
			for (var prop in this) {
				if (typeof (this[prop]) != 'function') {
					if (count == index) return this[prop];
					count++;
				}
			}
			return '';
		}
	};
	var self = {
		'length': _p.litobject_length,
		'get': _p.litobject_get
	};
	return _p.init;
})();
	
//USAGE
lit_object["x"] = {name: "y"};
lit_object["w"] = {name: "a"};
lit_object["z"] = {name: "b"};

console.log(lit_object.length()); //RETURNS 3
console.log(lit_object.get(1)); //RETURNS {name:"a"}
