function CallFRes()
 {	  
	
   var points = 0,tempBal = 0,procent=0;
// alert($("input[name=kv1]:checked").val());
	if($("input[name=kv1]")[0].checked == true){points+=2;}
	if($("input[name=kv2]")[2].checked == true){points+=2;}
	if($("input[name=kv3]")[3].checked == true){points+=2;}
	
	tempBal = 0;
	for(i=0; i<$("input[name=kv5]").length; i++){
		if($("input[name=kv5]")[i].checked == true ){
			if(i==0 || i==1 ){
				tempBal+=1;
			}  
			else 
				tempBal-=1;
		}
	}
	if(tempBal > 0){
	points+=tempBal;
	}
	tempBal = 0;
	for(i=0; i<$("input[name=kv4]").length; i++){
		if($("input[name=kv4]")[i].checked == true ){
			if(i==1 || i==3 ){
				tempBal+=1;
			}  
			else 
				tempBal-=1;
		}
	}
	if(tempBal > 0){
	points+=tempBal;
	}
	
	procent = points * 10;
	alert(" вы набрали "+points + " балла(ов), ваш процент готовности "+ procent + "%");

}
