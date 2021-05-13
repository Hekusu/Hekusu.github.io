function toggleNav() {
 if (document.getElementById("mySidebar").style.width < "10px"){
     document.getElementById("mySidebar").style.width = "15vw";
     document.getElementById("main1").style.left = "7.5vw";
     document.getElementById("main2").style.left = "7.5vw";
     document.getElementById("main3").style.left = "7.5vw";
}

 else { document.getElementById("mySidebar").style.width = "0px";
       document.getElementById("main1").style.left = "0px";
       document.getElementById("main2").style.left = "0px";
       document.getElementById("main3").style.left = "0px";
 }
}