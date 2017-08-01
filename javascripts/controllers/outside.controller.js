angular.module('scaffold')
.controller('OutsideController', ['$scope', '$state', function($scope, $state) {
	const vm = this;
	vm.greeting = 'Hola!';
}]);
