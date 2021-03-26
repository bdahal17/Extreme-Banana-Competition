import { BananaMaker } from "./BananaMaker.js";
const bananaMaker = new BananaMaker();
const numberOfClicks = document.querySelector("#bananaClicked_");
const bananaClickButton = document.querySelector("._banana");
const bananaAutoClicker = document.querySelector("._autoClicker");
const bananaAutoClickerCount = document.querySelector("#_autoClickerValue");
const bananaMultiplier = document.querySelector("_multiplier");

bananaClickButton.addEventListener("click", () => {
  bananaMaker.recordClick();
  numberOfClicks.innerText = bananaMaker.bananaCount;
});
bananaAutoClicker.addEventListener("click", () => {
  bananaMaker.addAutoClicker();
  bananaAutoClickerCount.innerText = bananaMaker.autoClickerCount;
});
setInterval(() => {
  numberOfClicks.innerText = bananaMaker.bananaCount;
}, 1000);
