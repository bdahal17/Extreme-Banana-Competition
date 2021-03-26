export { BananaMaker };
class BananaMaker {
  constructor() {
    this.bananaCount = 0;
    this.autoClickerCount = 0;
    this.autoClickerCost = 100;
  }
  recordClick() {
    this.bananaCount++;
    console.log("hello");
  }
  getBanana() {
    return this.bananaCount;
  }
  getAutoClickerCount() {
    return this.autoClickerCount;
  }
  addAutoClicker() {
    if (this.bananaCount > this.autoClickerCost) {
      this.autoClickerCount++;
      this.bananaCount -= 100;
      this.autoClickerCost += this.autoClickerCost * 0.1;
      this.activateAutoClicker();
    }
  }
  activateAutoClicker() {
    for (let i = 0; i < this.autoClickerCount; i++) {
      setInterval(() => {
        this.recordClick();
      }, 1000);
    }
  }
}
