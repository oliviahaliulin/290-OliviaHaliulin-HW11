console.log("Script loaded successfully!");

const resultText = document.getElementById("joke");
const statusText = document.getElementById("subhead");
const button = document.getElementById("jokeBtn");

console.log("Elements selected:", { resultText, statusText, button });

async function getData() {
  statusText.textContent = "Loading...";
  resultText.textContent = "";

  if (button) {
    button.disabled = true;
    button.textContent = "Loading...";
  }

  const response = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");
  
  if (response.ok) {
  const data = await response.json();

  console.log("Full API response:", data);

  resultText.textContent = data.joke;
  statusText.textContent = "Joke loaded.";
  } else {
    showError("Failed to fetch joke. Please try again.");
    }

  if (button) {
    button.disabled = false;
    button.textContent = "Generate A Joke";
  }
}

if (button) {
  button.addEventListener("click", getData);
}

