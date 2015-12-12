function EnterNumber(num ){
	var calculator = document.calcul;
	if(calculator.res.value == "0" || calculator.res.value == fistNum  )
	{
		calculator.res.value = num;
	}	
	else
		calculator.res.value += num;	
}
function Clear () {
	var calculator = document.calcul;
	calculator.res.value = "0";
}
function Decimal(){
	var calculator = document.calcul;
	var temp = calculator.res.value;
	temp =".";
	calculator.res.value += temp;
}
function PlusMinus(){
	var calculator = document.calcul;
	calculator.res.value *=-1;
}
var fistNum = 0;
var secondNum = 0;
var opperation;
var result = 0;

function CallOperration(oper)
{
	var calculator = document.calcul;
	if( oper != "=" )
	{
	fistNum = calculator.res.value;
	opperation = oper;
	//calculator.res.value = 0;
	}
	else
	{	
		if(opperation == '+')
		{
			secondNum = calculator.res.value;
			calculator.res.value = +fistNum + +secondNum ;
		}
		else if(opperation == '*')
		{
			secondNum = calculator.res.value;
			calculator.res.value = +fistNum * +secondNum ;
		}
		else if(opperation == '/')
		{
			secondNum = calculator.res.value;
			if(secondNum == "0")
				{alert("делить на 0 нельзя")}
			else
			calculator.res.value = +fistNum / +secondNum ;
		}
		else if(opperation == '-')
		{
			secondNum = calculator.res.value;
			calculator.res.value = +fistNum - +secondNum ;
		}
	}
}
	

/*function Result(){
	var calculator = document.calcul;
	calculator.res.value = eval(calculator.res.value)
}*/