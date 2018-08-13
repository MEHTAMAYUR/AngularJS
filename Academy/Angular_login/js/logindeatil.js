(function(){

var app=angular.module("App");

var logindetail=function(userdetails){

	var login=function(username,password){

			user=userdetails.getuser();

		if(username==user.userid && password==user.password){
			return true;
		}
		else{
			return false;
		}
	};

	return{

		login:login
	};
};


app.factory("logindetail",['userdetails',logindetail]);
})();