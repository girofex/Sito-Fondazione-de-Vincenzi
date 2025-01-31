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