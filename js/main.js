$(document).ready(function(){
	$('.fa-bars').click(function(){
		$(this).toggleClass('fa-times');
		$('.navbar').toggleClass('nav-toggle');
	});

	$(window).on('load scroll' , function(){
		$('.fa-bars').removeClass('fa-times');
		$('.navbar').removeClass('nav-toggle');


		if($(window).scrollTop() > 30){
			$('header').addClass('header-active');
		}else{
			$('header').removeClass('header-active');
		}
	});
	$('section').each(function){
		var id = $(this).attr('id');
		var height = $(this).height();
		var offset = $(this).offset().top - 200;
		var top = $(window).scrollTop();
		if (top >= offset && top <offset + height){
			$('navbar  ul li a').removeClass('active');
			$('navbar').find('[data-scroll= "' + id +'"]').addClass('active');
		} 
	}
});

  var text = document.getElementById('text');
        var newDom = '';
        var animationDelay = 6;

        for(let i = 0; i < text.innerText.length; i++)
        {
            newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
        }

        text.innerHTML = newDom;
        var length = text.children.length;

        for(let i = 0; i < length; i++)
        {
            text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
        }
    

 new WOW().init();