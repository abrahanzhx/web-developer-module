function getElementsByClassName(node,classname){
	// 按类名获取元素节点
	// 接受参数：DOM树的搜索起点，类名
	if(node.getElementsByClassName){
		return node.getElementsByClassName(classname);
	}
	else{
		var results = new Array();
		var elems = node.getElementsByTagName("*");
		for (var i = 0; i < elems.length; i++) {
			if(elems[i].classname.indexOf(classname) != -1){
				results[results.length] = elems[i];
			}
		}
		return results;
	}
}