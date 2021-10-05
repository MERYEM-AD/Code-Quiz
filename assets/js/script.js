const startButton = document.querySelector("#startButton");
const Presentation= document.querySelector(".Presentation");
let Test = document.querySelector(".Quiz");
let Timer = document.querySelector(".Timer");
let displayScore=document.querySelector(".Score");
const QuestionsTest =[ //Array of objects
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
  // const MaxQuestions =4;
    let answers = [];
    let choice=[];

    let currentQuestion;
    let score=0;
    //let UserAnswer;
startButton.addEventListener("click",function(){


    Presentation.style.display = "none";
    Quiz();

});


//create element
function Quiz(){
   // Test.setAttribute();
    setTime();
    setScore();
    const headLine = document.createElement("h2");
    headLine.textContent="The Quiz is beging ! Good Luck";
    Test.appendChild(headLine);
    getNewQuestion();

}

//Set Up the Timer

let timeLeft = 20;

function setTime() {
    // Sets interval in variable
    let timerInterval = setInterval(function() {
        
        Timer.textContent = timeLeft +" s"
      if(timeLeft < 0 || QuestionsTest.length==0) {
        Timer.textContent=" ";
        clearInterval(timerInterval);
        sendMessage();

      }
      else timeLeft--;
        // Stops execution of action at set interval
        
        // Calls function to create and append image

        
      
  
    }, 1000);
  }

  function setScore(){
    displayScore.textContent="Score :"+score+"/100";

  }


  function sendMessage(){
    Timer.textContent = "-- : --";

    Test.textContent= "    G A M E  O V E R   ";
    Test.setAttribute("style","font-size:50px;color:purple;");


  }

  let nextQuestion=0;
  
  const question = document.createElement("ol");
  

  function getNewQuestion(){
      
   currentQuestion = Math.floor(Math.random() * QuestionsTest.length);
   question.textContent=QuestionsTest[currentQuestion].question;
   console.log(answers);
  

   for (const [key, value] of Object.entries(QuestionsTest[currentQuestion].choices)) {
      
        answers.push(`${key}: ${value}`);

  }

  for(let x=0;x<answers.length;x++){
     choice[x] = document.createElement("li");
    choice[x].textContent=answers[x];
    choice[x].setAttribute("data-number",x+1);
    choice[x].setAttribute("class","ch");
    choice[x].setAttribute("style","cursor:grab;");
    question.appendChild(choice[x]);

  }
  
   Test.appendChild(question);

   
   UserAnswer();


  }


  function UserAnswer(){
let h ;
    choice.forEach(c =>{
      c.addEventListener("click",function(){

        h=c.getAttribute("data-number");
        console.log((h+"==="+QuestionsTest[currentQuestion].correctAnswer));
        if(h == QuestionsTest[currentQuestion].correctAnswer){
          console.log("Correct answer");
          score+=25;
          setScore();


        }else{

          console.log("INCorrect answer");
          timeLeft-=5;
          //setTime();


          
        }
       //currentQuestion=0;
        question.textContent="";
        choice.textContent="";
        let QuestionsTestUpdated =QuestionsTest.splice(currentQuestion,1);
        if(QuestionsTest.length>0){
       // QuestionsTest.splice(currentQuestion,1);
        //console.log(QuestionsTest);
       answers=[];
       choice=[];
        
       getNewQuestion();
      }
       else return 0;
      })
      
 

    
    
  } );





   } 
  
