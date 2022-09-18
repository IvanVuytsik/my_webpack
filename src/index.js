import generateJoke from "./jokeGenerator";
import "./styles/main.scss";
import portrait from "./assets/portrait.jpg"

const portraitImg = document.getElementById('portraitImg')
portraitImg.src = portrait

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke)

generateJoke();