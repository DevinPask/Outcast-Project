// Start quiz for specific genre user picks 
let time = 60;
let current = 0;
let timer;
let timerEl = document.getElementById('timer');
const startQuiz = () => {
    timerEl.textContent = time
    timer = setInterval(function () {
        time = time - 1
        timerEl.textContent = time  + 'seconds remaining. '
        if (time <= 0 ) {
            nextQuestion()
        }
    }, 1000)
    //sectionEl.classList.remove("hide");
    //welcomeEl.classList.add("hide");
    getQuestions();
    }
        
// Check whether answer selcted is correct/wrong
const checkAnswer = () => {
    
}
 
const getQuestions = () => {
    fetch("/api/quiz").then(res => res.json()).then(data => {
        console.log(data);
        renderQuestions(data);
    })
}

const renderQuestions = (data) => {
    
}

// Loop through to next question

// End quiz - when they answer last question display buttons that link to other genres 

// Get highschore and save to highscore page 


startQuiz();


