$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 

    $("#save").click(function() {
    	if ($("#star").hasClass("glyphicon-star-empty")) {
    		$("#star").removeClass("glyphicon-star-empty");
    		$("#star").addClass("glyphicon-star");
    	}
    	else {
    		$("#star").removeClass("glyphicon-star");
    		$("#star").addClass("glyphicon-star-empty");
    	}
    });

    $("#signUp").click(function() {
        $("timeSlots").hide();
    });

    $("input[name='optradio']").change(function(){
        $("#noSelection").hide();
    });

    $('#signUp').on('click', function (ev) {
        if ($("input:radio[name='optradio']").is(":checked")) {
            $("#myModal").modal("show");
            $("#timeSlots").html("You've signed up for " + $("input[name='optradio']:checked").val() + "!");
   html  }
        else {
            $("#noSelection").show();
        }
    });
});