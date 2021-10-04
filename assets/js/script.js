const startButton = document.querySelector("#startButton");
const Presentation= document.querySelector(".Presentation");
let Test = document.querySelector(".Quiz");
let Timer = document.querySelector(".Timer");
startButton.addEventListener("click",function(){


    Presentation.style.display = "none";
    Quiz();

});

//create element
function Quiz(){
   // Test.setAttribute();
    setTime();
    const headLine = document.createElement("h2");
    headLine.textContent="The Quiz is beging ! Good Luck";
    Test.appendChild(headLine);

}

//Set Up the Timer

let timeLeft = 10;

function setTime() {
    // Sets interval in variable
    let timerInterval = setInterval(function() {
        timeLeft--;
        Timer.textContent = timeLeft +" s"
      if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }


  function sendMessage(){
    Timer.textContent = "-- : --";

    Test.textContent= "    G A M E  O V E R   ";


  }
