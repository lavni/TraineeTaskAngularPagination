var myAppModule = angular.module('MyApp', []);


myAppModule.controller('MainController',
    function($scope) {
    
    $scope.database = db;
    $scope.perOne = [];
    $scope.elemPerPage = 6;
    $scope.nums = ($scope.database.length/$scope.elemPerPage | 0) + 1;

    $scope.dataPerOne = function(j){
        $scope.perOne = [];
        $scope.a = $scope.elemPerPage * (j-1);
        $scope.b = $scope.elemPerPage * j -1;
        if ($scope.b>$scope.database.length){
            $scope.b = $scope.database.length -1;
        }
        for (var i=$scope.a; i<=$scope.b; i++){
            $scope.perOne.push($scope.database[i]);
        }
        return $scope.perOne;
    }
    $scope.dataPerOne(1);

    for (var i=$scope.nums; i>0; i--){
        $('.li1').after('<li class="li"><a href="#" >'+i+'</a></li>');  
    }

    $('.li').on('click', function(){
        var num = $(this).text();
        $scope.dataPerOne(num);
        $scope.$apply();
    })
    $('.li1').on('click', function(){
        $scope.dataPerOne(1);
        $scope.$apply();
    })
    $('.li2').on('click', function(){
        $scope.dataPerOne($scope.nums);
        $scope.$apply();
    })
});

