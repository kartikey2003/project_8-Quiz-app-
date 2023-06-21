const questions = [
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Africa", correct: false },
            { text: "Arctic", correct: false },
        ]
    },
    // 2question
    {
        question: "Which country are the Giza Pyramids in?",
        answers: [
            { text: "Amarica", correct: false },
            { text: "Australia", correct: false },
            { text: "India", correct: false },
            { text: "Egypt", correct: true },
        ]
    },
    //3
    {
        question: "Giddha is the folk dance of?",
        answers: [
            { text: "Andra pradesh", correct: false },
            { text: "Rajasthan", correct: false },
            { text: "punjab", correct: true },
            { text: "jammu", correct: false },
        ]
    },
    //4
    {
        question: "How many Cricket world cups does India have?",
        answers: [
            { text: "2", correct: true },
            { text: "1", correct: false },
            { text: "3", correct: false },
            { text: "0", correct: false },
        ]
    },
    //5
    {
        question: "National Tree of India is?",
        answers: [
            { text: "Neem tree", correct: false },
            { text: "Asoka Tree", correct: false },
            { text: "Bael tree", correct: false },
            { text: "Banyan tree", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
        question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}



function selectAnswer(e) {
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if (iscorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
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
    
    nextButton.style.display="block";
}





 function handleNextButton(){
    currentQuestionIndex++;
     if (currentQuestionIndex < questions.length) { 
        showQuestion(); 
    } else {
    showScore();
}
}



        nextButton.addEventListener("click", () => {
            if (currentQuestionIndex < questions.length) {
                handleNextButton();
            } else {
                startQuiz();
            }
        });



    startQuiz();