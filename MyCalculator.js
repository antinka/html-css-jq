var fistNum = 0;
var secondNum = 0;
var opperation;
var result = 0;
var temp;
function EnterNumber(num ){
 
	if($("input[name=res]").val() == "" || $("input[name=res]").val() == fistNum){
		$("input[name=res]").val(num) ;
	}	
	else {
		temp = $("input[name=res]").val();
		temp += num;
		$("input[name=res]").val(temp) ;
	}
}
function Clear () {
	$("input[name=res]").val("");
}
function PlusMinus(){
	temp = $("input[name=res]").val();
	temp *=-1;
	$("input[name=res]").val(temp);
}
function Decimal(){
	temp = $("input[name=res]").val();
	temp += ".";
	$("input[name=res]").val(temp);
}

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
			temp = +fistNum + +secondNum 
			$("input[name=res]").val(temp) ;
		}
		else if(opperation == '*')
		{
			secondNum = $("input[name=res]").val();
			temp = +fistNum * +secondNum;
			$("input[name=res]").val(temp)  ;
		}
		else if(opperation == '/')
		{
			secondNum = $("input[name=res]").val();
			if(secondNum == "0")
				{alert("делить на 0 нельзя")}
			else
			{
				temp = +fistNum / +secondNum;
				$("input[name=res]").val(temp) ;
			
			}
		}
		else if(opperation == '-')
		{
			secondNum = $("input[name=res]").val();
			temp = +fistNum - +secondNum;
			$("input[name=res]").val(temp)  ;
		}
	}
}