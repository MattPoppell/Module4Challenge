var time = 30;
var time_remaining = true;
var time_start= false;
var timerInterval = setInterval(setTimer, 1000);
var titleSlot =  document.getElementById("title-slot");
var buttonEl= document.getElementById("#startbuttonEl");
var quizContainer = document.getElementById("questContainer");
var question = document.getElementById("question");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var correctAnswer = document.getElementById("correctAnswer");    
var high_scores= [];
var output=""; 
let i = 0;
var score = 0;
var initials= [];
function setTimer() {
  if (time_start)
  time--;
  if(time<= 0) {
  end_quiz();
  time = 0;    
   clearInterval(timerInterval);
  }
  document.getElementById("timer").innerHTML = time;
}

startbuttonEl.addEventListener("click", function() {
questContainer.style.display = "block";
startbuttonEl.style.display ="none";
timer.style.display= "block";
 document.getElementById("score").style.display= "block";
 document.getElementById("score").innerHTML = score;
setTimer();
createQuestions();
time_start= true; 
});


var questionsArray = [
  {
      question: "Which programming language adds functionality and responsiveness to a web application?",
      answerChoice: ["A) Javascript", "B) Microsoft", "C) HTML", "D) None"],
      correctAnswer: 0
  }, 
  {
      question: "_____ provides a skelton or basic frame for a web application and is read by the browser.",
      answerChoice: ["A) Javascript", "B) HTML", "D) BonesDB", "D) None of the above"],
      correctAnswer: 1
  },
  {
      question: "a _____ is a section of code that when called upon will run.",
      answerChoice: ["A) variable", "B) IP address", "C) SSH Key ", "D) function"],
      correctAnswer: 3

  }];




function createQuestions() {
  question.textContent = questionsArray[i].question;
  choiceA.textContent = questionsArray[i].answerChoice[0]; 
  choiceB.textContent = questionsArray[i].answerChoice[1]; 
  choiceC.textContent = questionsArray[i].answerChoice[2]; 
  choiceD.textContent = questionsArray[i].answerChoice[3]; 
  };

  choiceA.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer= questionsArray[i].correctAnswer;
    if (0 === correctAnswer) { 
        document.getElementById("answer").innerHTML = "Correct!";
        setTimeout(function() {
        document.getElementById("answer").innerHTML = "";
            },
            1000
        );
        score++;    
       document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("answer").innerHTML = "Incorrect! Hurry up!";
        setTimeout(function() {
            document.getElementById("answer").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
    end_quiz();
    } else {
        i++ 
        createQuestions();
    };
});

choiceB.addEventListener('click', function(event) {
event.stopPropagation();
correctAnswer = questionsArray[i].correctAnswer;
    if (1 === correctAnswer) { 
        document.getElementById("answer").innerHTML = "Correct!";
        setTimeout(function() {
            document.getElementById("answer").innerHTML = "";
                },
                1000
            );
         score++;
         document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("answer").innerHTML = "Incorrect! Hurry up!";
        setTimeout(function() {
            document.getElementById("answer").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
    end_quiz();
    } else {
     i++ 
    createQuestions();
    };
});

choiceC.addEventListener('click', function(event) {
event.stopPropagation();
correctAnswer = questionsArray[i].correctAnswer;
if (2 === correctAnswer) { 
    document.getElementById("answer").innerHTML = "Correct!";
    setTimeout(function() {
        document.getElementById("answer").innerHTML = "";
            },
            1000
        );
    score++;
    document.getElementById("score").innerHTML = score;
} else {
    time_remaining -= 5;
    document.getElementById("answer").innerHTML = "Incorrect! Hurry up";
    setTimeout(function() {
        document.getElementById("answer").innerHTML = "";
            },
            1000
        );
}
if (i >= questionsArray.length -1) {
end_quiz();
} else {
    i++ 
    createQuestions();
};
});

choiceD.addEventListener('click', function(event) {
event.stopPropagation();
correctAnswer= questionsArray[i].correctAnswer;
if (3 === correctAnswer) { 
    document.getElementById("answer").innerHTML = "Correct!";
    setTimeout(function() {
        document.getElementById("answer").innerHTML = "";
            },
            1000
        );
    score++;
    document.getElementById("score").innerHTML = score;
} else {
    time_remaining -= 5;
    document.getElementById("answer").innerHTML = "Incorrect! Huddy up!";
    setTimeout(function() {
        document.getElementById("answer").innerHTML = "";
            },
            1000
        );
}
if (i >= questionsArray.length -1) {
   end_quiz();
} else {
    i++ 
    createQuestions();
};
});
 function end_quiz(){
  document.getElementById("endOfGame").style.display= "block";
  document.getElementById("questContainer").style.display="none";
  document.getElementById("timer").style.display= "none";
  document.getElementById("score").style.display= "none";
  document.getElementById("answer").innerHTML="";
  }
  function submit_score() {
    high_scores.push(document.getElementById("initials").value + " " + score);
    view_high_scores();
   }

 localStorage.setItem("score",JSON.stringify(answer));
 localStorage.setItem("initials", JSON.stringify(initials));

function view_high_scores(){

   document.getElementById("questContainer").style.display="none";
   document.getElementById("scoresPage").style.display="block";
   document.getElementById("endOfGame").style.display= "none";
   output="";
   for(let i=0; i<high_scores.length; i++){
        output = output + "  " + high_scores[i];
   }
   document.getElementById("scores").innerHTML= output;                
    startAgain();
}
function reset(){	
       document.getElementById("scoresPage").style.display= "none";
       document.getElementById("questContainer").style.display= "block";
       timer.style.display= "block";
       document.getElementById("score").innerHTML = score;
       setTimer();
       createQuestions();
       startAgain();
}
function startAgain(){

time=30;
time_remaining=true;
time_start=true;
i=0;
score=0;
}