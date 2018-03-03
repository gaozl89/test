$.fn.myPlugin = function(options){
	var defaults = {
		"color" : "red",
		"fontSize" : "12px"	
	};
	var settings = $.extend(defaults,options);
	//debugger//用来调试，以便查看此时的defaults是什么值
	return this.css({
		"color" : settings.color,
		"fontSize" : settings.fontSize	
	});
}