;(function(root) {

	'use strict';

	var namespace = {};

	@@find-first

	if ((typeof exports === 'object') && module) {
		module.exports = namespace.findFirst; // CommonJS
	} else if ((typeof define === 'function') && define.amd) {
		define(function() {
			return namespace.findFirst;
		}); // AMD
	} else {
		root.findFirst = namespace.findFirst; // Browser
	}

}(this));