/// <reference path='../typings/angularjs/angular.d.ts' />

/// <reference path='config/config.module.ts' />
/// <reference path='views/views.module.ts' />

module sm {
	'use strict';

	angular.module('sm', [
		'ngMaterial',
		'ui.router',

		'sm.config',
		'sm.views',
	]);
}
