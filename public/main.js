// const { start } = require("repl")

const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    nextQuestion()
})

// Start quiz for specific genre user picks 
let questions;
let time = 15;
let current = 0;
let timer;
let timerEl = document.getElementById('timer');

const startQuiz = () => {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')



    // Display timer countdown while user taking quiz
    timerEl.textContent = time
    timer = setInterval(function () {
        time = time - 1
        timerEl.textContent = time + 'seconds'
        if (time <= 0) {
            nextQuestion()
        }
    }, 1000)
    //sectionEl.classList.remove("hide");
    //welcomeEl.classList.add("hide");
    getQuestions();
}

const getQuestions = () => {
    fetch("/api/quiz").then(res => res.json()).then(data => {
        console.log(data);
        questions = data;
        nextQuestion(data);

    })

}

// Loop through to next question
const nextQuestion = (data) => {
    // DOM manipulation here   
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

const showQuestion = (question) => {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

const resetState = () => {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}

// Check whether answer selected is correct/wrong
const checkAnswer = (e) => {
    const selectedButton = e.target
    const correct = selected.Button.dataset.correct
    setStatusClass(document.body.correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

}

const setStatusClass = (element, correct) => {
    clearStatusClass(element)
    if (correct) {
        element.clasList.add('correct')
    } else {
        element.clasList.add('wrong')
    }
}


/*
const checkAnswer = (event) => {
    var choice = (event.target.textContent[0]);
    if (choice === correctAnswer && 15 >= time >= 10) {
        score = 10
    } else if (choice === correctAnswer && 9 >= time >= 5) {
        score = 5
    } else if (choice === correctAnswer && 4 >= time >= 0) {
        score = 2
    } else (choice !== correctAnswer); {
        score = score - 5
    }
};
*/

/* 
Array.from(document.getElementsByClassName("answer")).forEach(function (btn) {
    console.log(btn);
    btn.onclick = checkAnswer;
});
*/

// End quiz - when they answer last question display buttons that link to other genres 

// Get highschore and save to highscore page 
const finalScore = (score) => {

}

startQuiz();
