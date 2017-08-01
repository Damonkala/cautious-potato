angular.module('scaffold')
.controller('HomeController', ['$scope', '$state','$http', function($scope, $state, $http) {
	var vm = this;

	vm.greeting = 'Hola!';
	vm.uploadMongoose = uploadMongoose;
	getAllMongeese();


	// $scope.mongooseBody = {
	// 	name: "Harold",
	// 	imageUrl: "http://img05.deviantart.net/cffd/i/2012/340/b/4/png_animal_by_moonglowlilly-d5n8161.png"
	// }

	function getAllMongeese() {
		$http.get('/mongeese')
		.then(function (res, err) {
			vm.mongeeses = res.data;
		})
	}
	function uploadMongoose() {
		$http.post('/mongeese/upload', vm.newMongoose)
		.then(function (res, err) {
			console.log(res);
			getAllMongeese();
		})
	}

}]);
