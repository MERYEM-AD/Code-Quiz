
const gobackbtn = document.querySelector("#goBack");
const clearbtn = document.querySelector("#clear");
let UserHighScore;
let FinalHighScrores=[];
let highScores = document.querySelector(".HighScores");

 function renderLastRegistered(){

  

     UserHighScore = JSON.parse(localStorage.getItem("highScore"));
  if (UserHighScore !== null) {
    FinalHighScrores.push(UserHighScore.Name + "-->" + UserHighScore.FinalScore);
    console.log("length ="+FinalHighScrores.length);
     console.log(FinalHighScrores[0]);
     console.log(FinalHighScrores[1]);
    // for(let i=0;i<FinalHighScrores;i++){

      highScores.textContent=FinalHighScrores.join('');
   // alert("FinalHighScrores["+i+"]="+FinalHighScrores[i]);


    // }
   // highScores.textContent = UserHighScore.Name + "-->" + UserHighScore.FinalScore;
    //highScores.appendChild(registerInp);
  }
  else return;


}
renderLastRegistered();

clearbtn.addEventListener("click",function(){
 // event.defaultPrevented();
  localStorage.removeItem("highScore");
  highScores.textContent=" ";

});

gobackbtn.addEventListener("click",function(){
 
  window.location.href ="index.html";

});





