const textDisplay = document.getElementById("text-display");
const nextButton = document.getElementById("next-button");
const contentContainer = document.getElementById("content-container");
const videoContainer = document.getElementById("video-container");

const texts = [
  "Test 1",
  "khiem dz",
  "khiem pro",
  "oki iem iu",
];

let index = 0;

function showNextText() {
  if (index < texts.length) {
    textDisplay.textContent = texts[index];

    textDisplay.style.animation = "none";
    void textDisplay.offsetWidth;
    textDisplay.style.animation = "fade-in 1s ease forwards";

    index++;
  } else {
    contentContainer.style.display = "none";
    videoContainer.style.display = "block";
  }
}

nextButton.addEventListener("click", showNextText);
window.onload = () => showNextText();
