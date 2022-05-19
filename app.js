const wrap = document.querySelector(".wrap");
const hamburger = document.querySelector(".hamburger")
const contentCont = document.querySelector(".content-cont")
const navButtons = document.querySelectorAll(".content-nav button")
const contactBtn = document.querySelector(".contact-btn")
const projectsBtn = document.querySelector(".projects-btn")
const aboutBtn = document.querySelector(".about-btn")

hamburger.addEventListener("click", ()=>{
  contentCont.classList.toggle("slide-up")
  navButtons.forEach(button => {
      button.classList.toggle("btn-slide")
  });
})

function createBubbles(){

    for(let i = 0; i < 15 ;i++){
        const bubbles = document.createElement("div");
          bubbles.classList.add("bubble");
          bubbles.style.width = "25px";
          bubbles.style.height = "25px";
          bubbles.style.top = Math.floor(Math.random() * 900) + "px";
          bubbles.style.left = Math.floor(Math.random() *375) + "px";
          wrap.appendChild(bubbles) 
        }
    }


createBubbles()

