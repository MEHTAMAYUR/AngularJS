(function(){
	
var app=angular.module("App");

app.controller("welcomeuser",function($scope,userdetails){

$scope.user=userdetails.getuser();
$scope.messages="uaerSSS"
$scope.call=function(){
$scope.$broadcast('eventName',{messager:"userb"});
};

 


});

}());
