export { BananaMaker };
class BananaMaker {
  constructor() {
    this.bananaCount = 0;
    this.autoClickerCount = 0;
    this.autoClickerCost = 100;
    this.gamePlayed = 0;
    this.bananaMultiplier = 0;
    this.bananaMultiplierCost = 10;
  }
  recordClick() {
    this.bananaCount++;
    for (let i = 0; i < this.bananaMultiplier; i++) {
      this.bananaCount += Math.round(Math.pow(1.2, this.bananaMultiplier));
    }
  }
  addBananaMultiplier() {
    if (this.bananaCount > this.bananaMultiplierCost) {
      this.bananaMultiplier++;
      this.bananaCount -= this.bananaMultiplierCost;
      this.bananaMultiplierCost += Math.round(this.bananaMultiplierCost * 0.1);
    }
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
    return Math.floor(min);
  }

  getBanana() {
    return this.bananaCount;
  }
  getAutoClickerCount() {
    return this.autoClickerCount;
  }
}
