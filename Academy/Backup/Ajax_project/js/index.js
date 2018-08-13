var load=function(){


var xhttp=new XMLHttpRequest();


xhttp.onreadystatechange=function(){

	if(xhttp.readyState==4 && xhttp.status==200){

		remedy(xhttp.responseText);

	}

}
xhttp.open("GET","http://www.w3schools.com/website/customers_mysql.php",true);
xhttp.send();

}


var remedy=function(response){

	var result=JSON.parse(response);

	var output="<table border='1'><tr><th>Name</th><th>City</th><th>Country</th></tr>";

	for (var i = 0;i<result.length; i++) {
	
	output=output+"<tr><td>"+result[i].Name+"</td><td>"+result[i].City+"</td><td>"+result[i].Country+"</td></tr>";

	}
	output=output+"</table>";
	document.getElementById('result').innerHTML=output;
}