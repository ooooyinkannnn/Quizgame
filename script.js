
const questions = [
    {question:"What is weird to do while sleeping?",
     answers:[
        { text: "Eating", correct: true},
        { text: "Talking", correct: false},
        { text: "Snoring", correct: false},
        { text: "Smiling", correct: false},
     ]
    },
    {question:"What do you call a group of flamingos?",
     answers:[
        { text: "Group", correct: false},
        { text: "School", correct: false},
        { text: "Flamboyance", correct: true},
        { text: "Flock", correct: false},
     ]
    },
    {question:"Which country is the largest in the world?",
     answers:[
        { text: "USA", correct: false},
        { text: "TUnited Kingdom", correct: false},
        { text: "Russia", correct: true},
        { text: "Germany", correct: false},
     ]
    },
    {question:"What is the only food that can never go bad?",
     answers:[
        { text: "Honey", correct: true},
        { text: "Sugar", correct: false},
        { text: "Corn", correct: false},
        { text: "Millet", correct: false},
     ]
    },
    {question:"What was the first animal to ever be cloned?",
     answers:[
        { text: "Dog", correct: false},
        { text: "Monkey", correct: false},
        { text: "Goat", correct: false},
        { text: "Sheep", correct: true},
     ]
    },
    {question:"What is August birth stone?",
     answers:[
        { text: "Ruby", correct: false},
        { text: "Peridot", correct: true},
        { text: "Gem", correct: false},
        { text: "Diamond", correct: false},
     ]
    },
    {question:"What is the fifth sign of the zodiac?",
     answers:[
        { text: "Dog", correct: false},
        { text: "Monkey", correct: false},
        { text: "Goat", correct: false},
        { text: "Sheep", correct: true},
     ]
    },
    {question:"What month of the year is Natonal Ice cream month?",
     answers:[
        { text: "May", correct: false},
        { text: "July", correct: true},
        { text: "August", correct: false},
        { text: "December", correct: false},
     ]
    },
    {question:"The Unicorn is the national animal of which Country?",
     answers:[
        { text: "Spain", correct: false},
        { text: "Netherland", correct: false},
        { text: "Scotland", correct: true},
        { text: "Fiji", correct: false},
     ]
    },
    {question:"Which soft drink once contained cocaine as one of its original ingredients?",
     answers:[
        { text: "Pepsi", correct: false},
        { text: "Monster", correct: false},
        { text: "7up", correct: false},
        { text: "Coca-cola", correct: true},
     ]
    },

];

const questionElement = document.getElementById("question");
const optionButtons = document.getElementById("option");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
   resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

     currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("option");
        optionButtons.appendChild(button);
        if (answer.correct){
         button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
     })
}

function resetState () {
   nextButton.style.display = "none";
   while(optionButtons.firstChild){
      optionButtons.removeChild(optionButtons.firstChild);
   }
}

function selectAnswer(e){
   const selectedBtn = e.target;
   const isCorrect = selectedBtn.dataset.correct === "true";
   if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
   }
    else{ 
      selectedBtn.classList.add("incorrect")
   }   
  Array.from(optionButtons.children).forEach(button => {
   if(button.dataset.correct === "true"){
      button.classList.add("correct");
   }
   button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore(){
   resetState();
   questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
   nextButton.innerHTML = "Play Again";
   nextButton.style.display = "block";
}

function handleNextButton(){
   currentQuestionIndex++;
   if(currentQuestionIndex < questions.length){
      showQuestion();
   }
   else{
      showScore();
   }
}

nextButton.addEventListener("click", ()=>{
   if(currentQuestionIndex < questions.length){
      handleNextButton();
   }
   else{
      startQuiz();
   }
});

startQuiz()