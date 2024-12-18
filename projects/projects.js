//topButton
var topButton = document.querySelector(".top_button");
    
window.addEventListener("scroll", function () {
    var scrollHeight = window.scrollY;
    var scrollThreshold = 100;

    if (scrollHeight > scrollThreshold) {
        topButton.classList.add("visible");
    } else {
        topButton.classList.remove("visible");
    }
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

var projectBox = document.querySelectorAll(".project_box");
var skillBox = document.querySelector(".skill_box");
var btn = document.querySelectorAll(".btn");

var wolf = document.getElementById("wolf");
var xml = document.getElementById("xml");
var java = document.getElementById("java");

var ball = document.getElementById("ball");
var php = document.getElementById("php");
var html = document.getElementById("html");
var css = document.getElementById("css");
var sql = document.getElementById("sql");
var js = document.getElementById("js");

var cpp = document.getElementById("cplusplus");
var c = document.getElementById("c");
var python = document.getElementById("python");

var emoji = document.getElementById("me");

function switchMode() {
    var topButton = document.getElementById("top");

    if (mode.src.includes("moon.png")) {
        mode.src = "../img/sun.png";
        localStorage.setItem('theme', true);

        wolf.src = "../img/dark wolf.png";
        xml.src = "../img/dark xml.png";
        java.src = "../img/dark java.png";

        ball.src = "../img/dark ball.png";
        php.src = "../img/dark php.png";
        html.src = "../img/dark html.png";
        css.src = "../img/dark css.png";
        sql.src = "../img/dark sql.png";
        js.src = "../img/dark js.png";

        cpp.src = "../img/dark c++.png";
        c.src = "../img/dark c.png";
        python.src = "../img/dark python.png";

        emoji.src = "../img/me2 light mode.png";
        topButton.src = "../img/dark arrow.png";

        scrollbarThumbColor = "#C8E7FF";
        scrollbarThumbBorderColor = "#0F0F25";
    } else {
        mode.src = "../img/moon.png";
        localStorage.setItem('theme', false);

        wolf.src = "../img/light wolf.png";
        xml.src = "../img/light xml.png";
        java.src = "../img/light java.png";

        ball.src = "../img/light ball.png";
        php.src = "../img/light php.png";
        html.src = "../img/light html.png";
        css.src = "../img/light css.png";
        sql.src = "../img/light sql.png";
        js.src = "../img/light js.png";

        cpp.src = "../img/light c++.png";
        c.src = "../img/light c.png";
        python.src = "../img/light python.png";

        emoji.src = "../img/me2 dark mode.png";
        topButton.src = "../img/light arrow.png";

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

    projectBox.forEach(function(projectBox) {
        projectBox.classList.toggle("project_box-mode");
    })

    skillBox.classList.toggle("project_box-mode");

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
//hover animation
projectBox[0].addEventListener("mouseenter", function() {
    if (mode.src.includes("moon.png")) {
        wolf.src = "../img/dark wolf.png";
        xml.src = "../img/dark xml.png";
        java.src = "../img/dark java.png";
    }
})

projectBox[0].addEventListener("mouseleave", function() {
    if (mode.src.includes("moon.png")) {
        wolf.src = "../img/light wolf.png";
        xml.src = "../img/light xml.png";
        java.src = "../img/light java.png";
    }
})

projectBox[1].addEventListener("mouseenter", function() {
    if (mode.src.includes("moon.png")) {
        ball.src = "../img/dark ball.png";
        php.src = "../img/dark php.png";
        html.src = "../img/dark html.png";
        css.src = "../img/dark css.png";
        sql.src = "../img/dark sql.png";
        js.src = "../img/dark js.png";
    }
})

projectBox[1].addEventListener("mouseleave", function() {
    if (mode.src.includes("moon.png")) {
        ball.src = "../img/light ball.png";
        php.src = "../img/light php.png";
        html.src = "../img/light html.png";
        css.src = "../img/light css.png";
        sql.src = "../img/light sql.png";
        js.src = "../img/light js.png";
    }
})