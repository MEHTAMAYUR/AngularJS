

(function(){
var app=angular.module("App");

  app.controller("formvalid",function($scope,$location,userdetails) {
     $scope.namepattern=/^[A-z]+$/;
           $scope.zippattern=/^[0-9]+$/
           var usera={};
     
$scope.$parent.notlogged=true;
$scope.$parent.logged=false;

       $scope.valid=function(){
            usera.userid=$scope.use;
            usera.password=$scope.password;
            $scope.name=($scope.name.charAt(0).toUpperCase()+ $scope.name.slice(1));
            $scope.lname=$scope.lname.charAt(0).toUpperCase()+ $scope.lname.slice(1);
             usera.name=$scope.name+" "+$scope.lname;
              usera.city=$scope.city;
              usera.addresstypeP=$scope.permanant;
           
              usera.addresstypeT=$scope.temporary;
           usera.address=$scope.address;
               usera.country=$scope.country;
              usera.zipcode=$scope.zipcode;
            usera.emails=$scope.emails;
              usera.gender=$scope.gender;
              usera.english=$scope.english;
              usera.nonenglish=$scope.nonenglish;
          userdetails.setuser(usera);
          $location.url("/main");

       };

});


 app.directive("userError",function(){
 return{
 
  template:"Required and must be length between 5 to 12"
 }  
 });  

app.directive("genderRadio",function(){
 return{
 
 
  template: "<label class='login-font-warn' ng-class=\"{'disabled':((calc.male.$valid || calc.female.$valid) || !(calc.male.$touched || calc.female.$touched)),'enable':(!(calc.male.$valid || calc.female.$valid) && (calc.male.$touched || calc.female.$touched))}\">Please select gender</label>"
 }  
 }); 

app.directive("languageCheck",function(){
 return{
  

  restrict: "E",
  template: "<label class='login-font-warn'  ng-class=\"{'disabled':((calc.english.$valid || calc.nonenglish.$valid)|| !(calc.english.$touched || calc.nonenglish.$touched)),'enable':(!(calc.english.$valid || calc.nonenglish.$valid) && (calc.english.$touched || calc.nonenglish.$touched))}\">Please select Language</label>"
 }  
 });

app.directive("passwordCheck",function(){
 return{
 
      require:'ng-Model',

      scope: {
           referPass:'=passwordCheck'
            },
  
      link:function(scope,elm,attrs,ctrl){

             ctrl.$parsers.unshift(function(viewValue,$scope){

                    if(scope.referPass!=viewValue){
                        ctrl.$setValidity('noMatching',false);
                      }
                    else{
                       ctrl.$setValidity('noMatching',true);
                    }
                    return viewValue;
            });

             scope.$watch("referPass",function(value){

                           if(value!=ctrl.$viewValue){
                                 ctrl.$setValidity('noMatching',false);
                                }
                             else{
                                    ctrl.$setValidity('noMatching',true);
                                 }
             });

        }
   }  

 });





})();


  



 



