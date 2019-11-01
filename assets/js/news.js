$(document).ready(function(){
    $('.click_news').click(function(){
        $('.news_details').load('news_details.html').fadeIn('slow');
        $('.news').hide();
    });
});