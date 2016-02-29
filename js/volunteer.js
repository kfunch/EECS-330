$(document).ready(function(){
    $( ".datepicker" ).datepicker();
    
    $('[data-toggle="tooltip"]').tooltip(); 

	$("#categories input:checkbox").change(function() {
	    checkFilters();
	});

	$("#skills input:checkbox").change(function() {
    	checkFilters();
	});

	$(".datepicker").change(function() {
		checkFilters();
	});
});

function checkFilters() {
	var d = dates();
	var c = checkboxes();
	if (d == "all") {
		if (c == "fair") {
			$(".fakeEvent").hide();
			$("#streetFair").show();
			$("#noOpportunities").hide();
		}
		else {
			$("tr").show();
			$("#noOpportunities").hide();
		}
	}
	else if (d == "none") {
		$("tr").hide();
		$("#noOpportunities").show();
	}
	else {
		$(".fakeEvent").hide();
		$("#streetFair").show();
		$("#noOpportunities").hide();
	}
}

function dates() {
    var to = $("#to").val().split("/");
	var from = $("#from").val().split("/");

	if ($("#to").val() == "") {
		if ($("#from").val() == "") {
			return "all";
		}
		else if (parseInt(from[2]) < 2016 ||(parseInt(from[2]) == 2016 && (parseInt(from[0]) < 5 || (parseInt(from[0]) == 5 && parseInt(from[1]) <= 23)))) {
			return "fair";
		}
		else {
			return "none";
		}
	}
	else if ($("#from").val() == "") {
		if (parseInt(to[2]) > 2016 ||(parseInt(to[2]) == 2016 && (parseInt(to[0]) > 5 || (parseInt(to[0]) == 5 && parseInt(to[1]) >= 23)))) {
			return "fair";
		}
		else {
			return "none";
		}
	}
	else {
		if ((parseInt(to[2]) > 2016 ||(parseInt(to[2]) == 2016 && (parseInt(to[0]) > 5 || (parseInt(to[0]) == 5 && parseInt(to[1]) >= 23)))) 
			&& (parseInt(from[2]) < 2016 ||(parseInt(from[2]) == 2016 && (parseInt(from[0]) < 5 || (parseInt(from[0]) == 5 && parseInt(from[1]) <= 23))))) {
			return "fair";
		}
		else {
			return "none";
		}
	}
}

function checkboxes() {
	if ($("#skills input:checkbox:checked").length > 0 || $("#categories input:checkbox:checked").length > 0)
	{
	    return "fair";
	}
	else
	{
	   return "all";
	}
}