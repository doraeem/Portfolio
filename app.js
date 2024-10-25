let img = document.querySelector("#cv-image");
let showImage = document.querySelector(".showImg");
let fullImage = document.querySelector("#full-image");


img.addEventListener("click",()=>{
    fullImage.src = img.src;
    showImage.classList.remove("hide");
});

showImage.addEventListener("click",()=>{
    showImage.classList.add("hide");
});