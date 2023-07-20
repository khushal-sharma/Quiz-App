const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "JavaScript is the programming language of the?",
        options: ["Desktop", "mobile", "web", "server"],
        correctAnswer: "web"
    },

    {
        question: " In which HTML element, we put the JavaScript code?",
        options: ["<javascript>...</javascript>", "<js>...</js>", "<script>...</script>", "<css>...</css>        "],
        correctAnswer: "<script>...</script>"
    },
    
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Cu", "Fe"],
        correctAnswer: "Au"
    }
];


let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timeInterval;


function startQuiz() {
    // hide the start button and display the first question.
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();

}


// function to display a question and its options.
function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex]
    const questionText = document.getElementById("question-text");
    const answerButton = document.getElementById("answer-buttons")

    questionText.innerHTML = "";
    answerButton.innerHTML = "";

    questionText.innerHTML = currentQuestion.question;

    // create answer button for each option;
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button")
        button.innerText = option;
        answerButton.appendChild(button);

            
        button.addEventListener("click", function () {
            checkAnswer(option);
        });
    })

}

// function to check the selected answer
function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    if(selectedOption===currentQuestion.correctAnswer){
        score++
    }

    currentQuestionIndex++;

    if(currentQuestionIndex<quizQuestions.length){
        displayQuestion();
    }else{
        endQuiz();
    }

}


// function to start the timer
function startTimer() {
    timeInterval=setInterval(function(){
        timeLeft--;
  
       
        document.getElementById("timer").textContent = timeLeft

        if(timeLeft<=0){
            endQuiz();
        }
    },1000)

}



// function to ned the quiz
function endQuiz() {


    clearInterval(timeInterval);


    const scorePercentage = (score/quizQuestions.length)*100;

    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} out of ${quizQuestions.length}</p>
    <p>Score Percentage: ${scorePercentage}%</p>
    `


}

// add event listner to start the quiz when the start button is clicked.
document.getElementById("start-button").addEventListener('click', startQuiz)