
const gobackbtn = document.querySelector("#goBack");
const clearbtn = document.querySelector("#clear");
const HighscoresList = document.querySelector("#HighscoresList");
HighscoresList.setAttribute("style","border-radius:0;border: none;list-style: none;");


// display the array of objects fron the local storage to the HighscoresList ul
 function renderLastRegistered(){

  

  let ScoresTabl = localStorage.getItem("ScoresTabl");
  ScoresTabl = JSON.parse(ScoresTabl);

  
  if (ScoresTabl !== null) {
  
      for (var i = 0; i < ScoresTabl.length; i++) {
  
          const Li_element = document.createElement("li");
          Li_element.setAttribute("style","padding: 50px;margin:0");
          Li_element.textContent = ScoresTabl[i].Name + " YOUR SCORE IS : " + ScoresTabl[i].FinalScore;
          HighscoresList.appendChild(Li_element);
  
      }
  }

  

}
renderLastRegistered();


//clearbtn button remove ScoresTabl key registred in the local Storage 

clearbtn.addEventListener("click",function(){
localStorage.removeItem("ScoresTabl");

  HighscoresList.textContent=" ";

});

 //gobackbtn redirect to the index page

gobackbtn.addEventListener("click",function(){
 
  window.location.href ="index.html";

});





