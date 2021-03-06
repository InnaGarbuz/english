$(document).ready(function($){

	$('.slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        dots: true
		      }
		    }
		    ]

		});


	$(".tabs_menu li").click(function() { // Событие нажатия на элемент меню вкладок
		if (!$(this).hasClass("active")) { // Проверка, не нажали ли мы на уже активный пункт
			var i = $(this).index(); // Получаем порядковый номер нажатого пункта, отстче идет от 0 (0,1,2)
			$(".tabs_menu li.active").removeClass("active"); // Удаляем активный класс у прошлого пункта меню
			$(".tabs .active").hide().removeClass("active"); // Скрываем и удаляем активный класс у прошлого контейнера с содержимым
			$(this).addClass("active"); // Добавляем нажатому пункту меню активный класс
			$($(".tabs").children(".info")[i]).fadeIn(1000).addClass("active"); // Показываем и добавляем активный класс соответствующему контейнеру
		}
	});
});