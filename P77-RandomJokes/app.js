const displayJoke = document.getElementById("display-joke");
const button = document.getElementById("getJoke");

button.addEventListener("click", getRandomJoke);

function getRandomJoke() {
  const ajax = new XMLHttpRequest();
  const url = "https://official-joke-api.appspot.com/random_joke";
  ajax.open("GET", url, true);

  ajax.onreadystatechange = () => {
    if (ajax.readyState === 4 && ajax.status === 200) {
      const data = JSON.parse(ajax.responseText);
      displayJoke.innerHTML = `${data.setup} <br><strong>${data.punchline}</strong>`;
    } else if (ajax.readyState === 4) {
      onerror();
    }
  };

  ajax.send();
}

function onerror() {
  displayJoke.textContent = `Something went wrong 😢`;
}
