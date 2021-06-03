// const { start } = require("repl")
let correctAnswer = "";
let score = 0;

const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question-container');
const answerButtonsElement1 = document.getElementById('answer1');
const answerButtonsElement2 = document.getElementById('answer2');
const answerButtonsElement3 = document.getElementById('answer3');
const answerButtonsElement4 = document.getElementById('answer4');
const category = document.querySelector('#cat').innerHTML;
const user_id = document.querySelector('#user_id').innerHTML;
const username = document.querySelector('#username').innerHTML;
document.querySelector('#highscores').style.display = 'none';


let currentQuestionIndex = 0
let shuffledQuestions;
let gameFinish = 0;

// Start quiz for specific genre user picks 
let questions;
let time = 15;
let current = 0;
let timer;
let timerEl = document.getElementById('timer');

const startQuiz = () => {
    
    // startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;

    questionContainerElement.classList.remove('hide');
    // Display timer countdown while user taking quiz
    timerEl.textContent = `NEXT QUESTION IN ${time} SECONDS`;
    timer = setInterval(function () {
        time = time - 1;
        timerEl.textContent = `NEXT QUESTION IN ${time} SECONDS`;
        if (time <= 0) {
            nextQuestion(timer);
        }
    }, 1000);

    nextQuestion(timer);
}

const getQuestions = () => {

     fetch(`/api/questions/${category}`).then(res => res.json()).then(data => {
        console.log(data);
        questions = data;
        startQuiz();
    }).catch(err => {
        console.log(err)
    });
}


const showQuestion = (question) => {
    answerButtonsElement1.innerHTML = question.answer1;
    answerButtonsElement2.innerHTML = question.answer2;
    answerButtonsElement3.innerHTML = question.answer3;
    answerButtonsElement4.innerHTML = question.answer4;
    questionElement.innerHTML = question.question;
    correctAnswer = question.correct_answer;
    
}

const resetState = () => {
    
}

const setStatusClass = (element, correct) => {

    if (correct) {
        element.clasList.add('correct') 
    } else {
        element.clasList.add('wrong')
    }
} 
        
const checkAnswer = (choice) => {
    let isCorrect = choice.toLowerCase() === correctAnswer.toLowerCase();
    if (isCorrect & gameFinish === 0) {
        console.log('correct!');
        score += 10;
    } else if (gameFinish === 0) {
        console.log('wrong');
        score -= 5;
    }
    console.log(score);

};
    
Array.from(document.getElementsByClassName("btn")).forEach(function (btn) {

    btn.onclick = (event) => { 
        let value = event.target.textContent;
        checkAnswer(value);
        nextQuestion(timer);
    }
});


// Loop through to next question
const nextQuestion = (timer) => {

    let elem = document.querySelector('#current-score');
    if (time === 0) {
        score -= 5
    }
    elem.innerHTML = score;
    time = 15;
    
    if (currentQuestionIndex < questions.length -1) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        currentQuestionIndex++;
        timerEl.textContent = `NEXT QUESTION IN ${time} SECONDS`;
    } else if (gameFinish === 0) {
        clearInterval(timer);
        console.log('gameFinish', gameFinish);

        timerEl.textContent = '';
        gameFinish++;
        console.log('All Done');
        let qc = document.querySelector('#question-container');
        let ans = document.querySelector('#answers');
        let hs = document.querySelector('#highscores');
        qc.style.display = 'none';
        ans.style.display = 'none';
        hs.style.display = 'flex';
        document.querySelector('#scoreText').innerHTML = 'Final';
        document.querySelector('#play').innerHTML = 'has completed';

        const response = fetch('/api/score/final-score', {
            method: 'post',
            body: JSON.stringify({
                score,
                user_id
            }),
            headers: { 'Content-Type': 'application/json' }
            });
    }
}


// End quiz - when they answer last question display buttons that link to other genres 


getQuestions();
