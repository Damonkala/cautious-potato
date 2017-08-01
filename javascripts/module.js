angular.module("scaffold", ["ui.router", "ui.bootstrap"])
.config(function($stateProvider, $locationProvider){
	$stateProvider.state("home", {
		url: "/home",
		templateUrl: "/pages/home.html",
		controller: "HomeController",
		controllerAs: "vm"
	})
	$stateProvider.state("outside", {
		url: "/outside",
		templateUrl: "/pages/outside.html",
		controller: "OutsideController",
		controllerAs: "vm"
	})
	$locationProvider.html5Mode(true);
})
.filter("trustUrl", ['$sce', function ($sce) {
	return function (recordingUrl) {
		return $sce.trustAsResourceUrl(recordingUrl);
	};
}])
.controller('MainController', ['$scope', function($scope, $state) {
	const vm = this;
	$scope.hamburger = false;

	$scope.toggleHamburger = toggleHamburger;

	function toggleHamburger() {
		$scope.hamburger = !$scope.hamburger
		console.log('HAM TOGLE', $scope.hamburger);
	}
	$scope.isNavCollapsed = true;
	$scope.isCollapsed = false;
	$scope.isCollapsedHorizontal = false;
}]);
