function addLoadEvent(func){
	// 输入：打算在页面加载完毕后执行的函数的名字
	// 页面加载完毕后执行func
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}