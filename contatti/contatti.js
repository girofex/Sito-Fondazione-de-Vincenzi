//tema chiaro e scuro
var mode = document.getElementById("mode");
var themeMode = localStorage.getItem('theme');
var phone = document.getElementById("phone");
var mail = document.getElementById("mail");
var info = document.getElementById("info");

function switchMode() {
    if(mode.src.includes("moon.png")){
        mode.src = "../img/sun.png";
        localStorage.setItem('theme', true);

        phone.src = "../img/phone_white.png";
        mail.src = "../img/mail_white.png";
        info.src = "../img/info_white.png";
    }else{
        mode.src = "../img/moon.png";
        localStorage.setItem('theme', false);

        phone.src = "../img/phone_black.png";
        mail.src = "../img/mail_black.png";
        info.src = "../img/info_black.png";
    }

    //body
    var bodyElement = document.body;
    bodyElement.classList.toggle("background-mode");

    //contatti
    var contacts = document.querySelector(".contacts");
    contacts.classList.toggle("contacts-mode");

    var link = document.querySelector(".link_email");
    link.classList.toggle("link-mode");
}

if(themeMode == "true"){
    switchMode();
}