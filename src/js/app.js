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
const resume = document.querySelector("._resumeButton");
const developerInfo = document.querySelector("._developerInfo");
const developerButton = document.querySelector("._developer");
const menu = document.querySelector("._dropMenu");
const drop = document.querySelector(".drop");
const removeDropDown = document.querySelector("._removeDropDown");
const companyButton = document.querySelector("._extreme");
const companyInfo = document.querySelector("._companyInfo");
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
playAgain.addEventListener("click", () => {
  statHtml.style.display = "none";
  playAgain.style.display = "none";
  location.reload();
});
resume.addEventListener("click", () => {
  resume.style.display = "none";
  developerInfo.style.display = "none";
  companyInfo.style.display = "none";
});
developerButton.addEventListener("click", () => {
  resume.style.display = "block";
  developerInfo.style.display = "block";
  drop.style.display = "none";
});
menu.addEventListener("click", () => {
  drop.style.display = "block";
});
removeDropDown.addEventListener("click", () => {
  drop.style.display = "none";
});
companyButton.addEventListener("click", () => {
  companyInfo.style.display = "block";
  resume.style.display = "block";
  drop.style.display = "none";
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
