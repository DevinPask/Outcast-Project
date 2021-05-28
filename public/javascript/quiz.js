// const { start } = require("repl")
let correctAnswer = "";
let score = 0;

const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question-container')
const answerButtonsElement1 = document.getElementById('answer1')
const answerButtonsElement2 = document.getElementById('answer2')
const answerButtonsElement3 = document.getElementById('answer3')
const answerButtonsElement4 = document.getElementById('answer4')
const category =  window.location.toString().split('=')[
    window.location.toString().split('=').length - 1];

let currentQuestionIndex = 0
let shuffledQuestions;


// Start quiz for specific genre user picks 
let questions;
let time = 15;
let current = 0;
let timer;
let timerEl = document.getElementById('timer');

const startQuiz = () => {
    
    // startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    nextQuestion();
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
        answerButtonsElement1.innerText = question.answer1;
        answerButtonsElement2.innerText = question.answer2;
        answerButtonsElement3.innerText = question.answer3;
        answerButtonsElement4.innerText = question.answer4;
        questionElement.innerText = question.question;
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
        if (isCorrect) {
            console.log('correct!');
            score += 10;
        } else {
            console.log('wrong');
            score -= 5;
        }
    };
    

    
    Array.from(document.getElementsByClassName("btn")).forEach(function (btn) {

        btn.onclick = (event) => { 
            let value = event.target.textContent;
            checkAnswer(value);
            nextQuestion();
        }
    });


    // End quiz - when they answer last question display buttons that link to other genres 

    // Get highschore and save to highscore page 
    const finalScore = (score) => {

    }

  

   



    // Loop through to next question
    const nextQuestion = () => {

        let elem = document.querySelector('#current-score');
        elem.innerText = score;
        
        if (currentQuestionIndex < questions.length -1) {
            showQuestion(shuffledQuestions[currentQuestionIndex]);
            currentQuestionIndex++;
        } else {
            console.log('All Done');
            let qc = document.querySelector('#question-container');
            let ans = document.querySelector('#answers');
            qc.style.display = 'none';
            ans.style.display = 'none';

            let username = document.querySelector('#username').innerText;
            console.log(username);
            const response = fetch('/api/score/final-score', {
                method: 'post',
                body: JSON.stringify({
                  score,
                  username
                }),
                headers: { 'Content-Type': 'application/json' }
              });
        }

        
    }

    

    // End quiz - when they answer last question display buttons that link to other genres 



    getQuestions();
