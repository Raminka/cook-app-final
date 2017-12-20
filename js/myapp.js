var myApp = angular.module('myApp', ['ui.router']);


myApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
       url: '/home',
       templateUrl: 'home/home.html'
    })

    .state('detail', {
      params:{"id":null},
      url: '/home/:id',
       templateUrl: 'page2/page2.html'
    });

    $urlRouterProvider.otherwise('home');

});
