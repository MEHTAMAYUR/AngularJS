

(function(){
var userdetails=function(){

  var user;
  var setuser=function(userdata){

    user=userdata;

  };

  var getuser=function(){

    return user;
  } ;

  return{

    setuser:setuser,
    getuser:getuser

  };


}

var app=angular.module("App");

app.factory("userdetails",userdetails);


})();

