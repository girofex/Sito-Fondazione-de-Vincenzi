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

var mode = document.getElementById("mode");
var themeMode = localStorage.getItem('theme');

//tema chiaro e scuro
function switchMode() {
    if(mode.src.includes("luna.png")){
        mode.src = "../img/sole.png";
        localStorage.setItem('theme', true);
        document.documentElement.setAttribute("data-theme", "true")
    }else{
        mode.src = "../img/luna.png";
        localStorage.setItem('theme', false);
        document.documentElement.setAttribute("data-theme", "false")
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