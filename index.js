//topButton
var topButton = document.querySelector(".top_button");
    
window.addEventListener("scroll", function () {
    var scrollHeight = window.scrollY;
    var scrollThreshold = 100;

    if (scrollHeight > scrollThreshold)
        topButton.classList.add("visible");
    else
        topButton.classList.remove("visible");
});

function GoTop() {
    const scroll = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;

        if (c > 0) {
            window.requestAnimationFrame(scroll);
            window.scrollTo(0, c - c / 8);
        }
    };

    scroll();
}

//
//
//
//light and dark mode
var scrollbarTrackColor = "transparent";
var scrollbarThumbColor = "#3d348b";
var scrollbarThumbBorderColor = "#DFD6D0";
document.documentElement.style.setProperty("--scrollbar-track-color", scrollbarTrackColor);
document.documentElement.style.setProperty("--scrollbar-thumb-color", scrollbarThumbColor);
document.documentElement.style.setProperty("--scrollbar-thumb-border-color", scrollbarThumbBorderColor);

var mode = document.getElementById("mode");
var themeMode = localStorage.getItem('theme');
var btn = document.querySelectorAll(".btn");
var emoji = document.getElementById("me");

function switchMode() {
    //imgs and scrollbar
    var pin = document.getElementById("pin");
    var lang = document.getElementById("lang");
    var music = document.getElementById("music");
    var cinema = document.getElementById("cinema");
    var coffee = document.getElementById("coffee");
    var game = document.getElementById("game");
    var topButton = document.getElementById("top");

    if(mode.src.includes("moon.png")){
        mode.src = "img/sun.png";
        localStorage.setItem('theme', true);

        pin.src = "img/dark pin.png";
        lang.src = "img/dark language.png";
        music.src = "img/dark music.png";
        cinema.src = "img/dark cinema.png";
        coffee.src = "img/dark coffee.png";
        game.src = "img/dark game.png";

        emoji.src = "img/me1 light mode.png";
        topButton.src = "img/dark arrow.png";
        scrollbarThumbColor = "#C8E7FF";
        scrollbarThumbBorderColor = "#0F0F25";
    }else{
        mode.src = "img/moon.png";
        localStorage.setItem('theme', false);

        pin.src = "img/light pin.png";
        lang.src = "img/light language.png";
        music.src = "img/light music.png";
        cinema.src = "img/light cinema.png";
        coffee.src = "img/light coffee.png";
        game.src = "img/light game.png";

        emoji.src = "img/me1 dark mode.png";
        topButton.src = "img/light arrow.png";
        scrollbarThumbColor = "#3d348b";
        scrollbarThumbBorderColor = "#DFD6D0";
    }

    document.documentElement.style.setProperty("--scrollbar-track-color", scrollbarTrackColor);
    document.documentElement.style.setProperty("--scrollbar-thumb-color", scrollbarThumbColor);
    document.documentElement.style.setProperty("--scrollbar-thumb-border-color", scrollbarThumbBorderColor);
    
    //body
    var bodyElement = document.body;
    bodyElement.classList.toggle("background-mode");

    //navmenu
    var navbar = document.getElementById("nav");
    navbar.classList.toggle("nav_menu-mode");

    var dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("dropdown-mode");
    var dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.classList.toggle("dropdown-menu-mode");

    //all btn
    btn.forEach(function(btn) {
        btn.classList.toggle("btn-mode");
    });

    //about box
    var about = document.querySelectorAll(".about");
    about.forEach(function(about) {
        about.classList.toggle("about-mode");
    });

    //footer
    var footer = document.querySelector(".footer");
    footer.classList.toggle("footer-mode");
}

if(themeMode == "true"){
    switchMode();
}

//
//
//
//name animation
var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
    .add({
        targets: '.ml16 .letter',
        translateY: [-100,0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 30 * i
    });

//
//
//
//automatic calculation of age
function calcYears(birthday) {
    var today = new Date();
    var bd = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
    var years = today.getFullYear() - birthday.getFullYear();

    if(today < bd)
        years--;
    
    return years;
}

function updateYears(){
    var birthday = new Date("2001-09-03");
    var years = calcYears(birthday);
    document.getElementById("years").innerHTML = " " + years + " years old";
}

updateYears();
setInterval(updateYears, 86400000);