var a, b, c, web, poster, etc;
web = document.getElementsByClassName("web");
poster = document.getElementsByClassName("poster");
etc = document.getElementsByClassName("etc");

function clickweb() {
    for (a = 0; a < web.length; a++) {
        web[a].style.display = "inline";
    }
    for (b = 0; b < poster.length; b++) {
        poster[b].style.display = "none";
    }
    for (c = 0; c < etc.length; c++) {
        etc[c].style.display = "none";
    }
}

function clickposter() {
    for (a = 0; a < web.length; a++) {
        web[a].style.display = "none";
    }
    for (b = 0; b < poster.length; b++) {
        poster[b].style.display = "inline";
    }
    for (c = 0; c < etc.length; c++) {
        etc[c].style.display = "none";
    }
}

function clicketc() {
    for (a = 0; a < web.length; a++) {
        web[a].style.display = "none";
    }
    for (b = 0; b < poster.length; b++) {
        poster[b].style.display = "none";
    }
    for (c = 0; c < etc.length; c++) {
        etc[c].style.display = "inline";
    }
}



//function click1() {
    //document.getElementsByClassName("web").style.display = "none";
    //document.getElementByClassName("poster")[i].style.display = "none";
    //document.getElementByClassName("etc")[i].style.display = "none";
//}