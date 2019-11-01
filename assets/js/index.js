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

    $(function () {

        if (localStorage.chkbox && localStorage.chkbox != '') {
            $('#inputRemember').attr('checked', 'checked');
            $('#inputNIK').val(localStorage.username);
            $('#inputPassword').val(localStorage.pass);
        } else {
            $('#inputRemember').removeAttr('checked');
            $('#inputNIK').val('');
            $('#inputPassword').val('');
        }
    
        $('#inputRemember').click(function () {
    
            if ($('#inputRemember').is(':checked')) {
                // save username and password
                localStorage.username = $('#inputNIK').val();
                localStorage.pass = $('#inputPassword').val();
                localStorage.chkbox = $('#inputRemember').val();
            } else {
                localStorage.username = '';
                localStorage.pass = '';
                localStorage.chkbox = '';
            }
        });
    });

    $('.click_sidebar').click(function(){
        var body = document.getElementsByTagName("BODY")[0];
        var sidebar = $(this).attr('id');
        if (sidebar == "home"){
            $('.content').load('home.html');
            body.classList.add("home");
        }else if (sidebar == "news") {
            $('.content').load('news.html');
            body.classList.remove("home");
        }else if (sidebar == "jobvacancy") {
            $('.content').load('jobvacancy.html');
            body.classList.remove("home");
        }else if (sidebar == "rules") {
            $('.content').load('rulespolicy.html');
            body.classList.remove("home");
        }
    });

    $('.content').load('home.html');
});