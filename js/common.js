$(".menubar").on({ 
	"click" : function() {
		// 햄버거 메뉴 버튼이 보일때 (햄버거 메뉴가 visible 상태인가?로 판단)
		if ($(".mobile.hamburger").is(":visible")) {

			$(".mobile.hamburger").hide();
			$(".mobile.close").show();

			$(".main_item").hide();
			$("footer").hide();
			$("#mobile_menu").show();


		} else {  // 닫기 메뉴 버튼이 보일때
			/* 모바일 햄버거 버튼 show */
			$(".mobile.hamburger").show();
			$(".mobile.close").hide();

			$(".main_item").show();
			$("footer").show();
			$("#mobile_menu").hide();
		}

	},
	"mouseleave" : function() {
		//...
	}
}); 

$(window).resize(function() {
	var width = $(window).width();

	if(width > 1023) {
		if ($("#mobile_menu").is(":visible")) {
			$(".mobile.hamburger").show();
			$(".mobile.close").hide();
			
			$(".main_item").show();
			$("footer").show();
			$("#mobile_menu").hide();
		}
	}
});