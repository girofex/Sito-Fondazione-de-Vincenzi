//animazione nome
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

//tema chiaro e scuro
var mode = document.getElementById("mode");
var themeMode = localStorage.getItem('theme');

function switchMode() {
    if(mode.src.includes("moon.png")){
        mode.src = "img/sun.png";
        localStorage.setItem('theme', true);
    }else{
        mode.src = "img/moon.png";
        localStorage.setItem('theme', false);
    }

    var bodyElement = document.body;
    bodyElement.classList.toggle("background-mode");

    var ml3 = document.querySelector(".ml3");
    ml3.classList.toggle("ml3-mode");
}

if(themeMode == "true"){
    switchMode();
}