$(document).ready(function(){

// the img_color array contains the background image names, and the background colors used in 
// fullscreen or when doing a mouseover of the site title, plus a description of the photo. 
// 
// !!  be careful not to use double quotation marks " within the description as this will break the site, 
//     use single quotation marks instead: <a href='http://maartenottens.com'>link</a>

	var img_color = new Array(
		[	"1e_1-2.jpg","#FFFF91",
			"<p><a href='http://mmott.com'>about</a> no 1</p>"],
		[	"cfsem-big.jpg","#FFFF91",
			"<p>about no 2</p>"],
		[	"IMG_2297-2.jpg","#FFFF91",
			"<p>about no 3</p>"],
		[	"Slide28.JPG","#FFFF91",
			"<p>about no 4</p>"],
		[	"wires2_4_21_00.jpg","#FFFF91",
			"<p>about no 5</p>"],
		[	"cfsem4.jpg","#060606",
			"<p>about no 6</p>"],
		[	"IMG_2347-2.jpg","#883B17",
			"<p>about no 7</p>"],
		[	"IMG_6057-2.jpg","#6D7C27",
			"<p>about no 8</p>"],
		[	"RP-Picture338.jpg","#861713",
			"<p>about no 9</p>"],
		[	"SG-IMG_6930-2.jpg","#6E1018",
			"<p>about no 10</p>"],
		[	"SG-IMG_7342-2.jpg","#2A3135",
			"<p>about no 11</p>"],
		[	"SG-IMG_7360-2.jpg","#4D924A",
			"<p>about no 12</p>"],
		[	"SG-IMG_7978-2.jpg","#AA762E",
			"<p>about no 13</p>"],
		[	"wires_la_2000_4-2.jpg","#250F06",
			"<p>about no 14</p>"]
	);
	
// the head_text array contains short text that will rotate on page load in the top of a page. 
//
// !!  be careful not to use double quotation marks " within the description as this will break the site, 
//     use single quotation marks instead: <a href='http://maartenottens.com'>link</a>

	var head_text = new Array(
		"<p>STS Reaches for the stars.</p>",
		"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
		"<p>Consectetur adipiscing elit. Pellentesque sit amet turpis enim.</p>"
	);

// get a random img and a random text
	
	var rn = Math.floor(Math.random()*(img_color.length));
	var rn2 = Math.floor(Math.random()*(head_text.length));

// default vraiables

	var imgwidth = 0;
	var imgheight = 0;
	var _imgratio = 0;
	var imgsize = 'back';
	var activewidth = $('li.selected a').width() + 20;

// make selected menu item and mouseover menu item transparant by shifting the position of the img in the background

	$('li.selected').css('background-position','-'+ activewidth +'px 0');

	$('#menu li:not(.selected) a').hover(function(){
		var awidth = $(this).width() + 20;
		$(this).closest('li').css('background-position','-'+ awidth +'px 0');
	},function(){
		$(this).closest('li').css('background-position','0 0');
	});

// use background color to set link colors and title mouseover colors
	function colora(color){
		$('#content a, #portal-breadcrumbs a, #footer a, #sidebar ul.navTree a').css('color',color);
	};
	colora(img_color[rn][1]);
	$('#sidebar a, #ststitle a, #ucdlogo a').hover(function() {
		$(this).css({'background-color': img_color[rn][1]});
	}, function(){
		$(this).css({'background-color': 'transparent'});
	});
	$('#content a, #portal-breadcrumbs a, #footer a, #sidebar ul.navTree a').hover(function() {
		$(this).css({'background-color': img_color[rn][1],'color':'#fff'});
	}, function(){
		$(this).css({'background-color': 'transparent','color':img_color[rn][1]});
	});

// set initial background image, color and info text
	$('#headertext').empty().prepend(head_text[rn2]);
	$('#bg-info .info').prepend(img_color[rn][2]);
	$('#bg p').fadeTo(0, 0.01);
	$('#bg').css('background-color',img_color[rn][1]);
	$('#bg p').prepend('<img src="imgs/'+img_color[rn][0]+'">');
	sizeimage(1,1);
	
// fade in image once it is loaded
	$('#bg img').load(function() {
	  // Handler for .load() called.
		imgwidth = $('#bg img').attr('width');
		imgheight = $('#bg img').attr('height');
		_imgratio =  imgwidth / imgheight;
		sizeimage(_imgratio,1);
		$('#bg p').fadeTo(200,1);
	});


// size image in background
	
	function sizeimage(imgratio,resize){
		var windowwidth = $(window).width();
		var showwidth = (windowwidth - 1000)/2 + (1000);
		var showheight = $(window).height();
		var showratio = showwidth / showheight;
		$('#bg').css({'width':showwidth+'px','height':showheight+'px'});
		if ( imgratio < showratio ) {
			// use width
			var setheight = showwidth / imgratio;
			if (resize == 1) {
				$('#bg img').width(showwidth+'px').height(setheight+'px');
			} else {
				$('#bg img').css({width:showwidth+'px',height:setheight+'px',marginTop:0,marginLeft:0}, 200);
			}
		} else {
			// use height
			var setwidth = showheight * imgratio;
			if (resize == 1) {
				$('#bg img').width(setwidth+'px').height(showheight+'px');
			} else {
				$('#bg img').css({width:setwidth+'px',height:showheight+'px',marginTop:0,marginLeft:0}, 200);
			}
		}
	};
	
// size image in fullscreen mode

	function sizeimage2(imgratio,resize){
		var windowwidth = $(window).width();
		var showwidth = (windowwidth * 0.9);
		var windowheight = $(window).height();
		var showheight = (windowheight * 0.9);
		var showratio = showwidth / showheight;
		$('#bg').css({'width':windowwidth+'px','height':windowheight+'px'});
		if ( imgratio < showratio ) {
			// use height
			var setwidth = showheight * imgratio;
			var showtop = ((windowheight-showheight)/2);
			var showleft = ((windowwidth-setwidth)/2);
			if (resize == 1) {
				$('#bg img').width(setwidth+'px').height(showheight+'px');
			} else {
				$('#bg img').css({width:setwidth+'px',height:showheight+'px',marginTop:showtop+'px',marginLeft:showleft+'px',}, 100);
			}
		} else {
			// use width
			var setheight = showwidth / imgratio;
			var showtop = ((windowheight-setheight)/2);
			var showleft = ((windowwidth-showwidth)/2);
			if (resize == 1) {
				$('#bg img').width(showwidth+'px').height(setheight+'px');
			} else {
				$('#bg img').css({width:showwidth+'px',height:setheight+'px',marginTop:showtop+'px',marginLeft:showleft+'px'}, 100);
			}
		}
	};

// resize image upon window resize	
	
	$(window).resize(function() {
		if (imgsize == 'full') {
			sizeimage2(_imgratio,1);
		} else { 
			sizeimage(_imgratio,1);
		}
	});

// next image in fullscreen mode 
	
	$('#bg.actif img').live('click', function() {
		$('#bg p').fadeTo(0, 0.01);
		
		if (rn == (img_color.length - 1)) {
			rn = 0;
		} else {
			rn = rn + 1;
		}
		$('#bg').css('background-color',img_color[rn][1]);
		$('#bg p').empty().prepend('<img src="imgs/'+img_color[rn][0]+'">');
		$('#bg-info .info').empty().prepend(img_color[rn][2]);
		colora(img_color[rn][1]);
	
		$('#bg img').load(function() {
			imgwidth = $('#bg img').attr('width');
			imgheight = $('#bg img').attr('height');
			_imgratio =  imgwidth / imgheight;
			sizeimage2(_imgratio,0);
			$('#bg p').fadeTo(200,1);
		});	
	});

// next image in background mode

	$('#bg.inactif img').live('click', function() {
		$('#bg p').fadeTo(0, 0.01);
		
		if (rn == (img_color.length - 1)) {
			rn = 0;
		} else {
			rn = rn + 1;
		}
		$('#bg').css('background-color',img_color[rn][1]);
		$('#bg p').empty().prepend('<img src="imgs/'+img_color[rn][0]+'">');
		$('#bg-info .info').empty().prepend(img_color[rn][2]);
		colora(img_color[rn][1]);
	
		$('#bg img').load(function() {
			imgwidth = $('#bg img').attr('width');
			imgheight = $('#bg img').attr('height');
			_imgratio = imgwidth / imgheight;
			sizeimage(_imgratio,0);
			$('#bg p').fadeTo(200,1);
		});	
	});

// switch between background mode and fullscreen mode

	$('.closeimg').live('click', function(event) {
		event.preventDefault();
		$('#bg.actif').addClass('inactif').removeClass('actif');
		sizeimage(_imgratio,0);
		$(this).hide();
		$('.fullimg').show();
		imgsize = 'back';
		return false;
	});
	$('.fullimg').live('click', function(event) {
		event.preventDefault();
		$('#bg.inactif').addClass('actif').removeClass('inactif');
		sizeimage2(_imgratio,0);
		$(this).hide();
		$('.closeimg').show();
		imgsize = 'full';
		return false;
	});

// show/hide image info
	
	$('#bg.inactif').hover(function() {
			$('#bg-info').slideDown(200);
		});
	$('#header, #middle, #footer').hover(function() {
		$('#bg-info').slideUp(200);
	});
	
});