function togglenav() {
    if (document.getElementById("hiddentabs").style.display !== "block") {
        document.getElementById("hiddentabs").style.display = "block";

    }
    else {
        
        document.getElementById("hiddentabs").style.display = "none";
    }
    document.getElementById("icon").classList.toggle("rotate");
}

function altnavretract() {
    if (document.getElementById("hiddentabs").style.display === "block") {
        document.getElementById("hiddentabs").style.display = "none";
        document.getElementById("icon").classList.toggle("rotate");
    }
}


