let toggle = document.querySelector("div");
let icons = document.querySelectorAll("img");

function show() {
    toggle.style.display = "block"
}

function hide() {
   toggle.style.display ="none"
   
}


let iconsArr = [];


icons.forEach(element => {
   iconsArr.push(element);
    
});
let showIcon = iconsArr[4];
let hideIcon = iconsArr[1]



showIcon.addEventListener('click', show);
hideIcon.addEventListener('click',hide);


