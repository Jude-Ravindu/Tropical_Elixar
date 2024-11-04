function indexPageLoad() {
    imagePotionDiv.classList.remove("anim");
}

var imagePotionDiv = document.getElementById("main-page-image-div");

window.addEventListener("scroll", scrollPosition, { passive: true });

function scrollPosition() {
    var scrollPosition = window.scrollY;
 
    if (scrollPosition > 23 && !isContain) {
        imagePotionDiv.classList.add("anim");
    } else if (scrollPosition <= 30 && isContain) {
        imagePotionDiv.classList.remove("anim");
    }else if(scrollPosition> 24){        

    }
}


















