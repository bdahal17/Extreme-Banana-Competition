export { BananaMaker };
class BananaMaker {
  constructor() {
    this.bananaCount = 0;
    this.autoClickerCount = 0;
    this.autoClickerCost = 100;
    this.gamePlayed = 0;
  }
  recordClick() {
    this.bananaCount++;
  }
  addAutoClicker() {
    if (this.bananaCount > this.autoClickerCost) {
      this.autoClickerCount++;
      this.bananaCount -= 100;
      this.autoClickerCost += Math.floor(this.autoClickerCost * 0.1);
      this.activateAutoClicker();
    }
  }
  activateAutoClicker = () => {
    setInterval(() => {
      if (this.autoClickerCount >= 1) {
        for (let i = 0; i < this.autoClickerCount; i++) {
          this.recordClick();
        }
      }
    }, 1000);
  };
  calcGameTime() {
    let min = this.gamePlayed / 60;
    return Math.floor(min) + " Minutes";
  }

  getBanana() {
    return this.bananaCount;
  }
  getAutoClickerCount() {
    return this.autoClickerCount;
  }
}
