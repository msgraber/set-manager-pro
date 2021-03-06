/// <reference path='../../../typings/angularjs/angular.d.ts' />
/// <reference path='../../../typings/firebase/firebase.d.ts' />
/// <reference path='../../../typings/angularfire/angularfire.d.ts' />

module sm.views.shotList {
	interface IShot {
		scene: string;
		storyDay: string;
		timeToShoot: string;
		shotDuration: string;
	}

	class ShotListController {
		shotList: AngularFireArray;
		newShot: IShot;

		static $inject: string[] = ['$firebaseArray'];
		constructor(firebaseArray: AngularFireArrayService) {
			var shotsRef: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com/Shots');
			this.shotList = firebaseArray(shotsRef);
		}

		showShot(shot: IShot): void {
			console.log('scene: ' + shot.scene);
			console.log('storyDay: ' + shot.storyDay);
			console.log('timeToShoot: ' + shot.timeToShoot);
			console.log('shotDuration: ' + shot.shotDuration);
		}

		createShot(): void {
			this.shotList.$add(this.newShot);
			this.newShot = null;
		}

		deleteShot(shot: IShot): void {
			this.shotList.$remove(shot);
		}

		editShot(shot: IShot): void {
			this.shotList.$save(shot);
		}
	}

	function shotList(): ng.IDirective {
		'use strict';
		return {
			restrict: 'E',
			templateUrl: '/views/shotList/shotList.html',
			controller: 'ShotListController',
			controllerAs: 'controller',
		};
	}

	angular.module('sm.views.shotList', ['firebase'])
		.directive('smShotList', shotList)
		.controller('ShotListController', ShotListController);
}
