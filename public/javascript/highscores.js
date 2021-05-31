

const directHome = (event) => {
  event.preventDefault();

  location.replace("/");
}


document.querySelector("#try-again").addEventListener("click", directHome);