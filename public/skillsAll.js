let bt1 = document.querySelector(".btns1");
let bt2 = document.querySelector(".btns2");
let bt3 = document.querySelector(".btns3");
let bt4 = document.querySelector(".btns4");
let bt5 = document.querySelector(".btns5");
let allDiv = document.querySelector(".All");
let industryKnowDiv = document.querySelector(".industryKnow");
let toolsDiv = document.querySelector(".tools");
let interperSkillDiv = document.querySelector(".interperSkill");
let otherSkillDiv = document.querySelector(".otherSkill");
let box3 = document.querySelector(".box3");

bt1.addEventListener("click",()=>{
    industryKnowDiv.style . display = "none";
    toolsDiv.style . display = "none";
    interperSkillDiv.style . display = "none";
    otherSkillDiv.style . display = "none";
    allDiv.style.display = "block";
    box3.style.height = "1910px";
    bt2.style.backgroundColor = "white";
    bt2.style.color = "black";
    bt3.style.backgroundColor = "white";
    bt3.style.color = "black";
    bt5.style.backgroundColor = "white";
    bt5.style.color = "black";
    bt1.style.backgroundColor = "darkgreen";
    bt1.style.color = "white";
    bt2.style.border = "1px solid rgba(0, 0, 0, 0.325)";
    bt4.style.backgroundColor = "white";
    bt4.style.color = "black";
})
bt2.addEventListener("click",()=>{
    allDiv.style . display = "none";
    toolsDiv.style . display = "none";
    interperSkillDiv.style . display = "none";
    otherSkillDiv.style . display = "none";
    box3.style.height = "530px";
    industryKnowDiv.style.display = "block";
    bt2.style.backgroundColor = "darkgreen";
    bt2.style.color = "white";
    bt3.style.backgroundColor = "white";
    bt3.style.color = "black";
    bt5.style.backgroundColor = "white";
    bt5.style.color = "black";
    bt1.style.backgroundColor = "white";
    bt1.style.color = "black";
    bt1.style.border = "1px solid rgba(0, 0, 0, 0.325)";
    bt4.style.backgroundColor = "white";
    bt4.style.color = "black";
})
bt3.addEventListener("click",()=>{
    allDiv.style . display = "none";
    toolsDiv.style . display = "block";
    interperSkillDiv.style . display = "none";
    otherSkillDiv.style . display = "none";
    box3.style.height = "861px";
    industryKnowDiv.style.display = "none";
    bt3.style.backgroundColor = "darkgreen";
    bt3.style.color = "white";
    bt5.style.backgroundColor = "white";
    bt5.style.color = "black";
    bt5.style.border = "1px solid rgba(0, 0, 0, 0.325)";
    bt1.style.backgroundColor = "white";
    bt1.style.color = "black";
    bt1.style.border = "1px solid rgba(0, 0, 0, 0.325)";
    bt2.style.backgroundColor = "white";
    bt2.style.color = "black";
    bt2.style.border = "1px solid rgba(0, 0, 0, 0.325)";
    bt4.style.backgroundColor = "white";
    bt4.style.color = "black";
})                             
bt4.addEventListener("click",()=>{
    allDiv.style . display = "none";
    toolsDiv.style . display = "none";
    interperSkillDiv.style . display = "block";
    otherSkillDiv.style . display = "none";
    box3.style.height = "143px";
    industryKnowDiv.style.display = "none";
    bt5.style.backgroundColor = "white";
    bt5.style.color = "black";
    bt1.style.backgroundColor = "white";
    bt1.style.color = "black";
    bt1.style.border = "1px solid rgba(0, 0, 0, 0.325)";
    bt2.style.backgroundColor = "white";
    bt2.style.color = "black";
    bt2.style.border = "1px solid rgba(0, 0, 0, 0.325)";
    bt3.style.backgroundColor = "white";
    bt3.style.color = "black";
    bt3.style.border = "1px solid rgba(0, 0, 0, 0.325)";
    bt4.style.backgroundColor = "darkgreen";
    bt4.style.color = "white";
    bt5.style.border = "1px solid rgba(0, 0, 0, 0.325)";
})
bt5.addEventListener("click",()=>{
    allDiv.style . display = "none";
    toolsDiv.style . display = "none";
    interperSkillDiv.style . display = "none";
    otherSkillDiv.style . display = "block";
    box3.style.height = "143px";
    industryKnowDiv.style.display = "none";
    bt5.style.backgroundColor = "darkgreen";
    bt5.style.color = "white";
    bt1.style.backgroundColor = "white";
    bt1.style.color = "black";
    bt1.style.border = "1px solid rgba(0, 0, 0, 0.325)";
    bt2.style.backgroundColor = "white";
    bt2.style.color = "black";
    bt2.style.border = "1px solid rgba(0, 0, 0, 0.325)";
    bt3.style.backgroundColor = "white";
    bt3.style.color = "black";
    bt3.style.border = "1px solid rgba(0, 0, 0, 0.325)";
    bt4.style.backgroundColor = "white";
    bt4.style.color = "black";
    bt4.style.border = "1px solid rgba(0, 0, 0, 0.325)";
})

// Function to handle going back to the previous page
function goBack() {
    // Store the current scroll position
    sessionStorage.setItem('scrollPosition', window.scrollY);
    
    // Navigate back to the previous page
    history.back();
  }
  
  // Function to restore the scroll position
  function restoreScrollPosition() {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition !== null) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }
  }
  
  // Call restoreScrollPosition on page load
  window.onload = restoreScrollPosition;




