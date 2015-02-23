$(document).on('ready', function() {

	//Left push menu
	// var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
 //        showLeftPush = document.getElementById( 'showLeftPush' ),
 //        body = document.body;

	// showLeftPush.onclick = function() {
	//     classie.toggle( this, 'active' );
	//     classie.toggle( body, 'cbp-spmenu-push-toright' );
	//     classie.toggle( menuLeft, 'cbp-spmenu-open' );
	//     disableOther( 'showLeftPush' );
	//     $('#overlay').show();
	// };

	// function disableOther( button ) {
	//     if( button !== 'showLeftPush' ) {
	//         classie.toggle( showLeftPush, 'disabled' );
	//     }
	// }

	// $('#overlay').click(function(){
	// 	$('body').removeClass('cbp-spmenu-push-toright');
	// 	$('#cbp-spmenu-s1').removeClass('cbp-spmenu-open active');
	// 	$(this).hide();
	// });

	// //Close menu
	// $(document).on('click', function(event) {
	// 	if (!$(event.target).closest('#cbp-spmenu-s1, #showLeftPush').length) {
	// 		$('body').removeClass('cbp-spmenu-push-toright');
	// 		$('#cbp-spmenu-s1').removeClass('cbp-spmenu-open active');
	// 	}
	// });

	// //Show submenu
	// if ($(window).innerWidth() < 960) {
	// 	$('.side-fixed.left .menu').on('click', '.hassub i', function(event) {
	// 		var $this = $(this),
	// 			hasSub = $(this).closest('.hassub');
				
	// 		hasSub.toggleClass('active');
	// 		hasSub.find('.submenu').slideToggle();

	// 		event.preventDefault();
	// 	});
	// } else {
	// 	$('.menu > .hassub').hover(function() {
	// 		$(this).find('.submenu').animate({
	// 			bottom: -$(this).find('.submenu').innerHeight(),
	// 			'z-index': 0
	// 		},300);

	// 	}, function() {
	// 		$(this).find('.submenu').animate({
	// 			bottom: 0,
	// 			'z-index': '-8'
	// 		},300);
	// 	});
	// };

	//Language select
	// $('.lang-select').on('click', function() {
	// 	var $this = $(this);

	// 	$this.toggleClass('active')
	// 		.next().slideToggle();
	// });

	$('.lang-select-list').on('click', 'span', function() {
		var $this = $(this),
			lang = $this.text();

		// $('.lang-select-list').slideUp();
		// $('.lang-select').removeClass('active');

		$('.lang-select .lng').text(lang);
	});


	//Close menu
	$(document).on('click', function(event) {
		// if (!$(event.target).closest('.lang-select-list, .lang-select').length) {
		// 	$('.lang-select').removeClass('active');
		// 	$('.lang-select-list').slideUp();
		// }
	});

	//Carousel news
	// $('#carousel_news').carouFredSel({
 //        items: 1,
 //        scroll : {
 //            items: 1,
 //            duration: 500,
 //        },
 //        height: '100%',
 //        auto: false,
 //        resoponsive: true,
 //        next: '.feed-next',
 //        prev: '.feed-prev'
 //    });

    $("#carousel_news").responsiveSlides({
    	nav: true,
    	// auto: true,
    	// timeout: 5000
    });

	//Range sliders
	//Money slider
	rangeSlider({
		'id': '#money-slider',
		'input': '#range_amount',
		'tooltip': true,
		'start': 20000,
		'step': 1000,
		'min': 10000,
		'max': 70000,
	});
	
	//Period slider
	rangeSlider({
		'id': '#period-slider',
		'input': '#range_days',
		'tooltip': true,
		'start': 15,
		'step': 1,
		'min': 5,
		'max': 30
	});
});


//Range slider 
function rangeSlider(options) {
	var slider = $(options.id),
		input = $(options.input),
		options = options;

		slider.parent().find('.plus, .minus')
			.attr('data-step', options.step);

	slider.noUiSlider({
		start: options.start,
		step: options.step,
		range: {
			'min': options.min,
			'max': options.max
		},
		format: {
		  	to: function ( value ) {
				return Math.round(value).toFixed(0);
		  	},
		  	from: function ( value ) {
				return Math.round(value).toFixed(0);
		  	}
		}
	}, true);
	
	if (options.tooltip == true) {
		slider.Link('lower').to('-inline-<div class="tooltip"></div>', function ( value ) {
			$(this).html(
				'<span>' + Math.round(value).toFixed(0) + '</span>'
			);
		});
		slider.Link('lower').to(input);
	};

	slider.on({
		slide: function(){
			var sliderVal = slider.val();

			if (sliderVal > 49000) {
				$('.slide-warning').addClass('error');
			} else {
				$('.slide-warning').removeClass('error');
			}
		}
	});


	slider.parent().find('.plus').on('click', function(e) {
		e.preventDefault();

		var rangeBtn = $(this).attr('data-step'),
			sliderVal = slider.val(),
			sliderStep = slider.noUiSlider('step');

		sliderStep = sliderStep[0];
		slider.val(sliderVal - ( -sliderStep[0]));

		if (sliderVal > 48000) {
			$('.slide-warning').addClass('error');
		} else {
			$('.slide-warning').removeClass('error');
		}
	});

	slider.parent().find('.minus').on('click', function(e) {
		e.preventDefault();

		var rangeBtn = $(this).attr('data-step'),
			sliderVal = slider.val(),
			sliderStep = slider.noUiSlider('step');

		sliderStep = sliderStep[0];
		slider.val(sliderVal - sliderStep[0]);

		if (sliderVal > 48000) {
			$('.slide-warning').addClass('error');
		} else {
			$('.slide-warning').removeClass('error');
		}
	});
} 