$(document).ready(function(){
    var change = document.getElementsByTagName("LI");
    for (var i = 0; i < change.length; i++) {
        change[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) { 
                current[0].className = current[0].className.replace("active", "");
            }
            this.className += "active";
        });
    }

    $('.click_sidebar').click(function(){
        var body = document.getElementsByTagName("BODY")[0];
        var sidebar = $(this).attr('id');
        if (sidebar == "home"){
            $('.content').load('home.html');
            body.classList.add("home");
        }else if (sidebar == "news") {
            $('.content').load('news.html').fadeIn('slow');
            body.classList.remove("home");
        }else if (sidebar == "jobvacancy") {
            $('.content').load('jobvacancy.html').fadeIn('slow');
            body.classList.remove("home");
        }
    });

    $('.content').load('home.html').fadeIn('slow');
});