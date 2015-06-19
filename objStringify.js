(function(objStringify){
	if((typeof window.JSON=="undefined") || !JSON.stringify || typeof JSON.stringify!="function") {
		window.objStringify = objStringify;
	} else {
		window.objStringify = JSON.stringify;
	}
})(function objStringify(obj) {
	var result = "";
	if(is(obj).is_array) {
		result+= arrayToString(obj);
	} else if(is(obj).is_json) {
		result+= jsonToString(obj);
	}
	function is(obj) {
		return {
			is_array: !!(Object.prototype.toString.call(obj).toLowerCase()=="[object array]"),
			is_json: !!(typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length)
		}
	}
	function arrayToString(arr) {
		var arr_string = "";
		for(var i = 0, len = arr.length; i<len; i++) {
			if(is(arr[i]).is_array || is(arr[i]).is_json) {
				arr_string+=","+objStringify(arr[i]);
			} else {
				arr_string+=","+arr[i];
			}
		}
		if(arr_string) {
			arr_string = arr_string.substring(1);
		}
		return "["+arr_string+"]";
	}
	function jsonToString(json) {
		var json_string = "";
		for(var k in json) {
			if(is(json[k]).is_array || is(json[k]).is_json) {
				json_string+=","+k+":"+objStringify(json[k]);
			} else {
				json_string+=","+k+":"+json[k];
			}
		}
		if(json_string) {
			json_string = json_string.substring(1);
		}
		return "{"+json_string+"}";
	}
	return result;
})