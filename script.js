const hamburgerLineTag = document.querySelector(".hamburgerLine");
const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag = document.querySelector(".line3");
const overlayMenuTag = document.querySelector(".overlayMenu")
const LiTags = document.getElementsByTagName("li");


hamburgerLineTag.addEventListener("click", () => {
    if(hamburgerLineTag.classList.contains("isOpened")){
        line2Tag.classList.remove("hideLine2");
        line1Tag.classList.remove("rotatePlus45deg");
        line3Tag.classList.remove("rotateMinus45deg");
        overlayMenuTag.classList.remove("overlayMenuShow");
        hamburgerLineTag.classList.remove("isOpened");
        for (let i=0; i < LiTags.length; i++){
            LiTags[i].classList.remove("moveLiTagUp");
            }
    }
    else{
        line2Tag.classList.add("hideLine2");
        line1Tag.classList.add("rotatePlus45deg");
        line3Tag.classList.add("rotateMinus45deg");
        overlayMenuTag.classList.add("overlayMenuShow");
        hamburgerLineTag.classList.add("isOpened");
        for (let i=0; i < LiTags.length; i++){
        LiTags[i].classList.add("moveLiTagUp");
        }
    }
});

