(function(){

var app=angular.module("App");

app.controller("loginuser",	function($scope,$location,logindetail){

	$scope.valid=function(){

		if(logindetail.login($scope.user,$scope.password)){
			$location.url('/welcome');
			$scope.$parent.homelink=true;
		}
	};
$scope.$parent.notlogged=true;
$scope.$parent.logged=false;

});

app.directive("userErrorr",function(){
 return{
 
  template:"Required and must be length between 5 to 12"
 }  
 });  


})();