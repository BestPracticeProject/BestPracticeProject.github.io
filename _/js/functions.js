(function($){

	$(document).ready(function (){
		var winWidth = $(window).width(),
			$menu = $('.j-menu');

		$(window).resize(function() {
			winWidth = $(window).width();

			if(winWidth <= 785){
				console.log('wdwd');
				$menu.css('top', 0);
			}
		});

		$(document).on('click', '.j-drop_down__bth-show', function(e){
			var parentWrap = $(this).closest('.b-drop_down');
			if(parentWrap.hasClass('m-drop_down-hide')){
				parentWrap.removeClass('m-drop_down-hide');
			}else{
				parentWrap.addClass('m-drop_down-hide');
			}
			e.preventDefault();
		})

		$(document).on('click', '.j-menu-open_sub', function(){
			var parentItem = $(this).closest('.b-menu__item');
			if(parentItem.hasClass('m-menu__item-open_sub')){
				parentItem.removeClass('m-menu__item-open_sub');
			}else{
				parentItem.addClass('m-menu__item-open_sub');
			}
		})

		$(document).scroll(function(){
			var scrollValue = $(document).scrollTop();
			if(winWidth >= 785){
				$menu.css('top', scrollValue);
			}
		})	
	});
})(window.jQuery);