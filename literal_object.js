var lit_object = {
	length: litobject_length,
	get: litobject_get
};
function litobject_length(){
	var count = 0;
	for (var prop in this) {
		if (typeof (this[prop]) != 'function') {
			count++;
		}
	}
	return count;
}
function litobject_get(index) {
	var count = 0;
	for (var prop in this) {
		if (typeof (this[prop]) != 'function') {
			if (count == index) return this[prop];
			count++;
		}
	}
	return '';
}
	
//USAGE
lit_object["x"] = {name: "y"};
lit_object["w"] = {name: "a"};
lit_object["z"] = {name: "b"};

console.log(lit_object.length()); //RETURNS 3
console.log(lit_object.get(1)); //RETURNS {name:"a"}
