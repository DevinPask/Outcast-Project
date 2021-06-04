async function chooseCategoryHandler(category) {
    console.log(category);
    document.location.replace('/quizpage?category=' + category);
    return
}

let btnHorror = document.querySelector('#horror-btn');
btnHorror.addEventListener('click', (e) => {
    chooseCategoryHandler('Horror');
});

let btnRomance = document.querySelector('#romance-btn');
btnRomance.addEventListener('click', (e) => {
    chooseCategoryHandler('Romance');
});

let btnSciFi = document.querySelector('#sci-fi-btn');
btnSciFi.addEventListener('click', (e) => {
    chooseCategoryHandler('Sci-Fi');
});

let btnComedy = document.querySelector('#comedy-btn');
btnComedy.addEventListener('click', (e) => {
    chooseCategoryHandler('Comedy');
});

let btnAction = document.querySelector('#action-btn');
btnAction.addEventListener('click', (e) => {
    chooseCategoryHandler('Action');
});

let btnAll = document.querySelector('#all-btn');
btnAll.addEventListener('click', (e) => {
    chooseCategoryHandler('All');
});

const directScores = (event) => {
    event.preventDefault();
  
    location.replace("/highscores");
  }
  
  document.querySelector("#bo-hsl").addEventListener("click", directScores);