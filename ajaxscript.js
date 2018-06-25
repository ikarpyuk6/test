window.onload=function () {
	var send=document.getElementById('send');
	send.onclick=function(){
		var xhr=new XMLHttpRequest();
		var value1=document.getElementById('value1').value;
		var value2=document.getElementById('value2').value;
		var str='/send?value1='+value1+'&value2='+value2;
		xhr.open('GET',str,true);
		xhr.send();

		xhr.onreadystatechange=function(){
		if(xhr.readyState !=4)
				return;
		if(xhr.status==200){
			var res=document.getElementById('res');
			res.innerHTML=xhr.responseText
		}
		else 
			res.innerHTML=xhr.status+':'+xhr.statusText	
		}
		
	}
	send1.onclick=function(){
		var value3=document.getElementById('value3').value;
		var value4=document.getElementById('value4').value;
		var obj={
			prop1:value3,
			prop2:value4

		}
		var objjson=JSON.stringify(obj);

		var xhr=new XMLHttpRequest();
		
		
		xhr.open('POST','/send1',true);
		xhr.setRequestHeader('Content-type','application/json');
		xhr.send(objjson);

		xhr.onreadystatechange=function(){
		if(xhr.readyState !=4)
				return;
		if(xhr.status==200){
			var res=document.getElementById('res1');
			res.innerHTML=xhr.responseText
		}
		else 
			res.innerHTML=xhr.status+':'+xhr.statusText	
		}
		
	}
}