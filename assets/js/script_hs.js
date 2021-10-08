
const gobackbtn = document.querySelector("#goBack");
const clearbtn = document.querySelector("#clear");
let HighscoresList = document.querySelector("#HighscoresList");

 function renderLastRegistered(){

  

  let ScoresTabl = localStorage.getItem("ScoresTabl");
  ScoresTabl = JSON.parse(ScoresTabl);
  
  if (ScoresTabl !== null) {
  
      for (var i = 0; i < ScoresTabl.length; i++) {
  
          var createLi = document.createElement("li");
          createLi.textContent = ScoresTabl[i].Name + " YOUR SCORE IS :" + ScoresTabl[i].FinalScore;
          HighscoresList.appendChild(createLi);
  
      }
  }

  

}
renderLastRegistered();

clearbtn.addEventListener("click",function(){
 // event.defaultPrevented();
//  localStorage.clear();
//  location.reload();
localStorage.removeItem("ScoresTabl");
  HighscoresList.textContent=" ";

});

gobackbtn.addEventListener("click",function(){
 
  window.location.href ="index.html";

});





