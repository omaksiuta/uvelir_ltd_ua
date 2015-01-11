var lastposition = 0;
function totopRecalc()
{
	if ($(document).scrollTop() > 0)
	{
		if (!$('#totopscroller .panda-totopscroller-top').is(":visible"))
			$('#totopscroller .panda-totopscroller-top').fadeIn("slow");
	}
	else
	{
		if ($('#totopscroller .panda-totopscroller-top').is(":visible"))
			$('#totopscroller .panda-totopscroller-top').fadeOut("slow");
	}
	
	if ($(window).scrollTop() + $(window).height() == $(document).height() || lastposition > 0) {
		if ($('#totopscroller .panda-totopscroller-bottom').is(":visible"))
			$('#totopscroller .panda-totopscroller-bottom').fadeOut("slow");
	}
	else
	{
		if (!$('#totopscroller .panda-totopscroller-bottom').is(":visible"))
			$('#totopscroller .panda-totopscroller-bottom').fadeIn("slow");
	}
	
	if (lastposition>0)
	{
		if (!$('#totopscroller .panda-totopscroller-prev').is(":visible"))
			$('#totopscroller .panda-totopscroller-prev').fadeIn("slow");
	}
	else
	{
		if ($('#totopscroller .panda-totopscroller-prev').is(":visible"))
			$('#totopscroller .panda-totopscroller-prev').fadeOut("slow");
	}
}
$(function () {
	totopRecalc();
	$(window).scroll(function() {
		if ($('html, body').is(":animated"))
			return;
		totopRecalc();

	});

	$('#totopscroller .panda-totopscroller-top').click(function(e) {
		e.preventDefault();
		lastposition = $(document).scrollTop();
		$('html, body').animate({scrollTop:0}, 
		{
			duration: 'slow', 
			complete: function () {
				totopRecalc();
			}
		});
	});

	$('#totopscroller .panda-totopscroller-bottom').click(function(e) {
		e.preventDefault();
		lastposition = 0
		$('html, body').animate({scrollTop:$(document).height()}, 
		{
			duration: 'slow', 
			complete: function () {
				totopRecalc();
			}
		});
	});

	$('#totopscroller .panda-totopscroller-prev').click(function(e) {
		e.preventDefault();	
		$('html, body').animate({scrollTop:lastposition}, 
		{
			duration: 'slow', 
			complete: function () {
				lastposition = 0
				totopRecalc();
			}
		});
	});
});