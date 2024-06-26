
const questions = [
    {
        question:"Quante zampe ha il cane?",
        answers: [
            {text:"1",correct:false},
            {text:"4",correct:true},
            {text:"5",correct:false},// decidiamo noi le corrette
            {text:"3",correct:false},
        ]
    },
    {
        question:"",
        answers: [
            {text:"",correct:false},
            {text:"",correct:false},
            {text:"",correct:true},
            {text:"",correct:false},
        ]
    },
    {
        question:"",
        answers: [
            {text:"",correct:false},
            {text:"",correct:true},
            {text:"",correct:false},
            {text:"",correct:false},
        ]
    },
    {
        question:"",
        answers: [
            {text:"",correct:false},
            {text:"",correct:true},
            {text:"",correct:false},
            {text:"",correct:false},
        ]
    }        
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){              // seleziona solo una risposta e blocca le altre cosi non le puoi selezionare
            button.classList.add("correct");                // in piu' ti da anche a risposta corretta e il bottone per la prossiam domanda
        }
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
})

startQuiz();