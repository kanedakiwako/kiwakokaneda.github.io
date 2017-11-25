;jQuery(function($){

	Template = (function() {

			var
				$first = $('.first a'),
				$width = $('#container').innerWidth(),
				$height = $('#container').innerHeight();

			init = function() {

				setkkScroll();

				onkkHover();

				kkTumblr();

				kkHyoroMove();

				$(window).on('load', function(){

					var
						$cdColLA = $(".cdColLA"),
						$flWidget = $('.floating-widget');

						$cdColLA.flatHeights();
						$flWidget.floatingWidget();

				});

			},

			kkScroll = function() {

				//ページ内スクロールイベント
				function f(string) {
					//正規表現で文字列置換
					return string
					.replace(/^\//,'')
					.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
					.replace(/\/$/,'');
				}

				//ハッシュリンクの内容をチェックする
				$('a[href*=#]').each(function() {
					if ( f(location.pathname) == f(this.pathname)
					&& location.hostname == this.hostname
					&& this.hash.replace(/#/,'') ) {
						//名前付きアンカーをチェックする
						var $td = $(this.hash), $ta = $('[name=' + this.hash.slice(1) +']');
						var $t = $td.length ? $td : $ta.length ? $ta : false;
						if ($t) {
							var off = $t.offset().top;
							//クリックイベント発火
							$(this).click(function() {
								$('html, body').animate({scrollTop: off},{duration: 777, easing:"easeInOutExpo" },400);
								return false;
							});
						}
					}
				});

				return false;

			},

			kkScrollFade = function() {

				$(window).scroll(function () {
					if ($(this).scrollTop() > 100) {
						$('#pagetop').fadeIn();
					} else {
						$('#pagetop').fadeOut();
					}
				});

			},

			kkHoverAction = function(elm){

				elm.hover(function() {
						$(this).stop().animate({
							backgroundColor:jQuery.Color("#00aadd"),
							color : jQuery.Color("#ffffff")
						}, 10);
					},function() {
						$(this).stop().animate({
							backgroundColor:jQuery.Color("#ffffff"),
							color : jQuery.Color("#666666")
						}, 10);
				});

				return false;
			},

			kkTumblr = function() {

				var kkUrl = "http://anthemutuho.tumblr.com/api/read/json?num=50&callback=?";

				$.getJSON(kkUrl, function(data) {
					$.each(data.posts, function(i, posts) {
						var photo = this['photo-url-100'];
						var url = this['url'];
						if (this['type'] === "photo") {
							$('#blog').append('<li><a href="' + url + '" target="_blank"><img src="' + photo + '" \/><\/a<\/li>');
						} else {
							return;
						}
					});
				});

			},

			kkHyoroMove = function() {

				$("#hyoro_c")
				.animate({left:$width - 120},1500)
				.animate({left:$width + 10}, 500);

				setTimeout("kkHyoroMove()",6000);

				return true;

			},

			onkkHover = function() {

				kkHoverAction($first);

				return false;

			},

			setkkScroll = function() {

				kkScroll();
				kkScrollFade();

				return false;

			};

			return { init : init };

	})();

	Template.init();

});
