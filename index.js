$('#rst-btn').mouseenter(function (){
	$(this).addClass("btn-danger");
	$(this).removeClass("btn-warning");
});
$('#rst-btn').mouseleave(function (){
	$(this).removeClass("btn-danger");
	$(this).addClass("btn-warning");
});
$('#start-button').mouseenter(function (){
	$(this).addClass("btn-primary");
	$(this).removeClass("btn-success");
});
$('#start-button').mouseleave(function (){
	$(this).removeClass("btn-primary");
	$(this).addClass("btn-success");
});
$('#start-boolean').mouseenter(function (){
	$(this).addClass("btn-primary");
	$(this).removeClass("btn-success");
});
$('#start-boolean').mouseleave(function (){
	$(this).removeClass("btn-primary");
	$(this).addClass("btn-success");
});
// function isWhole(num){
// 	return (num-Math.floor(num)!==0 && !isNan(num));
// }
function rangeRandom(min,max){
	return (Math.random()*(max-min)+min);
};
function rangeRandomWhole(min,max){
	return (Math.floor(Math.random()*(max-min+1)+min));
};
function generate(){
	//alert("q");
	$(".wait").css("visibility", "visible");
	var min = $("#input-min").val();
	var max = $("#input-max").val();	
	min = Number(min);
	max = Number(max); 
	if (isNaN(min)||isNaN(max)){
		alert("Incorrect input! Not a number!");
		$(".wait").css("visibility", "hidden");
		return;
	}
	if (min>=max){
		alert("Incorrect input! Maximum must be bigger than minimum!");
		$(".wait").css("visibility", "hidden");
		return;
	}
	var generatedValue;
	//var needWhole=$("#whole-checkbox").attr("checked");
	// var temp = $("#whole-checkbox").is(':checked');
	if ($("#whole-checkbox").is(':checked')){
		min=Math.ceil(min);
		max=Math.floor(max);
		generatedValue=rangeRandomWhole(min,max);
	} else generatedValue=rangeRandom(min,max);	
	$("#generated-value").text(generatedValue);
	$(".wait").css("visibility", "hidden");
};
function generateBoolean(){
	//alert("q");
	$(".wait").css("visibility", "visible");
	$("#generated-boolean").text(!!(rangeRandomWhole(0,1)));
	$(".wait").css("visibility", "hidden");
};