var Service_url = "http://localhost/Kurs_5/Experiment_4_kurs/Service/";
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
}
