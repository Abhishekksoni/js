const btnEl = document.getElementById("btn");

const jokeEl = document.getElementById("joke")
const apiKey = "V40nylIxMJ/8qSEXErgAaw==bKFshao4XMfXMAin";

const options = {
   method: "GET",
   headers: {
    "X-Api-Key": apiKey,
   },
};



const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getjoke() {
    try {
        jokeEl.innerText = "Generating....";
        btnEl.disabled = true;
        btnEl.innerText = "Loading..."

      const response = await fetch(apiURL,options);
      const data = await response.json();
      btnEl.disabled = false;
      btnEl.innerText = "Tell Me A Joke";

      jokeEl.innerText = data[0].joke;
}
     catch (error) {
        jokeEl.innerText = "You are offline , Try again later."
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me A Joke";
    }
}

btnEl.addEventListener("click", getjoke);