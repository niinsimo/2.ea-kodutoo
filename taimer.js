window.onload = function () {
	document.getElementById("mangameButton").style.visibility = "hidden";
    document.getElementById("womangameButton").style.visibility = "hidden";
}

var c = 0;
var t;
var timer_is_on = 0;

function timedCount() {
    document.getElementById("taimer").value = checkTime(c);
    c = c + 1;
    t = setTimeout(function(){ timedCount() }, 1000);
}

function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i
}


function showButtons() {
    document.getElementById("registration").style.visibility = "hidden";
    document.getElementById("mangameButton").style.visibility = "visible";
    //document.getElementById("womangameButton").style.visibility = "visible";
}

function changeScore() {
    document.getElementById("points").innerHTML = "20";
}

