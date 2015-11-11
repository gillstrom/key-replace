'use strict';
module.exports = function (obj, search, replace) {
	var ret = {};

	if (typeof obj !== 'object') {
		throw new TypeError('Expected an object');
	}

	Object.keys(obj).forEach(function (el) {
		ret[el.replace(search, replace)] = obj[el];
	});

	return ret;
};
