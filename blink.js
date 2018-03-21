let t = 0

function blink() {
    if(t<4500){
        setTimeout(function(){ show() }, 5500-t);
        setTimeout(function(){ hide() }, 5000-t);
        setTimeout(function(){ blink() }, 6000-t);
        t = t + 500
    }else{
        setTimeout(function(){ show() }, 600);
        setTimeout(function(){ hide() }, 300);
        setTimeout(function(){ blink() }, 900);
    }
}

function show() {
    document.getElementById("textbox").style.visibility = "visible";
}

function hide() {
    document.getElementById("textbox").style.visibility = "hidden";
}