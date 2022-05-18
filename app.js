const wrap = document.querySelector(".wrap");
let id = "";



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

