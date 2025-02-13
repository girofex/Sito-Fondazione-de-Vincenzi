//refresh posizione
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

//vai in basso
document.getElementById('scrollBtn').addEventListener('click', function() {
    const element = document.getElementById('description');
    const elementPosition = element.getBoundingClientRect().top;
    const position = elementPosition + window.scrollY;
    
    window.scrollTo({
        top: position,
        behavior: 'smooth'
    });
});

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

//animazione nome
var ml3 = document.querySelector('.ml3');
ml3.innerHTML = ml3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
    .add({
        targets: '.ml3 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1000,
        delay: (el, i) => 75 * (i + 1)
    });

//tema chiaro e scuro
var mode = document.getElementById("mode");
var themeMode = localStorage.getItem('theme');

function switchMode() {
    if(mode.src.includes("luna.png")){
        mode.src = "img/sole.png";
        localStorage.setItem('theme', true);
    }else{
        mode.src = "img/luna.png";
        localStorage.setItem('theme', false);
    }

    var bodyElement = document.body;
    bodyElement.classList.toggle("background-mode");

    var nav = document.querySelector(".navbar");
    nav.classList.toggle("navbar-mode");

    var nav_link = document.querySelectorAll(".nav-link");
    nav_link.forEach(function(nav_link) {
        nav_link.classList.toggle("nav-link-mode");
    });
    
    var stats = document.querySelector(".stats");
    stats.classList.toggle("stats-mode");
}

if(themeMode == "true"){
    switchMode();
}