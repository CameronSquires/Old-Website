function togglenav() {
    if (document.getElementById("hiddentabs").style.display === "none") {
        document.getElementById("hiddentabs").style.display = "block";
        document.getElementById("icon").classList.toggle("rotate");
    }
    else {
        
        document.getElementById("hiddentabs").style.display = "none";
    }
}

//function altnavretract() {
//    if (document.getElementById("hiddentabs").style.display === "block") {
  //      document.getElementById("hiddentabs").style.display = "none";
    //}
//}


