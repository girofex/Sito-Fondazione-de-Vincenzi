//vai in alto
var topButton = document.getElementById("top");
    
function GoTop() {
    const scroll = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;

        if (c > 0) {
            window.requestAnimationFrame(scroll);
            window.scrollTo(0, c - c);
        }
    };

    scroll();
}

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

    var section = document.querySelectorAll(".section");
    section.forEach(function(section) {
        section.classList.toggle("section-mode");
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