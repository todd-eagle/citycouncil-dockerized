$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav').removeClass('nav__hide').addClass('nav__show');
        $('.nav__org-title').removeClass('nav__no-display')
      //  $('body').addClass('overlay');
    });

    // $('.nav__item--close-button').click(function(){
    //     // $('.nav').removeClass('nav__show').addClass('nav__hide');
    //     // $('.nav__org-title').addClass('nav__no-display')
    //   //  $('body').removeClass('overlay');
    // });

    $('.nav').click(function(){
        $(this).removeClass('nav__show').addClass('nav__hide');
        $('.nav__org-title').addClass('nav__no-display')
      //  $('body').removeClass('overlay');
    });

    $(function(){
        if ($(window).width() < 882 ){
            $('.home').addClass('nav');
        }
    });

    $(window).resize(function() {
        if ($(window).width() < 881 ){
            $('.nav').removeClass('nav__display-none');
            $('.nav__org-title').addClass('nav__no-display')

        }

        if ($(window).width() < 882 ){
            $('.home').addClass('nav');
            $('.nav').removeClass('nav__show').addClass('nav__hide');
        }

        if ($(window).width() > 883 ){
            $('.nav').addClass('nav__display-none');
            $('.nav__org-title').addClass('nav__no-display')
        }
    });
});
function newFunction() {
    return $(this);
}

