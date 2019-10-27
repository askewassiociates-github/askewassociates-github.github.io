$(document).ready(function() {
	$('#pageanim').cycle({
		timeout: 2000,
		speed: 500
	});
});

/*
// preload images...
var imagepreload=[];
for(var j = 1; j <= 14; j++){
	imagepreload[j] = new Image;
	imagepreload[j].src = "/images/new-"+j+".jpg";
}

$(document).ready(function() {
	// initialise image paths for animation...
	var initsrc = $("#pageanimimage").attr("src");
	for (var i = 1; i < 14; i++) {
		var nextsrc = initsrc.replace(i, i+1);
		// do animation with relevant images;
		doPageAnim(initsrc, nextsrc);
		initsrc = nextsrc;
	}
	// back to first image
	doPageAnim("/images/new-14.jpg", "/images/new-1.jpg");
});

function doPageAnim(initsrc, nextsrc) {
	// time variables for animation...
	var animtime = 1500;

	// fade out initial image	
	$("#pageanimimage").animate({ opacity: 'toggle'	}, animtime,
	// on completion of fade out, update src
		function () {
			$("#pageanimimage").attr("src", nextsrc);
		}
	)
	// fade in next image
	.animate({ opacity: 'toggle' }, animtime );
};

//$(document).ready(function() {
function doLogoAnim() {
	// set up position variables for animation...
	var screenwidth = $(document).width();
	var halfwidth = (screenwidth/2)+350;
	var fullscreen = halfwidth*2;
	var origposition = $("#logoanim").offset();
	var beginposition = origposition;
	beginposition.left += halfwidth;

	// time variables for animation...
	var halftime = 2000;
	var fulltime = 4000;

	// set up image paths for animation...
	var cursrc = $("#logolink").attr("src");
	var newsrc = cursrc.replace("_1","_2");


	$("#logoanim").animate({
	// first animation - drive 'car' left off screen...
			left: "-="+halfwidth
		}, halftime,
		function() {
	// on completion, change image, position off screen to the right...
			$("#logolink").attr("src", newsrc);
			$("#logoanim").offset(beginposition);

			$("#logoanim").animate({
	// second animation - drive car left across screen...
					left: "-="+fullscreen
				}, fulltime,
				function() {
	// on completion, change image back, position off screen to the right...
					$("#logolink").attr("src", cursrc);
					$("#logoanim").offset(beginposition);
					$("#logoanim").animate({
	// final animation - drive car back to center...
							left: "-="+halfwidth
						}, halftime
					);
				}

			);
		}
	);
//});
};
*/