(function () {
	'use strict';

	var type = function type(o) {
		return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
	};

	console.log(type(Symbol('type checker')));
	
}());