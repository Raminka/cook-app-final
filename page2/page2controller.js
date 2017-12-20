myApp.controller('Page2Controller', ["$scope", "$state","$http","sampleFactory","$stateParams",

  function($scope, $state, $http,sampleFactory, $stateParams) {

    console.log('this is the page2controller, hi!');

    sampleFactory.sampleFunction();

    $scope.gotohome = function() {
      $state.go("home");
    }

    var id = $stateParams.id;
    function getById(arr, id) {
console.log(arr.data);
    for (var i = 0; i < arr.data.length; i++) {
      console.log('2');
        if (arr.data[i].recetteID === id) {
          console.log(arr.data[i]);
            return arr.data[i];
        }
    }
    }


    $scope.recette = {};
    $http.get('./data/donnees.json').then(function(data) {
        console.log(data);
        console.log(parseInt(id));

        $scope.recette = getById(data,parseInt(id));
          console.log($scope.recette);
    });

  }
]);
