//tema chiaro e scuro
var mode = document.getElementById("mode");
var themeMode = localStorage.getItem('theme');
var btn = document.querySelectorAll(".btn");

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

    //bottoni
    btn.forEach(function(btn) {
        btn.classList.toggle("btn-mode");
    });
}

if(themeMode == "true"){
    switchMode();
}

//per aprire pdf
function handleButtonClick(destination, openInNewWindow) {
    if(openInNewWindow){
        if(destination)
            window.open(destination, '_blank');
    }
        
    else
        window.location.href = destination;
}