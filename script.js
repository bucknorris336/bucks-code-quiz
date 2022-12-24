var questionsArray = [
  {
    question: "What does DOM stand for?",
    answerA: "Display Object Management",
    answerB: "Digital Ordinance Model",
    answerC: "Document Object Model",
    answerD: "Desktop Oriented Mode",
    correctAnswer: "answerC",
  },
  {
    question: "What HTML attribute references an external JavaScript file?",
    answerA: "src",
    answerB: "href",
    answerC: "class",
    answerD: "index",
    correctAnswer: "answerA",
  },

  {
    question: "What is used primarily to add styling to a web page?",
    answerA: "HTML",
    answerB: "Python",
    answerC: "React.js",
    answerD: "CSS",
    correctAnswer: "answerD",
  },
  {
    question:
      "Whats the difference between display:none and visability hidden?",
    answerA: "maintains the space on the page",
    answerB: "They both do the same thing",
    answerC: "Viability hidden is just wack",
    answerD: " only use visabilty none",
    correctAnswer: "answerA",
  },
  {
    question: "What does DOM stand for (again)?",
    answerA: "Display Object Management",
    answerB: "Digital Ordinance Model",
    answerC: "Document Object Model",
    answerD: "Desktop Oriented Mode",
    correctAnswer: "answerC",
  },
];

var penaltyTime = 10;
var startQuizButton = document.getElementById("start");
var homeScreen = document.getElementById("home-screen");
var questionScreen = document.getElementById("question-screen");
var questionTitle = document.getElementById("question-title");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
// instantiating empty variable to assign later
var correctAnswer;
var currentQuestion;
//this is where we tell the scrtip where int he questions array the current question is
var questionIndex = 0;
var score = 0;
// var timer = 60;
// var timerDisplay = document.getElementById("timer");
var scoreDisplay = document.getElementById("score");
scoreDisplay.innerHTML += score;
var highScoreScreen = document.getElementById("high-score");
var highScores = [];
var highScoreContainer = document.getElementById("high-score-container");
var tryAgainButton = document.getElementById("try-again");

function generateQuestion() {
  currentQuestion = questionsArray[questionIndex];

  questionTitle.innerHTML = currentQuestion.question;
  answerA.innerHTML = currentQuestion.answerA;
  answerB.innerHTML = currentQuestion.answerB;
  answerC.innerHTML = currentQuestion.answerC;
  answerD.innerHTML = currentQuestion.answerD;
  correctAnswer = currentQuestion.correctAnswer;
}
function endGame() {
  var initials = prompt("enter you initials", "Initials");
  timer = 0;
  // clearInterval(timer);
  highScores.push({
    initials: initials,
    score: score,
  });
  questionScreen.style.display = "none";
  highScoreScreen.style.display = "flex";
  highScoreContainer.innerHTML = "";
  for (let i = 0; i < highScores.length; i++) {
    const highScore = highScores[i];
    highScoreContainer.innerHTML += `<span>
    <p>
    ${highScore.initials}
    </p>
    <p>
    ${highScore.score}
    </p>
    </span>`;
    console.log(highScores);
  }
}

function startGame() {
  questionIndex = 0;
  score = 0;
  homeScreen.style.display = "none";
  highScoreScreen.style.display = "none";
  questionScreen.style.display = "flex";
  generateQuestion();
}

function checkAnswer(event) {
  if (event.target.id === currentQuestion.correctAnswer) {
    alert("You got it right!");
    score += 1;
  } else {
    timer -= penaltyTime;
    alert("You don't got it right!");
  }
  scoreDisplay.innerHTML = score;
  questionIndex += 1;
  if (questionIndex === questionsArray.length) {
    endGame();
  } else {
    generateQuestion();
  }
}

// This button starts the quiz!
startQuizButton.addEventListener("click", startGame);
tryAgainButton.addEventListener("click", startGame);
//binds buttons to check answer function
answerA.addEventListener("click", checkAnswer);
answerB.addEventListener("click", checkAnswer);
answerC.addEventListener("click", checkAnswer);
answerD.addEventListener("click", checkAnswer);
