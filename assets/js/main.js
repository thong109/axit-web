$(document).ready(function(){

    $('.pe-7s-menu').click(function(){
    $(this).toggleClass('pe-7s-close');
    $('.navbars').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){

    $('.pe-7s-menu').removeClass('pe-7s-close');
    $('.navbars').removeClass('nav-toggle');

    if($(window).scrollTop() > 30){
    $('header').addClass('header-active');
    }else{
    $('header').removeClass('header-active');
    }

    $('section').each(function(){
    var id = $(this).attr('id');
    var height = $(this).height();
    var offset = $(this).offset().top - 200;
    var top = $(window).scrollTop();
    if(top >= offset && top < offset + height){ $('.navbars ul li a').removeClass('active');
        $('.navbars').find('[data-scroll="' + id + '" ]').addClass('active'); } }); }); });
