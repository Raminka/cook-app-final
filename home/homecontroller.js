myApp.controller('HomeController', ["$scope", "$state","$http", "sampleFactory",

  function($scope, $state,$http, sampleFactory) {

    console.log('this is the homecontroller, hi!');

    $scope.userString = "default value";

    $scope.data = {};
    $scope.data.json = {};


    $http.get('./data/donnees.json').then(function(json){
      $scope.data.json=json.data;
    });



    $scope.getWeather = function() {
    $http({
      method: 'GET',
      url: 'http://api.wunderground.com/api/3bde361f09bd002c/geolookup/conditions/fr/forecast/q/France/Paris.json'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available

        console.log('get ok');
        $scope.weather = response.data;
        console.log($scope.weather);
        $scope.recetteConseille={};
        $scope.data.json = {};
        $http.get('./data/donnees.json').then(function(json){
        $scope.data.json=json.data;
        var i=0;
        do{

          if ($scope.data.json[i].tempmin<=$scope.weather.current_observation.temp_c){

            if ($scope.data.json[i].tempmax>=$scope.weather.current_observation.temp_c){
            $scope.recetteConseille=$scope.data.json[i];
          }
          }
          i++;
        }while (i<$scope.data.json.length);

        });
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('get nok');
    });
  }

$scope.getWeather();






  }]);
