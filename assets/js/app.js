/**Function to reduce call btn in contact section */
function reduceBtn(x) {
    if (x.matches) { // If media query matches
        btn.classList.add("btn-md");
        btn.classList.remove("btn-lg");
        console.log("btn set to md")
    } else {
        btn.classList.add("btn-lg");
        btn.classList.remove("btn-md");
        console.log("btn set to lg")
    }
}
var btn = document.getElementById("btn-phone");
var x = window.matchMedia("(max-width: 1137px)");
reduceBtn(x) // Call listener function at run time
x.addListener(reduceBtn) // Attach listener function on state changes

/** Funcution to reduce CV download btn in Experience Section 
 * when the screen is in mobile mode
 */
function reduceCvDownload(mediaMobile){
    if (mediaMobile.matches) {
        btnCvDl.classList.add("btn-sm");
        btnCvDl.classList.remove('btn-lg');

        btn.classList.add("btn-sm");
        btn.classList.remove("btn-md");
    } else {
        btnCvDl.classList.add("btn-lg");
        btnCvDl.classList.remove("btn-sm");

        btn.classList.add("btn-md");
        btn.classList.remove("btn-sm");
    }
}
var btnCvDl = document.getElementById("btnCV");
var mediaMobile = window.matchMedia("(max-width: 437px)");
reduceCvDownload(mediaMobile);
mediaMobile.addListener(reduceCvDownload);

