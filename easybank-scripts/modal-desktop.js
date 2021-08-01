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


let closeImg = imagesArr[4]

let btnHeader = buttonsArr[0];
let btnMockups = buttonsArr[2];
let btnFooter = buttonsArr[4];

  

function show() {
   modal.style.display = "block"

}

function hide() {
    
   
modal.style.display = "none";
   
   
}

function scroll() {
    window.scrollTo(20, 20);
    show()
}


btnHeader.addEventListener("click", scroll)
btnMockups.addEventListener("click", scroll)
btnFooter.addEventListener("click", scroll)
closeImg.addEventListener("click", hide)