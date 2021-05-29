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


// logout
const logout = async () => {

    console.log('is this working?');
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'}
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }
  
document.querySelector('#logout').addEventListener('click', logout);
