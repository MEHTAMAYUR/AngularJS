

(function(){
var app=angular.module("App");

  app.controller("formvalid",function($scope,$location,userdetails) {
     $scope.namepattern=/^[A-z]+$/;
           $scope.zippattern=/^[0-9]+$/
           var usera={};
     

       $scope.valid=function(){
            usera.userid=$scope.use;
            usera.password=$scope.password;
             usera.name=$scope.name;
           usera.address=$scope.address;
               usera.country=$scope.country;
              usera.zipcode=$scope.zipcode;
            usera.emails=$scope.emails;
              usera.gender=$scope.gender;
              usera.english=$scope.english;
              usera.nonenglish=$scope.nonenglish;
          userdetails.setuser(usera);
          $location.url("/welcome");

       };

       $scope.count=0;
       $scope.$watch('password',function(){

          $scope.count+=1;

       });
});


 app.directive("userError",function(){
 return{
 
  template:"Required and must be length between 5 to 12"
 }  
 });  

app.directive("genderRadio",function(){
 return{
 
  restrict: "E",
  template: "<input type='radio' ng-model='gender' name='male' value='male' ng-required='!gender'>Male <input type='radio' ng-model='gender'  ng-required='!gender' value='female' name='female'>Female<label ng-show='(!(calc.male.$valid || calc.female.$valid)) && (calc.male.$touched || calc.female.$touched)'>Please select gender</label>"
 }  
 }); 

app.directive("languageCheck",function(){
 return{
 
  restrict: "E",
  template: "<input type='checkbox' name='english' ng-model='english' ng-required='!nonenglish'> English<input type='checkbox' name='nonenglish' ng-model='nonenglish' ng-required='!english'>Non English <label ng-show='!(calc.english.$valid || calc.english.$valid) && (calc.english.$touched || calc.english.$touched)'>Please select Language</label>"
 }  
 });

}());


  



 



