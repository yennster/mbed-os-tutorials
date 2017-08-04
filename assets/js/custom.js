$(function() {

	if (window.location.pathname=="/mbed-os-tutorials/" ) {
		window.location.href = '/mbed-os-tutorials/api'; 
	}

	if($("#category").html() != (null || undefined)) {
		document.title = $("#category").html() + " · mbed OS Tutorials";
	}
	

	$('.nav-link').bind('click', function() {
		var ID = $(this).attr('id');
		console.log(ID);
		$(".nav-link").removeClass('active');
		$("#" + ID + ".nav-link").addClass('active');

		

		$("div.tutorial").siblings().collapse('hide');
		$("div#" + ID).collapse('show');
	});

	window.addEventListener("load", function(){
		$('ul.nav-pills').children().first().children().first().click();
		console.log($('ul.nav-pills').children().first().children().first());
	});

});




/**
$('.nav-link a').bind('click', function(e) {
	$(this).parent.removeClass('active');
	$(this).parent.addClass('active');
	var pageID = $(this).attr('id');
	var pageTitle = $(this).text();
	$("#tutorial-content").load("/mbed-os-tutorials/" + pageID);
	$("#tutorial-title").html(pageTitle);
});​
**/