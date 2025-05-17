const textDisplay = document.getElementById("text-display");
const nextButton = document.getElementById("next-button");
const contentContainer = document.getElementById("content-container");
const videoContainer = document.getElementById("video-container");

const texts = [
  "Helluuu Nhien xinh gái nhé!!!",
  "Đây là 1 web be bé tặng Nhien để cảm ơn Nhien đã giúp anh cười ha há mấy ngày qua nheee",
  "Thực ra thì anh làm AI, khôm phải web, mà code AI nó khô khan lắm :< Nên web này anh cũng đi hỏi bạn với copy nhiều chỗ...",
  "Mong là em thích nó :3",
  "Và nhớ lưu lại web này để có gì anh gửi qua đây nhaaa"
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
