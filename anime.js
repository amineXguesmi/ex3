var li1=document.querySelector(".a1");
var li2=document.querySelector(".a2")
var li3=document.querySelector(".a3")
var li4=document.querySelector(".a4")
var li5=document.querySelector(".a5")
function color(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
return("#"+randomColor);
}
li1.addEventListener("click",(e)=>{
       li1.style.color=color();
})
li2.addEventListener("click",(e)=>{
    li2.style.color=color();
})
li3.addEventListener("click",(e)=>{
    li3.style.color=color();
})
li4.addEventListener("click",(e)=>{
    li4.style.color=color();
})
li5.addEventListener("click",(e)=>{
    li5.style.color=color();
})