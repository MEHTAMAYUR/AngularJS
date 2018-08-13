(function(){
	
var app=angular.module("App");

app.controller("welcomeuser",function($scope,$http,userdetails){
	$scope.user={};
$scope.user.name="";
$scope.user=userdetails.getuser();

$scope.$parent.notlogged=false;
$scope.$parent.logged=true;
try{
	if($scope.user.name!="")
    $scope.$parent.name=$scope.user.name;  
}
  catch(err){


  }        

$http.get('Phone/phones.json').
success(function(response){
$scope.phones=response;

});


$scope.data1 = {
		series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
		data: [{
			x: "Sales",
			y: [100, 500, 0],
			tooltip: "this is tooltip"
		}, {
			x: "Not Sales",
			y: [300, 100, 100]
		}, {
			x: "Tax",
			y: [351]
		}, {
			x: "Not Tax",
			y: [54, 0, 879]
		}]
	};

	$scope.data2 = {
		series: ['<em>500</em> Keyboards', '<em>105</em> Laptops', '<em>100</em> TVs'],
		data: [{
			x: "Sales",
			y: [100, 500, 0],
			tooltip: "this is tooltip"
		}, {
			x: "Income",
			y: [300, 100, 100]
		}, {
			x: "Expense",
			y: [351, 50, 25]
		}]
	}

	$scope.chartType = 'bar';

	$scope.config1 = {
		labels: false,
		title: "Products",
		legend: {
			display: true,
			position: 'right'
		},
		innerRadius: 0
	};

	$scope.config2 = {
		labels: false,
		title: "HTML-enabled legend",
		legend: {
			display: true,
			htmlEnabled: true,
			position: 'right'
		},
		lineLegend: 'traditional'
	}

});

}());
