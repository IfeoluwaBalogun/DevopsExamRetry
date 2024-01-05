const questions = [
    {
        question: "What is the capital city of Australia?",
        answers: [
            {text: "Pennsylvania", correct: false},
            {text: "Canberra", correct: true},
            {text: "Abuja", correct: false},
            {text: "Helsinki", correct: false},
        ]
    },
    {
        question: "What band was Harry Styles in before his solo career?",
        answers: [
            {text: "Rudeboyz", correct: false},
            {text: "Pentatonix", correct: false},
            {text: "One Direction", correct: true},
            {text: "back street boys", correct: false},
        ]
    },
    {
        question: "Which is the largest Animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Python", correct: false},
        ]
    },  
    {
        question: "What sport did David Beckham play?",
        answers: [
            {text: "Volley Ball", correct: false},
            {text: "Baseball", correct: false},
            {text: "Basketball", correct: false},
            {text: "Football", correct: true},
        ]
    },  
    {
        question: "Who is the President of the United States?",
        answers: [
            {text: "John Doe", correct: false},
            {text: "Joe Biden", correct: true},
            {text: "Gorge Bush", correct: false},
            {text: "Joe Byden", correct: false},
        ]
    },  
    {
        question: "How many permanent teeth does a dog have?",
        answers: [
            {text: "36", correct: false},
            {text: "32", correct: false},
            {text: "42", correct: true},
            {text: "46", correct: false},
        ]
    },
    {
        question: "How many goals did England score (excluding penalty shoot-outs) at the Mens' 2018 FIFA World Cup?",
        answers: [
            {text: "15", correct: false},
            {text: "06", correct: false},
            {text: "12", correct: true},
            {text: "18", correct: false},
        ]
    },
    {
        question: "Which country in the world is believed to have the most miles of motorway?",
        answers: [
            {text: "Japan", correct: false},
            {text: "China", correct: true},
            {text: "France", correct: false},
            {text: "England", correct: false},
        ]
    },
    {
        question: "When did Big Brother first air on Channel 4?",
        answers: [
            {text: "2015", correct: false},
            {text: "2010", correct: false},
            {text: "2020", correct: false},
            {text: "2000", correct: true},
        ]
    },
    {
        question: "Which British actor played Batman in 2022's reboot directed by Matt Reeves?",
        answers: [
            {text: "Richard Harris", correct: false},
            {text: "Rob Delaney", correct: false},
            {text: "Hanz Zimmer", correct: false},
            {text: "Robert Pattinson", correct: true},
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
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
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
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
          button.classList.add("correct");
        }
        button.disabled = true;
        });
        nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block"; 
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();

