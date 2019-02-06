/* 
(function($) {
    
	// JS code goes here
	var header = $('#header'),  // jQuery ID
	h1 = $('h1'),    			// jQuery tag
	intro = $('.intro'), 		// jQuery class
	firstItem = $('li:first-child'), 	// jquery first item
	secondItem = $('li:nth-child(2)'),	// jquery second item
	lastItem = $('li:last-child'); 

})(jQuery);
*/

var img = document.getElementsByTagName('img'),
	h2 = document.getElementsByTagName('h2');
	
//TweenLite.to(img, 1, {width: 100});
//TweenLite.to(img, 1, {x: 200});
//TweenLite.to(img, 1, {x: -100});
//TweenLite.from(img, 1, {x: -200});
//TweenLite.set(img,  {x: -200});
//TweenLite.fromTo(img, 1, {x: -200}, {x: 200} );

TweenLite.from(img, 1, {x: -200});
TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1});