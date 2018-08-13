(function(){

var app=angular.module("App",["ngRoute"]);



app.config(['$routeProvider',function($routeProvider){

$routeProvider
.when("/main",{
	templateUrl:"form.html",
	controller:"formvalid"

})
.when("/welcome",{
	templateUrl:"welcomeuser.html",
	controller:"welcomeuser"

})
.otherwise({
	redirectTo:"/main"
});


}]);


}());