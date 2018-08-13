(function(){

var app=angular.module("App",[]);

app.controller("calculatebuisness",function($scope,calculate){

		$scope.number=function(numb){

					$scope.result=calculate.number(numb);


		};

		$scope.add=function(){

				$scope.result=calculate.add();


		};

		$scope.minus=function(){

				$scope.result=calculate.minus();


		};

		$scope.mul=function(){

				$scope.result=calculate.mul();


		};

		$scope.div=function(){

				$scope.result=calculate.div();


		};

		$scope.show=function(){

				$scope.result=calculate.show();


		};

		$scope.reseter=function(){

				$scope.result=calculate.reseter();


		};

});



}());