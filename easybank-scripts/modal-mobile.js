let btns = document.querySelectorAll("button");
let modal = document.querySelector("dialog");
let images = document.querySelectorAll("img")



let buttonsArr = [];

let imagesArr = [];



btns.forEach(element => {
    buttonsArr.push(element);
});

images.forEach(element => {
    imagesArr.push(element);
});


let closeImg = imagesArr[7]

let btnMobileNav = buttonsArr[0]
let btnMockups = buttonsArr[1];
let btnFooter = buttonsArr[3];

  

function show() {
   modal.style.display = "block"

}

function hide() {
    
   
modal.style.display = "none";
   
   
}

function scroll() {
    window.scrollTo(200, 200);
    show();
}


btnMobileNav.addEventListener("click", scroll);
btnMockups.addEventListener("click", scroll);
btnFooter.addEventListener("click", scroll);
closeImg.addEventListener("click", hide)
