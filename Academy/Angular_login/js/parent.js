(function(){

var app=angular.module("App");

app.controller("parent",	function($scope,$location,logindetail){


		$scope.notlogged=false;
		$scope.logged=true;


		$scope.colorchange=function(link){
	if(link=="homelink"){
	$scope.homelink=true;
	$scope.chartlink=false;
	$scope.contactlink=false;
	}
	else if(link=="chartlink"){
	$scope.homelink=false;
	$scope.chartlink=true;
	$scope.contactlink=false;
	}

	else{
		$scope.homelink=false;
	$scope.chartlink=false;
	$scope.contactlink=true;
	}

}

});


})();