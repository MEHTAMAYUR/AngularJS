(function(){
	
var app=angular.module("App");

app.controller("welcomeuser",function($scope,userdetails){

$scope.user=userdetails.getuser();

});

}());
