function togglenav() {
    if (document.getElementById("hiddentabs").style.display !== "block") {
        document.getElementById("hiddentabs").style.display = "block";

    }
    else {
        
        document.getElementById("hiddentabs").style.display = "none";
    }
    document.getElementById("icon").classList.toggle("rotate");
}
// clicking off of nav closes the menu
function altnavretract() {
    if (document.getElementById("hiddentabs").style.display === "block") {
        document.getElementById("hiddentabs").style.display = "none";
        document.getElementById("icon").classList.toggle("rotate");
    }
}


