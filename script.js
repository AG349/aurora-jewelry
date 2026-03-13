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
button.addEventListener("click",function(){
const targetId=this.getAttribute("onclick").match(/'([^']+)'/);
if(targetId&&document.getElementById(targetId[1])){
document.getElementById(targetId[1]).scrollIntoView({behavior:"smooth"});
}
});
});
}

window.addEventListener("scroll",function(){
reveal();
headerEffect();
});

window.addEventListener("load",function(){
reveal();
headerEffect();
smoothButtons();
});
