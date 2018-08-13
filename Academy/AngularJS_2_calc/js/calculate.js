(function(){

var calculate=function(){

	var result=0;
	var result2=1;
	var previous="";
	var cacheresult="";
	var display="";
	var add=function(){

			if(previous!="" && previous!="add")
			{
				if(previous=="min")
				{
					result=result-parseFloat(cacheresult);
					result2=result;
					display=result;
					cacheresult="";
				}
				else if (previous=="mul")
				 {
					result2=parseFloat(cacheresult) * result2;	
					result=result2;
					display=result;
					cacheresult="";
				 }
				 else if(previous=="div")
				 {
					result2=result2/parseFloat(cacheresult);
					result=result2;
					display=result;	
					cacheresult="";
				 }


			}
			else if(cacheresult!="")
				{
				result=parseFloat(cacheresult) + result;
				result2=result;
				display=result;
				cacheresult="";
				}

			display=display + '+'	;
			
			previous="add";

			return display;

	}

	var mul=function(){


			if(previous!="" && previous!="mul")
			{
				if(previous=="min")
				{
					result=result-parseFloat(cacheresult);
					result2=result;
					display=result;
					cacheresult="";
				}
				else if (previous=="add")
				 {
					result=parseFloat(cacheresult) + result;	
					result2=result;
					display=result;
					cacheresult="";
				 }
				 else if(previous=="div")
				 {
					result2=result2/parseFloat(cacheresult);
					result=result2;	
					display=result;
					cacheresult="";
				 }


			}
			else if(cacheresult!="")
				{

				result2=parseFloat(cacheresult) * result2;	
				result=result2;
				display=result;
				cacheresult="";
				}


				display=display + '*'	;
				
				previous="mul";
				return display;

	}


	var div=function(){

			if(previous!="" && previous!="div")
			{
				if(previous=="min")
				{
					result=result-parseFloat(cacheresult);
					result2=result;
					display=result;
					cacheresult="";
				}
				else if (previous=="mul")
				 {
					result2=parseFloat(cacheresult) * result2;	
					result=result2;
					display=result;
					cacheresult="";
				 }
				 else if(previous=="add")
				 {
					result=parseFloat(cacheresult) + result;
					result2=result;
					display=result;
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
				display=result;
				cacheresult="";
				}

				display=display + '/'	;
				previous="div";
				return display;
	}




	var minus=function(){

			if(previous!="" && previous!="min")
			{
				if(previous=="add")
				{
					result=parseFloat(cacheresult) + result;
					result2=result;
					cacheresult="";
					ddisplay=result;
				}
				else if (previous=="mul")
				 {
					result2=parseFloat(cacheresult) * result2;	
					result=result2;
					cacheresult="";
					display=result;
				 }
				 else if(previous=="div")
				 {
					result2=result2/parseFloat(cacheresult);
					result=result2;	
					cacheresult="";
					display=result;
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
			display=result;
			}

			display=display + '-'	;
			
			previous="min";
			return display;

	}

	var show=function(){

		if(previous=="add")
		{
			if(cacheresult!="")
			{

				display=result+parseFloat(cacheresult);
				result=result+parseFloat(cacheresult);
				result2=result;
			}
			
			
			cacheresult="";
			previous="";

			return display;
		}

		else if(previous=="min")
		{
			if(cacheresult!="")
			{

				display=result-parseFloat(cacheresult);
				result=result-parseFloat(cacheresult);
				result2=result;

			}
			
			
			cacheresult="";
			previous="";
			return display;
		}

		else if(previous=="mul")
		{
			if(cacheresult!="")
			{

				display=result2*parseFloat(cacheresult);
				result2=result2*parseFloat(cacheresult);
				result=result2;

			}
			
			
			cacheresult="";
			previous="";
			return display;
		}

		else if(previous=="div")
		{
			if(cacheresult!="")
			{

				display=result2/parseFloat(cacheresult);
				result2=result2/parseFloat(cacheresult);
				result=result2;

			}
			
			
			cacheresult="";
			previous="";
			return display;
		}

		

	}


	var number=function(a){

			if(previous=="" && result==result2)
			{
				result=0;
				result2=1;
				display="";
			}
		
			cacheresult=cacheresult+a;

			

			display=display + a;

			return display;

	}

	var reseter=function(){

				result=0;
				result2=1;
				display="";
				cacheresult="";
				return display;

	}


	return{

			reseter:reseter,
			number:number,
			show:show,
			minus:minus,
			mul:mul,
			add:add,
			div:div

	};


};

var app=angular.module("App");
app.factory("calculate",calculate);

}());



