(function(){

var app=angular.module("App",["ngRoute",'angularCharts']);



app.config(['$routeProvider',function($routeProvider){

$routeProvider
.when("/main",{
	templateUrl:"login.html",
	controller:"loginuser"

})
.when("/register",{
	templateUrl:"form.html",
	controller:"formvalid"

})
.when("/welcome",{
	templateUrl:"welcomeuser.html",
	controller:"welcomeuser"

})
.when("/chart",{
	templateUrl:"chart.html",
	controller:"welcomeuser"

})
.when("/contact",{
	templateUrl:"contact.html",
	controller:"welcomeuser"

})
.otherwise({
	redirectTo:"/main"
});


}]);


}());