let commentBtn = document.querySelector("#comment");
let imageBtn = document.querySelector("#image");
let postBtn = document.querySelector("#post");
let postBox = document.querySelector(".hideDiv");
let commentBox = document.querySelector(".commentDiv");
let activityDiv = document.querySelector(".activity");
let imageDiv = document.querySelector(".grpImg");

commentBtn.addEventListener("click",()=>{
   commentBtn.style .backgroundColor = "green";
   commentBtn.style . color = "white";
   postBtn.style . backgroundColor = "white";
   postBtn.style . color = "black";
   postBtn.style . border = "1px solid black";
   imageBtn.style . backgroundColor = "white";
   imageBtn.style . color = "black";
   imageBtn.style . border = "1px solid black";
    postBox.style .display = "none";
    commentBox.style . display = "block";
    activityDiv.style . height = "370px";
    imageDiv.style . display = "none";
})
imageBtn.addEventListener("click",()=>{
    postBtn.style . backgroundColor = "white";
    postBtn.style . color = "black";
    postBtn.style . border = "1px solid black";
    commentBtn.style .backgroundColor = "white"
    commentBtn.style . color = "black";
    commentBtn.style .border = "1px solid black";
    imageBtn.style .backgroundColor = "green";
    imageBtn.style . color = "white";
    postBox.style .display = "none";
    commentBox.style .display = "none";
    imageDiv.style . display = "block";
    activityDiv.style . height = "370px";
})
postBtn.addEventListener("click",()=>{
    postBtn.style . backgroundColor = "green";
    postBtn.style . color = "white";
    commentBtn.style .backgroundColor = "white"
    commentBtn.style . color = "black";
    commentBtn.style .border = "1px solid black";
    imageBtn.style .backgroundColor = "white";
    imageBtn.style . color = "black";
    imageBtn.style . border = "1px solid black";
    postBox.style .display = "block";
    commentBox.style .display = "none";
    activityDiv.style . height = "650px";
    imageDiv.style . display = "none";
})