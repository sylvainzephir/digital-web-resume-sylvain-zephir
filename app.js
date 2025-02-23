

// Function to generate a random number between min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create graffiti element
function createGraffiti() {
  const colors = ["red", "blue", "green", "yellow", "purple"]; // Add more colors if needed
  const graffiti = document.createElement("div");
  graffiti.classList.add("graffiti");
  graffiti.style.backgroundColor = colors[getRandomInt(0, colors.length - 1)];
  graffiti.style.left = `${getRandomInt(0, window.innerWidth)}px`;
  graffiti.style.animationDuration = `${getRandomInt(3, 8)}s`; // Randomize animation duration
  document.querySelector(".container").appendChild(graffiti);
  setTimeout(() => {
    graffiti.remove(); // Remove graffiti element after animation ends
  }, 8000); // Adjust this value based on your animation duration
}

// Generate graffiti periodically
setInterval(createGraffiti, 90); // Adjust the interval as needed


    

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{

            setTimeout(()=>{
             span.classList.add('active');
        }, (idx + 1) * 100) 
    });
        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
             
            setTimeout(()=>{
            span.classList.remove('active');
            span.classList.add('fade');
        }, (idx + 1) * 50)
        
            })
        },2000);

        setTimeout(()=>{
        intro.style.top = '-100vh';
        }, 2300)
    })
})


