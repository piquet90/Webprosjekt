function load() {
	var wrapper = document.getElementById("wrapper");
	var box = document.getElementById("grayBox");
	var wrapW = wrapper.offsetWidth;
	var wrapH = wrapper.offsetHeight;
	var wrapL = wrapper.offsetLeft;
	var wrapT = wrapper.offsetTop;
	var windowH = window.innerHeight;
	
	var width = (wrapL * 2) + wrapW + "px";
	var height;
	if((wrapH + wrapT) <= windowH) {
		height = windowH + "px";
	}
	else {
		height = wrapH + wrapT + 10 + "px";
	}
	
	if(box.offsetHeight != height && box.offsetWidth != width) {
		box.style.height = height;
		box.style.width = width;
	}
}