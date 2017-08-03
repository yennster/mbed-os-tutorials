$(function() {

	$('a.nav-link').bind('click', function() {
		var pageID = $(this).attr('id');
		console.log(pageID);
		$(".nav-link").removeClass('active');
		$("#" + pageID + ".nav-link").addClass('active');

		$("div.tutorial").siblings().collapse('hide');
		$("div#" + pageID).collapse('show');
	});

    $('a.nav-link').first().click();

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