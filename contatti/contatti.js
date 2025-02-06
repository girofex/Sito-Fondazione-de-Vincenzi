//tema chiaro e scuro
var mode = document.getElementById("mode");
var themeMode = localStorage.getItem('theme');

function switchMode() {
    if(mode.src.includes("luna.png")){
        mode.src = "../img/sole.png";
        localStorage.setItem('theme', true);
    }else{
        mode.src = "../img/luna.png";
        localStorage.setItem('theme', false);
    }
    
    var nav = document.querySelector(".navbar");
    nav.classList.toggle("navbar-mode");

    var nav_link = document.querySelectorAll(".nav-link");
    nav_link.forEach(function(nav_link) {
        nav_link.classList.toggle("nav-link-mode");
    });
}

if(themeMode == "true"){
    switchMode();
}