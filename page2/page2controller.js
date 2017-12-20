myApp.controller('Page2Controller', ["$scope", "$state","$http","sampleFactory","$stateParams",

  function($scope, $state, $http,sampleFactory, $stateParams) {

    console.log('this is the page2controller, hi!');

    sampleFactory.sampleFunction();

    $scope.gotohome = function() {
      $state.go("home");
    }

    $scope.openTabs = function(tabName) {
      var i;
      var x = document.getElementsByClassName("rtab");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      document.getElementById(tabName).style.display = "block";
    }
    var id = $stateParams.id;
    function getById(arr, id) {
      for (var i = 0; i < arr.data.length; i++) {
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
          console.log($scope.recette.etapes);
    });
    $scope.review = {};
    $scope.addReview = function(recette) {
      recette.reviews.push($scope.review);

      $scope.review = {};
    };

  }
]);
