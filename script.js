var Service_url = "http://nellit-tests.comxa.com/Service/";
function get_server_answer(event,div_id)
{
	if (window.FormData) 
	{
		var Form = document.getElementById('ssform');
		event.preventDefault();
		var data = new FormData(Form);
		//alert(data);
		var xhr = new XMLHttpRequest();
		var url = Form.getAttribute('action');
		xhr.open('post', url);
		xhr.send(data);
		xhr.onreadystatechange = function() 
		{	
			if (xhr.readyState == 4 && xhr.status == 200) 
			{				
			resText = xhr.responseText;
			document.getElementById(div_id).innerHTML = resText;
			}		
		}
	};
	return false;
};

function get_survey_form(input_id,div_id)
{
	var xhr = new XMLHttpRequest();
	var form_id = document.getElementById(input_id).value
	xhr.open("POST",Service_url,false);
	xhr.setRequestHeader("Content-type","text/xml");
	xhr.send("<request action='get_form'><id>"+form_id+"</id></request>");
	resText = xhr.responseText
	//alert(resText);
	document.getElementById(div_id).innerHTML = resText;
	var Form = document.getElementById('ssform');
	Form.setAttribute('onsubmit', 'get_server_answer(event,\''+div_id+'\');')
}
