function reveal(){
const reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){
const windowHeight=window.innerHeight;
const elementTop=reveals[i].getBoundingClientRect().top;
const elementVisible=120;

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

function smoothButtons(){
const buttons=document.querySelectorAll('button[onclick]');

buttons.forEach(button=>{
button.addEventListener("click",function(e){
e.preventDefault();
const targetId=this.getAttribute("onclick").match(/'([^']+)'/);

if(targetId&&document.getElementById(targetId[1])){
document.getElementById(targetId[1]).scrollIntoView({behavior:"smooth"});
}
});
});
}

let lastScrollTop=0;

function hideShowHeader(){
const header=document.querySelector("header");
let currentScroll=window.pageYOffset||document.documentElement.scrollTop;

if(currentScroll<=10){
header.classList.remove("hide");
}else if(currentScroll>lastScrollTop){
header.classList.add("hide");
}else{
header.classList.remove("hide");
}

lastScrollTop=currentScroll<=0?0:currentScroll;
}

window.addEventListener("scroll",function(){
reveal();
headerEffect();
hideShowHeader();
});

window.addEventListener("load",function(){
reveal();
headerEffect();
hideShowHeader();
smoothButtons();
});
