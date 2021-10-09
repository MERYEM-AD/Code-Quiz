const HighScoreButton = document.querySelector("#HighScoresPage");
const startButton = document.querySelector("#startButton");
const Home= document.querySelector(".Home");
const Timer = document.querySelector(".Timer");
const displayScore=document.querySelector(".Score");
const QuizSection = document.querySelector(".Quiz");
//const correctionMessage= document.querySelector(".correction");


const QuestionsTest =[ //Array of Questions objects
    {
        question:"JavaScript is interpreted by _______ ",
        choices:{
            A:"Client",
            B:"Server",
            C:"Object",
            D:"None of the above"
         },

        correctAnswer:2
    },
    {
        question:"When a user views a page containing a JavaScript program, which machine actually executes the script? ",
        choices:{
            A:"The User's machine running a Web browser",
            B:"The Web server",
            C:"A central machine deep within Netscape's corporate offices",
            D:"None of the above"


        },

        correctAnswer:1

    },
    {
        question:"Using _______ statement is how you test for a specific condition.",
        choices:{
            A:"Select",
            B:"If",
            C:"Switch",
            D:"For"
        },

        correctAnswer:2


    },
    {
     

        
         question:"Which of the following syntax is correct to refer an external script called “formValidation.js”?",
         choices:{

            A:"<script href = “formValidation.js”>",
            B:"<script source = “formValidation.js”>",
            C:"<script name = “formValidation.js”>",
            D:"<script src = “formValidation.js”>"


        },
       
        correctAnswer:4

    }];

    let answers = [];
    let choice=[];

    let currentQuestion;
    let score=0;

    //Button redirect to the HighScores page

    HighScoreButton.addEventListener("click",function(){
      
      window.location.href ="highScores.html";
    });

    //Button hides the Home section and invok setTime,setScore,Quiz functions

    startButton.addEventListener("click",function(){
      
      Home.style.display ="none";
      setTime();
      setScore();
      getNewQuestion();

});

    //Set Up the Timer

    let timeLeft = 100;

    function setTime() {

      // Sets interval in variable
      let timerInterval = setInterval(function() {
          
          Timer.textContent = timeLeft +" s"
        if(timeLeft < 0 || QuestionsTest.length==0) {

          clearInterval(timerInterval);
          sendMessage();

        }
        else timeLeft--;
    
      }, 1000);
    }

  //Set up the score

    function setScore(){

      displayScore.textContent="Score : "+score+"/100";

  }



//sendMessage() launch message in the end of the test and invok registerScore
    function sendMessage(){

      Timer.textContent="  G A M E   O V E R  ";
      displayScore.setAttribute("style","text-align: center;");

      registerScore();


  }

  let nextQuestion=0;
  
  const question = document.createElement("ol");
  
  question.setAttribute("style","width:100%;color:var(--dark-col);list-style: none;font-family:var(--questionfont);");
//getNewQuestion() random  questions to the tester 

    function getNewQuestion(){

      
      currentQuestion = Math.floor(Math.random() * QuestionsTest.length);
      question.textContent=QuestionsTest[currentQuestion].question;

          for (const [key, value] of Object.entries(QuestionsTest[currentQuestion].choices)) {
            
              answers.push(`${key}: ${value}`);

        }

        for(let x=0;x<answers.length;x++){
            choice[x] = document.createElement("li");
            choice[x].textContent=answers[x];
            choice[x].setAttribute("data-number",x+1);
            choice[x].setAttribute("class","this");
            choice[x].setAttribute("style","cursor:pointer;font-family:var(--questionfont);");
            question.appendChild(choice[x]);

        }
     
    QuizSection.appendChild(question); //QuizSection

    for(let x=0;x<choice.length;x++){

    choice[x].addEventListener("click", (UserAnswer));

         }

      
   

    

  }



   function UserAnswer(event) {
    let element = event.target;
        let correction = document.createElement("p");
        correction.setAttribute("id", "correction");
    if (element.matches("li")) {

      let datanumber = element.getAttribute("data-number");
              if(datanumber == QuestionsTest[currentQuestion].correctAnswer){
          
                      correction.textContent = "Correct!   ";
                        score+=25;
                        setScore();
              }else{

                   // console.log("INCorrect");
                    timeLeft-=5;
                    // let snd = new Audio("../audioSounds/incorrect.mp3"); 
                    // snd.play();
                    correction.textContent = "Wrong! " ;

                  }


      question.appendChild(correction);

        question.textContent="";
        choice.textContent="";
        let QuestionsTestUpdated =QuestionsTest.splice(currentQuestion,1);
        if(QuestionsTest.length>0){
       answers=[];
       choice=[];
        
       getNewQuestion();
      }
      
      else    {   question.setAttribute("style","border: none;");
      Timer.textContent = "";
    }
    }

      
  }


/* Form for registration */ 
      const registerBtn = document.createElement("BUTTON");
      let registerInp = document.createElement("input");

      function registerScore(){

              const newScore =document.createElement("div");
              newScore.setAttribute("class","display-flex justify-content")
              QuizSection.appendChild(newScore);
               registerBtn.setAttribute("id","registerbtn");
               registerBtn.setAttribute("class","btn");
               registerBtn.textContent="Register";
               registerInp.setAttribute("style","width: 33%; margin-right: 30px;border: 4px solid var(--ul-btn-col);color: var(--ul-btn-col);font-family:var(--text-font);font-size:30px;"
           );
              newScore.appendChild(registerInp);
              newScore.appendChild(registerBtn);



      }

      registerBtn.addEventListener("click", function(event) {
        event.preventDefault();
      

        if (registerInp.value === "") {
         
           return 0;

      } else {

      let UserInfo = {
        Name: registerInp.value.trim(),
        FinalScore: score

      };


      let ScoresTabl = localStorage.getItem("ScoresTabl");
                  if (ScoresTabl === null) {
                    ScoresTabl = [];
                  } else {
                    ScoresTabl = JSON.parse(ScoresTabl);
                  }
                  ScoresTabl.push(UserInfo);
                  let newScore = JSON.stringify(ScoresTabl);
                  localStorage.setItem("ScoresTabl", newScore);
          RedirecttoHighScore();
        }
      });




function RedirecttoHighScore() {

    window.location.href ="highScores.html";


}


  
