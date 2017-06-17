function getstyle(obj,name) {
	if(obj.currentstyle) {
		return obj.currentstyle[name];
	}
	else {
		return getComputedStyle(obj,false)[name];
	}
}