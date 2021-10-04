const startButton = document.querySelector("#startButton");
const Presentation= document.querySelector(".Presentation");
let Test = document.querySelector(".Quiz");
startButton.addEventListener("click",function(){


    Presentation.style.display = "none";
    Quiz();

});

//create element
function Quiz(){
   // Test.setAttribute();
    let headLine = document.createElement("h2");
    headLine.textContent="The Quiz is beging ! Good Luck";
    Test.appendChild(headLine);
}

