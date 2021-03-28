import { BananaMaker } from "./BananaMaker.js";
// --------------- Declared Variables -------------//
// --------------- Declared Variables -------------//
// --------------- Declared Variables -------------//
const bananaMaker = new BananaMaker();
const numberOfClicks = document.querySelector("#bananaClicked_");
const bananaClickButton = document.querySelector("._banana");
const bananaAutoClicker = document.querySelector("._autoClicker");
const bananaAutoClickerCount = document.querySelector("._autoClickerValue");
const autoClickerCost = document.querySelector("._autoClickerCost");
const bananaMultiplier = document.querySelector("_multiplier");
const resetGame = document.querySelector("._reset");
const statHtml = document.querySelector("._object");
const playAgain = document.querySelector("._playButton");
// --------------- Events -------------//
// --------------- Events -------------//
// --------------- Events -------------//
bananaClickButton.addEventListener("click", () => {
  bananaMaker.recordClick();
  numberOfClicks.innerText = bananaMaker.bananaCount;
});
bananaAutoClicker.addEventListener("click", () => {
  bananaMaker.addAutoClicker();
  bananaAutoClickerCount.innerText = bananaMaker.autoClickerCount;
  autoClickerCost.innerText = bananaMaker.autoClickerCost;
});

// --------------- Game Timer -------------//
// --------------- Game Timer -------------//
// --------------- Game Timer -------------//

resetGame.addEventListener("click", () => {
  let gameTime = bananaMaker.calcGameTime();
  setTimeout(() => {
    bananaMaker.autoClickerCount = 0;
    bananaMaker.bananaCount = 0;
    bananaMaker.autoClickerCost = 100;
    statHtml.style.display = "block";
    playAgain.style.display = "block";
  }, 1000);
});
playAgain.addEventListener("click", () => {
  statHtml.style.display = "none";
  playAgain.style.display = "none";
  location.reload();
});
setInterval(() => {
  bananaMaker.gamePlayed++;
  console.log(bananaMaker.calcGameTime());
  numberOfClicks.innerText = bananaMaker.bananaCount;
  bananaAutoClickerCount.innerText = bananaMaker.autoClickerCount;
  if (bananaMaker.bananaCount > bananaMaker.autoClickerCost) {
    bananaAutoClicker.style.backgroundColor = "orange";
  } else {
    bananaAutoClicker.style.backgroundColor = "#D2691E";
  }
}, 1000);
