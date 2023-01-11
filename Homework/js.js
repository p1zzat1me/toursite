$(document).ready(function(){
    $('.main_btna, .main_btn, a[href="#sheldure"]').on('click', function(){
        $('.overlay').fadeIn(1000);
    $('.modal').animate({
        height: 'toggle'},2000);
});
$('.close').on('click', function(){
    $('.overlay').fadeOut(2000);
$('.modal').slideUp(2000);
});
    });