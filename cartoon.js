const startButton = document.querySelector("#screen1 button");
const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");
const screen3 = document.querySelector("#screen3");
const characters = document.querySelectorAll("#screen2 img");
const mainDiv = document.querySelector(".main");
const timerDiv=document.querySelectorAll(".top span")


startButton.onclick = () => {
  screen1.style.display = "none";
  screen2.style.display = "flex";
};

for (let i = 0; i < characters.length; i++) {
  characters[i].onclick = (e) => {
    e.preventDefault();
    console.log(e);
    startTheGame(e);
  };
}

function startTheGame(event) {
  screen2.style.display = "none";
  screen3.style.display = "flex";
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const interval = setInterval(() => {
    const thumbnail = document.createElement("img"); 
  
    thumbnail.src = event.target.src;
    const xPosition = Math.random() * screenWidth;
    const yPosition = Math.random() * screenHeight;

    thumbnail.style.top = yPosition + "px"
    thumbnail.style.left = xPosition + "px"

    mainDiv.append(thumbnail);

    timerDiv[0].innerHTML =appendZero(Number(timerDiv[0].innerHTML) + 1);


    function appendZero(zero){
if(timerDiv[0].innerHTML<9){
return "0"+zero;
}

if(timerDiv[0].innerHTML>=59){
return "00";
}
else return zero;
    }

    if(timerDiv[0].innerHTML==60){
      clearInterval(interval)
    }

    thumbnail.onclick = () => {
      removeImage(thumbnail);
      timerDiv[1].innerHTML = appendZero(Number(timerDiv[1].innerHTML) + 1);
  };

  function removeImage(image) {
      image.style.display = "none";
  }

  function appendZero(Zero) {
      if (Zero < 10)
          return "0" + Zero;
      if (Zero >= 60) {
          return "00";
      }
      else
          return Zero;
  }
    
  }, 1000);
}