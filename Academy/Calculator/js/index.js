
var ret=function(){

	return false;
}

var add=function(){

var r=document.calc.a.valueAsNumber +document.calc.b.valueAsNumber;

document.calc.result.value=r;

}

var mul=function(){

var r=document.calc.a.valueAsNumber * document.calc.b.valueAsNumber;

document.calc.result.value=r;

}


var div=function(){

var r=document.calc.a.valueAsNumber / document.calc.b.valueAsNumber;

document.calc.result.value=r;

}

var module=function(){

var r=document.calc.a.valueAsNumber % document.calc.b.valueAsNumber;

document.calc.result.value=r;

}


var minus=function(){

var r=document.calc.a.valueAsNumber - document.calc.b.valueAsNumber;

document.calc.result.value=r;

}