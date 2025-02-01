//tema chiaro e scuro
var mode = document.getElementById("mode");
var themeMode = localStorage.getItem('theme');

function switchMode() {
    if(mode.src.includes("moon.png")){
        mode.src = "../img/sun.png";
        localStorage.setItem('theme', true);
    }else{
        mode.src = "../img/moon.png";
        localStorage.setItem('theme', false);
    }

    //body
    var bodyElement = document.body;
    bodyElement.classList.toggle("background-mode");

    //contatti
    var contacts = document.querySelector(".contacts");
    contacts.classList.toggle("contacts-mode");

    var link = document.querySelectorAll(".link_email");
    link.forEach(function(link) {
        link.classList.toggle("link_email-mode");
    });
}

if(themeMode == "true"){
    switchMode();
}