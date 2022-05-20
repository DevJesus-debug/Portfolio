const wrap = document.querySelector(".wrap");
const hamburger = document.querySelector(".hamburger")
const contentCont = document.querySelector(".content-cont")
const navButtons = document.querySelectorAll(".content-nav button")
const contactBtn = document.querySelector(".contact-btn")
const projectsBtn = document.querySelector(".projects-btn")
const aboutBtn = document.querySelector(".about-btn")
const projectsPage = document.querySelector(".info-wrap .projects-cont")
const aboutPage = document.querySelector(".info-wrap .about-cont")
const contactPage = document.querySelector(".info-wrap .contact-cont")
const infoWrap = document.querySelector(".info-wrap")
const mainCont = document.querySelector("main")
const infoWrapChildren = document.querySelectorAll("#page")

hamburger.addEventListener("click", ()=>{
  contentCont.classList.toggle("slide-up")
  navButtons.forEach(button => {
      button.classList.toggle("btn-slide")
  });
})


for(let i = 0; i < navButtons.length; i++){
    navButtons[i].addEventListener("click",()=>{
        if(navButtons[i].innerText === "Projects" ){
          infoWrapChildren.forEach(page=>{page.classList.remove("active-page")})
          projectsPage.classList.add("active-page")
          infoWrap.classList.add("projects-height")
        }else if(navButtons[i].innerText === "About me"){
          infoWrapChildren.forEach(page=>{page.classList.remove("active-page")})
          infoWrap.classList.remove("projects-height")
        }else if(navButtons[i].innerText === "Contact me"){
          infoWrapChildren.forEach(page=>{page.classList.remove("active-page")})
          contactPage.classList.add("active-page")
          infoWrap.classList.remove("projects-height")
        }
    })
  }


function createBubbles(){
    for(let i = 0; i < 16 ;i++){
        const bubbles = document.createElement("div");
          bubbles.classList.add("bubble");
          bubbles.style.width = "25px";
          bubbles.style.height = "25px";
          bubbles.style.top = Math.floor(Math.random() * 100) + "%";
          bubbles.style.left = Math.floor(Math.random() * 100) + "%";
          mainCont.appendChild(bubbles) 
        }
    }


createBubbles()

