// const { start } = require("repl")

const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question-container')
const answerButtonsElement1 = document.getElementById('answer1')
const answerButtonsElement2 = document.getElementById('answer2')
const answerButtonsElement3 = document.getElementById('answer3')
const answerButtonsElement4 = document.getElementById('answer4')

let currentQuestionIndex = 0
let shuffledQuestions;


// startButton.addEventListener('click', startQuiz);
// nextButton.addEventListener('click', () => {
//     nextQuestion()
// })

// Start quiz for specific genre user picks 
let questions;
let time = 15;
let current = 0;
let timer;
let timerEl = document.getElementById('timer');

const startQuiz = () => {
    console.log('Started')
    // startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')



    // Display timer countdown while user taking quiz
    // timerEl.textContent = time
    // timer = setInterval(function () {
    //     time = time - 1
    //     timerEl.textContent = time + 'seconds'
    //     if (time <= 0) {
    //         nextQuestion()
    //     }
    // }, 1000)
    //sectionEl.classList.remove("hide");
    //welcomeEl.classList.add("hide");
    nextQuestion();
}

const getQuestions = () => {
    fetch("/api/quiz").then(res => res.json()).then(data => {
        console.log(data);
        questions = data;
        startQuiz();
    }).catch(err => {
        console.log(err)
    }) 

}

// Loop through to next question
const nextQuestion = (data) => {
    // DOM manipulation here   
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

const showQuestion = (question) => {
    console.log(question);
    answerButtonsElement1.innerText = question.answer1
    answerButtonsElement2.innerText = question.answer2
    answerButtonsElement3.innerText = question.answer3
    answerButtonsElement4.innerText = question.answer4
    questionElement.innerText = question.question
    // question.answers.forEach(answer => {
    //     const button = document.createElement('button')
    //     button.innerText = answer.text
    //     button.classList.add('btn')
    //     if (answer.correct) {
    //         button.dataset.correct = answer.correct
    //     }
    //     button.addEventListener('click', selectAnswer)
    //     answerButtonsElement.appendChild(button)
   
    // })
}

const resetState = () => {
    // while (answerButtonsElement.firstChild) {
    //     answerButtonsElement.removeChild
    //         (answerButtonsElement.firstChild)
    // }
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

getQuestions();
