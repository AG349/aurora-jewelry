function reveal(){
let reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){
let windowHeight=window.innerHeight;
let elementTop=reveals[i].getBoundingClientRect().top;
let elementVisible=120;

if(elementTop<windowHeight-elementVisible){
reveals[i].classList.add("active");
}else{
reveals[i].classList.remove("active");
}
}
}

function headerEffect(){
const header=document.querySelector("header");
if(window.scrollY>50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}
}

window.addEventListener("scroll",()=>{
reveal();
headerEffect();
});

window.addEventListener("load",()=>{
reveal();
headerEffect();
});