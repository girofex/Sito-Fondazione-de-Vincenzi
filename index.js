//name animation
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
    .add({
        targets: '.ml3 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1000,
        delay: (el, i) => 75 * (i + 1)
    });

//
//
//
//light and dark mode
var scrollbarTrackColor = "transparent";
var scrollbarThumbColor = "#731C41";
var scrollbarThumbBorderColor = "#F8F7F4";
document.documentElement.style.setProperty("--scrollbar-track-color", scrollbarTrackColor);
document.documentElement.style.setProperty("--scrollbar-thumb-color", scrollbarThumbColor);
document.documentElement.style.setProperty("--scrollbar-thumb-border-color", scrollbarThumbBorderColor);

var mode = document.getElementById("mode");
var themeMode = localStorage.getItem('theme');

function switchMode() {
    if(mode.src.includes("moon.png")){
        mode.src = "img/sun.png";
        localStorage.setItem('theme', true);

        scrollbarThumbColor = "#C8E7FF";
        scrollbarThumbBorderColor = "#0F0F25";
    }else{
        mode.src = "img/moon.png";
        localStorage.setItem('theme', false);

        scrollbarThumbColor = "#731C41";
        scrollbarThumbBorderColor = "#F8F7F4";
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

    //about box
    var ml3 = document.querySelector(".ml3");
    ml3.classList.toggle("ml3-mode");

    //footer
    var footer = document.querySelector(".footer");
    footer.classList.toggle("footer-mode");
}

if(themeMode == "true"){
    switchMode();
}