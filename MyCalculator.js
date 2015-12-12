function EnterNumber(num ){
	if($("input[name=res]").val() == "0" || $("input[name=res]").val() == fistNum )
	{
		$("input[name=res]").val() = num;
	}	
	else
		$("input[name=res]").val() += num;	
}
function Clear () {
	$("input[name=res]").val() = "0";
}
function Decimal(){

	var temp = ".";
	$("input[name=res]").val().add("temp");
}
function PlusMinus(){
	$("input[name=res]").val() *=-1;
}
var fistNum = 0;
var secondNum = 0;
var opperation;
var result = 0;

function CallOperration(oper)
{
	if( oper != "=" )
	{
	fistNum = $("input[name=res]").val();
	opperation = oper;
	}
	else
	{	
		if(opperation == '+')
		{
			secondNum = $("input[name=res]").val();
			$("input[name=res]").val() = +fistNum + +secondNum ;
		}
		else if(opperation == '*')
		{
			secondNum = $("input[name=res]").val();
			$("input[name=res]").val() = +fistNum * +secondNum ;
		}
		else if(opperation == '/')
		{
			secondNum = $("input[name=res]").val();
			if(secondNum == "0")
				{alert("делить на 0 нельзя")}
			else
			$("input[name=res]").val() = +fistNum / +secondNum ;
		}
		else if(opperation == '-')
		{
			secondNum = $("input[name=res]").val();
			$("input[name=res]").val() = +fistNum - +secondNum ;
		}
	}
}