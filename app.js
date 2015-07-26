(function(){

'use strict';

  angular.module('EissonApp', ['ngRoute'])
  .controller('piController',['$scope','$http',function ($scope,$http) {
    $scope.btn = 'Prender';
    $scope.img = 'img/white.png';

    $scope.toggleLight = function() {
      $scope.btn == 'Prender' ? $scope.btn = 'Apagar' : $scope.btn = 'Prender';
      $scope.btn == 'Prender' ? $scope.apagar() : $scope.prender();
    };

    $scope.prender = function() {
      console.log('prendiendo');
      $scope.img = 'img/black.png';
      $('body').css({'background':'#74FE2D'});
      $scope.inServer('on');
    };

    $scope.apagar = function() {
      console.log('apagando');
      $scope.img = 'img/white.png';
      $('body').css({'background':'#000000'});
      $scope.inServer('off');
    };

    $scope.inServer = function(action) {
      var data = {action: action};
        $http({method:'POST',url: 'api/server.php', data:$.param(data), headers : { 'Content-Type': 'application/x-www-form-urlencoded' }}).success(function(response) {
          console.log( response );
      }).error(function(data, status){ });
    };
  }]);

})();