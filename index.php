<html>
<head>
<script Language="JavaScript"  src="script.js"></script>
<script Language="JavaScript">
window.onload = function () {get_survey_form('form_id','form_div');}
</script>
<!--<link href="style.css" rel="stylesheet" type="text/css">-->
<?$counter=file("Number.txt");$number=$counter[0]+0;?>

<body><input type="hidden" id="form_id" value="<?echo $number?>">
<!--<input type="button" onClick="get_survey_form('form_id','form_div')" value="Получить"/>-->
<div id="form_div">загрузить сюда</div>

</body>
</head>
</html>
