
var flag=0;
var valid=function(){

		
		
			error('user');			
		
		
		
			error('passwordl');			
		
		
			error('namel');			
		
		
		
			error('countryl');			
		
			error('zipcodel');			
			
	
			error('emaill');			
		
		
			error('genderl');			
	
		
			error('checkl');			
		

		if(flag==1)
		{
			return false;
		}
}


var error=function(error_id){

	if(error_id=="user")
	{
		if(document.getElementById('user_id').value=="" || !(document.getElementById('user_id').value.length>=5 && document.getElementById('user_id').value.length<=12))
		{
			document.getElementById(error_id).innerHTML="Required and must be length between 5 to 12";
			flag=1;
		}	
		
	}
	if(error_id=="passwordl")
	{
		if(document.getElementById('password').value=="" ||!(document.getElementById('password').value.length>=7 && document.getElementById('user_id').value.length<=12))
		{
			document.getElementById(error_id).innerHTML="Required and must be length between 7 to 12";
			flag=1;
		}
		
	}
	if(error_id=="namel")
	{
		 if(document.getElementById('name').value==""||checkname(document.getElementById('name').value))
		 {
			document.getElementById(error_id).innerHTML="Required and Alphabates only";
			flag=1;
		 }	
		
	}
	if(error_id=="countryl")
	{
		 if(document.getElementById('country').value=="(Please Select Country)")
		{
			document.getElementById(error_id).innerHTML="Required must select country";
			flag=1;
		}
		
	}
	if(error_id=="zipcodel")
	{
		 if(document.getElementById('zipcode').value=="" || checkzip(document.getElementById('zipcode').value))
		{		
			document.getElementById(error_id).innerHTML="Required and must be numeric";
			flag=1;
		}
	}
	if(error_id=="emaill")
	{
	    if(document.getElementById('email').value=="" || !(checkmail(document.getElementById('email').value)))
		{
			document.getElementById(error_id).innerHTML="Required and must be valid email";
			flag=1;
		}
	}
	if(error_id=="genderl")
	{
		 if(!(document.getElementById('male').checked || document.getElementById('female').checked))
		{
			document.getElementById(error_id).innerHTML="Required";
			flag=1;
		}
	}
	if(error_id=="checkl")
	{
		 if(!(document.getElementById('english').checked || document.getElementById('nonenglish').checked))
		{
			document.getElementById(error_id).innerHTML="Required";
			flag=1;
		}
	}
	document.getElementById(error_id).style.color="red";
}


var checkname=function(name) {
	
	var pattern=/[^A-z]/g;


	return pattern.test(name);

	}


var removererror=function(error_id){

		document.getElementById(error_id).innerHTML="";
		flag=0;
}


var checkzip=function(name) {
	
	var pattern=/[^0-9]/g;


	return pattern.test(name);

	}

var checkmail=function(name) {
	
	var pattern=/[A-z,0-9,_]+@[A-z]+\.com/ig;


	return pattern.test(name);

	}