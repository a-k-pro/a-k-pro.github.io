//交互效果
$(function(){
	$(".gotop").click(function(){
		$(window).scrollTop(0)
	})
	$(".qqli").hover(function(){
		$(".qqcode").fadeToggle()
	})
	$(".wxli").hover(function(){
		$(".wxcode").fadeToggle()
	})
	$(".zfbli").hover(function(){
		$(".zfbcode").fadeToggle()
	})
	$(".Githubli").click(function(){
		window.open("https://github.com/vMAXWELLv/vMAXWELLv.github.io")
	})
})