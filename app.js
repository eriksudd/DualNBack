/*
=================================================
MODULE
=================================================
*/

var dualNBack = angular.module('dualNBack', ['ngRoute', 'ngResource'])

/*
=================================================
ROUTES
=================================================
*/

dualNBack.config( ($routeProvider) => {

  $routeProvider

  .when('/', {
    templateUrl: 'views/game.htm',
    controller: 'gameController'
  })

  .when('/results', {
    templateUrl: 'views/results.htm',
    controller: 'resultsController'
  })

})


/*
=================================================
SERVICES
=================================================
*/


/*
=================================================
CONTROLLERS
=================================================
*/

dualNBack.controller('gameController', ['$scope', ($scope) => {

}])








