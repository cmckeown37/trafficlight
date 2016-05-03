

$(document).ready(function (){

	$("#redButton").hover(function(){
		$("#red").css("background-color", "red");

	});

	$("#yellowButton").hover(function(){
		$("#yellow").css("background-color", "yellow");

	});

	$("#greenButton").hover(function(){
		$("#green").css("background-color", "lime");

	});


	$("#redButton").mouseout(function(){
		$("#red").css("background-color", "darkred");

	});


	$("#yellowButton").mouseout(function(){
		$("#yellow").css("background-color", "darkkhaki");

	});


	$("#greenButton").mouseout(function(){
		$("#green").css("background-color", "darkgreen");

	});



});