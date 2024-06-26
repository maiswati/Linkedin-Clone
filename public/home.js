let msgBtns = document.querySelector(".message");
let msgpop = document.querySelector(".msgPop");
let crossbt = document.querySelector(".crossb");
let overlay = document.getElementById('overlay');
msgBtns.addEventListener("click",()=>{
    overlay.style.display = 'block';
    msgpop.style.display = 'block';
})
crossbt.addEventListener("click",()=>{
    overlay.style.display = 'none';
    msgpop.style.display = 'none';
})
let contact = document.querySelector(".contact");
let croBtn = document.querySelector(".crossmt");
let boxe = document.querySelector(".infoBox");
let crossmt = document.querySelector(".crossmt");

contact.addEventListener("click",()=>{
    overlay.style.display = 'block';
    boxe.style.display = 'block';
})
crossmt.addEventListener("click",()=>{
    overlay.style.display = 'none';
    boxe.style.display = 'none';
})
let moreBtn = document.querySelector(".more");
let moreBox = document.querySelector(".moreBox");
let btn = document.querySelector(".click");
moreBtn.addEventListener("click",()=>{
    moreBox.style.display = "block";
})
document.addEventListener("click",()=>{
    if (!moreBox.contains(event.target) && !moreBtn.contains(event.target)) {
        moreBox.style.display = 'none';
    }
})



