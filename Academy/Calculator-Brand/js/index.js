
var ret=function(){

	return false;
}

var result=0;
var result2=1;
var previous="";
var cacheresult="";

var add=function(){

		if(previous!="" && previous!="add")
		{
			if(previous=="min")
			{
				result=result-parseFloat(cacheresult);
				result2=result;
				document.calc.result.value=result;
				cacheresult="";
			}
			else if (previous=="mul")
			 {
				result2=parseFloat(cacheresult) * result2;	
				result=result2;
				document.calc.result.value=result;
				cacheresult="";
			 }
			 else if(previous=="div")
			 {
				result2=result2/parseFloat(cacheresult);
				result=result2;
				document.calc.result.value=result;	
				cacheresult="";
			 }


		}
		else if(cacheresult!="")
			{
			result=parseFloat(cacheresult) + result;
			result2=result;
			document.calc.result.value=result;
			cacheresult="";
			}

		document.calc.result.value=document.calc.result.value + '+'	;
		
		previous="add";


}

var mul=function(){


		if(previous!="" && previous!="mul")
		{
			if(previous=="min")
			{
				result=result-parseFloat(cacheresult);
				result2=result;
				document.calc.result.value=result;
				cacheresult="";
			}
			else if (previous=="add")
			 {
				result=parseFloat(cacheresult) + result;	
				result2=result;
				document.calc.result.value=result;
				cacheresult="";
			 }
			 else if(previous=="div")
			 {
				result2=result2/parseFloat(cacheresult);
				result=result2;	
				document.calc.result.value=result;
				cacheresult="";
			 }


		}
		else if(cacheresult!="")
			{

			result2=parseFloat(cacheresult) * result2;	
			result=result2;
			document.calc.result.value=result;
			cacheresult="";
			}


			document.calc.result.value=document.calc.result.value + '*'	;
			
			previous="mul";

}


var div=function(){

		if(previous!="" && previous!="div")
		{
			if(previous=="min")
			{
				result=result-parseFloat(cacheresult);
				result2=result;
				document.calc.result.value=result;
				cacheresult="";
			}
			else if (previous=="mul")
			 {
				result2=parseFloat(cacheresult) * result2;	
				result=result2;
				document.calc.result.value=result;
				cacheresult="";
			 }
			 else if(previous=="add")
			 {
				result=parseFloat(cacheresult) + result;
				result2=result;
				document.calc.result.value=result;
				cacheresult="";	
			 }


		}
		else if(cacheresult!="")
			{
				if(result!=result2)
				{
					result2=parseFloat(cacheresult) / result2;
					result=result2;	
				}
				else
				{
				   result2=result2/parseFloat(cacheresult);
					result=result2;	
				}
			document.calc.result.value=result;
			cacheresult="";
			}

			document.calc.result.value=document.calc.result.value + '/'	;
			previous="div";
}




var minus=function(){

		if(previous!="" && previous!="min")
		{
			if(previous=="add")
			{
				result=parseFloat(cacheresult) + result;
				result2=result;
				cacheresult="";
				document.calc.result.value=result;
			}
			else if (previous=="mul")
			 {
				result2=parseFloat(cacheresult) * result2;	
				result=result2;
				cacheresult="";
				document.calc.result.value=result;
			 }
			 else if(previous=="div")
			 {
				result2=result2/parseFloat(cacheresult);
				result=result2;	
				cacheresult="";
				document.calc.result.value=result;
			 }


		}
		else if(cacheresult!="")
		{
			if(result!=result2)
			result=parseFloat(cacheresult) - result;
			else
			result=result-parseFloat(cacheresult);

		result2=result;
		cacheresult="";
		document.calc.result.value=result;
		}

		document.calc.result.value=document.calc.result.value + '-'	;
		
		previous="min";

}

var show=function(){

	if(previous=="add")
	{
		if(cacheresult!="")
		{

			document.calc.result.value=result+parseFloat(cacheresult);
			result=result+parseFloat(cacheresult);
			result2=result;
		}
		
		
		cacheresult="";
		previous="";
	}

	else if(previous=="min")
	{
		if(cacheresult!="")
		{

			document.calc.result.value=result-parseFloat(cacheresult);
			result=result-parseFloat(cacheresult);
			result2=result;

		}
		
		
		cacheresult="";
		previous="";
	}

	else if(previous=="mul")
	{
		if(cacheresult!="")
		{

			document.calc.result.value=result2*parseFloat(cacheresult);
			result2=result2*parseFloat(cacheresult);
			result=result2;

		}
		
		
		cacheresult="";
		previous="";
	}

	else if(previous=="div")
	{
		if(cacheresult!="")
		{

			document.calc.result.value=result2/parseFloat(cacheresult);
			result2=result2/parseFloat(cacheresult);
			result=result2;

		}
		
		
		cacheresult="";
		previous="";
	}

	

}


var number=function(a){

		if(previous=="" && result==result2)
		{
			result=0;
			result2=1;
			document.calc.result.value="";
		}
	
		cacheresult=cacheresult+a;

		

		document.calc.result.value=document.calc.result.value + a;

}

var reseter=function(){

			result=0;
			result2=1;
			document.calc.result.value="";
			cacheresult="";

}