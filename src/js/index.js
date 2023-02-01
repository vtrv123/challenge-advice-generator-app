const adviceNumber = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");
const rollButton = document.getElementById("icon-container");
const dividerImage = document.getElementById("divider");

const getRandomAdvice = async function () {
  const res = await fetch("https://api.adviceslip.com/advice");
  const adviceResponse = await res.json();
  const { id, advice } = adviceResponse.slip;
  adviceNumber.innerText = `ADVICE # ${id}`;
  adviceText.innerText = `"${advice}"`;
};

rollButton.addEventListener("click", function () {
  getRandomAdvice();
});

//Swapping divider image depending on screen size
if (screen.width <= 450) {
  dividerImage.src = "src/images/pattern-divider-mobile.svg";
}
